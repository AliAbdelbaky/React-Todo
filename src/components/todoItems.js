import React from 'react';
import '../css/todoItems.css';
const TodoItems = (props) => {
	//- receave Data From Props
	const { items, deleteItem } = props;
	const Listitems = items.length ? (
		items.map((item) => {
			return (
				<div className="item" key={item.id}>
					<span>{item.name}</span>
					<span>{item.age}</span>
					<span className="deleteBtn" onClick={() => deleteItem(item.id)}>
						x
					</span>
				</div>
			);
		})
	) : (
		<p>Write Your First Todo</p>
	);
	return (
		<div className="list-items">
			<div className="item">
				<span>Name</span>
				<span>Age</span>
				<span>Action</span>
			</div>
			{Listitems}
		</div>
	);
};
export default TodoItems;
