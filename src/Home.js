import React from 'react';
import './Home.css';
import Signup from './Signup';
const Home = () => {
	return(
		<div class='container'>
            <div class='container-text'>
              <img alt='logo' src='https://cdn1.imggmi.com/uploads/2018/9/19/1b4dfde113a4840fe3f8a4ff27226f90-full.png' width='500' height='500' id='hp'/>
              <h1 class='central'>Welcome, fellow students!</h1>
              <h3 class='central'>Many articles are ready waiting for you!</h3>
              <div><br></br></div>
              <div><br></br></div>

              <a class="central btn btn-outline-dark" href="Signup" role="button">Let's Get Started!</a>
            </div>
        </div>
	);
}

export default Home;
