import React from 'react';
import './Footer.css';
import logo1 from './images/logo1.jpg'; // Replace with the actual path to your logo image

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={logo1} alt="Sri Sainatha EnterPrises" className="footer-logo" />
        <p>
        Sri Sainatha Pvc Doors in Tirupati is one of the leading businesses in the Door Dealers. Also known for PVC Door Dealers, Door Dealers, PVC Cupboard Dealers, PVC Fibre Door Dealers, PVC Door Fitting Dealers, Decorative PVC Door Dealers, Cupboard Dealers, PVC Strip Door Dealers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Sri Sainatha Pvc Doors, Tirupati
        </p>
      </div>
      <div className="footer-section">
        <h3>Address</h3>
        <p>Shop No 1-51, Karakambadi Road, Akkarampalli, Tirupati - 517507 (Beside Madhav Nagar Arch)
        </p>
        <p>
          +91 6302486745
          +91 7989098204

        </p>
        <p>ssenterprises2022@gmail.com</p>
      </div>
      <div className="footer-section">
        <h3>Links</h3>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About us</a></li>
          <li><a href="/Products">Products</a></li>
          <li><a href="/Faq">FAQ</a></li>
          <li><a href="/Contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
