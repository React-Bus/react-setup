import React, { Component, PropTypes } from 'react'

export default class Item extends Component {

   
   render() {
      return (
         <tr>
			<td scope="row">{this.props.id + 1}</td>
            <td>{this.props.text.firstname}</td>
			<td>{this.props.text.lastname}</td>
			<td>{this.props.text.username}</td>
			<td>{this.props.text.password}</td>
         </tr>
      )
   }

}