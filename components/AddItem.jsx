import React, { Component, PropTypes } from 'react'

export default class AddItem extends Component {
   render() {
      return (
        <div className="form-wrapper col-md-4 float-left">
			  <div className="form-group">
				<label htmlFor="firstname">Firstname</label>
				<input type="text" ref = 'firstname' className="form-control" placeholder="Firstname" />
			  </div>
			  <div className="form-group">
				<label htmlFor="lastname">Lastname</label>
				<input type="text" ref = 'lastname' className="form-control" placeholder="Lastname" />
			  </div>
			  <div className="form-group">
				<label htmlFor="username">Username</label>
				<input type="text" ref = 'username' className="form-control" placeholder="Username" />
			  </div>
			  <div className="form-group">
				<label htmlFor="password">Password</label>
				<input type="password" ref = 'password' className="form-control" placeholder="Password" />
			  </div>
			  <button className="btn btn-primary" onClick = {(e) => this.handleClick(e)}>
				   Add
			  </button>
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
	  const field4 = this.refs.password;
	  const password = field4.value.trim();
	  const textobj = {
			firstname,
			lastname,
			username,
			password
	  };
	  console.log(textobj);
      this.props.onAddClick(textobj);
	  field1.value='';
	  field2.value='';
	  field3.value='';
	  field4.value='';
   }
}