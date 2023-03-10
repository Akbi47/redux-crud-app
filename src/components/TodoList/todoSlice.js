// const initState = [
//   { id: 1, name: 'study fast', completed: true, priority: 'Medium' },
//   { id: 2, name: 'eat strongly', completed: false, priority: 'Medium' },
//   { id: 3, name: 'love honestly', completed: false, priority: 'High' },
// ];
// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [...state, action.payload]
//     case 'todoList/toggleTodoStatus':
//       return state.map(todo =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       )
//     default:
//       return state;
//   }
// };
import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'study fast', completed: true, priority: 'Medium' },
    { id: 2, name: 'eat strongly', completed: false, priority: 'Medium' },
    { id: 3, name: 'love honestly', completed: false, priority: 'High' },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload)
      if (currentTodo) { currentTodo.completed = !currentTodo.completed };

    }
  }
})
