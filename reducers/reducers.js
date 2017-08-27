import { combineReducers } from 'redux'
import { ADD_ITEM } from '../actions/actions'

function addItem(state, action) {
   switch (action.type) {
	
      case ADD_ITEM:
         return {
            id: action.id,
            text: action.text,
         }
			
      default:
      return state
   }
}

function addItems(state = [], action) {
   switch (action.type) {
	
      case ADD_ITEM:
         return [
            ...state,
            addItem(undefined, action)
         ]
			
      default:
      return state
   }
}

const crudApp = combineReducers({
   addItems
})

export default crudApp