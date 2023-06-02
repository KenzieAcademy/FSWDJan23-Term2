const ProductSummary = ({ product }) => {
  return (
    <div className="productSummary">
      {product.name} - ${product.price}{" "}
      <span className="productArrow">&gt;</span>
    </div>
  );
};

export default ProductSummary;
