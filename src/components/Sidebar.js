import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from './providers';
import { Outlet, Routes, Route, Link } from "react-router-dom";
import { 
    BiChevronRight, 
    BiHome, 
    BiLogIn, BiPieChartAlt, BiHeart, BiWallet, BiLogOut, BiMoon, BiSun } from "react-icons/bi";

function Sidebar(){
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [stateLogged, setStateLogged] = useContext(AppContext);

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const body = useRef();
    const sidebar = useRef();
    const toggle = useRef();
    const modeSwitch = useRef();
    const modeText = useRef();
    
    const toggleClose = () => {
        sidebar.current.classList.toggle("close");
    }
    const toggleBodyDark = () => {
        body.current.classList.toggle("dark");

        if(body.current.classList.contains("dark")){
            modeText.current.innerText = "Light mode";
        }else{
            modeText.current.innerText = "Dark mode";
        }
    }
    
    return(
        <>
        <main className="body" ref={body}>
            <nav className="sidebar close" ref={sidebar}>
                <header>
                    <div className="image-text" onClick={toggleClose}>
                        <span className="image">
                            <img src="logo_ishoes.png" alt="BigCo Inc. logo"/>
                        </span>
                        <div className="text logo-text">
                            <span className="name">Pokemones</span>
                        </div>
                    </div>
                    <BiChevronRight ref={toggle} onClick={toggleClose} className="toggle" />
                </header>

                <div className="menu-bar">
                    <div className="menu">


                        <ul className="menu-links">
                            <li className="nav-link">
                                <Link to="/">
                                <BiHome className="icon"/>
                                    <span className="text nav-text"> Home</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/login">
                                    <BiLogIn className="icon"/>
                                    <span className="text nav-text"> Login</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/last-product">
                                    <BiPieChartAlt className="icon"/>
                                    <span className="text nav-text"> Producto</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/favoritos">
                                    <BiHeart className="icon"/>
                                    <span className="text nav-text"> Favoritos</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/ventas">
                                    <BiWallet className="icon"/>
                                    <span className="text nav-text">Ventas</span>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="mode">
                            <div className="sun-moon">
                                <BiMoon className="icon moon"/>
                                <BiSun className="icon sun"/>
                            </div>
                            <span className="mode-text text" ref={modeText}>Dark mode</span>

                            <div className="toggle-switch" ref={modeSwitch} onClick={toggleBodyDark}>
                                <span className="switch"></span>
                            </div>
                        </li>
                    </div>
                </div>

            </nav>

            <section className="home">
                <div className="text">PokeDashboard {stateLogged.isLogged}</div>
                <div className="container">
                    <Outlet />
                </div>
            </section>
        </main>

        </>
    )
}

export default Sidebar;