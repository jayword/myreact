import React, {Component} from 'react';

class Mistate extends Component{
	constructor(){
		super();
		this.state = {
			isloggedin: true
		}
	}
	render(){
		let disp;
		if(this.state.isloggedin){
			disp = "In";
		}else{
			disp = "Out";
		}
		return(
			<div>
				<h2>You are currently logged {disp}</h2>
			</div>
		);
	}
}

export default Mistate;