import products from "../database/products";

export default function ProductDetail(props) {
  const id = props.match.params.product_id;

  const currentProduct = products.filter((product) => {
    if (product.id === id) {
      return true;
    } else {
      return false;
    }
  })[0];

  console.log("currentproduct:", currentProduct);

  return (
    <div>
      <h1>Produk detail</h1>

      <p>{currentProduct.title}</p>
      <p>{currentProduct.price}</p>
      <p>{currentProduct.location}</p>
      <p>{currentProduct.rating}</p>
    </div>
  );
}
