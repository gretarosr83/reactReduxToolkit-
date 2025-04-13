import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./productComponent";

import { allProducts } from "../../redux/reducers/productsSlice";

import { AddProductForm } from "./addProduct";
import { allCategoriesState } from "../../redux/reducers/categoriesSlice";

export const ProductList = () => {
  const productsState = useSelector(allProducts);
  const categoriesState= useSelector(allCategoriesState);

  const dispatch = useDispatch();

  // if(getErrorState === true ){
  //   content= <p>"...ERROR"</p>
  // }else if( getIsLoadedState === true &&  getErrorState === false){
  //   content= <p>"Loading..."</p>
  // }else if(getIsLoadedState === false && getErrorState === false){
  //   content= getProductsState.map((product)=>{
  //       <ProductComponent key={product.id} product= {product}/>
  //   })
  // }
  const render = productsState.products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <>
        <section key={id} className="">
          <div className="ui small card" key={id}>
            {/* <Link to={`/product/${id}`}  id={id}> */}

            <div className="ui small images">
              <img src={image} alt={title} />
            </div>

            <div className="content ">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
            {/* </Link> */}
          </div>
        </section>
      </>
    );
  });

  return (
    <>
    <p><p/>
    <h4 align="left">PRODUCTS LIST</h4></p>
      <div class="ui segment">
        <div class="ui right dividing rail">
         {/* <div class="ui segment"> */}
            <div className="ui small segment">
              <AddProductForm />
            </div>
            
          {/* </div> */}
        </div>
       
        {/* <div className="ui segment"> */}
          <div className="ui cards">
            {
              render
              // <ProductComponent prod={productsState} />
            }
          </div>
        </div>
      {/* </div> */}
      
      
      
      
    </>
  );
};
