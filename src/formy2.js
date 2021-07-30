import React, {Component} from 'react';

export default class Formy extends Component{
	constructor(){
		super();
		this.state = {
			FName: "",
			LName: "",
			Age: "",
			Saying: ""
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		const {name, value} = event.target;
		this.setState({
			[name]: value
		});
	}
	render(){
		
		return(
			<div>
				<form onSubmit={this.mysubmit}>
					<input type="text" name="FName" placeholder="First Name" value={this.state.FName} onChange={this.handleChange} /><br />
					<input type="text" name="LName" placeholder="Last Name" value={this.state.LName} onChange={this.handleChange} /><br />
					<input type="text" name="Age" placeholder="Age" value={this.state.Age} onChange={this.handleChange} /><br />
					<textarea name="Saying" value={this.state.Saying} onChange={this.handleChange}/>
					<button>Submit</button>
				</form>
				<h2>{this.state.FName} {this.state.LName}, {this.state.Age} {this.state.Saying}</h2><br />
			</div>
		);
	}
}