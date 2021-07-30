import React, {Component} from 'react';

export default class Formy extends Component{
	constructor(){
		super();
		this.state = {
			FName: "",
			LName: "",
			Age: ""
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	render(){
		
		return(
			<div>
				<form onSubmit={this.mysubmit}>
					<input type="text" name="FName" placeholder="First Name" value={this.state.FName} onChange={this.handleChange} /><br />
					<input type="text" name="LName" placeholder="Last Name" value={this.state.LName} onChange={this.handleChange} /><br />
					<input type="text" name="Age" placeholder="Age" value={this.state.Age} onChange={this.handleChange} /><br />
					<button>Submit</button>
				</form>
				<h2>{this.state.FName} {this.state.LName}, {this.state.Age}</h2><br />
			</div>
		);
	}
}