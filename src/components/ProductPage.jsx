import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../pages/Footer';
import { products } from '../data/Products';
import '../components/ProductPage.css';

const ProductPage = ({ type }) => {
  const filtered = products.filter(product => product.type === type);
  const [imageSizes, setImageSizes] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const onImageLoad = (id, e) => {
    setImageSizes(prev => ({
      ...prev,
      [id]: {
        width: e.target.naturalWidth,
        height: e.target.naturalHeight,
      },
    }));
  };

  return (
    <div className='menubody'>
    <div>
      {/* <h1 style={{ textAlign: 'center' }}>{type.toUpperCase()}</h1> */}
      <div
        className="productgriddiv"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}
      >
        {filtered.map((product, index) => {
          const size = imageSizes[product.id];
          const style =
            size && size.height > size.width
              ? { maxHeight: '400px', width: 'auto', height: 'auto' }
              : { maxWidth: '100%', height: 'auto' };

          return (
            <div
              key={product.id}
              className="productdiv"
              data-aos="fade-up"
              data-aos-delay={index * 100} // staggered animation
            >
              <img
                className="productimg"
                src={product.image}
                alt={product.name}
                onLoad={e => onImageLoad(product.id, e)}
                style={style}
              />
              <p className='productname'>{product.name}</p>
              <p className='productprice'>€{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ProductPage;