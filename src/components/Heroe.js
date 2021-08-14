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
            <h1>{nombre}</h1>
            <h2>Name, image, powerStats, details, delete</h2>
            {heroes ? (
                <button
                    type="button"
                    className=" btn btn-primario btn-block-25"
                    onClick={() => agregarHeroeAlCarrito(id)}
                >
                    Add to Chart
                </button>
            ) : (
                <button
                    type="button"
                    className="btn btn-primario btn-block-25"
                    onClick={() => eliminarHeroe(id)}
                >
                    Delete
                </button>
            )}
        </div>
    )
}

export default Heroe
