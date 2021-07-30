import React from 'react';

const Apis = (props) => {
	const stylo={
		color: "#55f024",
	}
	return(
		<div>
			<h2 style={stylo}>Fullname: {props.moname.name}</h2>
			<h2>Age: {props.monage.age}</h2>
		</div>
	);
}
export default Apis;