import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PokedexDetail = () => {

    

    const [pokemon, setPokemon] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data));
    }, [id])

    console.log(pokemon)

    let background = "#7AC7C4"

    if(pokemon.types?.[0].type.name == "grass"){
        background = "#48d0b0"
    }else if(pokemon.types?.[0].type.name == "normal"){
        background = "#735159"
    }else if(pokemon.types?.[0].type.name == "fighting"){
        background = "#48677b"
    }else if(pokemon.types?.[0].type.name == "poison"){
        background = "#5b2d86"
    }else if(pokemon.types?.[0].type.name == "gound"){
        background = "#a37324"
    }else if(pokemon.types?.[0].type.name == "rock"){
        background = "#46180b"
    }else if(pokemon.types?.[0].type.name == "bug"){
        background = "#8bc34a"
    }else if(pokemon.types?.[0].type.name == "steel"){
        background = "#5d736c"
    }else if(pokemon.types?.[0].type.name == "fire"){
        background = "#fb6c6c"
    }else if(pokemon.types?.[0].type.name == "water"){
        background = "#70b7fa"
    }else if(pokemon.types?.[0].type.name == "grass"){
        background = "#48d0b0"
    }else if(pokemon.types?.[0].type.name == "electric"){
        background = "#e2e02d"
    }else if(pokemon.types?.[0].type.name == "phychic"){
        background = "#a12b6a"
    }else if(pokemon.types?.[0].type.name == "ice"){
        background = "#86d2f4"
    }else if(pokemon.types?.[0].type.name == "dragon"){
        background = "#448a94"
    }else if(pokemon.types?.[0].type.name == "dark"){
        background = "#030706"
    }else if(pokemon.types?.[0].type.name == "fairy"){
        background = "#981844"
    }else if(pokemon.types?.[0].type.name == "shadow"){
        background = "#000000"
    }

    return (
        <div style={{background: background}} className="container-detail-pokemon">
            <div className='container-detail-pokemon-second'>
                <div className='arrow-exit'>
                    <Link to={"/pokedex"}><i class="fa-solid fa-arrow-left"></i> </Link> 
                </div> <br /> <br /> <br />
                <div className='container-principal-detail-pokemon'>
                    <div className='container-principal-bloqueUno'>
                        <div class="card-pokemon-detail">
                            <div className='card-img-detail'>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                            </div>
                            <h2>{pokemon.name}</h2>
                            <div className='display-flex'>
                                <div>
                                    <p>{pokemon.weight}</p>
                                    <p>Weight</p>
                                </div>
                                <div>
                                    <p>#{pokemon.id}</p>
                                </div>
                                <div>
                                    <p>{pokemon.height}</p>
                                    <p>Height</p>
                                </div>
                            </div>
                        </div>
                        <div className='display-flex-around'>
                            <div class="card-pokemon-detail">
                                <h2>Type</h2>
                                <button>{pokemon.types?.[0].type.name}</button><br /><br />
                                <button>{pokemon.types?.[1]?.type.name}</button>
                            </div>
                            <div class="card-pokemon-detail">
                                <h2>Abilities</h2>
                                {
                                    pokemon.abilities?.map(abilitie => (
                                        <div>
                                            <a class="fancy" href="#">
                                                <span class="top-key"></span>
                                                <span class="text">{abilitie.ability.name}</span>
                                                <span class="bottom-key-1"></span>
                                                <span class="bottom-key-2"></span>
                                            </a>
                                            <br />
                                            <br />
                                        </div>
                                ))
                            }

                            </div>
                            <div class="card-pokemon-detail">
                                <h2>Stats Base</h2>
                                hp: {pokemon.stats?.[0].base_stat}<br /><br />
                                attack: {pokemon.stats?.[1].base_stat}<br /><br />
                                defense: {pokemon.stats?.[2].base_stat}<br /><br />
                                speed: {pokemon.stats?.[5].base_stat}
                            </div>
                        </div>
                    </div>
                    <div className='container-principal-bloqueDos'>
                        <div class="card-pokemon-detail">
                            <h2>Movements</h2>
                            <hr />
                            {
                                pokemon.moves?.map(res => (
                                    <div>
                                        <p>{res.move.name}</p>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div> 
                    </div>
                </div>
                
            </div>
            
            
        </div>
    );
};

export default PokedexDetail;