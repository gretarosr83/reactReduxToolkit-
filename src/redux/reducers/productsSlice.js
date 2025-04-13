
import axios from "axios";
import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { createAPI } from "@reduxjs/toolkit/query/react";

//Define a service using a base URL and expected endpoints

export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async (value, thunkApi) => {
    try {
      const config = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control_Allow-Methods": "GET, PUT, POST, PATCH, DELETE",
      };

      const res = await axios.get("https://fakestoreapi.com/products", config);

      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isloaded: false,
    products: [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
          rate: 4.1,
          count: 259,
        },
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
          rate: 4.7,
          count: 500,
        },
      },
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
          rate: 2.1,
          count: 430,
        },
      },
    ],
    product: null,
    error: false,
    posts: [],
  },
  reducers: {
    // postAdded: {
    //   reducer(state, action) {
    //     state.products.push(action.payload);
    //   },
    //   prepare(title, content, userId) {

    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         content,
    //         date: new Date().toISOString(),
    //         userId,
    //         reactions: {
    //           thumbsUp: 0,
    //           wow: 0,
    //           rocket: 0,
    //           cofee: 0,
    //         },
    //       },
    //     };
    //   },
    // },
    // reactionAdded(state, action) {
    //   const { postId, reaction } = action.payload;

    //   const existingPost = state.products.find((post) => post.id === postId);

    //   if(existingPost){
    //     existingPost.reactions[reaction]++;
    //   }
    // },

    productsAdded: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare(title,description,price,categoryId,image,userId) {
        return {
            payload:{
              id:nanoid(),
              title,
              description,
              price,
              categoryId,
              image,
              userId
            }
        };
      },
    },

    productAdded: (state, action) => {
      state.product = action.payload;
    },

    reset: (state) => {
      state.products = [];
      state.product = null;
      state.isloaded = false;
      state.error = false;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //   .addCase(getAllProducts.pending, (state) => {
  //     state.products.isloaded = true;
  //   })

  //   .addCase(getAllProducts.fulfilled, (state, action) => {
  //     state.products.isloaded = false;
  //     state.products.products = action.payload;
  //     state.products.error = false;
  //   })

  //   .addCase(getAllProducts.rejected, (state) => {
  //     state.products.error = true;
  //   });
  // },
});

export const allProducts = (state) => state.products;
// export const isloadedState= (state)=> state.products.isloaded;
// export const errorState = (state)=> state.products.error;

// console.log(isloadedState);

export const { productsAdded, productAdded, reset } = productsSlice.actions;
export default productsSlice.reducer;
