const reiniciar = document.querySelector("#reinicio");
const personaliza = document.querySelector("#personaliza");
const principalContainer = document.querySelector(".principal_container");
const div = document.createElement("div");
//aun no se si mis estilos principales se escriben asi y si deberian estar dentro de la
//funcion principalCuadricula
div.style.backgroundColor = "white";
div.style.width = "100%";
div.style.border = "solid 2px red";
principalContainer.appendChild(div);

function principalCuadricula {
    principalContainer.appendChild(div);
    //hacerlo 16*16 veces con un bucle o copiar y pegar manualmente//
    //reiniciar estilos//
}

function createCuadricula (numDivs) {
principalContainer.appendChild(div); //por el numDivs mediante bucle
}

reiniciar.addEventListener("click" () => {
    principalCuadricula() //para mostrar en la pantalla limpia desde cero cada vez que hagan click en reinicio y de 16 x 16//
})

personaliza.addEventListener("click" () => {
    let numero = prompt ("Introduce numero de columnas del 1 al 100 (solo enteros):");
    if ((numero>100)||(numero<1)){
        alert(Introduce un número del 1 al 100)
    }
    let numDivs = numero * numero;
    createCuadricula(numDivs);
})

div.addEventListener("mousemove" () => {
    //cambiar el color cuando sienta que el mouse pasa una vez e 
    // ir oscureciendo gradualmente cada vez que pasa y a la decima vez oscurecer totalmente el div//
})

principalCuadricula()//segun yo ejecutar esta funcion me mostrara desde el inicio la cuadricula con 16 x 16 divs