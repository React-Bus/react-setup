import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
   render() {
      return (
         <div className="form-wrapper">
			 <form>
			  <div className="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="text" ref = 'firstname' className="form-control" placeholder="Password">
			  </div>
			  <div className="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="text" ref = 'lastname' className="form-control" placeholder="Password">
			  </div>
			  <div className="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="text" ref = 'username' className="form-control" placeholder="Password">
			  </div>
			  <button type="submit" className="btn btn-primary" onClick = {(e) => this.handleClick(e)}>
				   Add
			  </button>
				
			</form>
         </div>
      )
   }

   handleClick(e) {

      const field1 = this.refs.firstname;
	  const firstname = field1.value.trim();
      const field2 = this.refs.lastname;
	  const lastname = field2.value.trim();
	  const field3 = this.refs.username;
	  const username = field3.value.trim();
	  const textobj = {
			firstname,
			lastname,
			username
	  };
	  console.log(textobj);
      this.props.onAddClick(textobj);
	  field1.value='';
	  field2.value='';
	  field3.value='';
   }
}