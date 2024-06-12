// src/components/Products.js
import React from 'react';
import './Products.css';
import breadcrumbImage from './p_images/breadcrumb.jpg'; // Update with your breadcrumb image path
import product1 from './p_images/product1.jpg'; // Update with your product images paths
import product2 from './p_images/product2.jpg';
import product3 from './p_images/product3.jpg';
import product4 from './p_images/product3.jpg';
import product5 from './p_images/product2.jpg';
import product6 from './p_images/product1.jpg';

const Products = () => {
  return (
    <div className="products-page">
      <div className="breadcrumb-container" style={{ backgroundImage: `url(${breadcrumbImage})` }}>
        <h1>Products</h1>

      </div>
      <div className="products-content">
        <aside className="sidebar">
          <h3>Product Categories</h3>
          <div className="category-list">
            <li><a href="#">Garment Care</a></li>
            <li><a href="#">Home & Living</a></li>
            <li><a href="#">Jewelry & Accessories</a></li>
            <li><a href="#">Occasion Gifts</a></li>
            <li><a href="#">Office & Stationery</a></li>
            <li><a href="#">Personalised Gifts</a></li>
            <li><a href="#">Uncategorized</a></li>
          </div>
          <h3>Filter by Colors</h3>
          <div className="color-filter-list">
            <li><input type="checkbox" id="apricot" name="apricot" /> <label htmlFor="apricot">Apricot</label></li>
            <li><input type="checkbox" id="artichoke" name="artichoke" /> <label htmlFor="artichoke">Artichoke</label></li>
            <li><input type="checkbox" id="arylide" name="arylide" /> <label htmlFor="arylide">Arylide yellow</label></li>
            <li><input type="checkbox" id="cultured" name="cultured" /> <label htmlFor="cultured">Cultured</label></li>
            <li><input type="checkbox" id="dark-ivory" name="dark-ivory" /> <label htmlFor="dark-ivory">Dark Ivory</label></li>
          </div>
        </aside>
        <div className="products-grid">
          <div className="product-item">
            <img src={product1} alt="Product 1" />
            <div className="product-info">
              <h3>Always my Sister Art Heart</h3>
              <p className="product-price">$74 <span className="old-price">$107</span></p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="product-item">
            <img src={product2} alt="Product 2" />
            <div className="product-info">
              <h3>Anniversary Gifts by Year</h3>
              <p className="product-price">$60 <span className="old-price">$101</span></p>
              <div className="rating">⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="product-item">
            <img src={product3} alt="Product 3" />
            <div className="product-info">
              <h3>Beaded Prayer Bracelet</h3>
              <p className="product-price">$138</p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="product-item">
            <img src={product4} alt="Product 4" />
            <div className="product-info">
              <h3>Better Together Pizza</h3>
              <p className="product-price">$112 <span className="old-price">$189</span></p>
              <div className="rating">⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="product-item">
            <img src={product5} alt="Product 5" />
            <div className="product-info">
              <h3>Chair Perpetual Calendar</h3>
              <p className="product-price">$107 <span className="old-price">$135</span></p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="product-item">
            <img src={product6} alt="Product 6" />
            <div className="product-info">
              <h3>Disney Birthday Parade</h3>
              <p className="product-price">$146 <span className="old-price">$184</span></p>
              <div className="rating">⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
