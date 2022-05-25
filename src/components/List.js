import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from './providers';

function List(){
    const [pokes, setPokes] = useState([]);
    const [totalPokes, setTotalPokes] = useState([]);
    const [nextPage, setNextPage] = useState(0);
    const [prevPage, setPrevPage] = useState(0);
    const [pagina, setPagina] = useState(0);

    const [state, setState] = useContext(AppContext);

    const pokeImageHost = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

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
        getPokes();
        setState({ ...state, iconPoke: pokeImageHost+(((pagina)*20)+(Math.floor(Math.random() * (20 - 1)) + 1))+'.png' });
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

    return(
        <>
            <div className="usuarios">
                {totalPokes ? <><h2>Pokemones totales: {totalPokes} </h2></> : <><p> No se pudieron atrapar pokemones </p></>}            
                <div className="next-prev">
                    {prevPage != null  &&
                        <button onClick={ restPage }> Prev </button>
                    }
                    <p> Página {pagina+1} de {Math.ceil(totalPokes/20)} </p>
                    {nextPage  &&
                        <button onClick={  addPage }> Next </button>
                    }                    
                </div>
                <div className="container-responsive">
                    {
                        pokes.map((poke, i) => {
                            const img = pagina*20 + (i+1);
                            return(
                                <>
                                        <div className="poke">
                                            <Link to={`/pokemon/${img}`}>
                                                <div className="card">
                                                    <img src={pokeImageHost+img+'.png'} className="card-img-top" alt="" />
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">{poke.name}   #{img}</li> 
                                                    </ul>
                                                </div>
                                            </Link> 
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

export default List;