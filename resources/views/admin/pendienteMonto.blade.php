@extends('layouts.layout')

@section('meta')
    <meta http-equiv="refresh" content="180">
@stop

@section('content')

<div class="container bg-light rounded border">
    <h1 class="py-3">Montos de Socios pendientes</h1>
        <div class="row d-flex justify-content-center">

            @if ( $monto->isNotEmpty() )
                @foreach ($monto as $dato)
                    <div class="card m-3" style="width: 30rem;">
                        <div class="card-body">
                            
                            <div class="row">
                                <div class="col-5">
                                    <h5 class="my-0 mx-1 card-title">Socio</h5>
                                </div>
                                <div class="col-7">
                                    <h5 class="my-0 mx-1 card-title">{{ $dato->name }}</h5>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small>Correo</small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small>{{ $dato->email }}</small></p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small>Monto</small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small>{{ $dato->monto }}</small></p>
                                </div>
                            </div>

                            <div class="container position-relative">
                                    <form class="m-0" action="{{ url('admin/monto',[$dato->id, 'confirmar']) }}" method="POST" id="formRealizado{{$dato->id}}">
                                    @csrf
                                    @method('PUT')
                                        <input type="hidden" name="estado" value="Realizado">
                                        <input type="hidden" name="observacion" >
                                        <span class="float-right px-2 my-1">
                                            <input class="btn btn-sm btn-light btn-outline-secondary" type="submit" value="Confirmar">
                                        </span>
                                    </form>
                                    <form class="m-0" action="{{ url('admin/monto',[$dato->id, 'rechazar']) }}" method="POST" id="formRechazado{{$dato->id}}">
                                    @csrf
                                    @method('PUT')
                                        <input type="hidden" name="estado" value="Rechazado">
                                        <input type="hidden" name="observacion" >
                                        <span class="float-right px-2 my-1">
                                            <input class="btn btn-sm btn-light btn-outline-secondary" type="submit" value="Rechazar">
                                        </span>
                                    </form>
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
                @endforeach
            @else
                <p class="text-center">No hay peticiones.</p>
            @endif
        </div>
</div>

@stop

@section('paginador')
{{ $monto->links() }}
@stop

@section('script')

    <script src="{{ asset('js/formAdmin.js') }}"></script>

    @if ( session('mensaje') == 'confirmarExitoso' )
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Recarga confirmada, monto abonado al socio.',
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

@stop