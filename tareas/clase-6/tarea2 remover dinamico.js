let totalIntegrantes = 1;

const $botonAgregar = document.querySelector("#boton-agregar");
$botonAgregar.onclick = function (){
    totalIntegrantes++;
    agregarIntegrante(totalIntegrantes);

    return false;
}

const $botonRemover = document.querySelector("boton-remover");
$botonRemover.onclick = function(){
    removerIntegrate(totalIntegrantes);
    totalIntegrantes--;

    return false;
}

function agregarIntegrante(n){
    $salarioIntegrantes = document.querySelector("#salario-integrantes");
    $div = document.createElement("div");
    $div.className = "integrante";
    $label = document.createElement("label");
    $label.innerText = `Integrante ${n}: `;
    $input = document.createElement("input");
    $input.type = "number";

    $div.appendChild($label);
    $div.appendChild($input);

    $salarioIntegrantes.appendChild($div);

    console.log(`Integrante ${totalIntegrantes} agregado`);
    return false;
}   

function removerIntegrante(n){
    $salarioIntegrantes = document.getElementById("salario-integrantes");
    $ultimoIntegrante = $salarioIntegrantes.lastChild;
    $ultimoIntegrante.remove();
    return false;
}


