import React from "react";

class Miclass extends React.Component{
	render(){
		const stylo = {color: "#55f410", backgroundColor: "#000", textAlign: "center"}
		return (
			<header style={stylo}>
				<Headee name="James"/>
				<Buto />
			</header>
		);
	}
}
export default Miclass;

class Headee extends React.Component{
	render(){
		
		return (
			<div>
				<h3>Welcome {this.props.name}</h3>
			</div>
		);
	}
}

class Buto extends React.Component{
	render(){
		const datus = new Date();
		const howee = datus.getHours();
		let disp;
		if(howee <= 12 ){
			disp = "morning"
		}else if(howee > 12){
			disp = "evening"
		}
		return(
			<p>Good {disp}, the time is {howee} o'clock!</p>
		);
	}
}