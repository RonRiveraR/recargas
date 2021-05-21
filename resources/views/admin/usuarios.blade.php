@extends('layouts.layout')


@section('content')

<div class="container bg-light rounded border">
    <h1 class="py-3">Usuarios registrados</h1>
    <div class="row d-flex justify-content-center">

        @if( $data->isNotEmpty() )
            @foreach ($data as $dato)
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
                                <p class="my-0 mx-1 card-text"><small><strong>Saldo</strong></small></p>
                            </div>
                            <div class="col-7">
                                <p class="my-0 mx-1 card-text"><small><strong>{{ $dato->monto }}</strong></small></p>
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

                        @if( $dato->telefono != null)
                        <div class="row">
                            <div class="col-5">
                                <p class="my-0 mx-1 card-text"><small>Télefono</small></p>
                            </div>
                            <div class="col-7">
                                <p class="my-0 mx-1 card-text"><small>{{ $dato-> telefono }}</small></p>
                            </div>
                        </div>
                        @else
                        <div class="row">
                            <div class="col-5">
                                <p class="my-0 mx-1 card-text"><small>Télefono</small></p>
                            </div>
                            <div class="col-7">
                                <p class="my-0 mx-1 card-text"><small>-</small></p>
                            </div>
                        </div>
                        @endif

                        <div class="row">
                            <div class="col-5">
                                <p class="my-0 mx-1 card-text"><small>Fecha de registro</small></p>
                            </div>
                            <div class="col-7">
                                <p class="my-0 mx-1 card-text"><small>{{ $dato->created_at }}</small></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            @endforeach
        @else
            <p class="text-center">No hay usuarios registrados.</p>
        @endif

    </div>
</div>

@endsection

@section('paginador')
{{ $data->links() }}
@stop