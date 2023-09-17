import './ProductContainer.css'

const ProductContainer = (props) => {
  return (
    <section className="products_section">
      <h1 className="products_title">Nuestros Productos:</h1>
      <div className="products_container">
         {props.children}
      </div>
    </section>
  );
};

export {ProductContainer};
