import React, { Component } from 'react';
import Nav from './Nav';
import Signupcard from './Signupcard';
import Homepage from './Homepage';

class Login extends Component {
	constructor (props) {
		super(props);
		this.state= {
			login: false,
			ieeeNumber: '',
			password: ''
		}
	}

	onIeeeChange=(event)=>{
		this.setState({ieeeNumber:event.target.value});
	}

	onPasswordChange=(event)=>{
		this.setState({password:event.target.value});
	}

	onLoginClick=(event)=>{
		if(this.state.ieeeNumber === '8012' && this.state.password === 'root'){
			this.setState({login:true});
		}
		else {
			alert("Enter valid Details");
			this.setState({login:false});
		}
	}

	render() {
		if(this.state.login === false) {
			return(
				<div>
					<Nav/>
					<div class="tc bg-light-silver br2 pa5 ma2 di bw2 shadow5 centering">
						<h1>Login</h1>
						<div class="pa0 tl-ns mt3">
						    <label class="db fw4 lh-copy f6" for="username">IEEE Number</label>
						    <input class="pa2 input-reset ba bg-transparent w-100" type="username" name="username" onChange={this.onIeeeChange} placeholder="Your IEEE Membership ID" id="username"/>
						</div>
						<div class="pa0 tl-ns mt3">
					        <label class="db fw4 lh-copy f6" for="password">Password</label>
					        <input class="pa2 input-reset ba bg-transparent w-100" type="password" placeholder="Enter your Password" onChange={this.onPasswordChange} name="password"  id="password"/>
					    </div>
					   	<div class="mt3">
					   		<a class="b ph3 pv2 ba b--black central btn-outline-dark grow pointer f6" onClick={this.onLoginClick} href="homepage" role="button">Login</a>
					   	</div>
					</div>
				</div>
			);
		}

		else if(this.state.login === true) {
			return(
				<div>
					<Homepage/>
				</div>
			);
		}
	}
}

export default Login;