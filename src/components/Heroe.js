import React from "react"

const Heroe = ({
    heroe,
    heroes,
    selecciondeheroes,
    modificarSeleccionDeHeroes,
}) => {
    //puedo desestructurar haciendo:
    const { nombre, id } = heroe
    //de esta manera donde decia 'heroe.nombre' ahora dice solamente {nombre}

    // '.filter' lo que hace es: le voy a pasar un ID, va a iterear y cuando lo encuentre
    // va a crear un array nuevo con ese heroe
    const agregarHeroeAlCarrito = (id) => {
        const heroe = heroes.filter((heroe) => heroe.id === id)[0]
        modificarSeleccionDeHeroes([...selecciondeheroes, heroe])
    }
    //eliminar heroe de la lista
    const eliminarHeroe = (id) => {
        const heroes = selecciondeheroes.filter((heroe) => heroe.id !== id)
        //colocar los heroes en el State
        modificarSeleccionDeHeroes(heroes)
    }

    return (
        <div>
            {/* <div className="form-container"> */}
            {/* <div className="form"> */}
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{nombre}</h5>
                            <p class="card-text">
                                Name, image, powerStats, details, delete{" "}
                            </p>
                            {heroes ? (
                                <button
                                    class="btn btn-primary"
                                    type="button"
                                    className=" btn btn-primario btn-block-25"
                                    onClick={() => agregarHeroeAlCarrito(id)}
                                >
                                    Add to Chart
                                </button>
                            ) : (
                                <button
                                    class="btn btn-primary"
                                    type="button"
                                    className="btn btn-primario btn-block-25"
                                    onClick={() => eliminarHeroe(id)}
                                >
                                    Delete
                                </button>
                            )}
                            <a href="#" class="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Heroe
