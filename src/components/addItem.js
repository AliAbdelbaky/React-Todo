import React, { Component } from 'react';
import '../css/addItem.css';
class AddItem extends Component {
	//-- Data
	state = {
		name: '',
		age: ''
	};
	//- HandleSubmit Func
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state);
		this.setState({ name: '', age: '' });
	};
	//- HandleCHange Func
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	render() {
		return (
			<div className="addItem">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Enter name .."
						id="name"
						onChange={this.handleChange}
						value={this.state.name}
					/>
					<input
						type="number"
						placeholder="Enter age .."
						id="age"
						onChange={this.handleChange}
						value={this.state.age}
					/>
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}
export default AddItem;
