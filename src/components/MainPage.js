import React from "react"
import { Link } from "react-router-dom"

const MainPage = () => {
    return (
        <>
            <h1>From MainPage.js</h1>
            <Link to={"/"} className="enlace-cuenta">
                /login
            </Link>
        </>
    )
}

export default MainPage
