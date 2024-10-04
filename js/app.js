// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// ELEMENTS
const $historial = $('#historial');
const $resultado = $('#resultado');
const $opera = $('#opera');

const $body = $('#body');

$opera.addEventListener('click', comprobar);

function comprobar(){

    
    if($resultado.value == 69){
        $resultado.classList.add("blur");
        error();
        console.log($resultado.value);
    }

}

function error(){
    let alert = document.createElement('div');
    alert.classList.add('ban');
    alert.innerHTML = `
        <p class="red">Has sido permanentemente baneado de la aplicación de calculadora</p>
        <p id="ok">OK</p>
    `;
    $body.appendChild(alert);
    
    // Falta codigo
}

function cerrar(alert){
    $body.removeChild(alert);
}
function resultadoCensura(){
    console.log($resultado.value);
}