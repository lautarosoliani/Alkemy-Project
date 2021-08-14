import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/auth/Login"
import MainPage from "./components/MainPage"

export function App() {
    return (
        <>
            {/* lo de dentro de Router se ve en todas las paginas */}
            <Router>
                {/* dentro de Switch va cada una de las diferentes paginas */}
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/main-page" component={MainPage}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
