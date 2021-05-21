$(document).ready(function(){
    var contador=0;
    var capturarDato = localStorage.getItem('OBS');
    VerificarOnScreen();

    $('#onBoardStart').click(function (e) {
        e.preventDefault();
        contador=0;
        OnBoarScreen();

        $('.obs-container').fadeIn();
        $('.obs-trans').fadeIn();
        $('.w3l-mockup-form').hide();
        $('.navbar').hide();


        $('#obs-1').show();
        $('.btn-dere a').show();
    });

    function VerificarOnScreen() {   
        if(capturarDato==null){
            localStorage.setItem('OBS','iniciado');
            OnBoarScreen();
        }else{
            CargarIndex();
        }
    }

function OnBoarScreen() {
    $('.w3l-mockup-form').hide();
    $('.navbar').hide();

    $('.btn-izqu a').hide();
    $('#obs-2').hide();
    $('#obs-3').hide();

    $('.btn-dere').click(function (e) {
        e.preventDefault();
        contador++;
        Cambiador();
    });

    $('.btn-izqu').click(function (e) {
        e.preventDefault();
        contador--; 
        Cambiador();
    });

    $('#btn-omitir').click(function (e) {
        e.preventDefault();
        $('.obs-container').fadeOut();
        $('.obs-trans').fadeOut();
        CargarIndex();
    });
}

function Cambiador() {
    if(contador==0){
        $('.btn-izqu a').fadeOut();
        $('#obs-1').fadeIn(80);
        $('#obs-2').fadeOut(80);
        $('#obs-3').fadeOut(80);
    }
    else if(contador==1){
        $('.btn-izqu a').fadeIn();
        $('#obs-2').fadeIn(80);
        $('#obs-1').fadeOut(80);
        $('#obs-3').fadeOut(80);
    }
    else if(contador ==2){
        $('#obs-3').fadeIn(80);
        $('#obs-1').fadeOut(80);
        $('#obs-2').fadeOut(80);
    }
    else{
        $('.obs-container').fadeOut();
        $('.obs-trans').fadeOut();
        CargarIndex();
    }
}

function CargarIndex() {
    $('.obs-container').fadeOut();
    $('.obs-trans').fadeOut();
    $('.w3l-mockup-form').show();
    $('.navbar').show();
}
});//Fin del ready