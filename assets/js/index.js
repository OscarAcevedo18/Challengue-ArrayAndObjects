function busqueda(load, roomSearch, minMeters, maxMeters) { /**************************funcion busqueda para cargar los parametros.**********************************/
  if (
    load == 'clic' &&
    (roomSearch == '' || minMeters == '' || maxMeters == '') /**************************Funciones creadas y aplicadas en caso que los parametros de la pagina web esten vacios **********************************/
  ) {
    alert('faltan campos por rellenar')   /**************************este alert indica que se deben rellenar los campos solicitados**********************************/
  } else if (Number(minMeters) > Number(maxMeters)) {  /**************************este campo se cumple en caso de que los numeros de metros minimos no excedan los maximos, en caso contrario se dará un alert.**********************************/
    alert('el campo desde no puede ser mayor del campo hasta')
  } else {
    /**************************Función Filtrar**********************************/

    let html = ''  /**************************variable html para ocupar secciones o codigos que se necesiten.**********************************/
    let count = 0 /**************************variable contador, empieza de 0 y de ahi suma la cantidad segun el resultado de busqueda.**********************************/
    for (let filtro of propiedadesJSON) {
      if (
        filtro.rooms >= roomSearch &&  /**************************Función Filtrar, cantidad de cuartos**********************************/
        filtro.m >= minMeters &&  /**************************Función Filtrar, min metros.**********************************/
        filtro.m <= maxMeters  /**************************Función Filtrar, max metros.**********************************/
      ) {
        count += 1 /**************************Aplicando la variable count linea 13**********************************/
        html += `<section id="Propiedades">
              <div class="propiedades">
                <div class="propiedad">
                  <div class="img" style="background-image: url('${filtro.src}')"></div>
                  <section>
                      <h5>${filtro.name}</h5>
                      <div class="d-flex justify-content-between">
                          <p>Cuartos: ${filtro.rooms}</p>
                          <p>Metros: ${filtro.m}</p>
                      </div>
                      <p class="my-3">${filtro.description}</p>
                      <button class="btn btn-info ">Ver más</button>
                  </section>
                </div>
            </div>
          </section>`
      }
    }

    document.querySelector('.propiedades').innerHTML = html   /**************************llamando al html especificando el id propiedades.**********************************/
    document.querySelector('#numDisplay').innerHTML = `Total: ${count}` /**************************llamando al html especificando el id numDisplay.**********************************/
  }
}

busqueda('charge', -Infinity, -Infinity, Infinity) /**************************esta funcion busqueda en particular es para que por defecto la pagina cargue completa.**********************************/
/**************************la funcion de -infinity funciona para decir al codigo que nada esta por debajo de esta funcion, igual caso para el infinity positivo que es para decir que nada esta por sobre esta funcion.**********************************/
document.getElementById('search').addEventListener('click', () => {  /**************************se agrega el evento click para darle funcion al boton, luego una funcion de flecha para unir los valores de cuartos, min de metros, max de metros.**********************************/
  let cantCuartos = document.querySelector('#numRooms').value  /************************** .**********************************/
  let minMts = document.querySelector('#metersFrom').value
  let maxMts = document.querySelector('#metersUp').value
  busqueda('clic', cantCuartos, minMts, maxMts) /**************************aca se activa la funcion busqueda en la linea 3 pero solo al hacer click .**********************************/
})