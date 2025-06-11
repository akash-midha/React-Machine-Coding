import logo from './logo.svg';
import './App.css';
import { ITEMS_PER_PAGE, PRODUCT_URL } from './constants';
import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch(PRODUCT_URL);
      const json = await data.json();
      setProducts(json.products);
    }
    catch (error) {
      console.log(`Errror in fetching data due to: ${error}`)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const pageChangeHandler = (n) => {
    setCurrentPage(n);
  }

  return (
    <div className="App">
      {products.length < 1
        ? <div>
          <h2>No Products Found</h2>
        </div>
        : <div className='products'>
          <div className='product-cards'>
            {products.slice(start, end).map((pro) => {
              return <ProductCard key={pro.id} image={pro.thumbnail} title={pro.title} price={pro.price} />
            })}
          </div>

          <div className='pagination'>
            {currentPage > 0 && <span className='icon-button' onClick={() => setCurrentPage(prev => prev - 1)}>◀️</span>}
            {[...Array(totalPages).keys()].map((n) => {
              return <button className={`page-button ${n === currentPage ? 'active-btn' : ''}`} onClick={() => pageChangeHandler(n)}>{n + 1}</button>
            })}
            {currentPage < totalPages - 1 && <span className='icon-button' onClick={() => setCurrentPage(prev => prev + 1)}>▶️</span>}
          </div>
        </div>}
    </div>
  );
}

export default App;
