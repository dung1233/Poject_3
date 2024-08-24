import React from 'react'
import Detailbanner from '../Components/Details/Detailbanner';
import Productimg from '../Components/Details/Productimg';
import Description from '../Components/Details/Description';
import Related from '../Components/Details/Related';
import Footer from '../Components/Details/Footer';
const ShopDetail = () => {
    return (
        <div>
            <Detailbanner />
            <Productimg />
            <Description />
            <Related />
            <Footer />
        
        </div>
      );
}

export default ShopDetail