import { useState, useEffect } from "react";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/site.css';

export default function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (err) {
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2 className="text-center mt-5">Loading products...</h2>;
  if (error) return <h2 className="text-center text-danger mt-5">{error}</h2>;

  return (
    <>
      <h1 className="text-center text-uppercase">Store</h1>
      <h2 className="m-5 text-center text-uppercase">Product Gallery</h2>
      <section className="d-flex flex-wrap justify-content-center p-1">
        {products.map(product => (
          <div key={product.id} className="card store-card m-2" style={{ width: "18rem" }}>
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
