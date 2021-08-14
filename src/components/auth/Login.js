import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="challenge@alkemy.org"
                    ></input>
                    <div id="emailHelp" class="form-text">
                        Remember! It is challenge@alkemy.org
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="react"
                    />
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
            <Link to={"/main-page"}>/main-page</Link>
        </>
    )
}

export default Login
