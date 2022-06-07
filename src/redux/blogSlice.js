import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blog: [
        {
            id: 0,
            title: "First Blog",
            dateTime: "Today"
        },
        {
            id: 1,
            title: "Second Blog",
            dateTime: "Today"
        }
    ]
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = blogSlice.actions

export default blogSlice.reducer