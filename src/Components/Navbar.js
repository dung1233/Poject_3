import React, { useEffect, useState } from 'react';


const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) { // Adjust the number based on when you want the header to become sticky
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  

  return (
    <div id="sticky-wrapper" className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`}>
      <header className={`header_area sticky-header ${isSticky ? 'sticky' : ''}`}>
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <a className="navbar-brand logo_h" href="index.html">
                <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home</a>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="category.html">Shop Category</a></li>
                      <li className="nav-item"><a className="nav-link" href="/Shop-Deatil">Product Details</a></li>
                      <li className="nav-item"><a className="nav-link" href="checkout.html">Product Checkout</a></li>
                      <li className="nav-item"><a className="nav-link" href="cart.html">Shopping Cart</a></li>
                      <li className="nav-item"><a className="nav-link" href="confirmation.html">Confirmation</a></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                      <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
                      <li className="nav-item"><a className="nav-link" href="tracking.html">Tracking</a></li>
                      <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item"><a href="#" className="cart"><span className="ti-bag"></span></a></li>
                  <li className="nav-item">
                    <button className="search" onClick={toggleSearch}>
                      <span className="lnr lnr-magnifier" id="search"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* Search Input Box */}
        <div className={`search_input ${isSearchOpen ? 'open' : ''}`} id="search_input_box" style={{ display: isSearchOpen ? 'block' : 'none' }}>
          <div className="container">
            <form className="d-flex justify-content-between">
              <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
              <button type="submit" className="btn"></button>
              <span className="lnr lnr-cross" id="close_search" title="Close Search" onClick={toggleSearch}></span>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
