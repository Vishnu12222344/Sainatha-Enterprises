import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal, Button } from 'react-bootstrap';
import './App.css';

function Header() {
  // Define an array of quotes
  const quotes = [
    "Your dream home is just a step away. Get a free quote today!",
    "We offer the best prices for quality products. Let us know what you need!",
    "Your satisfaction is our priority. Contact us for a personalized quote.",
    "Looking for the best deals? We have the perfect solution for you!",
    "Affordable solutions for your home improvement needs. Request a quote!"
  ];

  // Track the number of clicks and the visibility of the quote modal
  const [clickCount, setClickCount] = useState(0);
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  // Function to handle the "Get A Quote" button click
  const handleQuoteClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    setIsQuoteVisible((prevVisibility) => !prevVisibility); // Toggle modal visibility
  };

  // Get the quote based on the number of clicks
  const currentQuote = quotes[clickCount % quotes.length];  // Cycle through the quotes

  return (
    <Container fluid className="header-container">
      <Row className="align-items-center">
        <Col xs={4} sm={2} md={2} lg={2} className="text-center text-sm-start">
          <div className="logo-text">Sri Sainatha Enterprises</div>
        </Col>
        <Col xs={8} sm={10} md={10} lg={10} className="text-center text-sm-end">
          <div className="contact-info d-flex flex-wrap align-items-center justify-content-end">
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i> 6302486745
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i> ssnenterprises2022@gmail.com
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i> Mon-Sat: 9am - 7pm
            </div>
            <button className="quote-button" onClick={handleQuoteClick}>
              Get A Quote
            </button>
          </div>
        </Col>
      </Row>

      {/* Quote Modal */}
      <Modal show={isQuoteVisible} onHide={handleQuoteClick} centered>
        <Modal.Header closeButton>
          <Modal.Title>Get A Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{currentQuote}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleQuoteClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Header;
