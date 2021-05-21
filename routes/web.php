<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RecargaMontoController;
use App\Http\Controllers\PeticionController;

use App\Http\Middleware\IsAdmin;
use App\Http\Middleware\IsSocio;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// ----------------------------------------------------------
// Paginas sin hacer login
// Index y servicios
// ----------------------------------------------------------
Route::get('/', function () {
    return view('welcome');
});
Route::get('servicios', function () {
    return view('servicios');
});


// ----------------------------------------------------------
// Ruta de Autenticacion
// ----------------------------------------------------------
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

if(Auth::check())
    return redirect('login');

// ----------------------------------------------------------
// Aplicacion de recargas
// ----------------------------------------------------------

// ----------------------------------------------------------
// GENERAL
// ----------------------------------------------------------
// Insert - formulario en el index, Recargar sin ser socio
    Route::post('peticion', [App\Http\Controllers\PeticionController::class, 'peticionNormal']);


        
// AQUI LAS RUTAS PROTEGIDAS DEL ADMINISTRADOR
// Route::middleware([IsAdmin::class])->group(function () {

        // Vistas que mandan a otras cuando se usa la URL
            //Cuando solo pongan montos o recargas redireccione a las pendientes segun el caso
            Route::get('admin/recargas', [App\Http\Controllers\RecargaMontoController::class, 'pendientesRecargas']);
            Route::get('admin/montos', [App\Http\Controllers\RecargaMontoController::class, 'pendientesMonto']);

        //Usuarios, consultar todos los
            Route::get('admin/usuarios', [App\Http\Controllers\RecargaMontoController::class, 'usuarios']);

        //Recargas
            //Pendiente
            Route::get('admin/recargas/pendientes', [App\Http\Controllers\RecargaMontoController::class, 'pendientesRecargas']);
                // url del action para confirmar
                Route::put('admin/recarga/{id}/confirmar', [App\Http\Controllers\RecargaMontoController::class, 'confirmarRecarga']);
                // url del action para rechazar
                Route::put('admin/recarga/{id}/rechazar', [App\Http\Controllers\RecargaMontoController::class, 'rechazarRecarga']);
                // url del action para pendiente
                Route::put('admin/recarga/{id}/pendiente', [App\Http\Controllers\RecargaMontoController::class, 'pendienteRecarga']);
            //Realizadas
            Route::get('admin/recargas/realizadas', [App\Http\Controllers\RecargaMontoController::class, 'realizadasRecargas']);
            //Rechazadas
            Route::get('admin/recargas/rechazadas', [App\Http\Controllers\RecargaMontoController::class, 'rechazadasRecargas']);

        //Montos
            //Pendiente
            Route::get('admin/montos/pendientes', [App\Http\Controllers\RecargaMontoController::class, 'pendientesMonto']);
                // url del action para confirmar
                Route::put('admin/monto/{id}/confirmar', [App\Http\Controllers\RecargaMontoController::class, 'confirmarMonto']);
                // url del action para rechazar
                Route::put('admin/monto/{id}/rechazar', [App\Http\Controllers\RecargaMontoController::class, 'rechazarMonto']);
                // url del action para pendiente
                Route::put('admin/monto/{id}/pendiente', [App\Http\Controllers\RecargaMontoController::class, 'pendienteMonto']);
            //Realizadas
            Route::get('admin/montos/realizadas', [App\Http\Controllers\RecargaMontoController::class, 'realizadasMonto']);
            //Rechazadas
            Route::get('admin/montos/rechazadas', [App\Http\Controllers\RecargaMontoController::class, 'rechazadasMonto']);
            
    //ADMINISTRADOR
        //::::::::::::::::::::::::
        Route::resource('admin', RecargaMontoController::class);
// });


//Acutalizar datos personales y contrasena
            // Datos personales
            Route::put('socio/{id}/actualizar', [App\Http\Controllers\PeticionController::class, 'actualizarDatosPersonales']);
            // Contrasena
            Route::put('socio/{id}/contrasena', [App\Http\Controllers\PeticionController::class, 'actualizarContrasenaSocio']);

// AQUI LAS RUTAS PROTEGIDAS DEL SOCIO
// Route::middleware([IsSocio::class])->group(function () {

            //Recarga dentro de la pagina de socio
            Route::get('socio/recargas', [App\Http\Controllers\PeticionController::class, 'recargaSocio']);
            //Montos, recargar desde la pagina de socio
            Route::get('socio/montos', [App\Http\Controllers\PeticionController::class, 'montoSocio']);
        //Rechazadas
            //Recargas, Consultas
            Route::get('socio/rechazadas', [App\Http\Controllers\PeticionController::class, 'recargasRechazadas']);
            Route::get('socio/rechazadas/recargas', [App\Http\Controllers\PeticionController::class, 'recargasRechazadas']);
            //Montos, Consultas
            Route::get('socio/rechazadas/montos', [App\Http\Controllers\PeticionController::class, 'montosRechazadas']);
        
        // Insertar - Formulario Recargar mi cuenta
            Route::post('socio/peticion', [App\Http\Controllers\PeticionController::class, 'peticionMonto']);
        // Insertar - Fromulario Solicitar una Recarga
            Route::post('socio/recarga', [App\Http\Controllers\PeticionController::class, 'peticionRecarga']);

        // ELIMINAR
            //Eliminar recargas pendientes con un id especifico *****
            // Route::delete('socio/recargas/{id}', [App\Http\Controllers\PeticionController::class, 'eliminarRecargasPendientes']);

        //SOCIO
        //::::::::::::::::::::::::
        Route::resource('socio', PeticionController::class);

// });