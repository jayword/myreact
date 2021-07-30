import React from 'react';
import logo from './logo.svg';
import Mainbee from './mainbee';
import Headee from './headee';
import Footi from './footi';
import Objectdisplay from './obee';
import Jasapp from './jasapp';
import Appclass from './monclass';
import Miclass from './miclass';
import Mistate from './mistate';
import Apismap from './apismap';
import Myevents from './myevents';
import Statechange from './statechange';
import Condrend from './condrend';
import Webapi from './webapi';
import Formy from './formy';
import Formy2 from './formy2';
import Formy3 from './formy3';

const App = () => {
  return (
	<div className="App">
		<Headee />
		<Mainbee />
		<Objectdisplay contact = {{name: "Jay Word Arthur",imgUrl: logo,phone: "0553270321",email: "jaylovegh@gmail.com",question: "Are u Okay???"}}/>
		<Objectdisplay contact = {{name: "Salo Arthur",imgUrl: logo,phone: "0553270322",email: "jaygh@gmail.com",question: "Are u Okay???"}}/>
		<Objectdisplay contact = {{name: "Sally Arthur",imgUrl: logo,phone: "0553270323",email: "gh@gmail.com",question: "Are u Okay???"}}/>
		<Jasapp />
		<Appclass />
		<Miclass />
		<Mistate />
		<Apismap />
		<Myevents />
		<Statechange />
		<Condrend />
		<Webapi />
		<Formy />
		<Formy2 />
		<Formy3 />
		<Footi />
	</div>
  );
}

export default App;

