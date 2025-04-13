import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProductsGRID(prop) {
  const [columns, setColumns] = useState();
  const [data, setData] = useState();

  useEffect((prop) => {
    setColumns(prop.columns);
    setData(prop.data);
  }, []);

  const getColumnHeader = (prop) => {
    const cols = prop.columns.map((column) => {
      return (
        <>
          <Col>${column}</Col>
        </>
      );
    });
  };

  const getCell = (prop) => {
    data.map((row) => {
      return (
        <>
          <Row>
            ${getColumnHeader(row)}
          </Row>
        </>
      );
    });
  };
}


export default ProductsGRID;
