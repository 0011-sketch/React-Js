// Both the components are in the same file there is no need to export it

function ButtonComponent() {
  return <button>click</button>;
}

function ProductItem({ singleProductItem, key }) {
  return (
    <div key={key}>
      <h4> {singleProductItem}</h4>
      <ButtonComponent />
    </div>
  );
}
export default ProductItem;
