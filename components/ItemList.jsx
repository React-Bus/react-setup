import React, { Component, PropTypes } from 'react'
import Item from './Item.jsx'

export default class ItemList extends Component {

	deleteItem(getRowId){
		console.log("edit row number" + getRowId);
		this.props.onDelete(getRowId);
   }
   
   render() {
      return (
	  <div className="col-md-8 float-left">
		  <table className="table">
			  <thead>
				<tr>
				  <th>#</th>
				  <th>First Name</th>
				  <th>Last Name</th>
				  <th>Username</th>
				  <th>Password</th>
				</tr>
			  </thead>
			  <tbody>
				{this.props.addItems.map(item =>
				   <Item key = {item.id}  {...item}/>
				)}
				</tbody>
			 </table>
		</div>
      )
   }  

}