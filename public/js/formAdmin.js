$(document).ready(function () {
  
    /*
    $('td[name ="tcol1"]')   // matches exactly 'tcol1'
    $('td[name^="tcol"]' )   // matches those that begin with 'tcol'
    $('td[name$="tcol"]' )   // matches those that end with 'tcol'
    $('td[name*="tcol"]' )   // matches those that contain 'tcol'
    */




    // EVENTO Y FUNCION PARA VALIDAR SI DESEA O NO ELIMINAR LA PETICION DE RECARGA
$('body').on('click', 'input:submit', function (e) {
    // e.preventDefault();
    dato = e.target.form.id;
    if($(this).val() == 'Rechazar'){
        // console.log('has entrado a Rechachar')
        FORMRECHAZAR(dato);
    }
    else if($(this).val() == 'Confirmar'){
        // console.log('has entrado a Confirmar')
        FORMCONFIRMAR(dato);
    }
    else if($(this).val() == 'Pendiente'){
        // console.log('has entrado a Confirmar')
        FORMPENDIENTE(dato);
    }
});


function FORMRECHAZAR(params) {

    $('#'+params).validate({
        rules:{},
        submitHandler: function (form) {
            (async () => {

                Swal.fire({
                //   title:'Razón del rechazo',
                  input: 'textarea',
                  inputLabel: 'Razón del rechazo',
                  inputPlaceholder: 'Explique brevemente la razón del rechazo...',
                  inputAttributes: {
                    'aria-label': 'Type your message here'
                  },
                  showCancelButton: true,
                  showCancelButton: true,
                  confirmButtonColor: '#CCE7D4',
                  cancelButtonColor: '#CCE7D4',
                  confirmButtonText: 'Enviar',
                  cancelButtonText: 'Cancelar',
                  stopKeydownPropagation: true,
                  //CLASES
                  buttonsStyling: false,
                //   allowOutsideClick: false,
                  customClass:{
                    confirmButton:'btn-modal',
                    cancelButton:'btn-modal'
                  },
                  preConfirm: () => {
                      if ( $('#swal2-input').val() == "" ) {
                        Swal.showValidationMessage('Ingrese una observación por favor')   
                      }else{
                        $('input[name="observacion"]').val( $('#swal2-input').val() );
                        form.submit();
                      }
                    }
                });
                
            })()
        }
    });

}// EVENTO Y FUNCION PARA VALIDAR SI DESEA O NO ELIMINAR LA PETICION DE RECARGA

function FORMCONFIRMAR(params) {

    $('#'+params).validate({
        rules:{},
        submitHandler: function (form) {
            swal.fire({
                title:'¿Seguro que desea confirmar esta recarga?',
                icon: 'warning',
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


function FORMPENDIENTE(params) {

    $('#'+params).validate({
        rules:{},
        submitHandler: function (form) {
            swal.fire({
                title:'¿Desea  regresar a pendiente esta recarga?',
                icon: 'info',
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





});// FIN DEL READY



// ALERTA
// FALTA
// LAS
// PROMESAS
// QUE DAN
// FUNCIONALIDAD
// // AL ALERT
// function FORMCONFIRMAR() {
//     event.preventDefault();
//         swal.fire({
//             title:'¿Seguro que desea confirmar esta recarga?',
//             //BOTONES
//             showCancelButton: true,
//             confirmButtonColor: '#CCE7D4',
//             cancelButtonColor: '#CCE7D4',
//             confirmButtonText: 'Sí',
//             cancelButtonText: 'No',
//             stopKeydownPropagation: true,
//             //CLASES
//             buttonsStyling: false,
//             customClass:{
//                 confirmButton:'btn-modal',
//                 cancelButton:'btn-modal'
//             }
//         });
// }

// function FORMRECHAZAR() {
//     event.preventDefault();
//         swal.fire({
//             title:'¿Por qué rechaza esta recarga?',
//             text: 'Explique brevemente la razón',
//             input:'textarea',
//             //BOTONES
//             showCancelButton: true,
//             confirmButtonColor: '#CCE7D4',
//             cancelButtonColor: '#CCE7D4',
//             confirmButtonText: 'Enviar',
//             cancelButtonText: 'Cancelar',
//             stopKeydownPropagation: true,
//             //CLASES
//             buttonsStyling: false,
//             customClass:{
//                 confirmButton:'btn-modal',
//                 cancelButton:'btn-modal'
//             }
//         });
// }

// function FORMPENDIENTE() {
//     event.preventDefault();
//         swal.fire({
//             title:'¿Seguro que desea colocar en pendientes esta recarga?',
//             //BOTONES
//             showCancelButton: true,
//             confirmButtonColor: '#CCE7D4',
//             cancelButtonColor: '#CCE7D4',
//             confirmButtonText: 'Sí',
//             cancelButtonText: 'No',
//             stopKeydownPropagation: true,
//             //CLASES
//             buttonsStyling: false,
//             customClass:{
//                 confirmButton:'btn-modal',
//                 cancelButton:'btn-modal'
//             }
//         });
// }