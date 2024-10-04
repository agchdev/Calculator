// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// ELEMENTS
const $historial = $('#historial');
const $resultado = $('#resultado');
const $opera = $('#opera');
const $ok = $('#ok');
const $body = $body('#body');

$opera.addEventListener('click', comprobar);
$ok.addEventListener('click', cerrar);

function comprobar(){

    console.log($resultado.value);
    if($resultado.value == 69){
        $resultado.classList.add("blur");
    }

    let alert = document.createElement('div');
    alert.innerHTML = `<div class="ban">
                            <p class="red">Has sido permanentemente baneado de la aplicación de calculadora</p>
                            <p id="ok">OK</p>
                        </div>`;
    $body.add
}
function cerrar(){
    $body.removeChild(alert);
}
function resultadoCensura(){
    console.log($resultado.value);
}