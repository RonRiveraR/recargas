<!DOCTYPE html>
<html lang="es">

<head>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @yield('meta')

    <title>Recargas</title>
    <!-- Meta tag Keywords -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />
    <meta name="keywords"
        content="Well Subscribe form Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
    <!-- //Meta tag Keywords -->
    <link rel="stylesheet" href="{{ asset('css/stylepers.css') }}" type="text/css" media="all" />
    
    <!-- Tipo de letra -->
    <link href="//fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <!--/Style Modificables-CSS -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css" media="all" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/styleOnBoard.css') }}" type="text/css" media="all" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" type="text/css" media="screen" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/10.13.0/sweetalert2.css">
    
    <!--//Font Awesome-->
    <script src="https://kit.fontawesome.com/af562a2a63.js" crossorigin="anonymous"></script>

</head>

<body>

<!-- Splash Screen -->
<div class="loader"><img src="{{ asset('images/logo.png') }}" alt=""><h1>Recargas</h1></div>

@if ( Auth::check() )
    @if (Auth::user()->rol == 'admin')
        <!-- Menu superior ADMINISTRADOR -->
        <nav class="navbar navbar-expand-lg navbar-light bg-index">
                <a class="navbar-brand" href="{{ url('/') }}"><img src="{{ asset('images/logo.svg') }}" style="width: 40px;" alt="Logo"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav mr-auto">

                    <a class="nav-link nav-link" href="{{ url('/') }}">Inicio</a>
                    <a class="nav-link nav-link" href="{{ url('servicios') }}">Sérvicios</a>                


                        <a class="nav-link nav-link" href="{{ url('admin/') }}">Home Admin</a>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pendientes
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ url('admin/recargas/pendientes') }}"">Recargas</a>
                            <a class="dropdown-item" href="{{ url('admin/montos/pendientes') }}"">Montos</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Realizados
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ url('admin/recargas/realizadas') }}"">Recargas</a>
                            <a class="dropdown-item" href="{{ url('admin/montos/realizadas') }}"">Montos</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Rechazados
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ url('admin/recargas/rechazadas') }}"">Recargas</a>
                            <a class="dropdown-item" href="{{ url('admin/montos/rechazadas') }}"">Montos</a>
                        </li>

                        <a class="nav-link nav-link" href="{{ url('admin/usuarios') }}">Usuarios</a>

                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ url('admin', [Auth::user()->id]) }}">Editar datos</a>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                    {{ __('Cerrar sesión') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>

                    </div>
                </div>
            </nav>
    
    @elseif (Auth::user()->rol == 'socio')
        <!-- Menu superior SOCIO -->
        <nav class="navbar navbar-expand-lg navbar-light bg-index">
                <a class="navbar-brand" href="{{ url('/') }}"><img src="{{ asset('images/logo.svg') }}" style="width: 40px;" alt="Logo"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav mr-auto">

                    <a class="nav-link nav-link" href="{{ url('/') }}">Inicio</a>
                    <a class="nav-link nav-link" href="{{ url('servicios') }}">Sérvicios</a> 

                        <a class="nav-link nav-link" href="{{ url('socio') }}">Home Socio</a>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Movimientos
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ url('socio/recargas') }}"">Recargas</a>
                            <a class="dropdown-item" href="{{ url('socio/montos') }}"">Montos</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Rechazadas
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ url('socio/rechazadas/recargas') }}"">Recargas</a>
                            <a class="dropdown-item" href="{{ url('socio/rechazadas/montos') }}"">Montos</a>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ url('socio', [Auth::user()->id]) }}">Editar datos</a>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                    {{ __('Cerrar sesión') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>


                    </div>
                </div>
            </nav>

    @endif
@else
    <!-- onBoard Screen -->
        <div class="container-fluid obs-trans">
            <div class="btn-izqu float-left">
                <a href="#"><img class="btn-fle" src="{{ asset('images/flechaIzq.svg') }}" alt="Atras"></a>
            </div>
            <div class="btn-dere float-right">
                <a href="#"><img class="btn-fle" src="{{ asset('images/flechaDer.svg') }}" alt="Siguiente"></a>
            </div>
            <div class="btn-sal float-right">
                <a href="#" id="btn-omitir">Omitir</a>
            </div>
        </div>
        <div class="container-fluid obs-container">
            <div class="obs-div" id="obs-1">
                <img src="{{ asset('images/img1.png') }}" alt="">
                    <div class="container-sm">
                        <p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi praesentium soluta accusantium reprehenderit! Perspiciatis, praesentium! Debitis aliquam beatae doloremque voluptate!</p>
                    </div>
            </div>
            <div class="obs-div" id="obs-2">
                <img src="{{ asset('images/img1.png') }}" alt="">
                    <div class="container-sm">
                        <p>2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi praesentium soluta accusantium reprehenderit! Perspiciatis, praesentium! Debitis aliquam beatae doloremque voluptate!</p>
                    </div>
            </div>
            <div class="obs-div" id="obs-3">
                <img src="{{ asset('images/img1.png') }}" alt="">
                    <div class="container-sm">
                        <p>3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi praesentium soluta accusantium reprehenderit! Perspiciatis, praesentium! Debitis aliquam beatae doloremque voluptate!</p>
                    </div>
            </div>
        </div>


    <!-- Menu superior NORMAL -->
        <nav class="navbar navbar-expand-lg navbar-light bg-index">
            <a class="navbar-brand" href="{{ url('/') }}"><img src="{{ asset('images/logo.svg') }}" style="width: 40px;" alt="Logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mr-auto">
                    <a class="nav-link nav-link" href="{{ url('/') }}">Inicio</a>
                    <a class="nav-link nav-link" href="{{ url('servicios') }}">Sérvicios</a>
                    <a class="nav-link nav-link" href="{{ route('login') }}">Iniciar sesión</a>
                </div>
            </div>
        </nav>

@endif
   

    <section class="w3l-mockup-form">
        @yield('content')

        <div class="container d-flex justify-content-center">
            @yield('paginador')            
        </div>

        <div class="copyright text-center mt-5">
            <p class="copy-footer-29">© 2021 Todos los derechos reservados</p>
        </div>
        
        <div class="onBoard">
            <a href="#" id="onBoardStart">
                <i class="far fa-question-circle fa-2x" alt="onBoarding"></i>
            </a>
        </div>
    </section>

    
<!-- JQuery -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<!-- Bootstrap & JQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.0.js"></script>
<!-- FancyBox -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js"></script>
<!-- SweetAlert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<!-- SplashScreen -->
    <script type="text/javascript">
            $(window).on('load', function () {
                $('.loader').fadeOut(1500); 
            });
    </script>
<!-- JQuery Validation -->
    <script src="{{ asset('js/validar/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('js/validar/localization/messages_es.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/additional-methods.js"></script>
<!-- Script Recargas -->
    <script src="{{ asset('js/main.js') }}"></script>
    @yield ('script')
</body>

</html>