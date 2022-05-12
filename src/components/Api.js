import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

function Api(){
    const [pokes, setPokes] = useState([]);
    const [totalPokes, setTotalPokes] = useState([]);
    const [nextPage, setNextPage] = useState(0);
    const [prevPage, setPrevPage] = useState(0);
    const [pagina, setPagina] = useState(0);

    const pokeImageHost = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pagina}&limit=20`)
    //         .then(response => response.json())
    //         .then(data =>{ 
    //             setPokes( data.results );
    //             setTotalPokes( data.count );
    //             setNextPage( data.next );
    //             setPrevPage( data.previous );
    //         })
    //         .catch(e => console.log("Error: " + e))        
    // }, []);

    const getPokes = () => {
       fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pagina*20}&limit=20`)
           .then(response => response.json())
           .then(data =>{ 
               setPokes( data.results );
               setTotalPokes( data.count );
               setNextPage( data.next );
               setPrevPage( data.previous );
           })
           .catch(e => console.log("Error: " + e))        
    }

    useEffect(() => {
        getPokes()
    },[pagina])

    useEffect(() => {
        return () => console.log("Api unmount")
    },[])

    const addPage = () => {
        setPagina(pagina + 1)
    }
    const restPage = () => {
        setPagina(pagina - 1)
    }

    function loadPrevOrNext(prevPage) {
        return () => {
            fetch(`${prevPage}`)
                .then(response => response.json())
                .then(data =>{ 
                    setPokes( data.results );
                    setTotalPokes( data.count );
                    setNextPage( data.next );
                    setPrevPage( data.previous );
                })
                .catch(e => console.log("Error: " + e))         
        }
    }
    return(
        <>
            <div className="usuarios">
                {totalPokes ? <><h2>Pokemones totales: {totalPokes} </h2></> : <><p> No se pudieron atrapar pokemones </p></>}            
                <div className="next-prev">
                    {prevPage != null  &&
                        <button onClick={ restPage }> Prev </button>
                    }
                    <p> Página {nextPage} de {totalPokes} </p>
                    {nextPage  &&
                        <button onClick={  addPage }> Next </button>
                    }                    
                </div>
                <div className="table-responsive">
                    {
                        pokes.map((poke, i) => {
                            const img = pagina*20 + (i+1);
                            return(
                                <>
                                        <div className="usuario">
                                            <div className="card">
                                                <img src={pokeImageHost+img+'.png'} className="card-img-top" alt="" />
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">{poke.name}</li>
                                                </ul>
                                                <div className="card-body">
                                                    <h5 className="card-title">{poke.name}</h5>
                                                </div>
                                                <div className="card-body">
                                                <Link to={`/user/${poke.url}`}>
                                                    <BiUser className="icon"/>
                                                </Link> 
                                                </div>
                                            </div>
                                        </div>
                                        </>
                            )
                        })
                    }                 
                </div>
            </div>     
        </>
    )
}

export default Api;