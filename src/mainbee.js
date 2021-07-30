import React from 'react';
import './App.css';

const Mainbee = () => {
	const fname = "James";
	const lname = "Arthur";
	const yname = "Miriam";
	const zname = "Miriam";
	const tux = new Date();
	
	let hrs = tux.getHours();
	let disp;
	
	if(hrs == 20){
		disp = "Good Evening!";
	}else if(hrs < 20){
		disp = "Good Morning"
	}
	const stol = {
		color: "turquoise",
	}
	return (
		<div className="App">
			<main>
				<header className="App-header">
					<h1 className="hones">Hello {fname + " " + lname}!</h1>
					<h2 style={{color: "green"}}>Hello {`${yname} ${zname}`}, the time is {`${hrs}`} o'clock. Therefore, {disp}!</h2>
					<h3 style={stol}>Hello to everyone here.</h3>
				</header>
				<input type="checkbox" name="checki" value="peter"/>Peter
				<input type="checkbox" name="checki" value="john"/>John
				<input type="checkbox" name="checki" value="james"/>James
				<input type="checkbox" name="checki" value="lucius"/>Lucius
			</main>
		</div>
	);
}

export default Mainbee;