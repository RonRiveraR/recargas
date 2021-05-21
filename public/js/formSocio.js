$(document).ready(function () {
    var divLoader = '<div class="mt-3 text-center"><img src="../images/loader.gif"></div>';
    $('#divTotal').hide();
    $('#botonForm').hide();
    $('#divCaptura').hide();

    /*==================================
    OPCIONES html/FORMULARIOS
    ===================================*/

    function LimpiarTodo() {
        $('#empresa').html('');
        $('#numero').html('');
        $('#tipoProducto').html('');
        $('#formMonto').html('');
        $('#adicional').html('');
        
        $('#checkImg').html('');
        $('#divCaptura').hide();
        $('#contenedorImagen').html('');

        $('#divTotal').hide();
        $('#botonForm').hide();
        $('#monto').val('');
    }

    /*==================================
    SELECCIONAR SERVICIO                    #LISTO#
    ===================================*/
    $('#selectServicio').change(function () {
        switch ($(this).val()) {
            case 'Recargas móviles':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divRecargasMoviles');
                    LimpiarTodo();
                break;
            case 'Luz e Infonavit':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divLuzInfonavit');
                    LimpiarTodo();
                break;
            case 'Pines electrónicos':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divPinesElectronicos');
                    LimpiarTodo();
                 break;
            case 'Televisión paga':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divTelevisionPaga');
                    LimpiarTodo();
                break;
            case 'Facturas télefonicas':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divFacturasTelefonicas');
                    LimpiarTodo();
                break;
            case 'Impuestos':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divImpuestos');
                    LimpiarTodo();
                break;
            case 'Cine':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divCine');
                    LimpiarTodo();
                break;
            case 'Recarga tag':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divRecargaTag');
                    LimpiarTodo();
                break;
            case 'Telefonía fija':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divTelefoniaFija');
                    LimpiarTodo();
                break;
            case 'Venta por catálogo':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divVentaCatalogo');
                    LimpiarTodo();
                break;
            case 'Aguas estatales':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divAguasEstatales');
                    LimpiarTodo();
                break;
            case 'Gas natural':
                $('#empresa').html(divLoader);
                    $('#empresa').load('../html/formularios.html #divGasNatural');
                    LimpiarTodo();
                break;
            default:
                LimpiarTodo();
                break;
        }
    });// FIN DE SELECCIONAR SERVICIOS

        /*==================================
        SELECCIONAR TIPO DE SERVICIO - RECARGAS MOVILES             #LISTO#
        ===================================*/
        $('body').on('change', '#recargasMoviles', function () {
            switch ($('body #recargasMoviles').val()) {
                case 'TELCEL':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRecargasMovilesTelcel');
                    break;
                case 'MOVISTAR':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRecargasMovilesMovistar');
                    break;
                case 'IUSACELL':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRMIusacell');
                    break;
                case 'UNEFON':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRMUnefon');
                    break;
                case 'AT&T':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRMATT');
                    break;
                case 'VIRGIN MOBILE':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRMVinginMobile');
                    break;
                case 'FLASH MOBILE':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRMFlashMobile');
                    break;
                case 'CIERTO':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRMCierto');
                    break;
                case 'MAZ TIEMPO':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRMMazTiempo');
                    break;
                case 'OUI':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRMOui');
                    break;
                case 'ALO':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divRMAlo');
                    break;
            
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - RECARGAS MOVILES
        function LimpiarOpciones1() {
            $('#numero').html('');
            $('#tipoProducto').html('');
            $('#formMonto').html('');
            $('#adicional').html('');

            $('#checkImg').html('');
            $('#divCaptura').hide();
            $('#contenedorImagen').html('');

            $('#divTotal').hide();
            $('#botonForm').hide();
            $('#monto').val('');
        }

                /*==================================
                SELECCIONAR TIPO DE PODUCTO - RECARGAS MOVILES - TELCEL          #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesTelcel', function () {
                    switch ($('body #recargasMovilesTelcel').val()) {
                        case 'Recarga de tiempo libre':
                            LimpiarOpciones2();
                            $('body #formMonto').html(divLoader);
                                $('body #formMonto').load('../html/formularios.html #RMTelcelMontoTiempoLibre');
                            break;
                        case 'Internet amigo':
                            LimpiarOpciones2();
                            $('body #formMonto').html(divLoader);
                                $('body #formMonto').load('../html/formularios.html #RMTelcelMontoInternetAmigo');
                            break;
                        case 'Paquete amigo':
                            LimpiarOpciones2();
                            $('body #formMonto').html(divLoader);
                                $('body #formMonto').load('../html/formularios.html #RMTelcelMontoPaqueteAmigo');
                            break;
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PODUCTO - RECARGAS MOVILES - TELCEL
                
                function LimpiarOpciones2() {
                    $('#formMonto').html('');
                    $('#adicional').html('');

                    $('#checkImg').html('');
                    $('#divCaptura').hide();
                    $('#contenedorImagen').html('');

                    $('#divTotal').hide();
                    $('#botonForm').hide();
                    $('#monto').val('');
                }

                                        /*==================================
                                        SELECCIONE MONTO - TELCEL - RECARGA DE TIEMPO LIBRE      #LISTO#      
                                        ===================================*/
                                        $('body').on('change', '#RMTelcelMontoTiempoLibre', function () {
                                            switch ($('body #RMTelcelMontoTiempoLibre').val()) {
                                                case '10':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #tiempoLibre10');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoTiempoLibre').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '20':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #tiempoLibre20');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoTiempoLibre').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '30':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #tiempoLibre30');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoTiempoLibre').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '50':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #tiempoLibre50');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoTiempoLibre').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '100':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #tiempoLibre100');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoTiempoLibre').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '150':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #tiempoLibre150');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoTiempoLibre').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '200':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #tiempoLibre200');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoTiempoLibre').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '300':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #tiempoLibre300');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoTiempoLibre').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '500':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #tiempoLibre500');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoTiempoLibre').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                default:
                                                    LimpiarOpciones3();
                                                    break;
                                            }
                                        });// FIN DE SELECCIONE MONTO - TELCEL - RECARGA DE TIEMPO LIBRE 
                                        function LimpiarOpciones3() {
                                            $('#adicional').html('');

                                            $('#checkImg').html('');
                                            $('#divCaptura').hide();
                                            $('#contenedorImagen').html('');

                                            $('#divTotal').hide();
                                            $('#botonForm').hide();
                                            $('#monto').val('');
                                        }


                                        /*==================================
                                        SELECCIONE MONTO - TELCEL - INTERNET AMIGO            #LISTO#
                                        ===================================*/
                                        $('body').on('change', '#RMTelcelMontoInternetAmigo', function () {
                                            switch ($('body #RMTelcelMontoInternetAmigo').val()) {
                                                case '20':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #internetAmigo20');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoInternetAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '30':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #internetAmigo30');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoInternetAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '50':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #internetAmigo50');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoInternetAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '100':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #internetAmigo100');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoInternetAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '150':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #internetAmigo150');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoInternetAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '200':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #internetAmigo200');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoInternetAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '300':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #internetAmigo300');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoInternetAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '500':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #internetAmigo500');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoInternetAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                default:
                                                    LimpiarOpciones3();
                                                    break;
                                            }
                                        });// FIN DE SELECCIONE MONTO - TELCEL - INTERNET AMIGO 


                                        /*==================================
                                        SELECCIONE MONTO - TELCEL - PAQUETE AMIGO            #LISTO#
                                        ===================================*/
                                        $('body').on('change', '#RMTelcelMontoPaqueteAmigo', function () {
                                            switch ($('body #RMTelcelMontoPaqueteAmigo').val()) {
                                                case '20':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #paqueteAmigo20');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoPaqueteAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '30':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #paqueteAmigo30');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoPaqueteAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '50':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #paqueteAmigo50');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoPaqueteAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '80':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #paqueteAmigo80');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoPaqueteAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '100':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #paqueteAmigo100');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoPaqueteAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '150':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #paqueteAmigo150');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoPaqueteAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '200':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #paqueteAmigo200');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoPaqueteAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '300':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #paqueteAmigo300');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoPaqueteAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '500':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #paqueteAmigo500');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMTelcelMontoPaqueteAmigo').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                            
                                                default:
                                                    LimpiarOpciones3();
                                                    break;
                                            }
                                        });// FIN DE SELECCIONE MONTO - TELCEL - PAQUETE AMIGO 



                /*==================================
                SELECCIONAR TIPO DE PODUCTO - RECARGAS MOVILES - MOVISTAR          #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesMovistar', function () {
                    switch ($('body #recargasMovilesMovistar').val()) {
                        case 'Datos Movistar':
                            LimpiarOpciones2();
                            $('body #formMonto').html(divLoader);
                                $('body #formMonto').load('../html/formularios.html #RMMovistarMontoDatosMovistar');
                            break;
                        case 'TAE Movistar':
                            LimpiarOpciones2();
                            $('body #formMonto').html(divLoader);
                                $('body #formMonto').load('../html/formularios.html #RMMovistarMontoTAEMovistar');
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PODUCTO - RECARGAS MOVILES - MOVISTAR


                                        /*==================================
                                        SELECCIONE MONTO - MOVISTAR - DATOS MOVISTAR      #LISTO#      
                                        ===================================*/
                                        $('body').on('change', '#RMMovistarMontoDatosMovistar', function () {
                                            switch ($('body #RMMovistarMontoDatosMovistar').val()) {
                                                case '10':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #datosMovistar10');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMMovistarMontoDatosMovistar').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '30':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #datosMovistar30');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMMovistarMontoDatosMovistar').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '200':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #datosMovistar200');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMMovistarMontoDatosMovistar').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                default:
                                                    LimpiarOpciones3();
                                                    break;
                                            }
                                        });// FIN DE SELECCIONE MONTO - MOVISTAR - DATOS MOVISTAR 


                                        /*==================================
                                        SELECCIONE MONTO - MOVISTAR - TAE MOVISTAR      #LISTO#      
                                        ===================================*/
                                        $('body').on('change', '#RMMovistarMontoTAEMovistar', function () {
                                            switch ($('body #RMMovistarMontoTAEMovistar').val()) {
                                                case '10':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #TAEMovistar10');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMMovistarMontoTAEMovistar').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '30':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #TAEMovistar30');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMMovistarMontoTAEMovistar').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                case '200':
                                                    LimpiarOpciones3();
                                                    $('body #adicional').html(divLoader);
                                                        $('body #adicional').load('../html/formularios.html #TAEMovistar200');
                                                    $('#divTotal').show();
                                                        $('#monto').val($('body #RMMovistarMontoTAEMovistar').val());
                                                    $('#divCaptura').show();
                                                    $('#botonForm').show();
                                                    break;
                                                default:
                                                    LimpiarOpciones3();
                                                    break;
                                            }
                                        });// FIN DE SELECCIONE MONTO - MOVISTAR - TAE MOVISTAR 



                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - IUSACELL          #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesIusacell', function () {
                    switch ($('body #recargasMovilesIusacell').val()) {
                        case '15':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '20':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '50':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '55':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '70':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '100':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '120':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '150':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '600':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '800':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '900':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '1000':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '1200':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesIusacell').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - IUSACELL


                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - UNEFON          #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesUnefon', function () {
                    switch ($('body #recargasMovilesUnefon').val()) {
                        case '15':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '20':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon20');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '30':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon30');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '50':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon50');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '55':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '70':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon70');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '100':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon100');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '120':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon120');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '150':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon150');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon200');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon300');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon500');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '600':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon600');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '800':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '900':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #unefon900');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '1200':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesUnefon').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - UNEFON


                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - AT&T          #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesATT', function () {
                    switch ($('body #recargasMovilesATT').val()) {
                        case '15':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '20':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #ATT20');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '30':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #ATT30');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '50':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #ATT50');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '55':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '70':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #ATT70');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '100':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #ATT100');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '150':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #ATT150');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #ATT200');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #ATT300');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #ATT500');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '600':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '800':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '900':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '1000':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '1200':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesATT').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - AT&T


                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - VIRGIN MOBILE          #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesVirginMobile', function () {
                    switch ($('body #recargasMovilesVirginMobile').val()) {
                        case '20':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesVirginMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '30':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesVirginMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '40':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesVirginMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '50':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesVirginMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '100':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesVirginMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '150':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesVirginMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesVirginMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesVirginMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesVirginMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - VIRGIN MOBILE

                
                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - FLASH MOBILE          #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesFlashMobile', function () {
                    switch ($('body #recargasMovilesFlashMobile').val()) {
                        case '10':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '20':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '30':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '40':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '50':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '60':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '70':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '80':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '100':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '120':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '150':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '250':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '400':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesFlashMobile').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - FLASH MOBILE


                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - CIERTO          #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesCierto', function () {
                    switch ($('body #recargasMovilesCierto').val()) {
                        case '20':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesCierto').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '30':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesCierto').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '50':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesCierto').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '100':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesCierto').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesCierto').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesCierto').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesCierto').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - CIERTO


                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - MAZ TIEMPO          #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesMazTiempo', function () {
                    switch ($('body #recargasMovilesMazTiempo').val()) {
                        case '10':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #divMazTiempo');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesMazTiempo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '20':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #divMazTiempo');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesMazTiempo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '30':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #divMazTiempo');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesMazTiempo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '50':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #divMazTiempo');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesMazTiempo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '60':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #divMazTiempo');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesMazTiempo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '100':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #divMazTiempo');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesMazTiempo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '150':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #divMazTiempo');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesMazTiempo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #divMazTiempo');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesMazTiempo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #divMazTiempo');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesMazTiempo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #divMazTiempo');
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesMazTiempo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - MAZ TIEMPO


                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - OUI          #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesOui', function () {
                    switch ($('body #recargasMovilesOui').val()) {
                        case '30':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesOui').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '50':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesOui').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '60':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesOui').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '75':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesOui').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '100':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesOui').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '125':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesOui').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesOui').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '250':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesOui').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesOui').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '350':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesOui').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - OUI


                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - ALO         #LISTO#  
                ===================================*/
                $('body').on('change', '#recargasMovilesAlo', function () {
                    switch ($('body #recargasMovilesAlo').val()) {
                        case '10':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesAlo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '20':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesAlo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '30':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesAlo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '50':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesAlo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '100':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesAlo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '150':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesAlo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesAlo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesAlo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val($('body #recargasMovilesAlo').val());
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - RECARGAS MOVILES - ALO











        /*==================================
        SELECCIONAR TIPO DE SERVICIO - LUZ E INFONAVIT            #LISTO#
        ===================================*/
        $('body').on('change', '#luzInfonavit', function () {
            switch ($('body #luzInfonavit').val()) {
                case 'CFE VIGENTES':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirCFEVigente');
                    $('body #adicional').html(divLoader);
                        $('body #adicional').load('../html/formularios.html #cargo08');
                    $('#divTotal').show();
                    $('#divCaptura').show();
                        $('#botonForm').show();
                    break;
                case 'INFONAVIT':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirInfonavit');
                    $('body #adicional').html(divLoader);
                        $('body #adicional').load('../html/formularios.html #cargo08');
                    $('#divTotal').show();
                    $('#divCaptura').show();
                        $('#botonForm').show();
                    break;
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - LUZ E INFONAVIT

        $('body').on('keyup', '#montoCFE', function () {
                suma = parseFloat( $('#montoCFE').val())  +  parseFloat( 8.0 );
                $('#monto').val(suma);
        });

        $('body').on('keyup', '#montoINFO', function () {
                suma = parseFloat( $('#montoINFO').val())  +  parseFloat( 8.0 );
                $('#monto').val(suma);
        });













        /*==================================
        SELECCIONAR TIPO DE SERVICIO - PINES ELECTRONICOS             #LISTO#
        ===================================*/
        $('body').on('change', '#pinesElectronicos', function () {
            switch ($('body #pinesElectronicos').val()) {
                case 'AMAZON':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesAmazon');
                    break;
                case 'NINTENDO eSHOP':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesNintendoEShop');
                    break;
                case 'GANDHI':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesGandhi');
                    break;
                case 'XBOX':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divXbox');
                    break;
                case 'WOW REWARDS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divWOW');
                    break;
                case 'NINTENDO SWITCH':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesNintendoSwitch');
                    break;
                case 'BLIZARD ENTERTAINMENT':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesBlizzard');
                    break;
                case 'MICROSOFT OFFICE':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divOffice');
                    break;
                case 'BITDEFENDER':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesBitDefender');
                    break;
                case 'MINECRAFT':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesMinecraft');
                    break;
                case 'XBOX LIVE GOLD':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesXboxGold');
                    break;
                case 'CRUNCHYROLL':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesCrunchyroll');
                    break;
                case 'MEMBRESIA AZULCREMA':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesAzulCrema');
                    break;
                case 'CALIENTE':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divCaliente');
                    break;
                case 'SPOTIFY':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesSpotify');
                    break;
                case 'XBOX LIVE':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesXboxLive');
                    break;
                case 'CEPDI':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesCepdi');
                    break;
                case 'PLAYSTATION PLUS':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesPlayStationPlus');
                    break;
                case 'ITUNES':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesItunes');
                    break;
                case 'STARBUCKS CARD':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesStarbucks');
                    break;
                case 'STEAM':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesSteam');
                    break;
                case 'RIXTY':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #pinesRixty');
                    break;
            
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - PINES ELECTRONICOS


                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - AMAZON          #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesAmazon', function () {
                    switch ($('body #pinesAmazon').val()) {
                        case 'Tarjeta de 100':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val(100);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Tarjeta de 300':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val(300);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Tarjeta de 500':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val(500);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Tarjeta de 800':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val(600);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Tarjeta de 1000':
                            LimpiarOpciones2();
                            // $('body #botonForm').html(divLoader);
                            $('#divTotal').show();
                                $('#monto').val(1000);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                       
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - AMAZON

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - NINTENDOeSHOP          #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesNintendoEShop', function () {
                    switch ($('body #pinesNintendoEShop').val()) {
                        case 'Tarjeta de 200':
                            LimpiarOpciones2();
                            $('#divCaptura').show();
                                $('#botonForm').show();
                                $('#divTotal').show();
                                    $('#monto').val(200);
                            break;
                        case 'Tarjeta de 500':
                            LimpiarOpciones2();
                            $('#divCaptura').show();
                                $('#botonForm').show();
                                $('#divTotal').show();
                                    $('#monto').val(500);
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - NINTENDOeSHOP

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - GANDHI          #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesGandhi', function () {
                    switch ($('body #pinesGandhi').val()) {
                        case 'Tarjeta de 200':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(200);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Tarjeta de 300':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(300);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Tarjeta de 500':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(500);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Tarjeta de 1000':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(1000);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                            
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - GANDHI

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - XBOX          #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesXbox', function () {
                    switch ($('body #pinesXbox').val()) {
                        case 'XBOX GAME PASS ULT 1 MES $229':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(229);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'XBOX GAME PASS 3 MESES $449':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(449);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'XBOX GAME PASS ULT 3 MESES $689':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(689);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                            
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - XBOX

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - WOW REWARDS          #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesWOW', function () {
                    switch ($('body #pinesWOW').val()) {
                        case '250':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(250);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(500);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '1000':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(1000);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                            
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - WOW REWARDS

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - NINTENDO SWITCH          #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesNintendoSwitch', function () {
                    switch ($('body #pinesNintendoSwitch').val()) {
                        case 'Online 3 meses $159':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(159);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Online 12 meses $389':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(389);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                            
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - NINTENDO SWITCH

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - BLIZARD ENTERTAINMENT          #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesBlizzard', function () {
                    switch ($('body #pinesBlizzard').val()) {
                        case '150':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(150);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '350':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(350);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                            
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - BLIZARD ENTERTAINMENT

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - MICRODOFT OFFICE          #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesOffice', function () {
                    switch ($('body #pinesOffice').val()) {
                        case 'Personal 2019':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(1299);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Home 2019':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(1749);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Home Student 2019':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(2599);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Premium 2019':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(3949);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Home Business 2019':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(6499);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                            
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - MICRODOFT OFFICE

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - BITDEFENDER         #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesBitDefender', function () {
                    switch ($('body #pinesBitDefender').val()) {
                        case '249':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(249);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                            
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - BITDEFENDER

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - MINECRAFT         #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesMinecraft', function () {
                    switch ($('body #pinesMinecraft').val()) {
                        case '1720 Minecoins':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(177);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '3500 Minecoins':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(349);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                            
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - MINECRAFT

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - XBOX LIVE GOLD         #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesXboxGold', function () {
                    switch ($('body #pinesXboxGold').val()) {
                        case 'Gold 1 mes':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(199);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '30 dias':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(169);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Gold 3 meses':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(419);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Gold 6 meses':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(839);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Gold 12 meses':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(1159);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - XBOX LIVE GOLD

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - CRUNCHYROLL         #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesCrunchyroll', function () {
                    switch ($('body #pinesCrunchyroll').val()) {
                        case '1 mes':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(114);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '3 meses':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(335);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - CRUNCHYROLL

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - AZUL CREMA         #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesAzulCrema', function () {
                    switch ($('body #pinesAzulCrema').val()) {
                        case 'Membresia339':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #cargo08');
                            $('#divTotal').show();
                                $('#monto').val(407);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - AZUL CREMA

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - CALIENTE         #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesCaliente', function () {
                    switch ($('body #pinesCaliente').val()) {
                        case '100':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(100);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '250':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(250);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(500);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - CALIENTE

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - SPOTIFY         #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesSpotify', function () {
                    switch ($('body #pinesSpotify').val()) {
                        case '100':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(100);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '250':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(250);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(300);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(500);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '600':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(600);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - SPOTIFY

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - XBOX LIVE         #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesXboxLive', function () {
                    switch ($('body #pinesXboxLive').val()) {
                        case '200':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(200);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(300);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '600':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(600);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '1000':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(1000);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - XBOX LIVE

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - CEPDI         #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesCepdi', function () {
                    switch ($('body #pinesCepdi').val()) {
                        case '10':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(10);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '20':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(20);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '30':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(30);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '40':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(40);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '50':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(50);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '100':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(100);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '150':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(150);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(200);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - CEPDI

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - PLAYSTATION PLUS        #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesPlayStationPlus', function () {
                    switch ($('body #pinesPlayStationPlus').val()) {
                        case '3 meses':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(360);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '20USD':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(520);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS -PLAYSTATION PLUS

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - ITUNES        #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesItunes', function () {
                    switch ($('body #pinesItunes').val()) {
                        case '150':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #recargoItunes');
                            $('#divTotal').show();
                                $('#monto').val(160);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '200':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #recargoItunes');
                            $('#divTotal').show();
                                $('#monto').val(210);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #recargoItunes');
                            $('#divTotal').show();
                                $('#monto').val(310);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '400':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #recargoItunes');
                            $('#divTotal').show();
                                $('#monto').val(410);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #recargoItunes');
                            $('#divTotal').show();
                                $('#monto').val(510);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '600':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').load('../html/formularios.html #recargoItunes');
                            $('#divTotal').show();
                                $('#monto').val(610);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS -ITUNES

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - STARBUCKS        #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesStarbucks', function () {
                    switch ($('body #pinesStarbucks').val()) {
                        case '200':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(200);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '300':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(300);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '500':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(500);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS -STARBUCKS

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - STEAM        #LISTO#  
                ===================================*/
                $('body').on('change', '#pinesSteam', function () {
                    switch ($('body #pinesSteam').val()) {
                        case '215':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(215);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '370':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(370);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '630':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(630);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS -STEAM

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - RIXTY        #LISTO#  
                ===================================*/
                $('body').on('change', '#pinespinesRixtySteam', function () {
                    switch ($('body #pinesRixty').val()) {
                        case '200':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(200);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '350':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(350);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '600':
                            LimpiarOpciones2();
                            $('#divTotal').show();
                                $('#monto').val(600);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - PINES ELECTRONICOS - RIXTY

























        /*==================================
        SELECCIONAR TIPO DE SERVICIO - TELEVISION DE PAGA             #LISTO#
        ===================================*/
        $('body').on('change', '#televisionPaga', function () {
            switch ($('body #televisionPaga').val()) {
                case 'VETV':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divVetv');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'NETFLIX':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #teleNetflix');
                    break;
                case 'CABLEMAS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divCableMas');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'DISH':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divDish');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'MEGACABLE':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divMegaCable');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $(' #botonForm').show();
                    break;
                case 'MULTIMEDIOS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divMultimedios');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'SKY':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divSky');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'BLIM':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #teleBlim');
                    break;
                case 'TOTALPLAY':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divTotalPlay');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'CABLEVISION':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divCableVision');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'IZZI':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divIzzi');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'STARTV':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divStarTV');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'BLUE TELECOMM':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divBlue');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
            
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - TELEVISION DE PAGA
        $('body').on('keyup', '#montoSuma', function () {
            suma = parseFloat( $('#montoSuma').val())  +  parseFloat( 8.0 );
            $('#monto').val(suma);
        });

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - TELEVISION DE PAGA - NETFLIX        #LISTO#  
                ===================================*/
                $('body').on('change', '#teleNetflix', function () {
                    switch ($('body #teleNetflix').val()) {
                        case '300':
                            LimpiarOpciones2();
                            $('body #adicional').load('../html/formularios.html #cargo08');
                            $('#divTotal').show();
                                $('#monto').val(308);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - TELEVISION DE PAGA - NETFLIX

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO MONTO - TELEVISION DE PAGA - BLIM        #LISTO#  
                ===================================*/
                $('body').on('change', '#teleBlim', function () {
                    switch ($('body #teleBlim').val()) {
                        case '1 mes':
                            LimpiarOpciones2();
                            $('body #adicional').load('../html/formularios.html #cargo08');
                            $('#divTotal').show();
                                $('#monto').val(109);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '3 meses':
                            LimpiarOpciones2();
                            $('body #adicional').load('../html/formularios.html #cargo08');
                            $('#divTotal').show();
                                $('#monto').val(289);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '6 meses':
                            LimpiarOpciones2();
                            $('body #adicional').load('../html/formularios.html #cargo08');
                            $('#divTotal').show();
                                $('#monto').val(289);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;

                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO MONTO - TELEVISION DE PAGA - BLIM




























        /*==================================
        SELECCIONAR TIPO DE SERVICIO - FACTURAS TELEFONICAS             #LISTO#
        ===================================*/
        $('body').on('change', '#facturasTelefonicas', function () {
            switch ($('body #facturasTelefonicas').val()) {
                case 'TELCEL':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divFacturaTelcel');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'MOVISTAR':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divFacturaMovistar');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'IUSACELL':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divFacturaIusacell');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'AT&T NEXTEL':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divFacturaNextel');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
            
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - FACTURAS TELEFONICAS


















        /*==================================
        SELECCIONAR TIPO DE SERVICIO - IMPUESTOS             #LISTO#
        ===================================*/
        $('body').on('change', '#impuestos', function () {
            switch ($('body #impuestos').val()) {
                case 'HIDALGO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divHidalgo');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'CELAYA':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divCelaya');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'TIJUANA':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divTijuana');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'MICHOACAN':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divMichoacan');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'COAHUILA':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divCoahuila');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'GUANAJUATO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divGuanajuato');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'JALISCO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divJalisco');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'ESTADO DE MEXICO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divEstadoMexico');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'EDO. QUERETARO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html('<div class="mt-3 text-center"><img src="images/loader.gif"></div>');
                        $('body #tipoProducto').load('html/formularios.html #divEdoQueretaro');
                    $('body #adicional').load('html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'TLAXCALA':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divTlaxcala');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'CHIHUAHUA':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divChihuahua');
                    break;
                case 'MPIO. QUERETARO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html('<div class="mt-3 text-center"><img src="images/loader.gif"></div>');
                        $('body #tipoProducto').load('html/formularios.html #divMpioQueretaro');
                    $('body #adicional').load('html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'ZACATECAS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divZacatecas');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'CIUDAD DE MEXICO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divCiudadMexico');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
            
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - IMPUESTOS

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO - CHIHUAHUA             #LISTO#
                ===================================*/
                $('body').on('change', '#chichuachuaProducto', function () {
                    switch ($('body #chichuachuaProducto').val()) {
                        case 'Tesoreria de Chihuahua':
                            LimpiarOpciones2();
                            $('body #formMonto').html(divLoader);
                                $('body #formMonto').load('../html/formularios.html #montoSumaChi');
                            $('body #adicional').load('../html/formularios.html #cargo08');
                                $('#divTotal').show();
                                $('#divCaptura').show();
                                    $('#botonForm').show();
                            break;
                        case 'Tesoreria de Leon':
                            LimpiarOpciones2();
                            $('body #formMonto').html(divLoader);
                                $('body #formMonto').load('../html/formularios.html #montoSumaChi');
                            $('body #adicional').load('../html/formularios.html #cargo08');
                                $('#divTotal').show();
                                $('#divCaptura').show();
                                    $('#botonForm').show();
                            break;
                    
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO - CHIHUAHUA 





























                
        /*==================================
        SELECCIONAR TIPO DE SERVICIO - CINE             #LISTO#
        ===================================*/
        $('body').on('change', '#cine', function () {
            switch ($('body #cine').val()) {
                case 'CINEPOLIS':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #cinepolis');
                    break;
                case 'CINEPOLIS COMBOS':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #cinepolisCombos');
                    break;
                case 'CINEPOLIS KLICK':
                    LimpiarOpciones1();
                    $('body #numero').html(divLoader);
                        $('body #numero').load('../html/formularios.html #pedirTelefono');
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #cinepolisKlick');
                    break;
            
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - CINE
                
                /*==================================
                SELECCIONAR TIPO DE PRODUCTO - CINEPOLIS             #LISTO#
                ===================================*/
                $('body').on('change', '#cinepolis', function () {
                    switch ($('body #cinepolis').val()) {
                        case '3D IMAX MACROXE - 1 boleto':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(75);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '3D IMAX MACROXE - 2 boletos':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(150);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '2D VIP - 1 boleto':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(115);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '2D VIP - 2 boletos':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(230);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '3D VIP - 1 boleto':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(140);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case '3D VIP - 2 boletos':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(280);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'SALA 4XD - 1 boleto':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(140);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'SALA 4XD - 2 boletos':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(280);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'TRADICIONAL - 1 boleto':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(52);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'TRADICIONAL - 2 boletos':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(104);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'TRADICIONAL - 3 boletos':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(156);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'TRADICIONAL - 4 boletos':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(208);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'TRADICIONAL - 5 boletos':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(250);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                    
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO - CINEPOLIS
                
                /*==================================
                SELECCIONAR TIPO DE PRODUCTO - CINEPOLIS COMBOS             #LISTO#
                ===================================*/
                $('body').on('change', '#cinepolisCombos', function () {
                    switch ($('body #cinepolisCombos').val()) {
                        case 'Combo Bagui Refresco':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolisCombos').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(140);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Combo Palomitas Refresco Grande':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolisCombos').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(90);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Combo HotDog y Refresco Grande':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolisCombos').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(90);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                        case 'Combo Nachos y Refresco Mediano':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolisCombos').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(90);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                    
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO - CINEPOLIS COMBOS
                
                /*==================================
                SELECCIONAR TIPO DE PRODUCTO - CINEPOLIS KLICK             #LISTO#
                ===================================*/
                $('body').on('change', '#cinepolisKlick', function () {
                    switch ($('body #cinepolisKlick').val()) {
                        case 'Renta 1 pelicula':
                            LimpiarOpciones2();
                            $('body #adicional').html(divLoader);
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolisKlick').val()+'</p>');
                            $('#divTotal').show();
                                $('#monto').val(40);
                                $('#divCaptura').show();
                                $('#botonForm').show();
                            break;
                    
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO - CINEPOLIS KLICK


















                
        /*==================================
        SELECCIONAR TIPO DE SERVICIO - RECARGA TAG             #LISTO#
        ===================================*/
        $('body').on('change', '#recargaTag', function () {
            switch ($('body #recargaTag').val()) {
                case 'MUEVE CIUDAD':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divMueveCiudad');
                    break;
                case 'PASE URBANO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divPaseUrbano');
                    $('body #adicional').load('../html/formularios.html #cargo12');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'TELEVIA':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divTelevia');
                    break;
                case 'VIAPASS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divViapass');
                    $('body #adicional').load('../html/formularios.html #cargo12');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'SITAG':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divSitag');
                    $('body #adicional').load('../html/formularios.html #cargo12');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                
                          
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - RECARGA TAG

        $('body').on('keyup', '#montoSuma12', function () {
            suma = parseFloat( $('#montoSuma12').val())  +  parseFloat( 12.0 );
            $('#monto').val(suma);
        });

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO - MUEVE CIUDAD             #LISTO#
                ===================================*/
                $('body').on('change', '#mueveCiudad', function () {
                    switch ($('body #mueveCiudad').val()) {
                        case 'Mueve Ciudad 50':
                            LimpiarOpciones2();
                            // $('body #formMonto').html(divLoader);
                                // $('body #formMonto').load('../html/formularios.html #montoSumaChi');
                            $('body #adicional').load('../html/formularios.html #cargo08');
                                $('#divTotal').show();
                                $('#divCaptura').show();
                                $('#formMonto').hide();
                                $('#monto').val(58);
                                    $('#botonForm').show();
                            break;
                        case 'Mueve Ciudad 100':
                            LimpiarOpciones2();
                            // $('body #formMonto').html(divLoader);
                                // $('body #formMonto').load('../html/formularios.html #montoSumaChi');
                            $('body #adicional').load('../html/formularios.html #cargo08');
                                $('#divTotal').show();
                                $('#divCaptura').show();
                                $('#formMonto').hide();
                                $('#monto').val(108);
                                    $('#botonForm').show();
                            break;
                        case 'Mueve Ciudad 200':
                            LimpiarOpciones2();
                            // $('body #formMonto').html(divLoader);
                                // $('body #formMonto').load('../html/formularios.html #montoSumaChi');
                            $('body #adicional').load('../html/formularios.html #cargo08');
                                $('#divTotal').show();
                                $('#divCaptura').show();
                                $('#formMonto').hide();
                                $('#monto').val(208);
                                    $('#botonForm').show();
                            break;
                        case 'Mueve Ciudad 300':
                            LimpiarOpciones2();
                            // $('body #formMonto').html(divLoader);
                                // $('body #formMonto').load('../html/formularios.html #montoSumaChi');
                            $('body #adicional').load('../html/formularios.html #cargo08');
                                $('#divTotal').show();
                                $('#divCaptura').show();
                                $('#formMonto').hide();
                                $('#monto').val(308);
                                    $('#botonForm').show();
                            break;
                        case 'Mueve Ciudad 500':
                            LimpiarOpciones2();
                            // $('body #formMonto').html(divLoader);
                                // $('body #formMonto').load('../html/formularios.html #montoSumaChi');
                            $('body #adicional').load('../html/formularios.html #cargo08');
                                $('#divTotal').show();
                                $('#divCaptura').show();
                                $('#formMonto').hide();
                                $('#monto').val(508);
                                    $('#botonForm').show();
                            break;
                    
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO - MUEVE CIUDAD 

                /*==================================
                SELECCIONAR TIPO DE PRODUCTO - TELEVIA             #LISTO#
                ===================================*/
                $('body').on('change', '#televia', function () {
                    switch ($('body #televia').val()) {
                        case 'Viaducto Bicentenario':
                            LimpiarOpciones2();
                            $('body #formMonto').html(divLoader);
                                $('body #formMonto').html('<input type="text" class="text" id="montoSuma" placeholder="Monto" required="">');
                                $('body #adicional').html('<p class="mb-3">'+$('#cinepolis').val()+'</p>');
                            $('body #adicional').load('../html/formularios.html #cargo08');
                                $('#divTotal').show();
                                $('#divCaptura').show();
                                    $('#botonForm').show();
                            break;
                        case 'Bolsa Electronica SITAG y BLIM':
                            LimpiarOpciones2();
                            $('body #formMonto').html(divLoader);
                                $('body #formMonto').html('<input type="text" class="text" id="montoSuma" placeholder="Monto" required="">');
                            $('body #adicional').load('../html/formularios.html #cargo08');
                                $('#divTotal').show();
                                $('#divCaptura').show();
                                    $('#botonForm').show();
                            break;
                        case 'Bolsa Electronica TAG':
                            LimpiarOpciones2();
                            $('body #formMonto').html(divLoader);
                                $('body #formMonto').html('<input type="text" class="text" id="montoSuma" placeholder="Monto" required="">');
                            $('body #adicional').load('../html/formularios.html #cargo08');
                                $('#divTotal').show();
                                $('#divCaptura').show();
                                    $('#botonForm').show();
                            break;
                    
                        default:
                            LimpiarOpciones2();
                            break;
                    }
                });// FIN DE TIPO DE PRODUCTO - TELEVIA 
















                              
        /*==================================
        SELECCIONAR TIPO DE SERVICIO - TELEFONIA FJA             #LISTO#
        ===================================*/
        $('body').on('change', '#telefoniaFija', function () {
            switch ($('body #telefoniaFija').val()) {
                case 'AXTEL':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divAxtel');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'MAXCOM':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divMaxcom');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'TELMEX':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divTelmex');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'TELNOR':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divTelnor');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - TELEFONIA FJA






















                             
        /*==================================
        SELECCIONAR TIPO DE SERVICIO - VENTA POR CATALOGOS             #LISTO#
        ===================================*/
        $('body').on('change', '#ventaCatalogo', function () {
            switch ($('body #ventaCatalogo').val()) {
                case 'HERBALIFE':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divHerbalife');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'ARABELA':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divArabela');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'NATURA':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divNatura');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'TUPPERWARE':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divTupperware');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'L-BEL':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divLbel');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'YAMBAL':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divYanbal');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'YVES ROCHER':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divYves');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'READERS DIGETS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divReader');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'ZERMAT':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divZermat');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'AVON':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divAvon');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'JAFRA':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divJafra');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'FULLER COSMETICS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divFuller');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'ILUSION':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divIlusion');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - VENTA POR CATALOGOS
                



















                             
        /*==================================
        SELECCIONAR TIPO DE SERVICIO - AGUAS ESTATALES             #LISTO#
        ===================================*/
        $('body').on('change', '#aguasEstatales', function () {
            switch ($('body #aguasEstatales').val()) {
                case 'SIMAS TORREON':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divSimas');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'AGUAS DE PUEBLA':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divAguasPuebla');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'CEA QUERETARO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divCEAQro');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'AGUAS DE SALTILLO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divAguasSalt');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'CONMAPA NUEVO LAREDO':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divConMapa');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'JAD CIUDAD DE MATAMOROS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divJAD');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'AGUAS DE NUEVO LEON':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divAguasNuevoLeon');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - AGUAS ESTATALES






















                             
        /*==================================
        SELECCIONAR TIPO DE SERVICIO - AGUAS ESTATALES             #LISTO#
        ===================================*/
        $('body').on('change', '#gasNatural', function () {
            switch ($('body #gasNatural').val()) {
                case 'MAXIGAS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divMaxiGas');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'MEXICANA DE GAS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divMexicanaGas');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'ECOGAS':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divEcoGas');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                case 'GAS NATURAL':
                    LimpiarOpciones1();
                    $('body #tipoProducto').html(divLoader);
                        $('body #tipoProducto').load('../html/formularios.html #divGasNaturalS');
                    $('body #adicional').load('../html/formularios.html #cargo08');
                        $('#divTotal').show();
                        $('#divCaptura').show();
                            $('#botonForm').show();
                    break;
                
                default:
                    LimpiarOpciones1();
                    break;
            }
        });// FIN DE TIPO DE SERVICIO - AGUAS ESTATALES




/*=============================================
EVENTO QUE CAPTURA DATOS Y LOS PEGA EN EL MODAL
==============================================*/
var datosFormModal='';
$('#btnConfirm').click(function (e) {
    // Captura todos los datos
    servicio = $('#selectServicio').val();
    empresa = $('[name=empresa]').val();
    dato1 = $('[name=producto]').val();
    dato2 = $('[name=telefono]').val();
    // img = $('#capture')[0].files[0];
    monto = $('#monto').val();
    //Captura la imagen para colocarla en la modal
    
    

    // datosFormModal = '<div class="d-flex">';
    datosFormModal = '<div class="col-12 m-0" id="datosModal">';
    // Carga todos los datos dentro del fomulario del modal
    datosFormModal += '<p class="mx-0"><b>Servicio: </b>'+servicio+'</p>';
    datosFormModal += '<p class="mx-0"><b>Empresa: </b>'+empresa+'</p>';

    if(PRODUCTO(dato1)!=null){
        datosFormModal += '<p class="mx-0"><b>Producto: </b>'+PRODUCTO(dato1)+'</p>';
    }

    datosFormModal += '<p class="mx-0"><b>Tel o Ref: </b>'+dato2+'</p>';
    datosFormModal += '<p class="mx-0"><b>Monto Total: </b>'+monto+'</p>';
    datosFormModal += '</div>';
    
    // datosFormModal += '<div class="col-5 text-center m-0" id="contenedorImagen"></div>';
    // datosFormModal += '</div>';
    
    
    
    
});// FIN DE EVENTO CLICK



            //FUNCIONES PARA CAMBIAR LOS VALORES DE ALGUNOS SELECTS
            function SERVICIO(params) {
                switch (params) {
                    case 'recargasMoviles':
                        params = "Recargas móviles";                
                        break;
                    case 'luzInfonavit':
                        params = "Luz e Infonavit";                
                        break;
                    case 'pines':
                        params = "Pines electrónicos";                
                        break;
                    case 'television':
                        params = "Televisión paga";                
                        break;
                    case 'facturasTel':
                        params = "Facturas télefonicas";                
                        break;
                    case 'impuestos':
                        params = "Impuestos";                
                        break;
                    case 'cine':
                        params = "Cine";                
                        break;
                    case 'recargaTag':
                        params = "Recarga tag";                
                        break;
                    case 'telefoniaFija':
                        params = "Telefonía fija";                
                        break;
                    case 'ventaCatalogo':
                        params = "Venta por catálogo";                
                        break;
                    case 'aguasEstatales':
                        params = "Aguas estatales";                
                        break;
                    case 'gasNatural':
                        params = "Gas natural";                
                        break;
                
                    default:
                        params = null;
                        break;
                }
                return params;
            }
            function PRODUCTO(params) {
                switch (params) {
                    case 'undefined':
                        params = null;
                        break;
                
                    default:
                        break;
                }
                return params;
            }//FIN DE FUNCIONES PARA CAMBIAR LOS VALORES DE ALGUNOS SELECTS

            //FUNCION PARA AGARRAR IMAGEN Y PREVISUALIZARLA EN EL MODAL
            function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        //   Asignamos el atributo src a la tag de imagen
                        // $('body #captureIMG').attr('src', e.target.result);
                        // $('body #captureA').attr('href', e.target.result);
                        $('#contenedorImagen').html(divLoader);
                            datosFormModalIMG = '<a href="'+e.target.result+'" id="captureA" data-fancybox>';
                            datosFormModalIMG += '<img src="'+e.target.result+'" id="captureIMG" class="text-center capture" alt="Captura de pantalla">';
                            datosFormModalIMG += '</a>';
                        $('#contenedorImagen').html(datosFormModalIMG);
                        
                    }
                    reader.readAsDataURL(input.files[0]);
                }
                else{
                    $('#contenedorImagen').html('');
                }
            }// FIN DE FUNCION PARA PREVISUALIZAR IMAGEN EN MODAL







/*=============================================
VALIDACION DE FORMULARIO
==============================================*/
$('#formularioSolicitarRecarga').validate({
    rules:{
        tel1:{
            required: true,
            number: true
        },
        telefono:{
            equalTo: "#inputTel"
        },
        producto:{
            required: true
        },
        capture:{
            required: true
        },
        monto:{
            required: true,
            number: true
        }
    },  submitHandler: function(form){
               
        Swal.fire({
            title: 'Datos de recarga',
            html: datosFormModal,
            
            //BOTONES
            showCancelButton: true,
            confirmButtonColor: '#CCE7D4',
            cancelButtonColor: '#CCE7D4',
            confirmButtonText: 'Solicitar recarga',
            cancelButtonText: 'Cancelar',
            stopKeydownPropagation: true,
            //CLASES
            buttonsStyling: false,
            customClass:{
                confirmButton:'btn-modal',
                cancelButton:'btn-modal'
            }
        })
        .then((result)=>{
            if(result.isConfirmed){
                form.submit();
            }
            else{
                return false;
            }
        });
    }
});//Fin de VALIDATE

//Cambia el atributo al hacer submit del monto
$('#formularioSolicitarRecarga').submit(function () {
    $('#monto').removeAttr('disabled');
});



/*=============================================
EVENTO QUE CAPTURA DATOS Y LOS PEGA EN EL MODAL EN RECARGAR MI CUENTA
==============================================*/
var datosFormModalMonto='';
$('#btnRecargaMonto').click(function (e) {
    // Captura todos los datos
    // servicio = $('#selectServicio').val();
    // empresa = $('[name=empresa]').val();
    // dato1 = $('[name=producto]').val();
    // dato2 = $('[name=telefono]').val();
    img = $('#capture')[0].files[0];
    monto = $('#montoCuenta').val();
    //Captura la imagen para colocarla en la modal
    capturaDePantalla = $('#capture')[0];
    

    // datosFormModalMonto = '<div class="d-flex">';
    datosFormModalMonto = '<div class="col-12 m-0">';
    // Carga todos los datos dentro del fomulario del modal
    // datosFormModalMonto += '<p class="mx-0"><b>Servicio: </b>'+SERVICIO(servicio)+'</p>';
    // datosFormModalMonto += '<p class="mx-0"><b>Empresa: </b>'+empresa+'</p>';

    // if(PRODUCTO(dato1)!=null){
    //     datosFormModalMonto += '<p class="mx-0"><b>Producto: </b>'+PRODUCTO(dato1)+'</p>';
    // }

    // datosFormModalMonto += '<p class="mx-0"><b>Tel o Ref: </b>'+dato2+'</p>';
    datosFormModalMonto += '<p class="mx-0"><b>Monto Total: </b>'+monto+'</p>';
    datosFormModalMonto += '</div>';
    
    datosFormModalMonto += '<div class="col-12 text-center m-0" id="contenedorImagen"></div>';
    // datosFormModalMonto += '</div>';
    
    
    
    readURL(capturaDePantalla);

});// FIN DE EVENTO CLICK



    //EVENTO QUE COLOCA EL CHECK CUANDO SE SUBE LA IMAGEN
    $("input[name=capture]").change(function() {
        $('#checkImg').html('<i class="fas fa-check"></i>');
    });// FIN DEL EVENTO CHECK



/*=============================================
VALIDACION DE FORMULARIO DE RECARGAR MI CUENTA
==============================================*/
$('#formularioSolicitarMonto').validate({
    rules:{
        monto:{
            required: true,
            number: true,
        },
        capture:{
            required: true,
        }
    },
    messages:{
        monto:{
            rangelength: 'Ingrese un monto válido.'
        },
        capture:{
            required: 'No ha seleccionado la captura de pantalla.'
        }
    }, submitHandler: function(form){
               
        Swal.fire({
            title: 'Datos de recarga a mi cuenta',
            html: datosFormModalMonto,
            
            //BOTONES
            showCancelButton: true,
            confirmButtonColor: '#CCE7D4',
            cancelButtonColor: '#CCE7D4',
            confirmButtonText: 'Solicitar recarga',
            cancelButtonText: 'Cancelar',
            stopKeydownPropagation: true,
            //CLASES
            buttonsStyling: false,
            customClass:{
                confirmButton:'btn-modal',
                cancelButton:'btn-modal'
            }
        })
        .then((result)=>{
            if(result.isConfirmed){
                form.submit();
            }
            else{
                return false;
            }
        });
    }
});// FIN DE VALIDACION DE FORMULARIO DE RECARGAR MI CUENTA



// EVENTO Y FUNCION PARA VALIDAR SI DESEA O NO ELIMINAR LA PETICION DE RECARGA
$('body').on('click', function (e) {    
    dato = e.target.form.id;
    FORMELIMINAR(dato);
});


function FORMELIMINAR(params) {

    $('#'+params).validate({
        rules:{},
        submitHandler: function (form) {
            swal.fire({
                title:'¿Seguro que desea eliminar esta recarga?',
                //BOTONES
                showCancelButton: true,
                confirmButtonColor: '#CCE7D4',
                cancelButtonColor: '#CCE7D4',
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                stopKeydownPropagation: true,
                //CLASES
                buttonsStyling: false,
                customClass:{
                    confirmButton:'btn-modal',
                    cancelButton:'btn-modal'
                }
            }).then((result)=>{
                if(result.isConfirmed){
                   form.submit();
                }
                else if (result.isDenied){
                // else{
                    return false;
                }
            });
        }
    });
}// EVENTO Y FUNCION PARA VALIDAR SI DESEA O NO ELIMINAR LA PETICION DE RECARGA







});//Fin del Ready








