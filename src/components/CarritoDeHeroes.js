import React from "react"
import Heroe from "./Heroe"

const CarritoDeHeroes = ({ selecciondeheroes, modificarSeleccionDeHeroes }) => {
    return (
        <div className="carrito">
            <h1>Heroes Chart</h1>

            {selecciondeheroes.length === 0 ? (
                <h2>There isn't Heroes here!</h2>
            ) : (
                selecciondeheroes.map((heroe) => (
                    <Heroe
                        key={heroe.id}
                        heroe={heroe}
                        selecciondeheroes={selecciondeheroes}
                        modificarSeleccionDeHeroes={modificarSeleccionDeHeroes}
                    />
                ))
            )}
        </div>
    )
}

export default CarritoDeHeroes
