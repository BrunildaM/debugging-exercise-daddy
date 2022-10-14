import { Product as ProductType } from "../../utils/types";
import Product from "../Product";
import "./style.css";

type Props = {
  products: ProductType[] | null;
};

function ProductList({ products }: Props) {
  if (products === null) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <ul>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;


