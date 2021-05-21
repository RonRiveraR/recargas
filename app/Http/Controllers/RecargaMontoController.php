<?php

namespace App\Http\Controllers;

use App\Mail\MensajesEnviados;
use App\Mail\MensajesMonto;
use Illuminate\Support\Facades\Mail;

use App\Models\Peticion;
use App\Models\RecargaMonto;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;

use Illuminate\Support\Facades\DB;

class RecargaMontoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        //LISTO##############################################################################
        if(Auth::check() && Auth::user()->rol == 'admin'){

            $recargas = DB::table('peticions')
                        ->where('estado','Pendiente')
                        ->orderBy('created_at', 'asc')
                        ->limit(5)
                        ->get();

            $montos = DB::table('recarga_montos')
                        ->join('users', 'recarga_montos.user_id', 'users.id')
                        ->where('estado','Pendiente')
                        ->orderBy('recarga_montos.created_at', 'asc')
                        ->limit(5)
                        // ->select('recarga_montos.monto', 'users.name')
                        ->get();

            // Debo monstrar segun el id del usuario, para proteger la info.

            return view('admin.index', compact('recargas', 'montos'));
        }
        return redirect('login');
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function pendientesRecargas(){
        // LISTO##############################################################################        
        if(Auth::check() && Auth::user()->rol == 'admin'){
            $peticion = DB::table('peticions')->where('estado','Pendiente')->orderBy('created_at', 'asc')->paginate(10);
            return view('admin.pendienteRecargas', compact('peticion'));
        }
        return redirect('login');
        // return view('admin.pendienteRecargas', compact('peticionNormal', 'peticionSocio'));
    }

    public function confirmarRecarga(Request $request, $peticion){
        // LISTO############################################################################## 
        // ACTUALIZACION==============================================================================================
        if(Auth::check() && Auth::user()->rol =='admin'){
            if( Peticion::find($peticion)->estado == 'Rechazado' && Peticion::find($peticion)->user_id  ){
                // dd('TIENE id');
                Peticion::find($peticion)->update(['estado'=>'Realizado']);
                $idSocio = Peticion::find($peticion)->user_id;
                $montoDePeticion = Peticion::find($peticion)->monto;
                $montoDeSocio = User::find($idSocio)->monto;
                $nuevoMontoDeSocio = $montoDeSocio - $montoDePeticion;
                Peticion::find($peticion)->update(['estado'=>'Realizado', 'observacion'=>null]);
                User::find($idSocio)->update(['monto'=>$nuevoMontoDeSocio]);
                return back()->with('mensaje', 'confirmarExitosoSocio');
            }else{
                // dd('No tiene id o es una primera peticion');
                Peticion::find($peticion)->update(['estado'=>'Realizado']);

                $datosRecarga = DB::table('peticions')->where('id', $peticion)->first();
                $para = Peticion::find($peticion)->mail;
                Mail::to($para)->send(new MensajesEnviados($datosRecarga));
                return back()->with('mensaje', 'confirmarExitoso');
            }
        }
        return redirect('login');
    }

    public function rechazarRecarga(Request $request, $peticion){
        // LISTO############################################################################## 
        // ACTUALIZACION================================================================================================
        if(Auth::check() && Auth::user()->rol == 'admin'){
            // Este es el monto de la recarga
            $montoPeticion = Peticion::find($peticion)->monto;
            // Este es el id del usuario que hizo la solicitud de recarga
            $idUsuarioPeticion = Peticion::find($peticion)->user_id;
            
            $observacion = $request->get('observacion');
            if( Peticion::find($peticion)->estado == 'Pendiente' ){
                if($idUsuarioPeticion){
                    // Busca el monto que tiene el usuario
                    $montoDeSocio = User::find($idUsuarioPeticion)->monto;
                    // Suma el monto de la peticion y el monto del usuario para devolverle el dinero al socio.
                        $reembolsoASocio = $montoDeSocio + $montoPeticion;
                    // Hace los update en sus respectivas tablas comenzando con el rechazado y despues el dinero..
                        User::find($idUsuarioPeticion)->update(['monto'=>$reembolsoASocio]);
                        Peticion::find($peticion)->update(['estado'=>'Rechazado', 'observacion'=> $observacion]);
                        return back()->with('mensaje', 'RechazarExitosoSocio');
                    }else{
                    // Peticion::find($peticion)->update($estadoActualizacion);
                        Peticion::find($peticion)->update(['estado'=>'Rechazado', 'observacion'=> $observacion]);
                    // dd('No entro y no es socio');

                            $datosRecarga = DB::table('peticions')->where('id', $peticion)->first();
                            $para = Peticion::find($peticion)->mail;
                            Mail::to($para)->send(new MensajesEnviados($datosRecarga));
                        return back()->with('mensaje', 'RechazarExitoso');
                    }
            }elseif( Peticion::find($peticion)->estado == 'Rechazado' ){
                $nuevoMontoDeSocio = $montoDeSocio - $montoDePeticion;
                Peticion::find($peticion)->update(['estado'=>'Realizado']);
                User::find( $idUsuarioPeticion)->update(['monto'=>$nuevoMontoDeSocio]);
                return back()->with('mensaje', 'confirmarExitosoSocio');
            }
        }
        return redirect('login');
    }

    public function pendienteRecarga(Request $request, Peticion $peticion){
        // ACTUALIZACION================================================================================================
        // NO DEBERIA FUNCIONAR, PORQUE NO DEBERIA PASAR DE NUEVO A PENDIENTE EL ESTADO
        // Trae el id de la peticion y cambia el estado a Pendiente.
        if(Auth::check()){
            if(Auth::user()->rol == 'admin'){
                dd($request->all());
            }
        }
        return redirect('login');
        // return back()->with('mensaje', 'PendienteExitoso');
    }


    public function pendientesMonto(){
        // Se debe hacer un select que traiga todas los montos donde su estado sea pendiente
        // debe mostrar primero la mas vieja
            if(Auth::check() && Auth::user()->rol =='admin'){
                $monto = DB::table('recarga_montos')
                        ->join('users', 'recarga_montos.user_id', 'users.id')
                        ->where('estado','Pendiente')
                        ->orderBy('recarga_montos.created_at', 'asc')
                        ->select('recarga_montos.monto', 'users.name', 'users.email', 'recarga_montos.id', 'recarga_montos.capture')
                        ->paginate(10);

                return view('admin.pendienteMonto', compact('monto'));
            }
        return redirect('login');
    }

    public function confirmarMonto(Request $request, $recargaMonto){
        // LISTO##############################################################################
        // ACTUALIZACION================================================================================================
        // Debe sumar al monto del usuario el monto de la peticion o la recarga de monto.
        if(Auth::check() && Auth::user()->rol =='admin'){

            //Captura el id de quien hizo la peticion
            $idSocio = RecargaMonto::find($recargaMonto)->user_id;
            //Traer el monto que tiene el usuario
            $montoDeSocio = User::find($idSocio)->monto;
            //Traer el monto de recarga_monto con su id
            $montoDePeticion = RecargaMonto::find($recargaMonto)->monto;
            // Abonar el monto de la peticion al socio.
            $nuevoMontoDeSocio = $montoDePeticion + $montoDeSocio;
            // Actualizaciones, de abono a socio y estado en la recarga_montos
            RecargaMonto::find($recargaMonto)->update(['estado'=>'Realizado']);
            User::find($idSocio)->update(['monto'=>$nuevoMontoDeSocio]);

                $para = User::find($idSocio)->email;
                $datosRecarga = ['monto'=>$montoDePeticion, 'estado'=>'Realizado'];
                Mail::to($para)->send(new MensajesMonto($datosRecarga));

            return back()->with('mensaje', 'confirmarExitoso');
        }
        return redirect('login');
    }

    public function rechazarMonto(Request $request, $recargaMonto){
        // ACTUALIZACION================================================================================================
         // Trae el id de la RecargaMonto y cambia el estado a Rechazado,
        // debe colocar actualizar una observacion.
        if(Auth::check() && Auth::user()->rol =='admin'){
            $observacion = $request->get('observacion');
                if( RecargaMonto::find($recargaMonto)->estado == 'Realizado' ){
                    $idSocio = RecargaMonto::find($recargaMonto)->user_id;
                    $montoDePeticion = RecargaMonto::find($recargaMonto)->monto;
                    $montoDeSocio = User::find($idSocio)->monto;
                    $nuevoMontoDeSocio = $montoDeSocio - $montoDePeticion;
                    RecargaMonto::find($recargaMonto)->update(['estado'=>'Rechazado', 'observacion'=>$observacion]);
                    User::find($idSocio)->update(['monto'=>$nuevoMontoDeSocio]);

                    $para = User::find($idSocio)->email;
                    $datosRecarga = ['monto'=>$montoDePeticion, 'estado'=>'Rechazado', 'observacion'=>$observacion];
                    Mail::to($para)->send(new MensajesMonto($datosRecarga));

                    return back()->with('mensaje', 'RechazarExitosoRestaSocio');
                }elseif( RecargaMonto::find($recargaMonto)->estado == 'Pendiente' ){
                    RecargaMonto::find($recargaMonto)->update(['estado'=>'Rechazado', 'observacion'=>$observacion]);

                    $idSocio = RecargaMonto::find($recargaMonto)->user_id;
                    $montoDePeticion = RecargaMonto::find($recargaMonto)->monto;
                    $para = User::find($idSocio)->email;
                    $datosRecarga = ['monto'=>$montoDePeticion, 'estado'=>'Rechazado', 'observacion'=>$observacion];
                    Mail::to($para)->send(new MensajesMonto($datosRecarga));

                    return back()->with('mensaje', 'RechazarExitoso');
                }
        }
        return redirect('login');
    }

    public function pendienteMonto(Request $request, RecargaMonto $recargaMonto){
        // ACTUALIZACION================================================================================================
         // Trae el id de la RecargaMonto y cambia el estado a Pendiente.
         if(Auth::check()){
            if(Auth::user()->rol =='admin'){
                dd($request->all());
                // return back()->with('mensaje', 'PendienteExitoso');
            }
        }
        return redirect('login');
    }


    public function realizadasRecargas(){
        // Se debe hacer un select que traiga todas las recargas donde su estado sea realizado
        // debe mostrar primero la mas nueva o ultima
        if(Auth::check()){
            if(Auth::user()->rol =='admin'){
                $recarga = DB::table('peticions')->where('estado','Realizado')->orderBy('created_at', 'asc')->simplePaginate(10);

                return view('admin.realizadasRecargas', compact('recarga'));
            }
        }
        return redirect('login');
    }
    public function realizadasMonto(){
        if(Auth::check() && Auth::user()->rol =='admin'){
            // Se debe hacer un select que traiga todas los montos donde su estado sea realizado
            // debe mostrar primero la mas nueva o ultima
            $monto = DB::table('recarga_montos')
                        ->join('users', 'recarga_montos.user_id', 'users.id')
                        ->where('estado','Realizado')
                        ->orderBy('recarga_montos.created_at', 'asc')
                        ->select('recarga_montos.monto', 'users.name', 'users.email', 'recarga_montos.id', 'recarga_montos.capture')
                        ->paginate(10);

            return view('admin.realizadasMonto', compact('monto'));
        }
        return redirect('login');
    }


    public function rechazadasRecargas(){
        // Se debe hacer un select que traiga todas las recargas donde su estado sea realizado
        // debe mostrar primero la mas nueva o ultima
        if(Auth::check() && Auth::user()->rol =='admin'){
            // $recarga = DB::table('peticions')->where('estado','Rechazado')->orderBy('created_at', 'asc')->get();
            
            $recarga = DB::table('peticions')
                    // ->join('users', 'peticions.user_id', 'users.id')
                    ->where('estado','Rechazado')
                    ->orderBy('peticions.created_at', 'asc')
                    // ->select('peticions.id', 'peticions.mail', 'peticions.servicio', 'peticions.empresa', 'peticions.producto', 'peticions.telefono', 'peticions.monto', 'peticions.capture', 'peticions.observacion','peticions.created_at', 'peticions.updated_at', 'users.name', 'users.email')
                    ->paginate(10);

            return view('admin.rechazadasRecargas', compact('recarga'));

        }
        return redirect('login');
    }

    public function rechazadasMonto(){
        // Se debe hacer un select que traiga todas los montos donde su estado sea realizado
        // debe mostrar primero la mas nueva o ultima
        if(Auth::check() && Auth::user()->rol =='admin'){

            $monto = DB::table('recarga_montos')
                        ->join('users', 'recarga_montos.user_id', 'users.id')
                        ->where('estado','Rechazado')
                        ->orderBy('recarga_montos.created_at', 'asc')
                        ->paginate(10);

            return view('admin.rechazadasMonto', compact('monto'));
        }
        return redirect('login');
    }


    public function usuarios(){
        //muestra todos los usuarios registrados, con sus datos basicos
        // de mas viejo a mas nuevo
        if(Auth::check()){
            if(Auth::user()->rol =='admin'){
                $data = DB::table('users')->where('rol','socio')->orderBy('created_at', 'asc')->paginate(10);
                return view('admin.usuarios', compact('data'));
            }
        }
        return redirect('login');
    }








    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RecargaMonto  $recargaMonto
     * @return \Illuminate\Http\Response
     */
    public function show($recargaMonto)
    {
        if(Auth::user()->id == $recargaMonto){
            $data = User::find($recargaMonto);
            return view('admin.editar', compact('data'));
        }
        else{
            return redirect('/');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RecargaMonto  $recargaMonto
     * @return \Illuminate\Http\Response
     */
    public function edit(RecargaMonto $recargaMonto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RecargaMonto  $recargaMonto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RecargaMonto $recargaMonto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RecargaMonto  $recargaMonto
     * @return \Illuminate\Http\Response
     */
    public function destroy(RecargaMonto $recargaMonto)
    {
        //
    }
}
