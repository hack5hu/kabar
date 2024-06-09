import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userDetails: {},
  todoData: [],
};

const globalSlice = createSlice({
  name: 'kabar',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUserDetails: (state, action) => {
      // console.log('user details : ', action);
      state.userDetails = JSON.parse(action.payload);
    },
    setTodoList: (state, action) => {
      // console.log('user details : ', action);
      state.todoData = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const {setIsLogin, setUserDetails, setTodoList} = globalSlice.actions;