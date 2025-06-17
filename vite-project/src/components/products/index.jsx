import ProductItem from "./component/product-item";
import "./style.css";

// note: in normal html,css we give the class but in react js we need to use the className for class based components we use the class keyword
// so in function component if we use the  className it wont conflict with class name

function ProductList({ name, city, ListOfProducts }) {
  //   const { name, city } = props;
  //   console.log(name);

const flag = false;

 
 

  return (
    <div>
      <h3 className="title">Ecommerce Project</h3>
      {/* <ProductItem /> */}
      {/* terinary operator we need to use the curly brases  beacouse it is a dynamic values */}

      {
        flag? <h4>
        Name is {name} he is from belongs to city {city}
      </h4>:<h4>Hello</h4>
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
