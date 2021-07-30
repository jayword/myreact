import React from 'react';

const Footi = () => {
	const mystyle = {
		color: "blue",
		backgroundColor: "#ffa20d"
	}
	return (
		<div className="foo">
			<h1 style= {mystyle}>This is the Footer Arena</h1>
			<p>Just like the Aliance Arena.</p>
		</div>
	);
}

export default Footi;