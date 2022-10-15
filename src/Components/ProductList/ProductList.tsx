import { Product as ProductType } from "../../utils/types";
import Product from "../Product";
import "./style.css";

type Props = {
  products: ProductType[] | null;
};

function ProductList({ products }: Props) {

  // console.log("Test");
  // console.log(products);
  // console.log("length");
  // console.log(products.length);
  // console.log("type");
  // console.log(typeof products);

  if (products['products'] === null || products['products'] === undefined) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <ul>
        {products['products'].map((product: ProductType) => (
          <Product product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;




