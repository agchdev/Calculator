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
    alert.setAttribute("id","ban");
    alert.innerHTML = `
        <p >Has sido permanentemente baneado de la aplicación de calculadora</p>
        <p id="ok">OK</p>
    `;
    $body.appendChild(alert);
    console.log("first")

    console.log($('#ok'));

    $('#ok').addEventListener('click', cerrar);
    // Falta codigo aqui
}

function cerrar(){
    const $ban = $('#ban');

    console.log($ban);
    $resultado.classList.remove("blur");
    $body.removeChild($ban);

}
function resultadoCensura(){
    console.log($resultado.value);
}