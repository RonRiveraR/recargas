@extends('layouts.layout')

@section('content')
<h1>RECARGAS</h1>
<div class="container-fluid">
    <div class="workinghny-form-grid">
        <div class="main-mockup">
            <div class="w3l_form align-self">
                <div class="left_grid_info">
                    <img src="images/image.svg" alt="">
                </div>
            </div>
            
            <div class="content-wthree">
                <h2 class="mx-1 mb-3">Beneficios de trabajar con nosotros</h2>
                <p class="mx-1">Somos el único servicio que da beneficios por ser socio, ya que te damos un reembolso. Según lo que recargues se te dara un monto adicional.</p>
                <p class="mx-1">Así que te invitamos hacerte socio y gozar de nuestros beneficios.</p>
            </div>
            
            <div class="content-wthree">
                <h2 class="mx-1 mb-3">Recargar sin ser socio</h2>
                <p class="mx-1">Necesitamos los siguientes datos para efectuar tu recarga. </p>
                    <form action="{{ url('peticion') }}" id="formularioInicio" method="POST" enctype="multipart/form-data">
                        @csrf
                        <!-- mail -->
                        <input type="email" name="mail" id="mail" placeholder="Ingrese correo electrónico">
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

                        <div id="divCaptura">
                            <label class="btn-file" for="capture">Captura de pantalla <span class="info" id="checkImg"></span></label>
                            <input type="file" class="oculto" name="capture" id="capture">
                        </div>

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
<script src="{{ asset('js/formularios.js') }}"></script>

@if ( session('mensaje') == 'normalExitoso' )
    <script>
        Swal.fire({
            icon: 'success',
            title: 'Peticion enviada.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 10000,
            timerProgressBar: true,
        });
    </script>
@endif

@stop