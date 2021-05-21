@extends('layouts.layout')


@section('content')

<div class="container bg-light rounded border mb-3">
    <h1 class="py-3">Recargas pendientes</h1>
        <div class="row d-flex justify-content-center">

        @if( $pendientes->isNotEmpty() )

            @foreach( $pendientes as $dato )
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
                                    <p class="my-0 mx-1 card-text"><small><strong>Fecha de petición</strong></small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small><strong>{{ $dato->updated_at }}</strong></small></p>
                                </div>
                            </div>

                            <!-- <div class="container position-relative">
                                    <form class="m-0" action="{{ url('socio/recargas', $dato->id) }}" method="POST" id="form{{ $dato->id }}">
                                    @csrf
                                        <input type="hidden" name="_method" value="DELETE">
                                        <span class="float-right px-2 my-1">
                                            <input class="btn btn-sm btn-light btn-outline-secondary" type="submit" value="Eliminar">
                                        </span>
                                    </form>
                            </div> -->

                            
                        </div>
                    </div>
                <!-- Termina el card -->
            @endforeach

        @else
            <p class="text-center">No hay registro.</p>
        @endif

        </div>
</div>




<div class="container bg-light rounded border mb-3">
    <h1 class="py-3">Recargas realizadas</h1>
        <div class="row d-flex justify-content-center">

        @if( $realizadas->isNotEmpty() )

            @foreach( $realizadas as $dato )
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
                                    <p class="my-0 mx-1 card-text"><small><strong>Fecha realizada</strong></small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small><strong>{{ $dato->updated_at }}</strong></small></p>
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
{{ $realizadas->links() }}
@stop

@section('script')
    <script src="{{ asset('js/formSocio.js') }}"></script>
@stop