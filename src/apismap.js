import React from 'react';
import Apis from './apis';
import Jos from './apisjas';

const Apismap = () => {
	const coni = Jos.map(function(pat){
		return(
			<Apis key={pat.id} moname={pat} monage={pat}/>
		);
	});
	
	return(
		<div>
			{coni}
		</div>
	);
}
export default Apismap;