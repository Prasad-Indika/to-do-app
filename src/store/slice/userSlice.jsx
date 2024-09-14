import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
      data: [],
    },

    reducers: {
     
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },

      
      addUser: (state,action) =>{
        state.data.push(action.payload);
      }
    },

  })

export const {incrementByAmount, addUser } = userSlice.actions

export default userSlice.reducer