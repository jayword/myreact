import React, {Component} from 'react';

export default class Webapi extends Component{
	constructor(){
		super();
		this.state = {
			loading: false,
			character: []
		}
	}
	componentDidMount(){
		this.setState({loading: true, style: {color: "#5255f9", fontSize: 26}});
		fetch("https://api.zalando.com/articles")
		.then((response) => {
			response.json();
		})
		.then((data) => {
			this.setState = {
				loading: false,
				character: data
			}
		})
		
		
	}
	render(){
		const style = {
			fontSize: 20,
			color: "#21f548"
		}
		const text = this.state.loading ? "API name Loading..." : this.state.character.name
		return(
			<div>
				<span style={this.state.style}>{text}</span>
				<h3 style={style}>Just hold on!</h3>
			</div>
		);
	}
}