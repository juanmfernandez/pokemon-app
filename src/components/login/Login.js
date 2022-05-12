import { useState } from "react";
import { LoginForm } from "./LoginForm"; 
import { LoginFormSuccess } from "./LoginFormSuccess";
import {useContext} from 'react';
import {AppContext} from '../providers';

import "./login.css";

export function Login(){
    const [isLogged, setIsLogged] = useState(window.localStorage.getItem("isLogged"));
    const [nameLogged, setNameLogged] = useState(window.localStorage.getItem("email"));
    const [typeLogged, setTypeLogged] = useState(window.localStorage.getItem("type"));
    const [state, setState] = useContext(AppContext);
    
    function onSuccess(){
        setIsLogged("true");
        setState({ ...state, isLogged:"true"});
        setNameLogged(window.localStorage.getItem("email"));
        setTypeLogged(window.localStorage.getItem("type"));
    }
    function logOut(){
        setIsLogged("false"); 
        setState({ ...state, isLogged:"true"});
    }

    console.log(isLogged);
    return (
        <main className="Login">          
            {isLogged === "true" ? <><LoginFormSuccess name={nameLogged} type={typeLogged} /><br></br><a className="logOut" href="#" onClick={logOut}>Salir</a></>  : <LoginForm onSuccess={onSuccess} />}
        </main>
    )
}