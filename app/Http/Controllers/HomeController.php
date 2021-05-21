<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        //OCULTE ESTO QUE VENIA HECHO
        // return view('home');
        
        /*
        LO QUE HACE LA CONDICION ES QUE SI EL USUARIO ES SOCIO SE VAYA A CIERTO LUGAR
        ADMIN A /admin
        SOCIO A /socio
         */
        // if ( Auth::user()->rol == 'admin' ){
        //     return view('admin.index');
        // }
        // elseif( Auth::user()->rol == 'socio' ){
        //     return view('socio.index');
        // }

        if(Auth::check())
            if(Auth::user()->rol == 'admin')
                return redirect('admin');
            else
                return redirect('socio');
        else
            return redirect('login');
    }
}
