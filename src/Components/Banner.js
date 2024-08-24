import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: (
      <div className="owl-next">
        <img src={`${process.env.PUBLIC_URL}/img/banner/next.png`} alt="Next" />
      </div>
    ),
    prevArrow: (
      <div className="owl-prev">
        <img src={`${process.env.PUBLIC_URL}/img/banner/prev.png`} alt="Previous" />
      </div>
    ),
  };

  return (
    <section className="banner-area">
      <div className="container">
        <div
          className="row fullscreen align-items-center justify-content-start"
          style={{ height: "748px" }}
        >
          <div className="col-lg-12">
            <Slider {...settings} className="active-banner-slider">
              {/* Slide 1 */}
              <div className="row single-slide align-items-center d-flex">
                <div className="col-lg-5 col-md-6">
                  <div className="banner-content">
                    <h1>
                      Nike New <br />
                      Collection!
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <div className="add-bag d-flex align-items-center">
                      <a className="add-btn" href="#">
                        <span className="lnr lnr-cross"></span>
                      </a>
                      <span className="add-text text-uppercase">Add to Bag</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-img">
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/img/banner/banner-img.png`}
                      alt="Banner"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="row single-slide align-items-center d-flex">
                <div className="col-lg-5 col-md-6">
                  <div className="banner-content">
                    <h1>
                      Nike New <br />
                      Collection!
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <div className="add-bag d-flex align-items-center">
                      <a className="add-btn" href="#">
                        <span className="lnr lnr-cross"></span>
                      </a>
                      <span className="add-text text-uppercase">Add to Bag</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-img">
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/img/banner/banner-img.png`}
                      alt="Banner"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Banner;
