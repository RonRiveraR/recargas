<!DOCTYPE html>
<html lang="es">

<head>
    <!-- Meta tag Keywords -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" /> 
    <!-- Tipo de letra -->
    <link href="//fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <!--/Style Modificables-CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        .flex{
            display: flex;
        }
        .center-all{
            justify-content: center;
            align-items: center;
        }
        .text-center{
            text-align: center;
        }
        .m-0{
            margin: 0;
        }
        .m-1{
            margin: 0.4rem;
        }
        .m-2{
            margin: 0.8rem;
        }
        .p-0{
            padding: 0;
        }
        .p-1{
            padding: 0.4rem;
        }
        .p-2{
            padding: 0.9rem;
        }
        .border-radio{
            border-radius: 8px;
        }
    </style>
    <title>Recargas</title>
</head>
<body class="text-center center-all" style="font-family: 'Poppins', sans-serif;">
    
    <header class="m-0">
        <h1>Recargas</h1>
    </header>
        @if( $datosRecarga->estado == 'Realizado' )
            <section class="flex center-all">
                <div class="p-2 border-radio" style="background-color:rgba(99, 194, 110, 0.1);">
                    <p class="m-0">Su recarga fue:</p>
                    <h3 class="m-0">¡Exitosa!</h3>
                </div>
            </section>
        @elseif( $datosRecarga->estado == 'Rechazado' )
            <section class="flex center-all">
                <div class="p-2 border-radio" style="background-color:rgba(99, 194, 110, 0.1);">
                    <p class="m-0">Su recarga fue:</p>
                    <h3 class="m-0">Rechazada</h3>
                </div>
            </section>
        @endif


        <footer class="size-tb p-2">
            <h2>Detalle de la recarga</h2>
            @if( $datosRecarga->estado == 'Rechazado' )
                <div class="m-2">
                    <p class="m-0"><b>Razón del rechazo:</b></p>
                    <p class="m-0"><b style="text-transform:capitalize;">{{ $datosRecarga->observacion }}</b></p>
                </div>
                <p class="m-2"><small>Envía de nuevo la petición de recarga en nuestro sitio web.</small></p>
            @endif
                <div class="m-2">
                    <p class="m-0">Empresa:</p>
                    <p class="m-0">{{ $datosRecarga->empresa }}</p>
                </div>
                <div class="m-2">
                    <p class="m-0">Servicio:</p>
                    <p class="m-0">{{ $datosRecarga->servicio }}</p>
                </div>
            @if( $datosRecarga->producto != null )
                <div class="m-2">
                    <p class="m-0">Producto:</p>
                    <p class="m-0">{{ $datosRecarga->producto }}</p>
                </div>
            @endif 
        </footer>

</body>
</html>