const reiniciar = document.querySelector("#reinicio");
const personaliza = document.querySelector("#personaliza");
const principalContainer = document.querySelector(".principal_container");
const widthContainer = 960;
function createCuadricula (num) {
    const columns = Math.sqrt(num);
    const size = widthContainer / columns;
    for ( let i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.style.height = size + "px";
        div.style.width = size + "px";
        div.classList.add("celda");
        div.style.opacity = 1;
        div.dataset.painted = "false";
        div.addEventListener("mouseenter", (e) => {
            const rojo = Math.floor(Math.random() * 256);
            const verde = Math.floor(Math.random() * 256);
            const azul = Math.floor(Math.random() * 256);
            if (e.target.dataset.painted === "false") {
                e.target.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
            }
            const estilos = getComputedStyle(e.target);
            const opacidadActual = parseFloat(estilos.opacity);
            e.target.style.opacity = Math.max(opacidadActual - 0.1, 0);
            e.target.dataset.painted = "true";
            }
        )
        principalContainer.appendChild(div);
    }
}

function removeCuadricula () {
while (principalContainer.children.length>0) {
    principalContainer.removeChild(principalContainer.lastChild);
}
}

reiniciar.addEventListener("click", () => {
    removeCuadricula ();
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
    }
);