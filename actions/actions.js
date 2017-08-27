export const ADD_ITEM = 'ADD_ITEM'

let nextTodoId = 0;

export function addItem(text) {
   return {
      type: ADD_ITEM,
      id: nextTodoId++,
      text
   };
}
