import React, {Component} from 'react';

export default class Statechange extends Component{
	constructor(){
		super();
		this.state = {
			count: 0,
			counter: 0,
			hovcount: 0
		}
		this.clickone = this.clickone.bind(this);
		this.clickmulti = this.clickmulti.bind(this);
		this.hovermulti = this.hovermulti.bind(this);
	}
	clickone(){
		this.setState({count: 1});
	}
	clickmulti(){
		this.setState((prev)=>{
			return({
				counter: prev.counter++
			});
		});
	}
	hovermulti(){
		this.setState((prevs)=>{
			return({
				hovcount: prevs.hovcount++
			});
		});
	}
	
	render(){
		return(
			<div>
				<h2>Onetime Count: {this.state.count}</h2>
				<button onClick={this.clickone} style={{cursor: "pointer"}}>Click Once</button>
				<h2>Multicount: {this.state.counter}</h2>
				<button onClick={this.clickmulti} style={{cursor: "pointer"}}>Click Multi</button>
				<h2>Hovercount: {this.state.hovcount}</h2>
				<button onMouseOver={this.hovermulti} style={{cursor: "pointer"}}>Hover Count</button>
			</div>
		);
	}
}