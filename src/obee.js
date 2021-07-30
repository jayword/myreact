import React from 'react';
import './App.css';
const Objectdisplay = (props) => {
	return (
		<div className="obeeguys">
			<h3>{props.contact.name}</h3>
			<img src={props.contact.imgUrl} style={{width: 200, height: 150}}/>
			<p>{props.contact.phone}</p>
			<p>{props.contact.email}</p>
			<p>Question: {props.contact.question}</p>
		</div>
	);
}

export default Objectdisplay;