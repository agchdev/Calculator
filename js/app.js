// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// ELEMENTS
const $historial = $('#historial');
const $resultado = $('#resultado');
const $opera = $('#opera');

$opera.addEventListener('click', comprobar);

function comprobar(){

    console.log($resultado.value);
    if($resultado.value == 69){
        $resultado.classList.add("blur");
    }

    let alert = document.createElement('div');
    alert.innerHTML = ``
}
function resultadoCensura(){
    console.log($resultado.value);
}