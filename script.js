const reiniciar = document.querySelector("#reinicio");
const personaliza = document.querySelector("#personaliza");
const principalContainer = document.querySelector(".principal_container");
const widthContainer = 960;
function createCuadricula (num) {
    const columns = Math.sqrt(num);
    const size = widthContainer / columns;
    for ( let i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.border = "solid 2px black";
        div.style.margin = "0";
        div.style.height = size + "px";
        div.style.width = size + "px";
        div.style.boxSizing = "border-box";
        principalContainer.appendChild(div);
    }
}

function removeCuadricula () {
//escribir funcion para borrar todos los divs
// existentes dentro del principal Container por si hacen click varias veces en el boton personaliza
}

reiniciar.addEventListener("click", () => {
    createCuadricula (256);
})

personaliza.addEventListener("click", () => {
    removeCuadricula();
    let numero = prompt ("Introduce numero de columnas del 1 al 100 (solo enteros):");
    if ((numero>100)||(numero<1)){
        alert("Introduce un número del 1 al 100");
        }
    else {
        let numDivs = numero * numero;
        createCuadricula(numDivs);
    }
    })