import { useState } from "react";
import ProductItem from "./component/product-item";
import "./style.css";

const initialState = true;

function ProductList({ name, city, ListOfProducts }) {

  const [flag, setFlag] = useState(initialState)
  // this initial value can be anything 
  // it can be null 
  // it can be[]
  // it can be { }
  // it can be ""
  // it can be 10
  // it can be a boolean


  function handleToggleText() {
    setFlag(!flag)
  }

  return (
    <div>
      <h3 className="title">Ecommerce Project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>
      {
        flag ? <h4>{name} and {city}</h4> : <h4>Hello world</h4>
      }

      <ul>
        {ListOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
