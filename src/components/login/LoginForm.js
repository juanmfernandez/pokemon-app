import { useState } from "react";

import "./loginForm.css";

export function LoginForm({ onSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState('');
  
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

    function onEmailChange(event) {
      setEmail(event.target.value);
    }
  
    function onPasswordChange(event) {
      setPassword(event.target.value);
    }

    function onTypeChange(event) {
        setType(event.target.value);
    }

    return (
        <>
                <div className="LoginForm">
                    {error.length > 0 ? (
                        <div className="LoginFormError">
                        {error}
                        </div>
                    ) : null}                 
                <div className="LoginFormContainer">
                    <h4 className="LoginFormDescription">Login.</h4>
                    <label htmlFor="email" className="LoginFormInputLabel">Email</label>
                    <input name="email" id="email" type="email" className="LoginFormInput" value={email} onChange={onEmailChange} />
                    <label htmlFor="password" className="LoginFormInputLabel">Password</label>
                    <input name="password" id="password" value={password} type="password" className="LoginFormInput" onChange={onPasswordChange} />
                    <br></br>
                    <button className="LoginFormButton" onClick={handleClick}>Login</button>
                </div>
                </div>           
        </>
    )
}