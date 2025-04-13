import {createSlice} from '@reduxjs/toolkit';


const initialState=[
    {
        id: 1,
        title:`Men's clothing`,
         
    },
    {
        id:2,
        title: `Women's clothing`
    },
    {
        id: 3,
        title: 'Electronics'
    },
    {
        id: 4,
        title: 'Jewelery'
    }
]

const categorySlice= createSlice({

    name: "categories",
    initialState,
    reducers:{
    }

});


export const allCategoriesState = (state)=>state.categories;

export default categorySlice.reducer;