import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductComponent = ({prop}) => {

  console.log(prop.prod);

    // const  { id, title, image, price, category,description} = prop.products;
    return (<></>
      // <div className="ui card" id={id}>
      //   <Link to={`/product/${id}`} state={{product: prop.product}} id={id}>
      //     <div className="ui fluid card">
      //       <div className="ui small images">
      //         <img src={image} alt={title} />
      //       </div>
      //     </div>
      //     <div className="content ">
      //       <div className="header">{title}</div>
      //       <div className="meta price">${price}</div>
      //       <div className="meta">{category}</div>
      //     </div>
      //   </Link>
      // </div>
    );
    
  };



