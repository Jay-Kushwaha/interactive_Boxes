import React from 'react';

function Footer({ total }) {
  return (
    <div className="footer">
      <div className="footer-info">
        <span className="delivery">Free Delivery</span>
        <span className="total">Total : ${total}.00 USD</span>
      </div>
      <button className="add-to-cart">
        &#43; Add to Cart
      </button>
      <p className="powered">© Powered by Pumper</p>
    </div>
  );
}

export default Footer;
