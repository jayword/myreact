import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css';

const Headee = () => {
	return (
		<Router>
			<div className="listees">
				<ul>
					<li><Link to={"/"} className="linki">Home</Link></li>
					<li><Link to={"/about"} className="linki" >About Us</Link></li>
					<li><Link to={"/services"} className="linki" >Services</Link></li>
					<li><Link to={"/gallery"} className="linki" >Gallery</Link></li>
					<li><Link to={"/contact"} className="linki" >Contact</Link></li>
				</ul>
				<Switch>
					<Route path="/about" component={About}/>
					<Route path="/services" component={Services}/>
					<Route path="/gallery" component={Gallery}/>
					<Route path="/contact" component={Contact}/>
					
				</Switch>
			</div>
			
		</Router>
		
	);
}

export default Headee;