import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();

  const showAllProducts = () => navigate("/products");

  return (
    <div className="productsPage">
      <h2>Our Products</h2>
      <div className="departmentOptions">
        <span>Filter By Department:</span>
        <button onClick={showAllProducts}>All</button>
        <button>Tool</button>
        <button>Garden</button>
        <button>Hardware</button>
      </div>
    </div>
  );
};

export default ProductsPage;
