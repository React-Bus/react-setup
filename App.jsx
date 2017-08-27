import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from './actions/actions'

import AddItem from './components/AddItem.jsx'
import ItemList from './components/ItemList.jsx'

class App extends Component {
   render() {
      const { dispatch, visibleItems } = this.props
		
      return (
         <div className="mt-2">
            <AddItem
               onAddClick = {text =>
               dispatch(addItem(text))}
            />
				
            <ItemList addItems = {visibleItems} />
         </div>
      )
   }
   
   getI(id){
	console.log("From App" + id);
   }
}

function select(state) {
   return {
      visibleItems: state.addItems
   }
}

export default connect(select)(App)