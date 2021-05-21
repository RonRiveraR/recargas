@extends('layouts.layout')


@section('content')

<div class="container bg-light rounded border">
    <h1 class="py-3">Recargas de montos pendientes</h1>
        <div class="row d-flex justify-content-center">


        @if( $pendientes->isNotEmpty() )

            @foreach( $pendientes as $dato )
                <!-- Comienza el card -->
                    <div class="card m-3" style="width: 30rem;">
                        <div class="card-body">

                            <div class="row">
                                <div class="col-5">
                                    <h5 class="my-0 mx-1 card-title">Monto</h5>
                                </div>
                                <div class="col-7">
                                    <h5 class="my-0 mx-1 card-title">{{ $dato->monto }}</h5>
                                </div>
                            </div>

                            <!-- <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small><strong>Estado</strong></small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small><strong>{{ $dato->estado }}</strong></small></p>
                                </div>
                            </div> -->

                            <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small><strong>Fecha de petición</strong></small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small><strong>{{ $dato->updated_at }}</strong></small></p>
                                </div>
                            </div>
                        

                            <!-- <div class="container position-relative">
                                    <form class="m-0" action="" method="POST" onsubmit="return FORMELIMINAR()">
                                    @csrf
                                        <input type="hidden" name="estado" value="Realizado">
                                        <span class="float-right px-2 my-1">
                                            <input class="btn btn-sm btn-light btn-outline-secondary" type="submit" value="Eliminar">
                                        </span>
                                    </form>
                            
                                <span class="float-right px-2 my-1">
                                    <a class="btn btn-sm btn-light btn-outline-secondary" href="{{ url('admin/') }}" data-fancybox>Ver Captura</a>
                                </span>
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





<div class="container bg-light rounded border mt-3">
    <h1 class="py-3">Recargas de montos realizadas</h1>
        <div class="row d-flex justify-content-center">


        @if( $realizadas->isNotEmpty() )

            @foreach( $realizadas as $dato )
                <!-- Comienza el card -->
                    <div class="card m-3" style="width: 30rem;">
                        <div class="card-body">

                            <div class="row">
                                <div class="col-5">
                                    <h5 class="my-0 mx-1 card-title">Monto</h5>
                                </div>
                                <div class="col-7">
                                    <h5 class="my-0 mx-1 card-title">{{ $dato->monto }}</h5>
                                </div>
                            </div>

                            <!-- <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small><strong>Estado</strong></small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small><strong>{{ $dato->estado }}</strong></small></p>
                                </div>
                            </div> -->

                            <div class="row">
                                <div class="col-5">
                                    <p class="my-0 mx-1 card-text"><small><strong>Fecha de petición</strong></small></p>
                                </div>
                                <div class="col-7">
                                    <p class="my-0 mx-1 card-text"><small><strong>{{ $dato->updated_at }}</strong></small></p>
                                </div>
                            </div>

                            <!-- <div class="container position-relative">
                                    <form class="m-0" action="" method="POST" onsubmit="return FORMELIMINAR()">
                                    @csrf
                                        <input type="hidden" name="estado" value="Realizado">
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


@stop

@section('paginador')
{{ $realizadas->links() }}
@stop