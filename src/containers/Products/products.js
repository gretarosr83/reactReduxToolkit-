import { useSelector, useDispatch } from "react-redux";
import productsReducer from "../../redux/reducers/productsSlice";
import ProductsGRID from "../table";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

const Product = () => {
  //   const [products, setProducts] = useState();

  const { isloaded, productsList, error } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsReducer);
    // setProducts(productsReducer);
  }, [dispatch]);

  const listofProducts = productsList ? productsList : { message: "No Items" };
  const colheader = ["PRODUCT", "QUANTITY", "IMAGE", "PRICE"];

  return (
    <Container>
      {/* <ProductsGRID data={productsList} columns={colheader}></ProductsGRID> */}
    </Container>
  );
};

export default Product;
