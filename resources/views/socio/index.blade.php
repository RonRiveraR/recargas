@extends('layouts.layout')

@section('content')

    <div class="container bg-light rounded border pb-4">
        <h1 class="py-3">Bienvenido {{ Auth::user()->name }}</h1>


        <div class="row">
            <div class="col-sm-6 mt-3">
                <h2 class="m-3">Mi cuenta</h2>
                    <div class="container">
                        <h5 class="my-1 ml-3">Saldo a favor: <span>{{ Auth::user()->monto }}<span></h5>
                        <p class="my-1 ml-3">Nombre: {{ Auth::user()->name }}</p>
                        <p class="my-1 ml-3">Correo: {{ Auth::user()->email }}</p>
                        <p class="my-1 ml-3">Teléfono: {{ Auth::user()->telefono }}</p>
                    </div>
                    <div class="container m-3">
                        <a class="mx-3 float-right" href="{{ url('socio', [Auth::user()->id]) }}">Editar datos</a>
                    </div>
            </div>

            <div class="col-sm-6 mt-3">
                <h2 class="m-3">Últimas recargas</h2>

                    @if( $data->isNotEmpty() )
                        @foreach( $data as $dato )
                            <div class="alert mx-3 my-2 alert-success" role="alert">
                                <b>{{ $dato->empresa }}</b> - {{ $dato->estado }}
                            </div>
                        @endforeach
                            <div class="container m-3">
                                <a class="mx-3 float-right" href="{{ url('socios/movimientos/') }}">Mostrar todo</a>
                            </div>
                    @else
                        <p>No hay registros</p>
                    @endif

            </div>
        </div>
    </div>

    <div class="container bg-light rounded border mt-3 py-3">
        <div class="row">
            
            <div class="col-sm-4">
                <h2 class="m-3">Recargar Mi cuenta</h2>
                    <div class="container-fluid">
                        <p class="mx-0">Recarga saldo a tu cuenta.</p>
                            <form action="{{ url('socio/peticion') }}" id="formularioSolicitarMonto" method="POST" enctype="multipart/form-data">
                                @csrf
                                <!-- mail -->
                                <input type="number" name="monto" id="montoCuenta" placeholder="Ingrese monto" min="1" max="100000000">
                                
                                <!-- captura -->
                                <div class="m-0">
                                    <label class="btn-file m-0" for="capture">Captura de pantalla <span class="info" id="checkImg"></span></label>
                                    <input type="file" class="oculto" name="capture" id="capture">
                                </div>
                                
                                    <button class="btn" type="submit" id="btnRecargaMonto">Solicitar</button>
                            
                            </form>
                    </div>
            </div>

            <div class="col-sm-4">
                <h2 class="m-3">Información de interes</h2>
                    <div class="container-fluid">
                        <p class="mx-0">Al solicitar una recarga está se restara de tu saldo. De esa forma puedes dar a tus clientes muchos de nuestros servicios de recarga.</p>
                        <p class="mx-0">Recargar mi cuenta es recargar tu saldo a favor para que puedas efectuar las recargas para tus clientes.</p>
                    </div>
                    

            </div>


            <div class="col-sm-4">
                <h2 class="m-3">Solicitar una recarga</h2>
                    <div class="container-fluid">
                        <p class="mx-0">Recarga para tus clientes.</p>
                        <form action="{{ url('socio/recarga') }}" id="formularioSolicitarRecarga" method="POST">
                            @csrf
                            <!-- servicio -->
                            <select class="select" name="servicio" id="selectServicio">
                                <option value="" selected>Seleccione servicio</option>
                                <option value="Recargas móviles">Recargas móviles</option>
                                <option value="Luz e Infonavit">Luz e Infonavit</option>
                                <option value="Pines electrónicos">Pines electrónicos</option>
                                <option value="Televisión paga">Televisión paga</option>
                                <option value="Facturas télefonicas">Facturas télefonicas</option>
                                <option value="Impuestos">Impuestos</option>
                                <option value="Cine">Cine</option>
                                <option value="Recarga tag">Recarga tag</option>
                                <option value="Telefonía fija">Telefonía fija</option>
                                <option value="Venta por catálogo">Venta por catálogo</option>
                                <option value="Aguas estatales">Aguas estatales</option>
                                <option value="Gas natural">Gas natural</option>
                            </select>
                            <!-- empresa -->
                            <div id="empresa"></div>
                            <!-- telefono -->
                            <div id="numero"></div>
                            <!-- producto -->
                            <div id="tipoProducto"></div>
                            <div id="formMonto"></div>
                            <div id="adicional"></div>
                            
                            <div class="row" id="divTotal">
                                <div class="col-4"><p class="text-center align-baseline mx-0 mt-3">Total</p></div>
                                <div class="col-8"><input type="text" name="monto" id="monto" disabled></div>
                            </div>
                            
                            <div id="botonForm">
                                <button class="btn" type="submit" id="btnConfirm">Solicitar</button>
                            </div>
                        </form>
                    </div>
            </div>
            
        </div>
    </div>

@stop

@section('script')
<script src="{{ asset('js/formSocio.js') }}"></script>

    @if ( session('mensaje') == 'montoExitoso' )
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Peticion de monto enviada.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 10000,
                timerProgressBar: true,
            });
        </script>
    @endif

    
    @if ( session('mensaje') == 'recargaExitoso' )
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Peticion de recarga enviada.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 10000,
                timerProgressBar: true,
            });
        </script>
    @endif

    
    @if ( session('mensaje') == 'recargaFaltaMonto' )
        <script>
            Swal.fire({
                icon: 'error',
                title: 'Fondos insuficientes.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 10000,
                timerProgressBar: true,
            });
        </script>
    @endif
@stop