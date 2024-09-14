import { createSlice } from '@reduxjs/toolkit'

// {id ,user, title ,description , status}


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
      data: [],
      todoCompleted:[],
      todoNotCompleted:[]
    },

    reducers: {
    
      addTodo: (state,action) =>{
        state.data.push(action.payload);
      },
      deleteTodo:(state,action)=>{
        state.data = state.data.filter(item => item.id !== action.payload);
      },
      updateTodo:(state,action)=>{
        const { id, title , description } = action.payload;
        const findTodo = state.data.find(item => item.id === id);
        if (findTodo) {
            findTodo.title = title; 
            findTodo.description = description; 
        }
      },
      updateStatus:(state,action)=>{
        const findTodo = state.data.find(item => item.id === action.payload);
        if (findTodo) {
            findTodo.status = "completed"; 
        }
      },
      getTodoByUser: (state, action) => {
        const user = localStorage.getItem('user')
        state.todoCompleted = state.data.filter(todo => todo.user === user && todo.status === 'completed');
        state.todoNotCompleted = state.data.filter(todo => todo.user === user && todo.status === 'NotCompleted');
      }
    },

  })

export const {addTodo,deleteTodo,updateTodo,updateStatus,getTodoByUser } = todoSlice.actions

export default todoSlice.reducer