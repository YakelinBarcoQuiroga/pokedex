import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PokemonItem = ({pokemonUrl}) => {

    const [pokemon, setPokemon] =useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [])

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
        <div className="card" style={{background: background}} onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <div className="icon">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="pokemon" />
            </div>
            <strong>{pokemon.name}</strong>
            <span>
                <p>
                    Types: {pokemon.types?.[0].type.name}, {pokemon.types?.[1]?.type.name} <br /><br />
                    hp: {pokemon.stats?.[0].base_stat}<br /><br />
                    attack: {pokemon.stats?.[1].base_stat}<br /><br />
                    defense: {pokemon.stats?.[2].base_stat}<br /><br />
                    speed: {pokemon.stats?.[5].base_stat}
                </p>
            </span>
        </div>
    );
};

export default PokemonItem;