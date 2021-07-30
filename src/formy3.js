import React, {Component} from 'react';

export default class Formy extends Component{
	constructor(){
		super();
		this.state = {
			FName: "",
			LName: "",
			Age: "",
			Saying: "",
			isitrue: false,
			isgender: "",
			Selec: "Green"
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		const {name, value, type, checked} = event.target;
		type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
	}
	render(){
		
		return(
			<div>
				<form onSubmit={this.mysubmit}>
					<input type="text" name="FName" placeholder="First Name" value={this.state.FName} onChange={this.handleChange} /><br />
					<input type="text" name="LName" placeholder="Last Name" value={this.state.LName} onChange={this.handleChange} /><br />
					<input type="text" name="Age" placeholder="Age" value={this.state.Age} onChange={this.handleChange} /><br />
					<textarea name="Saying" value={this.state.Saying} onChange={this.handleChange}/><br />
					<input type="checkbox" name="isitrue" checked={this.state.isitrue} onChange={this.handleChange} />Checkers<br />
					<select name="Selec" value={this.state.Selec} onChange={this.handleChange}>
						<option value="Red">Red</option>
						<option value="Yellow">Yellow</option>
						<option value="Green">Green</option>
						<option value="Blue">Blue</option>
					</select><br />
					<input type="radio" name="isgender" value="Male" checked={this.state.isgender === "Male"} onChange={this.handleChange} />Male
					<input type="radio" name="isgender" value="Female" checked={this.state.isgender === "Female"} onChange={this.handleChange} />Female<br />
					<button>Submit</button>
				</form>
				<h2>{this.state.FName} {this.state.LName}, {this.state.Age} {this.state.Saying}</h2><br/>
				<h2>Yes, you{`'`}re a {this.state.isgender} and your favourite colour is {this.state.isgender === "Male" || this.state.isgender === "Female" ? this.state.Selec : ""}</h2>
			</div>
		);
	}
}