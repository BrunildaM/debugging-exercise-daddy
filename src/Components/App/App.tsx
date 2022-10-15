
import LoadingAnimation from '../LoadingAnimation';
import ProductList from '../ProductList/ProductList';
import useApp from './useApp';
import './App.css'
import { gK, strings } from '../../utils/strings-english';


function App() {
  const { isLoading, products } = useApp();

    // console.log("Test");
    // console.log(products);
    // console.log("length");
    // console.log(products.length);
    // console.log("type");
    // console.log(typeof products);
    // console.log("array");
    // console.log(products['products']);
    // console.log("\n");
    // return;

  if (isLoading) return <LoadingAnimation />;
    // console.log("Test");
    // console.log(products);
    // console.log("length");
    // console.log(products.length);
    // console.log("type");
    // console.log(typeof products);
    // return;
  return (
    <div className="App product__list">
      <h2>{gK('products_title')}</h2>
      <ProductList products={products} />
    </div>
  )
}

export default App


