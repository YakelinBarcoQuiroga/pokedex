import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        dispatch(changeUser(userName))
        navigate("/pokedex")
    }

    return (
        <div className='container_home'>
            <div className='home_title'>
                <h1>Hello trainer!</h1>
                <img className='home_img' src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" alt="Imagen de un chico" />
            </div>
            <p className='home_welcome'>Give me your name to start</p>
            <form onSubmit={submit}>
                <input 
                    type="text" 
                    required="" 
                    placeholder="UserName" 
                    name="text" 
                    class="input"
                    minlength="3" 
                    maxlength="20" 
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                {/* <button className='home_button-send'><i class="fa-solid fa-paper-plane"></i></button> */}
            </form>
        </div>
    );
};

export default Home;