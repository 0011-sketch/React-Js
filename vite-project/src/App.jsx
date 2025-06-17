// import ArrowFunction from "./components/arrowFunction";
// import FunctionalComponent from "./components/functionalComponent";

import ProductList from "./components/products";
const dummyProductData = ["Product 1", "Product 2", "product 3"];

function App() {
  return (
    <div>
      <h4>App Component</h4>
      {/* <FunctionalComponent />
      <ArrowFunction /> */}
      <ProductList
        ListOfProducts={dummyProductData}
        name="someone"
        city="abc"
      />
    </div>
  );
}
export default App;
