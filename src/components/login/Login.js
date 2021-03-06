import { useState } from "react";
import { LoginForm } from "./LoginForm"; 
import { LoginFormSuccess } from "./LoginFormSuccess";
import {useContext} from 'react';
import {AppContext} from '../providers';

import "./login.css";
import List from "../List";

export function Login(){
    const [isLogged, setIsLogged] = useState(window.localStorage.getItem("isLogged"));
    const [nameLogged, setNameLogged] = useState(window.localStorage.getItem("email"));
    const [typeLogged, setTypeLogged] = useState(window.localStorage.getItem("type"));
    const [state, setState] = useContext(AppContext);
    
    function onSuccess(){
        setIsLogged("true");
        setState({ ...state, isLogged:"true"});
        setState({ ...state, logOut:{logOut}});
        setNameLogged(window.localStorage.getItem("email"));
        setTypeLogged(window.localStorage.getItem("type"));
    }
    function logOut(){
        setIsLogged("false"); 
        window.localStorage.setItem("isLogged", false);
        setState({ ...state, isLogged:"false"});
    }

    return (
        <>
            {
                isLogged === "true" ? 
                    <>
                        <List />
                    </>  
                    : 
                    <LoginForm onSuccess={onSuccess} />
            }
        </>
    )
}