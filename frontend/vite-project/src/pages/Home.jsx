import { useEffect, useState } from 'react';
import "./Home.css";

import api from '../services/api';
 

import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import ProductList from '../components/ProductList';

function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {

    let url = '/products';

    if (category) {
      url += `?category=${category}`;
    }

    const response = await api.get(url);

    setProducts(response.data.products);
    setNextCursor(response.data.nextCursor);
  };

  const loadMore = async () => {

    if (!nextCursor) return;

    let url =
      `/products?cursorUpdatedAt=${nextCursor.updated_at}&cursorId=${nextCursor.id}`;

    if (category) {
      url += `&category=${category}`;
    }

    const response = await api.get(url);

    setProducts(prevProducts => [
      ...prevProducts,
      ...response.data.products
    ]);

    setNextCursor(response.data.nextCursor);
  };

  return (
    <div className="home-container">
  <Header />

  <div className="filter-container">
    <CategoryFilter
      category={category}
      setCategory={setCategory}
    />
  </div>

  <ProductList products={products} />

 <div className="load-container">
  <button className="load-btn" onClick={loadMore}>
    Load More
  </button>
</div>
</div>
  );
}

export default Home;