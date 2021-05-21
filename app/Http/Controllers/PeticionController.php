<?php

namespace App\Http\Controllers;

use App\Models\Peticion;
use App\Models\RecargaMonto;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;
use Hash;

use Illuminate\Support\Facades\DB;

class PeticionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        // Select de las recargas de el usuario en particular
        if( Auth::check() && Auth::user()->rol == 'socio' ){
        $id = Auth::user()->id;
        
        $data = Peticion::where('user_id', $id)
                // ->where('estado','Pendiente')
                ->orderBy('updated_at', 'asc')
                ->limit(5)
                ->get();

        return view('socio.index', compact('data'));
        }
        return redirect('login');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    


    public function peticionNormal(Request $request){
        // Insert para recargas del formulario q esta en el index
        // Formulario - Recargar sin ser socio
        
        // dd( $request->all() );

        // $data = $request->all();

        $data['mail'] = $request->get('mail');
        $data['servicio'] = $request->get('servicio');
        $data['empresa'] = $request->get('empresa');
            $data['producto'] = $request->get('producto');
        $data['telefono'] = $request->get('telefono');
        $data['monto'] = $request->get('monto');
        // $data['capture'] = $request->capture->store('capture');

        $archivo = $request->file('capture');
        $nombre = $archivo->getClientOriginalName();
        $nombre = rand(10000, 99999).'_'.$nombre;
        $archivo->move('capturas', $nombre);
        $data['capture'] = $nombre; 


        Peticion::create( $data );

        // redirige a el index, enviando si se hizo o no la peticion de manera correcta
        return redirect('/')->with('mensaje', 'normalExitoso');
    }

    public function peticionMonto(Request $request){
        //Insert dentro del index de socio, para pedir monto
        // Formulario Recargar Mi cuenta

        // dd( $request->all() );
        if(Auth::check()){
            if(Auth::user()->rol == 'socio'){
                $id = Auth::user()->id;
                // echo $id;

                $data['monto'] = $request->get('monto');
                $data['user_id'] = $id;
                // $data['capture'] = $request->capture->store('public/capture');

                $archivo = $request->file('capture');
                $nombre = $archivo->getClientOriginalName();
                $nombre = rand(10000, 99999).'_'.$nombre;
                $archivo->move('capturas', $nombre);
                $data['capture'] = $nombre; 

                // var_dump($data);

                RecargaMonto::create($data);

                // redirige a el index de socio, enviando si se hizo o no la peticion de manera correcta
                return redirect('socio')->with('mensaje', 'montoExitoso');
            }
        }
        return redirect('login');
    }
    
    public function peticionRecarga(Request $request){
        //Insert dentro del index de socio, para pedir una recarga
        // Formularo Solicitar una recarga

        if(Auth::check()){
            if(Auth::user()->rol == 'socio'){
                $montoDelUsuario = Auth::user()->monto;

                // Monto de la peticion de recarga
                $monto = $request->get('monto');
                
                // Condicion si el usuario tiene fondos suficientes para hacer la recarga o no
                if($montoDelUsuario > $monto){

                    // echo 'La recarga SI se haria porque hay montos suficiente<br>';
                    // echo "Detalle del pago y por que si se puede hacer:<br>";
                    // echo "\tEl monto que tiene es socio es:\t$montoDelUsuario<br>";
                    // echo "\tEl monto de la recarga que pide:\t$monto<br><br>";
                    // echo "Como el monto que tiene el socio es mayor que la recarga, se hace la peticion.";

                    // Dato que se envio por el formulario
                    $data['servicio'] = $request->get('servicio');
                    $data['empresa'] = $request->get('empresa');
                        $data['producto'] = $request->get('producto');
                    $data['telefono'] = $request->get('telefono');
                    $data['monto'] = $request->get('monto');
                    $data['capture'] = null;
                    $data['tipo'] = 'Socio';
                    $data['user_id'] = Auth::user()->id;

                    // Dato del nuevo monto
                    $nuevoMontoUsuario = $montoDelUsuario - $monto;
                    // echo "<br><br> El nuevo monto del usuario seria: $nuevoMontoUsuario";


                    // Insera los datos a la tabla peticions
                    Peticion::create( $data );
                    // Actualiza el monto del usuario que hizo la peticion. 
                    $actualizar = User::find(Auth::user()->id);
                    $actualizar->monto=$nuevoMontoUsuario;
                    $actualizar->save();
                    // DB::table('users')->where('id', Auth::user()->id)->update(['monto' => $nuevoMontoUsuario])->save();
                    // redirige a el index de socio, enviando si se hizo la peticion de manera correcta
                    return redirect('socio')->with('mensaje', 'recargaExitoso');
                }
                else{
                    // echo "La recarga NO se haria porque no hay montos suficiente<br>";
                    // echo "Detalle del pago y por que no se puede hacer:<br>";
                    // echo "\tEl monto que tiene es socio es:\t$montoDelUsuario<br>";
                    // echo "\tEl monto de la recarga que pide:\t$monto<br><br>";
                    // echo "Como el monto que tiene el socio es menor que la recarga, NO se hace la peticion.";

                    // redirige a el index de socio, enviando que no se hizo la peticion de manera correcta por falta de monto
                    return redirect('socio')->with('mensaje', 'recargaFaltaMonto');
                }
            }
        }
        return redirect('login');
    }


    public function recargaSocio(){
        // Se debe hacer un select que traiga todas las recargas que el socio especifico haya hecho
        // debe mostrar primero las pendientes, de mas vieja a mas nueva y el resto siempre sera primero la mas reciente
        // echo "Recrgas socio";
        if(Auth::check()){
            if(Auth::user()->rol == 'socio'){
                $id=Auth::user()->id;

                $pendientes = Peticion::where('user_id', $id)
                            ->where('estado', 'Pendiente')
                            ->orderBy('updated_at', 'asc')
                            ->get();

                $realizadas = Peticion::where('user_id', $id)
                            ->where('estado', 'Realizado')
                            ->orderBy('updated_at', 'asc')
                            ->simplePaginate(10);

                return view('socio.recargas', compact('pendientes', 'realizadas'));
            }
        }
        return redirect('login');
    }

    public function montoSocio(){
        // Se debe hacer un select que traiga todas las recargas de monto que el socio especifico haya hecho
        // debe mostrar primero las pendientes, de mas vieja a mas nueva y el resto siempre sera primero la mas reciente
        // echo "Montos socio";
        if(Auth::check()){
            if(Auth::user()->rol == 'socio'){
                $id=Auth::user()->id;

                $pendientes = RecargaMonto::where('user_id', $id)
                            ->where('estado', 'Pendiente')
                            ->orderBy('updated_at', 'asc')
                            ->get();

                $realizadas = RecargaMonto::where('user_id', $id)
                            ->where('estado', 'Realizado')
                            ->orderBy('updated_at', 'asc')
                            ->simplePaginate(10);
        
                return view('socio.montos', compact('pendientes', 'realizadas'));
            }
        }
        return redirect('login');
    }

    public function recargasRechazadas(){
        if(Auth::check()){
            if(Auth::user()->rol == 'socio'){
                $id=Auth::user()->id;

                $rechazada = Peticion::where('user_id', $id)
                            ->where('estado', 'Rechazado')
                            ->orderBy('updated_at', 'asc')
                            ->paginate(10);

                return view('socio.recargasRechazadas', compact('rechazada'));
            }
        }
        return redirect('login');
    }

    public function montosRechazadas(){
        if(Auth::check()){
            if(Auth::user()->rol == 'socio'){
                $id=Auth::user()->id;

                $rechazada = RecargaMonto::where('user_id', $id)
                            ->where('estado', 'Rechazado')
                            ->orderBy('updated_at', 'asc')
                            ->paginate(10);

                return view('socio.montosRechazadas', compact('rechazada'));
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
     * @param  \App\Models\Peticion  $peticion
     * @return \Illuminate\Http\Response
     */
    public function show($peticion)
    {
        if(Auth::user()->id == $peticion){
            $data = User::find($peticion);
            return view('socio.editar', compact('data'));
        }
        else{
            return redirect('/');
        }
    }

    public function actualizarDatosPersonales(Request $request, $peticion){
        if( Auth::user()->id == $peticion ){
            $data = $request->all();
            User::find($peticion)->update($data);
            return back()->with('mensaje', 'ActualizacionExitoso');
        }
        else{
            return back()->with('mensaje', 'ActualizacionError');
        }
    }

    public function actualizarContrasenaSocio(Request $request, $peticion){
        if( Auth::user()->id == $peticion ){
            $data = Hash::make( $request['password'] );
            User::find($peticion)->update(['password'=>$data]);
            return back()->with('mensaje', 'ContrasenaExitoso');
        }
        else {
            return back()->with('mensaje', 'ContrasenaError');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Peticion  $peticion
     * @return \Illuminate\Http\Response
     */
    public function edit(Peticion $peticion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Peticion  $peticion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Peticion $peticion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Peticion  $peticion
     * @return \Illuminate\Http\Response
     */
    public function destroy(Peticion $peticion)
    {
        //
    }

    public function eliminarRecargasPendientes($peticion){
        //Elimina dentro de socio/recargas la que se le da eliminar
        // NO SE UTILIZA NI SE UTILIZA


        /*
        Lo que debe hacer:
            -Antes de eliminar, debe devolver el monto al la cuenta del usuario.
                -Trae el monto que tieen el usuario y suma el monto 
            -Eliminar registro

            NOTA: Me preocupa que pueda echar para atras el usuario y el monto vuelva antes
                  que se haga la peticion. Asi que el eliminar no deberia ir.
        */

        $data = Peticion::findOrFail($peticion);

        $montoUsuario = Auth::user()->monto;
        $montoPeticion = $data->monto;
        $nuevoMontoUsuario = $montoPeticion + $montoUsuario;

        // echo "Proceso:<br><br>";
        // echo "El monto que tiene el usuario es: $montoUsuario<br>";
        // echo "El monto de la peticion es: $montoPeticion<br>";
        // echo "La suma del nuevo saldo del usuario es: $nuevoMontoUsuario<br>";
        // echo "Ese nuevo saldo debe actualizarse en el monto del usuario.<br>";
        // echo "<br>";

        $actualizar = User::find(Auth::user()->id);
        $actualizar->monto=$nuevoMontoUsuario;
        $actualizar->save();

        $data->delete();
        

        // redirige a socio/recargas, enviando si se hizo la eliminacion de manera correcta
        return redirect('socio.recargas')->with('mensaje', 'borradoExitoso');
        return view('socio.recargas')->with('mensaje', 'borradoExitoso');
        return back()->with('mensaje', 'borradoExitoso');
    }
}
