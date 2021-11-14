import React from 'react'
import Login from './Login'
import Registration from './Registration'
import { useState } from 'react'

const Home = () => {
    const [showLogin, setShowLogin] = useState(true);

    const loginClick = () => {
        setShowLogin(true);
    }
    const signupClick = () => {
        setShowLogin(false);
    }
    return (
        <div>
            {showLogin == true ? <Login onSignUpClick={signupClick}></Login>
             : <Registration onLoginClick={loginClick} ></Registration>}
        
        </div>
    )
}

export default Home
