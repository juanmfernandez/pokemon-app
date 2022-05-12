import { useState } from "react";

import "./loginForm.css";

export function LoginForm({ onSuccess }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState('');
    const [register, setRegister] = useState(false);
  
    function handleClick() {
      if (email === "test@test.com") {
        if (password === "0303") {
          setError("");
  
          window.localStorage.setItem("isLogged", true);
          window.localStorage.setItem("type", type);
          window.localStorage.setItem("email", email);

  
          onSuccess();
  
          return ;
        }
      }
  
      window.localStorage.setItem("isLogged", false);
      setError("Datos Incorrectos");
    }
    
    function handleClickRegister(){
        setRegister(!register)
    }

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onSurnameChange(event) {
        setSurname(event.target.value);
    }
    
    function onPasswordRegChange(event) {
        setPasswordReg(event.target.value);
    }

    function onEmailRegChange(event) {
        setEmailReg(event.target.value);
    }   
    function onEmailChange(event) {
      setEmail(event.target.value);
    }
  
    function onPasswordChange(event) {
      setPassword(event.target.value);
    }

    function onTypeChange(event) {
        setType(event.target.value);
    }

    function handleRegisterSubmit(){
        console.log("Te has registrado con los siguientes datos: nombre: "+name+", apellido: "+surname+", e-mail: "+emailReg+" y password "+passwordReg)
    }
    return (
        <>
        <h3 className="LoginFormTitle">Stax Food Admin Login</h3>
            {
            register === true ? (
                <div className="registerForm">
                    <div className="LoginFormContainer">
                        <h4 className="LoginFormDescription">Fill in your registration details below.</h4>
                        <label htmlFor="name" className="LoginFormInputLabel">Nombre</label>
                        <input name="name" id="name" type="text" className="LoginFormInput" value={name} onChange={onNameChange} />
                        <label htmlFor="surname" className="LoginFormInputLabel">Apellido</label>
                        <input name="surname" id="surname" type="text" className="LoginFormInput" value={surname} onChange={onSurnameChange} />
                        <label htmlFor="email" className="LoginFormInputLabel">Email address</label>
                        <input name="email" id="email" type="email" className="LoginFormInput" value={emailReg} onChange={onEmailRegChange} />
                        <label htmlFor="password" className="LoginFormInputLabel">Password</label>
                        <input name="password" id="password" value={passwordReg} type="password" className="LoginFormInput" onChange={onPasswordRegChange} />
                        <div className="LoginForgotRegister">
                            <a href="#" onClick={handleClickRegister}>Login</a>
                            <a href="#" >forgot password?</a>
                        </div>
                        <br></br>
                        <button className="LoginFormButton" onClick={handleRegisterSubmit}>Registrarme</button>
                    </div>
                </div>
            ) : 
                <div className="LoginForm">
                    {error.length > 0 ? (
                        <div className="LoginFormError">
                        {error}
                        </div>
                    ) : null}                 
                <div className="LoginFormContainer">
                    <h4 className="LoginFormDescription">Please fill in your unique admin login details below.</h4>
                    <label htmlFor="email" className="LoginFormInputLabel">Email address</label>
                    <input name="email" id="email" type="email" className="LoginFormInput" value={email} onChange={onEmailChange} />
                    <label htmlFor="password" className="LoginFormInputLabel">Password</label>
                    <input name="password" id="password" value={password} type="password" className="LoginFormInput" onChange={onPasswordChange} />
                    <label htmlFor="type" className="LoginFormInputLabel">Type</label>
                    <select name="type" id="type"  className="LoginFormInput" onChange={onTypeChange}>
                        <option value={"default"} >Please select the type of user.</option>
                        <option value="alumno">Alumno</option>
                        <option value="profesor">Profesor</option>
                    </select>
                    <div className="LoginForgotRegister">
                        <a href="#" onClick={handleClickRegister}>Registrarse</a>
                        <a href="#" >forgot password?</a>
                    </div>
                    <br></br>
                    <button className="LoginFormButton" onClick={handleClick}>Sign in</button>
                </div>
                </div>
            } 
        </>
    )
}