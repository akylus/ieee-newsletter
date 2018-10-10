import React, {Component} from 'react';
import './Signupcard.css'; 
import tachyons from 'tachyons';
import Login from './Login';

class Signupcard extends Component {  
	constructor (props) {
		super(props);
		this.state= {  
			signin: false, 
			firstname:'',
			lastname:'', 
			email:'',
			password:'',
			ieeeNumber:''
		}
	} 

	onFirstName=(event)=>{
		console.log(event.target.value); 
		this.setState({firstname:event.target.value}); 
		console.log(this.state);
	}  
	onLastName=(event)=>{
		console.log(event.target.value); 
		this.setState({lastname:event.target.value}); 
		console.log(this.state);
	}  
	onEmailChange=(event)=>{
		console.log(event.target.value); 
		this.setState({email:event.target.value}); 
		console.log(this.state);
	}  
	
	onPasswordChange=(event)=>{ 
		console.log(event.target.value);
		this.setState({password:event.target.value}); 
		console.log(this.state);
	}

	onIeeeChange=(event)=>{ 
		console.log(event.target.value);
		this.setState({ieeeNumber:event.target.value}); 
		console.log(this.state);
	}

	onSigninClick=()=>{  
		if(this.state.firstname.length>0){   
			this.setState({signin:true});
		}
		}
		

  render() {  
				if(this.state.signin===false){  
					return (  
					<div>
						<div class="tc bg-light-silver br3 pa4 mt1 di bw2 centering">
							<h1>Sign Up</h1>
							<article class="cf pa4 black-80">
							    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
							      <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
							      <div class="fl w-50 pa2 tl-ns mt3">
							        <label class="dib fw4 lh-copy f6" for="first-name">First Name</label>
							        <input class="pa2 input-reset ba bg-transparent w-100 measure" onChange={this.onFirstName} type="text" placeholder="Rahul" name="first-name"  id="first-name"/>
							      </div>
							      <div class="fl w-50 pa2 tl-ns mt3">
							        <label class="dib fw4 lh-copy f6" for="last-name">Last Name</label>
							        <input class="pa2 input-reset ba bg-transparent w-100 measure" onChange={this.onLastName} type="text" placeholder="Roy" name="last-name"  id="last-name"/>
							      </div>
							      <div class="fl w-50 pa2 tl-ns mt3">
							        <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
							        <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" onChange={this.onEmailChange} name="email-address" placeholder="rahulroy@hismail.com"  id="email-address"/>
							      </div>
							      <div class="fl w-50 pa2 tl-ns mt3">
							        <label class="db fw4 lh-copy f6" for="password"> New Password</label>
							        <input class="pa2 input-reset ba bg-transparent w-100" type="password" onChange={this.onPasswordChange} placeholder="Some Strong Password" name="password"  id="password"/>
							      </div>
							      <div class="pa2 tl-ns mt3">
							        <label class="db fw4 lh-copy f6" for="username">IEEE Number</label>
							        <input class="pa2 input-reset ba bg-transparent w-100" type="username" onChange={this.onIeeeChange} name="username" placeholder="Your IEEE Membership ID" id="username"/>
							      </div> 
							       <a class="f6 link grow ba ph3 pv2 mb2 dib dark-gray hover pointer" onClick={this.onSigninClick} >Sign Up</a>
							    </fieldset>
							</article>
							<p>Already have an account?</p>
							<a  href= "Login" id ="login"><u>Login</u></a>
						</div>
					</div>
				);
				}	 
				else if(this.state.signin===true){  
					return (  
					<div> 
						<Login/>
					</div>
				);
			} 
		} 
} 

export default Signupcard;