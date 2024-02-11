const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {

    form.style.left = "50%"
    form.style.transfor = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm (){
    form.style.left = "-300%"
    form.style.transfor = "translateX(0)"
    mascara.style.visibility = "hidden"
}





/* 
top: 30%;

variaveis
variavel é um espaço que voçe reserva para guardar informações ou oque quiser la dentro.

tem 3 jeitos de criar uma variavel

1- var  / jeito antigo não use mais
2- let  -> voçe pode alterar o valor depois
3- const   ->  constante


*/

/*
funções
 é um trecho de código que só é executado quando chamado

*/