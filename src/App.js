import React, { Component } from 'react';
import './app.css';
import TodoItems from './components/todoItems';
import AddItem from './components/addItem';
class App extends Component {
	// Data
	state = {
		items: [
			{ id: 1, name: 'ali', age: 22 },
			{ id: 2, name: 'Ahmed', age: 25 },
			{ id: 3, name: 'Kareem', age: 26 }
		]
	};
	//-
	//- Delete Function
	deleteItem = (id) => {
		/* Secound way
        // let items = this.state.items;
        // let i = items.findIndex((item) => item.id === id);
        // items.splice(i, 1);
        // this.setState({ items });
    */
		let items = this.state.items.filter((item) => {
			return item.id !== id;
		});
		this.setState({ items });
	};
	//-------------
	//- add item
	addItem = (item) => {
		item.id = Math.random();
		let items = this.state.items;
		items.push(item);
		this.setState({ items });
	};
	render() {
		return (
			<div className="App">
				<div className="app-headerContainer">
					<h2 className="app-header">Todo App</h2>
					<AddItem addItem={this.addItem} />
				</div>
				<div className="task-list">
					<h2>Your List</h2>
					<TodoItems items={this.state.items} deleteItem={this.deleteItem} />
				</div>
			</div>
		);
	}
}

export default App;
