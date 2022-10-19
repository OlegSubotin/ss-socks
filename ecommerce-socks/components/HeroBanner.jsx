import React from 'react';
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {

  const onBuyBtnClick = () => {
    window.scrollTo({
      top: 550,
      behavior: 'smooth',
    });
  };

  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>
          {heroBanner.smallText}
        </p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="socks" className='hero-banner-image' />
        <div>
          <button type="button" onClick={() => onBuyBtnClick()}>
            {heroBanner.buttonText}
          </button>
          <div className='desc'>
            <h5>Опис</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HeroBanner