import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: 'p1',
      title: 'My First Book',
      price: 6,
      description: "The first book i ever wrote",
    },
    {
      id: 'p2',
      title: 'My second Book',
      price: 8,
      description: "The second book i ever wrote",
    },
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => {
          return <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        })}

      </ul>
    </section>
  );
};

export default Products;
