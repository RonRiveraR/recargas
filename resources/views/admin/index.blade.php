@extends('layouts.layout')


@section('content')

    <div class="container bg-light rounded border pb-4">
        <h1 class="py-3">Bienvenido {{ Auth::user()->name }}</h1>


        <div class="row">
            <div class="col-sm-6">
                <h2 class="m-3">Últimas peticiones recargas</h2>

                @if( $recargas->isNotEmpty() )
                    @foreach($recargas as $dato)
                        <div class="alert mx-3 my-2 alert-success" role="alert">
                            <b>{{ $dato->producto }}</b> - ${{ $dato->monto }}
                        </div>
                    @endforeach

                    <div class="container m-3">
                        <a class="mx-3 float-right" href="{{ url('admin/recargas/pendientes') }}">Mostrar todo</a>
                    </div>


                @else

                    <p>No hay registros.</p>

                @endif

            </div>

            <div class="col-sm-6">
                <h2 class="m-3">Últimas peticiones montos de socios</h2>

                    @if( $montos->isNotEmpty() )
                        @foreach($montos as $data)
                            <div class="alert mx-3 my-2 alert-success" role="alert">
                                <b>{{ $data->name }}</b> - {{ $data->monto }}
                            </div>
                        @endforeach

                        <div class="container m-3">
                            <a class="mx-3 float-right" href="{{ url('admin/montos/pendientes') }}">Mostrar todo</a>
                        </div>

                    @else

                        <p>No hay registros.</p>

                    @endif

            </div>
        </div>


    </div>

@stop

@section('script')
<script src="{{ asset('js/formAdmin.js') }}"></script>
@stop