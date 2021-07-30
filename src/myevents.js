import React from 'react';

const Myevents = ()=>{
	function clickme(){
		alert("I just got clicked");
	}
	return(
		<div>
			<button onClick={clickme} style={{cursor: "pointer"}}>Click Me</button>
			<button onMouseOver={()=>{alert("I just got hovered!");}} style={{cursor: "pointer"}}>Hover Me</button>
		</div>
	);
}
export default Myevents;