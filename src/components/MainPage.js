import React, { useState } from "react"
import { Link } from "react-router-dom"
import Heroe from "./Heroe"
import CarritoDeHeroes from "./CarritoDeHeroes"
import shortid from "shortid"

const MainPage = () => {
    const id = () => shortid.generate()

    //crear listado de heroes
    const [heroes, guardarHeroes] = useState([
        { id: id(), nombre: "HEROE 1" },
        { id: id(), nombre: "HEROE 2" },
        { id: id(), nombre: "HEROE 3" },
        { id: id(), nombre: "HEROE 4" },
    ])

    //useState para agregar, quitar y nose si editar
    const [selecciondeheroes, modificarSeleccionDeHeroes] = useState([])

    return (
        <div>
            <Link to={"/"} className="enlace-cuenta">
                /login
            </Link>

            <div>
                {heroes.map((heroe) => (
                    <Heroe
                        key={heroe.id}
                        heroe={heroe}
                        heroes={heroes}
                        selecciondeheroes={selecciondeheroes}
                        modificarSeleccionDeHeroes={modificarSeleccionDeHeroes}
                    />
                ))}
                <CarritoDeHeroes
                    selecciondeheroes={selecciondeheroes}
                    modificarSeleccionDeHeroes={modificarSeleccionDeHeroes}
                />
            </div>
        </div>
    )
}

export default MainPage
