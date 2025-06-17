// import ArrowFunction from "./components/arrowFunction";
// import FunctionalComponent from "./components/functionalComponent";

//styling react js
// Css frameworks like [material Ui,Ant design, tailwind css,section ui]
import "./App.css";
import ProductList from "./components/products";
const dummyProductData = ["Product 1", "Product 2", "product 3"];

function App() {
  return (
    <div>
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
