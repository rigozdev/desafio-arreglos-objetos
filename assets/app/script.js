const propiedades = [
    { nombre: "Casa de Campo", descripcion: "Un lugar ideal para descansar de la ciudad.", src: 'assets/img/01-casa-de-campo.jpg', cuartos: 2, metros: 170 },
    { nombre: "Casa de Playa", descripcion: "Despierta tus días oyendo el oceano.", src: 'assets/img/02-casa-de-playa.jpg', cuartos: 2, metros: 130 },
    { nombre: "Casa en el Centro", descripcion: "Tan cerca de ti todo lo que necesitas.", src: 'assets/img/03-casa-en-el-centro.jpg', cuartos: 1, metros: 80 },
    { nombre: "Casa Rodante", descripcion: "Conviertete en un nómada del mundo sin salir de tu casa.", src: 'assets/img/04-casa-rodante.jpg', cuartos: 1, metros: 6 },
    { nombre: "Departamento", descripcion: "Desde las alturas todo se ve mejor.", src: 'assets/img/05-departamento.jpg', cuartos: 3, metros: 200 },
    { nombre: "Mansión", descripcion: "Vive una vida lujosa en la mansión de tus sueños.", src: 'assets/img/06-mansion.jpg', cuartos: 5, metros: 500 }
];

const btnBuscar = document.querySelector('#btnBuscar');
const nroCuartosUser = document.querySelector('#nroCuartosUser');
const mtsCuadradosMin = document.querySelector('#mtsCuadradosMin');
const mtsCuadradosMax = document.querySelector('#mtsCuadradosMax');
const listaInmobiliaria = document.querySelector('#listaInmobiliaria');
const totalElementos = document.querySelector('#totalElementos');


const inicio = () =>{
    for (const propiedad of propiedades){
        listaInmobiliaria.innerHTML += `
                <div class="card" style="width: 15rem;">
                    <img src="${propiedad.src}" class="card-img-top" height="160px" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <div class="cuarto-metro-container">
                            <p class="card-text">Cuartos: ${propiedad.cuartos}</p>
                            <p class="card-text">Metros: ${propiedad.metros}</p>
                        </div>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <a href="#" class="btn btn-primary">Ver más</a>
                    </div>
                </div>`; 
    }
}

inicio();

// Función que renderiza y muestra los valores filtrados
const render = () => {

    const mtsCMin = +mtsCuadradosMin.value;
    const mtsCMax = +mtsCuadradosMax.value;
    const nroCuartos = + nroCuartosUser.value;

    //contador inicializa variable para contabilizar la cantidad de elementos a mostrar
    let contador = 0;
    for (const propiedad of propiedades) {
        //Validación de cantidad de cuartos (definido para mostrar cantidad de cuartos por debajo de lo solicitado (seleccionando un máximo de cuartos)
        if (propiedad.cuartos<=nroCuartosUser.value) {

            //Validación de cantidad de metros cuadrados para filtrar
            if (propiedad.metros>=mtsCuadradosMin.value && propiedad.metros<=mtsCuadradosMax.value ) {
                listaInmobiliaria.innerHTML += `
                <div class="card" style="width: 15rem;">
                    <img src="${propiedad.src}" class="card-img-top" height="160px" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <div class="cuarto-metro-container">
                            <p class="card-text">Cuartos: ${propiedad.cuartos}</p>
                            <p class="card-text">Metros: ${propiedad.metros}</p>
                        </div>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <a href="#" class="btn btn-primary">Ver más</a>
                    </div>
                </div>`;  

                //Se utiliza contador para crear el total de elementos mostrados
                contador++;
                totalElementos.innerHTML = `<h5>Total: ${contador}</h5>`;
            }
        }
    }

}

// Consideré realizar el contador en una función aparte pero básicamente tendría que llevar la misma lógica de la función render
const renderContador = () =>{

}



btnBuscar.addEventListener('click', () => {
    

    const mtsCMin = +mtsCuadradosMin.value;
    const mtsCMax = +mtsCuadradosMax.value;

    console.log(mtsCMin);
    console.log(mtsCMax);

    listaInmobiliaria.innerHTML = '';
    //Validación de campos vacios
    if (nroCuartosUser.value == ''|| mtsCuadradosMin.value == '' || mtsCuadradosMax.value=='') {
        alert('Por favor ingrese valores en todos los campos solicitados');
        inicio();
    }else{
        //Validacion de valores numericos
        if (isNaN(nroCuartosUser.value)|| isNaN(mtsCuadradosMin.value)|| isNaN(mtsCuadradosMax.value)) {
            alert('Ingrese un valor valido por favor');
            inicio();
        }else{
            render();
        }
    }
    
    

});
render();


