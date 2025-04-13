import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    email: "john@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: {
      firstname: "john",
      lastname: "doe",
    },
    phone: "1-570-236-7033",
  },
  {
    id: 2,
    email: "morrison@gmail.com",
    username: "mor_2314",
    password: "83r5^_",
    name: {
      firstname: "david",
      lastname: "morrison",
    },
    phone: "1-570-236-7033",
  },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    selectAllUsers(state, action) {
      state.users.push(action.payload);
    },

    usersAdded: {
      reducer(state, action) {
        state.users.push(action.payload);
      },

      prepare(name, username, password, email, phone) {
        return {
          payload: {
            id: nanoid(),
            name,
            username,
            password,
            email,
            phone,
          },
        };
      },
    },
  },
});

export const allUsers = (state) => state.users;

export const {usersAdded, selectAllUsers}= usersSlice.actions;
export default usersSlice.reducer;