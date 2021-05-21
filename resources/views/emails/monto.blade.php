<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Tipo de letra -->
    <link href="//fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
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
    @if( $datosRecarga['estado'] == 'Realizado' )
    <section class="flex center-all">
        <div class="p-2 border-radio" style="background-color:rgba(99, 194, 110, 0.1);">
            <p class="m-0">Su recarga fue:</p>
            <h3 class="m-0">¡Exitosa!</h3>
        </div>
    </section>

    <footer class="size-tb p-2">
        <p class="m-0">{{ $datosRecarga['monto'] }} pesos abonados a su cuenta.</p>
    </footer>

    @elseif( $datosRecarga['estado'] == 'Rechazado' )
    <section class="flex center-all">
        <div class="p-2 border-radio" style="background-color:rgba(99, 194, 110, 0.1);">
            <p class="m-0">Su recarga fue:</p>
            <h3 class="m-0">Rechazada</h3>
        </div>
    </section>

    <footer class="size-tb p-2">
        <div class="m-2">
            <p class="m-0"><b>Razón del rechazo:</b></p>
            <p class="m-0"><b style="text-transform:capitalize;">{{ $datosRecarga['observacion'] }}</b></p>
        </div>
        <div class="m-2">
            <p class="m-0">Monto:</p>
            <p class="m-0">{{ $datosRecarga['monto'] }} pesos.</p>
        </div>
        <p class="m-2"><small>Envía de nuevo la petición de recarga en nuestro sitio web.</small></p>
    </footer>
    @endif


</body>
</html>