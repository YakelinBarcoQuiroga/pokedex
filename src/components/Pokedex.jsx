import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonItem from './PokemonItem';


const Pokedex = () => {

    const user = useSelector(state => state.user)

    const [pokemones, setPokemones] = useState([]);
    const [pokemonSearch, setPokemonSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
            .then(res => setPokemones(res.data.results));
    }, []);

    const search = e => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonSearch}`);
    }

    return (
        <div className='container_pokedex'>
            <header className='pokedex-header'>
                <h1 className='pokedex-title'>Pokedex</h1>
                <p className='pokedex-text'>Welcome {user}, here you can find your favorite pokemon</p>
            </header>
            <main>
                <div className='pokedex-seeker'>
                    <select name="" id="" className='pokedex-seeker-options'>
                        <option value="">Seleccionar</option>
                        <option value="">Seleccionar</option>
                        <option value="">Seleccionar</option>
                        <option value="">Seleccionar</option>
                    </select>
                    <form className='pokedex-seeker-send' onSubmit={search}>
                        <input 
                            type="text" 
                            required="" 
                            placeholder="Pokemon" 
                            name="text" 
                            className="input input-pokemon"
                            value={pokemonSearch}
                            onChange={e => setPokemonSearch(e.target.value)}
                        />
                    </form>
                </div>
                <div className='container-pokemones'>
                    {
                        pokemones.map(pokemon => (
                            <PokemonItem pokemonUrl={pokemon.url} key={pokemon.name}/>
                        ))
                    }
                </div>
            </main>
            
        </div>
    );
};

export default Pokedex;