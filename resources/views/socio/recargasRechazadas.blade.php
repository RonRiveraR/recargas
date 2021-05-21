@extends('layouts.layout')


@section('content')

<div class="container bg-light rounded border">
    <h1 class="py-3">Recargas rechazadas</h1>
        <div class="row d-flex justify-content-center">
        @if( $rechazada->isNotEmpty() )
            @foreach( $rechazada as $dato )
                <!-- Comienza el card -->
                    <div class="card m-3" style="width: 30rem;">
                        <div class="card-body">

                            <div class="row">
                                <div class="col-5">
                                    <h5 class="my-0 mx-1 card-title">Servicio</h5>
                                </div>
                                <div class="col-7">
                                    <h5 class="my-0 mx-1 card-title">Recarga de Saldo</h5>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small>Empresa</small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small>{{ $dato->empresa }}</small></p>
                                </div>
                            </div>

                            @if( $dato->producto != null)
                            <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small>Producto</small></p>
                                </div>
                                <div class="col-7">
                                <p class="my-0 mx-1 card-text"><small>{{ $dato->producto }}</small></p>
                                </div>
                            </div>
                            @else
                            <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small>Producto</small></p>
                                </div>
                                <div class="col-7">
                                <p class="my-0 mx-1 card-text"><small>-</small></p>
                                </div>
                            </div>
                            @endif

                            <!-- <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small>Correo</small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small>correoelectronico@prueba.com</small></p>
                                </div>
                            </div> -->

                            <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small><strong>Tél. o Ref.</strong></small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small><strong>{{ $dato->telefono }}</strong></small></p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small><strong>Monto</strong></small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small><strong>{{ $dato->monto }}</strong></small></p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small><strong>Razón:</strong></small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small><strong>{{ $dato->observacion }}</strong></small></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                <!-- Termina el card -->
            @endforeach
        @else
            <p class="text-center">No hay registro.</p>
        @endif

        </div>
</div>

@stop

@section('paginador')
{{ $rechazada->links() }}
@stop