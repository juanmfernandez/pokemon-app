import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";

function View(){
    const params = useParams();
    const [poke, setPoke] = useState([]);
    const pokeImageHost = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            .then(response => response.json())
            .then(data =>{ 
                setPoke( data );
                console.log("data: " + JSON.stringify(data.forms))
            })
            .catch(e => console.log("Error: " + e))
    }, []);

    useEffect(() => {
        console.log("Se actualizo la pagina")
    },[poke])

    useEffect(() => {
        return () => console.log("Api unmount")
    },[])

    if (poke.forms === undefined) {
        return(
            <div className="usuario">
                <h1>Loading {JSON.stringify(params.id)}</h1>    
            </div>            
        )
    }
    function firstCapLetter(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return(
        <>
            <div className="usuario">
                <div className="poke-card">
                    <img src={pokeImageHost+poke.id+'.png'} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h3 className="card-title">{firstCapLetter(poke.name)}</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <h5 className="card-title">Tipo</h5>
                        {
                            poke.types.map((tipo, i) => {
                                return(<p>{firstCapLetter(tipo.type.name)}</p>)
                            })
                        }
                        </li>
                        <li className="list-group-item">Altura: {poke.height*10} cm</li>
                        <li className="list-group-item">Peso: {poke.weight*0.1} kg</li>
                    </ul>
                    <div className="card-body">
                    <h5 className="card-title">Habilidades</h5>
                            {
                                poke.abilities.map((ability, i) => {
                                    return(<p>{firstCapLetter(ability.ability.name)}</p>)
                                })
                            }
                        <p className="card-text">{poke.province} {poke.city} {poke.address} {poke.country}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default View;