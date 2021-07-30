import React, {Component} from 'react';
import Condfunc from './condfunc';

export default class Condrend extends Component{
	constructor(){
		super();
		this.state = {
			isLoading: true,
			unreadmess: ["a","b","c","d","e"],
			isLoggedin: false
		}
		this.meclick = this.meclick.bind(this);
	}
	
	componentDidMount(){
		setTimeout(() => {
			this.setState({
				isLoading: false
			});
		},5000);
	}
	meclick(){
		this.setState((previs) => {
			return({
				isLoggedin: !previs.isLoggedin
			});
		});
	}
	render(){
		let buttext = this.state.isLoggedin ? "Log In":"Log Out";
		let disptext = this.state.isLoggedin ? "Logged Out":"Logged In";
		return(
			<div>
				<Condfunc myCall = {this.state.isLoading}/>
				{this.state.unreadmess.length > 0 ? <h2>You have {this.state.unreadmess.length} unread messages inside inbox!</h2> : <h2>Sorry!...You have no messages inside inbox.</h2>}
				<h2>You have {disptext} successfully!</h2>
				<button onClick={this.meclick} style={{cursor: "pointer"}}>{buttext}</button>
			</div>
		);
	}
}