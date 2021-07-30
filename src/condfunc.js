import React from 'react';

const Condfunc = (props)=>{
	if(props.myCall === true){
		return(
			
			<h1>Loading...</h1>
			
		);
	}else if(props.myCall === false){
		return(
			
			<h1>We be doing stuff now</h1>
			
		);
	}
}

export default Condfunc;