import React from 'react';
import Thaps from './quests';
import Jas from './myjason';

const Jasapp = () => {
	const myjasComponents = Jas.map(function(monques){
		return (
			<Thaps key={monques.id} mont={monques} monto={monques}/>
		)
	});
	return (
		<div>
			{myjasComponents}
		</div>
	);
}
export default Jasapp;