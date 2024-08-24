import React, { useState } from 'react';

const ProductDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'img/category/s-p1.jpg',
    'img/category/s-p1.jpg',
    'img/category/s-p1.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="product_image_area">
      <div className="container">
        <div className="row s_product_inner">
          <div className="col-lg-6">
            <div className="s_Product_carousel owl-carousel owl-theme owl-loaded">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: `translate3d(-${currentIndex * 540}px, 0px, 0px)`,
                    transition: "0.5s",
                    width: images.length * 540,
                  }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`owl-item ${index === currentIndex ? 'active' : ''}`}
                      style={{ width: 540, marginRight: 0 }}
                    >
                      <div className="single-prd-item">
                        <img className="img-fluid" src={image} alt={`Slide ${index}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="owl-controls">
                <div className="owl-nav">
                 
                </div>
                <div className="owl-dots">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`owl-dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    >
                      <span />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">
              <h3>Faded SkyBlu Denim Jeans</h3>
              <h2>$149.99</h2>
              <ul className="list">
                <li>
                  <a className="active" href="#">
                    <span>Category</span>: Household
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Availability</span>: In Stock
                  </a>
                </li>
              </ul>
              <p>
                Mill Oil is an innovative oil-filled radiator with the most modern
                technology. If you are looking for something that can make your
                interior look awesome, and at the same time give you the pleasant
                warm feeling during the winter.
              </p>
              <div className="product_count">
                <label htmlFor="qty">Quantity:</label>
                <input
                  type="text"
                  name="qty"
                  id="sst"
                  maxLength={12}
                  defaultValue={1}
                  title="Quantity:"
                  className="input-text qty"
                  readOnly
                />
                <button
                  onClick={() => setCurrentIndex(quantity + 1)}
                  className="increase items-count"
                  type="button"
                >
                  <i className="lnr lnr-chevron-up" />
                </button>
                <button
                  onClick={() => setCurrentIndex(quantity - 1)}
                  className="reduced items-count"
                  type="button"
                >
                  <i className="lnr lnr-chevron-down" />
                </button>
              </div>
              <div className="card_area d-flex align-items-center">
                <a className="primary-btn" href="#">
                  Add to Cart
                </a>
                <a className="icon_btn" href="#">
                  <i className="lnr lnr lnr-diamond" />
                </a>
                <a className="icon_btn" href="#">
                  <i className="lnr lnr lnr-heart" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
