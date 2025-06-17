import ProductItem from "./component/product-item";

function ProductList({ name, city, ListOfProducts }) {
  //   const { name, city } = props;
  //   console.log(name);
  return (
    <div>
      <h3>Ecommerce Project</h3>
      {/* <ProductItem /> */}
      <h4>
        Name is {name} he is from belongs to city {city}
      </h4>
      <ul>
        {ListOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
