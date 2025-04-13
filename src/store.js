import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./redux/reducers/productsSlice";
import usersReducer from './redux/reducers/userSlice';
import  categoryReducer      from './redux/reducers/categoriesSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    categories: categoryReducer
  },
});

// export default store;



// import  api  from './services/api'; // Import your RTK Query API
// const store = configureStore({
//   reducer: {
//      [api.reducerPath]: api.reducer,
     
//   },
//    middleware: (getDefaultMiddleware) =>
//      getDefaultMiddleware().concat(api.middleware),
// });

export default store;
