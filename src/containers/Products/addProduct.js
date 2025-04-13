import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { productsAdded } from "../../redux/reducers/productsSlice";
import { allCategoriesState } from "../../redux/reducers/categoriesSlice";

export const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onCategoryChanged = (e) => setCategoryId(e.target.value);
  const onImageChanged = (e) => setImage(e.target.value);

  const dispatch = useDispatch();

  const allcategories= useSelector(allCategoriesState);

  console.log(allcategories)

  const categoriesOptions = allcategories.map((cId) => (
         <option key={cId.id} value={cId.id} >{cId.title}</option>
  ));

  const onSaveNewProduct = () => {
    if (title && description && price && image) {
      dispatch(productsAdded(title, description, price, categoryId, image));

      setTitle("");
      setDescription("");
      setCategoryId("");
      setImage("");
      setPrice("");
    }
  };

  const canSave= Boolean(title) && Boolean(price) && Boolean(categoryId)




  return (
    <section>
      <h4 class="ui dividing header">Add New Product </h4>
      <form class="ui form">
        <div class="field">
          <label htmlFor="title">Title</label>

          <div class="field">
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={onTitleChanged}
              placeholder="Title"
            />
          </div>
        </div>
        <div class="field">
          <label htmlFor="description">Description</label>
          <div class="fields">
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={onDescriptionChanged}
              placeholder="Description"
            />
          </div>
        </div>

        <div class="field">
          {/* <label htmlFor="category">Category</label> */}
          <select
            class="ui fluid dropdown"
            name="category"
            id="category"
            onChange={onCategoryChanged}
            value={categoryId}
           
          >
             <option value="">Select Category</option>
                    {categoriesOptions}
          </select>
        </div>
        <div className="field">
          <label htmlFor="price">Price</label>
          <div className="field">
            <input
              type="text"
              name="price"
              id="price"
              value={price}
              onChange={onPriceChanged}
              placeholder="Price"
            />
          </div>
        </div>

        <div class="field">
          <label htmlFor="image">Image</label>
          <div className="field">
            <input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={onImageChanged}
            />
          </div>
        </div>

        <div class="ui button" tabindex="0" onClick={onSaveNewProduct} disabled={!canSave}>
          Submit Order
        </div>
      </form>
    </section>
  );
};
