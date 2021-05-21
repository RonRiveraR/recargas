$(document).ready(function () {
    $('#editarDatosPersonales').validate({
        rules:{
            name:{
                required: true,
                minlength: 5
            },
            email:{
                required: true,
                email: true
            },
            telefono:{
                required: true,
                rangelength: [10, 10]
            }, messages:{
                telefono:{
                    rangelength: 'Número telefónico de 10 dígitos.'
                }
            }
            },submitHandler: function(form){
               
                Swal.fire({
                    title: 'Datos personales',
                    text:'¿Desea modificar sus datos personales?',
                    //BOTONEs
                    showCancelButton: true,
                    confirmButtonColor: '#CCE7D4',
                    cancelButtonColor: '#CCE7D4',
                    confirmButtonText: 'Sí',
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
    });//Fin de validacion editarDatosPersonales

    $('#editarContrasena').validate({
        rules:{
            password:{
                required: true,
                minlength: 8
            },
            password_confirmation:{
                equalTo: "#password"
            }
            },submitHandler: function(form){
               
                Swal.fire({
                    title: 'Cambio de contraseña',
                    text:'¿Desea modificar su contraseña?',
                    //BOTONEs
                    showCancelButton: true,
                    confirmButtonColor: '#CCE7D4',
                    cancelButtonColor: '#CCE7D4',
                    confirmButtonText: 'Sí',
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
    });//Fin de validacion editarDatosPersonales


    $('#reset').validate({
        rules:{
            email:{
                required: true,
                minlength: 8
            }
        }, messages:{
            email:{
                rangelength: 'No es un correo válido.'
            }
        }
    });

    $('#resetPass').validate({
        rules:{
            email:{
                required: true,
                minlength: 8
            },
            password:{
                required: true,
                minlength: 8
            },
            password_confirmation:{
                equalTo: "#password"
            }
        }
    });

    $('#confirmPass').validate({
        rules:{
            password:{
                required: true,
                minlength: 8
            }
        }
    });




});//Fin del ready