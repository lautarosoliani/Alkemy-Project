import React, { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
    //
    //
    //useState para iniciar sesion
    const [username, setUsername] = useState({
        email: null,
        password: null,
    })
    const [error, setError] = useState(false)
    //
    //
    //extraer del usuario ('values')
    const { email, password } = username
    //
    //
    //funcion onChange
    const handleChange = (e) => {
        setUsername(e.target.value)
        if (e.target.value !== `challenge@alkemy.org`) {
            setError(true)
        } else {
            setError(false)
        }
    }
    //
    //
    //cuando el usuario quiere iniciar sesion
    const onSubmit = (e) => {
        e.prevent.default()
    }

    return (
        <>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h1>
                        <p>Los datos válidos para obtener un token son:</p>
                        <p>● Email: challenge@alkemy.org</p>{" "}
                        <p>● Password: react</p>
                    </h1>

                    <form onSubmit={onSubmit}>
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="challenge@alkemy.org"
                                onChange={handleChange}
                                value={email}
                                // className={setError ? "error" : null}
                            ></input>
                        </div>
                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="react"
                                onChange={handleChange}
                                value={password}
                            ></input>
                        </div>
                        <div className="campo-form">
                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="All done, submit!"
                            ></input>
                        </div>
                    </form>
                    <Link to={"/main-page"} className="enlace-cuenta">
                        /main-page
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login

// import React, { useState } from "react"
// import { Formik, Form, ErrorMessage } from "formik"
// import * as Yup from "yup"

// import {
//     PageWrapper,
//     Title,
//     Label,
//     Input,
//     StyledInlineErrorMessage,
//     Submit,
//     CodeWrapper,
// } from "./styles"

// const validationSchema = Yup.object().shape({
//     fullname: Yup.string()
//         .min(2, "Your name is too short")
//         .required("Please enter your full name"),
//     email: Yup.string()
//         .email("The email is incorrect")
//         .required("Please enter your email"),
// })

// function App() {
//     const [formValues, setFormValues] = useState()

//     return (
//         <PageWrapper>
//             <Title>
//                 React form validation with formik and styled components demo
//             </Title>
//             <a
//                 href="https://twitter.com/danilucaci"
//                 target="_blank"
//                 rel="nofollow noopener noreferrer"
//             ></a>
//             <hr />
//             <Formik
//                 initialValues={{
//                     fullname: "",
//                     email: "",
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, actions) => {
//                     console.log(values)
//                     setFormValues(values)

//                     const timeOut = setTimeout(() => {
//                         actions.setSubmitting(false)

//                         clearTimeout(timeOut)
//                     }, 1000)
//                 }}
//             >
//                 {({
//                     values,
//                     errors,
//                     touched,
//                     handleSubmit,
//                     isSubmitting,
//                     isValidating,
//                     isValid,
//                 }) => {
//                     return (
//                         <>
//                             <Form
//                                 name="contact"
//                                 method="post"
//                                 onSubmit={handleSubmit}
//                             >
//                                 <Label htmlFor="fullname">
//                                     Fullname
//                                     <Input
//                                         type="text"
//                                         name="fullname"
//                                         autoCorrect="off"
//                                         autoComplete="name"
//                                         placeholder="your fullname"
//                                         valid={
//                                             touched.fullname && !errors.fullname
//                                         }
//                                         error={
//                                             touched.fullname && errors.fullname
//                                         }
//                                     />
//                                 </Label>
//                                 {errors.fullname && touched.fullname && (
//                                     <StyledInlineErrorMessage>
//                                         {errors.fullname}
//                                     </StyledInlineErrorMessage>
//                                 )}
//                                 <Label htmlFor="email">
//                                     Email
//                                     <Input
//                                         type="email"
//                                         name="email"
//                                         autoCapitalize="off"
//                                         autoCorrect="off"
//                                         autoComplete="email"
//                                         placeholder="your email"
//                                         valid={touched.email && !errors.email}
//                                         error={touched.email && errors.email}
//                                     />
//                                 </Label>
//                                 <ErrorMessage name="email">
//                                     {(msg) => (
//                                         <StyledInlineErrorMessage>
//                                             {msg}
//                                         </StyledInlineErrorMessage>
//                                     )}
//                                 </ErrorMessage>
//                                 <Submit
//                                     type="submit"
//                                     disabled={!isValid || isSubmitting}
//                                 >
//                                     {isSubmitting ? `Submiting...` : `Submit`}
//                                 </Submit>
//                             </Form>

//                             <hr />
//                             <CodeWrapper>
//                                 <strong>Errors:</strong>{" "}
//                                 {JSON.stringify(errors, null, 2)}
//                                 <strong>Touched:</strong>{" "}
//                                 {JSON.stringify(touched, null, 2)}
//                                 {formValues && (
//                                     <strong>Submitted values:</strong>
//                                 )}
//                                 {JSON.stringify(formValues, null, 2)}
//                             </CodeWrapper>
//                         </>
//                     )
//                 }}
//             </Formik>
//         </PageWrapper>
//     )
// }

// export default App

// import React, { useState } from "react"

// const Formulario = () => {
//     const [inputNombre, cambiarInputNombre] = useState("")
//     const [inputCorreo, cambiarInputCorreo] = useState("")

//     // Funcion que se encargara de validar los datos y enviar el formulario
//     const handleSubmit = (e) => {
//         e.preventDefault()

//         // Comprobamos validacion del formulario ...
//         // Si todo es correcto enviamos el formulario

//         console.log("Formulario Enviado!")
//     }

//     // Funcion que se encarga de cambiar el estado del inputNombre
//     const handleInputNombre = (e) => {
//         cambiarInputNombre(e.target.value)
//     }

//     // Funcion que se encarga de cambiar el estado del inputCorreo
//     const handleInputCorreo = (e) => {
//         cambiarInputCorreo(e.target.value)
//     }

//     return (
//         <>
//             <div class="form-usuario">
//                 <div className="contenedor-form sombra-dark">
//                     <h1>
//                         <p>Los datos válidos para obtener un token son:</p>
//                         <p>● Email: challenge@alkemy.org</p>{" "}
//                         <p>● Password: react</p>
//                     </h1>
//                     <form action="" onSubmit={handleSubmit}>
//                         <div className="campo-form">
//                             <label htmlFor="nombre">Nombre</label>
//                             <input
//                                 type="text"
//                                 name="nombre"
//                                 placeholder="Nombre"
//                                 id="nombre"
//                                 value={inputNombre}
//                                 onChange={handleInputNombre}
//                             />
//                         </div>
//                         <div className="campo-form">
//                             <label htmlFor="correo">Correo</label>
//                             <input
//                                 type="text"
//                                 name="correo"
//                                 placeholder="Correo"
//                                 id="correo"
//                                 value={inputCorreo}
//                                 onChange={handleInputCorreo}
//                             />
//                         </div>
//                         <div className="campo-form">
//                             <button
//                                 type="submit"
//                                 className="btn btn-primario btn-block"
//                             >
//                                 All done, submit!
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Formulario
