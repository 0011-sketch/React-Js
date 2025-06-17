// Both the components are in the same file there is no need to export it

import styles from "./product-item.module.css";

function ButtonComponent() {
  console.log(styles);
  return <button className={styles.buttonStyle}>click</button>;
}

function ProductItem({ singleProductItem, key }) {
  return (
    <div
      /*inline css*/ style={{
        padding: "20px",
        border: "2px solid red",
        marginBottom: "10px",
      }}
      key={key}
    >
      <h4 className={styles.productTitle}> {singleProductItem}</h4>
      <ButtonComponent />
    </div>
  );
}
export default ProductItem;
