@extends('layouts.layout')


@section('content')

<div class="container bg-light rounded border">
    <h1 class="py-3">Recargas realizadas</h1>
        <div class="row d-flex justify-content-center">

        @if ( $recarga->isNotEmpty() )
            @foreach ($recarga as $dato)
            <!-- Comienza el card -->
                <div class="card m-3" style="width: 30rem;">
                    <div class="card-body">

                        <div class="row">
                            <div class="col-5">
                                <h5 class="my-0 mx-1 card-title">Servicio</h5>
                            </div>
                            <div class="col-7">
                                <h5 class="my-0 mx-1 card-title">{{ $dato->servicio }}</h5>
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

                        @if( $dato->mail != null)
                        <div class="row">
                            <div class="col-5">
                                <p class="my-0 mx-1 card-text"><small>Correo</small></p>
                            </div>
                            <div class="col-7">
                                <p class="my-0 mx-1 card-text"><small>{{ $dato->mail }}</small></p>
                            </div>
                        </div>
                        @else
                        <div class="row">
                            <div class="col-5">
                                <p class="my-0 mx-1 card-text"><small>Correo</small></p>
                            </div>
                            <div class="col-7">
                                <p class="my-0 mx-1 card-text"><small>-</small></p>
                            </div>
                        </div>
                        @endif

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

                        <div class="container position-relative">
                                <!-- <form class="m-0" action="{{ url('admin/recarga',[$dato->id, 'pendiente']) }}" method="POST" id="formPendiente{{$dato->id}}">
                                @csrf
                                @method('PUT')
                                    <input type="hidden" name="estado" value="Pendiente">
                                    <span class="float-right px-2 my-1">
                                        <input class="btn btn-sm btn-light btn-outline-secondary" type="submit" value="Pendiente">
                                    </span>
                                </form> -->
                                <form class="m-0" action="{{ url('admin/recarga',[$dato->id, 'rechazar']) }}" method="POST" id="formRechazado{{$dato->id}}">
                                @csrf
                                @method('PUT')
                                    <input type="hidden" name="estado" value="Rechazado">
                                    <span class="float-right px-2 my-1">
                                        <input class="btn btn-sm btn-light btn-outline-secondary" type="submit" value="Rechazar">
                                    </span>
                                </form>
                        <!-- Si capture es diferente a null (si es una recarga de un NO SOCIO debe traer capture) -->
                            @if( $dato->capture != null)
                                <span class="float-right px-2 my-1">
                                    <a class="btn btn-sm btn-light btn-outline-secondary" href="{{ url('capturas/'.$dato->capture) }}" data-fancybox>Ver Captura</a>
                                </span>
                            @else
                                <span class="float-right px-2 my-1"></span>
                            @endif
                        </div>

                        
                    </div>
                </div>
            <!-- Termina el card -->
            @endforeach
        @else
            <p class="text-center">No hay peticiones.</p>
        @endif

        </div>
    </div>
    
    
@stop

@section('paginador')
{{ $recarga->links() }}
@stop

@section('script')

    <script src="{{ asset('js/formAdmin.js') }}"></script>

    @if ( session('mensaje') == 'PendienteExitoso' )
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Recarga pendiente.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 10000,
                timerProgressBar: true,
            });
        </script>
    @endif

    @if ( session('mensaje') == 'RechazarExitoso' )
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Recarga rechazada.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 10000,
                timerProgressBar: true,
            });
        </script>
    @endif

    @if ( session('mensaje') == 'RechazarExitosoSocio' )
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Recarga rechazada y reembolso a socio hecho.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 10000,
                timerProgressBar: true,
            });
        </script>
    @endif

@stop