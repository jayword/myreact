import React from 'react';

class Appclass extends React.Component{
	render(){
		const stylo = {
			color: "#f250f4",
			backgroundColor: "#000f50"
		}
		return(
			<div>
				<h1 style={stylo}>Hello my Peepos!!!</h1>
			</div>
		);
	}
	
}
export default Appclass;