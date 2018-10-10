import React from 'react';
import Login from './Login';
import './Nav.css';

const Nav = () => {
	return(
		<div className="App" class="body">
        	<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
	            <div class="container">
	            	<span class="navbar-brand h1">IEEE - VBIT SB Newsletter</span>
	            	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
	            	<span class="navbar-toggler-icon"></span>
	            	</button>
	            	<div  id="push"></div>
	            	<div class="collapse navbar-collapse" id="navbarText">
		                <ul class="navbar-nav mr-auto pull-right">
		                  	<li class="nav-item active">
		                    	<a class="nav-link" href="Login">Login<span class="sr-only">(current)</span></a>
		                  	</li>
			                <li class="nav-item">
			                    <a class="nav-link" href="#">Contact</a>
			                </li>
			                <li class="nav-item">
			                    <a class="nav-link" href="#">About</a>
			                </li>
		                </ul>
	              	</div>
	            </div>
        	</nav>
     	</div>
	);
}

export default Nav;