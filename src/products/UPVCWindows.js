import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { BsHeart, BsHeartFill, BsClipboard, BsClipboardCheck, BsTelephoneFill } from 'react-icons/bs';
import pvccupboard1 from '../images/pvccupboard1.webp';
import pvccupboard2 from '../images/pvccupboard2.webp';
import pvccupboard3 from '../images/pvccupboard3.png';
import pvccupboard4 from '../images/pvccupboard4.jpeg';
import pvccupboard5 from '../images/pvccupboard5.avif';

function PVCCupboards() {
  const cupboards = [
    { id: 1, name: 'G 011 Steel Doors', image: pvccupboard1, details: 'High-quality steel door with a sleek finish.', price: '$150', size: '200x80 cm', rating: 4.5 },
    { id: 2, name: 'G 013 Steel Doors', image: pvccupboard2, details: 'Durable and stylish steel door for modern interiors.', price: '$175', size: '210x85 cm', rating: 4.3 },
    { id: 3, name: 'G 018 Steel Doors', image: pvccupboard3, details: 'Elegant steel door with superior strength.', price: '$200', size: '220x90 cm', rating: 4.7 },
    { id: 4, name: 'G 019 Steel Doors', image: pvccupboard4, details: 'Premium steel door, ideal for contemporary homes.', price: '$225', size: '230x95 cm', rating: 4.6 },
    { id: 5, name: 'G 221 Steel Doors', image: pvccupboard5, details: 'Steel door with a classic design and robust build.', price: '$180', size: '210x80 cm', rating: 4.4 },
  ];

  return (
    <div className="container">
      <div className="row">
        {cupboards.map((cupboard) => (
          <div key={cupboard.id} className="col-md-4 mb-4 d-flex justify-content-center">
            <CupboardCard cupboard={cupboard} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .cupboard-card {
          overflow: hidden;
          width: 100%;
          max-width: 300px;
          position: relative;
        }

        .cupboard-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .icon-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          position: absolute;
          top: 10px;
          right: 10px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .cupboard-card:hover .icon-container {
          opacity: 1;
        }

        .overlay-buttons {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
        }

        .btn-overlay {
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          padding: 5px 10px;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}

function CupboardCard({ cupboard }) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({ email: '', phone: '' });
  const [submittedPhone, setSubmittedPhone] = useState(null);

  const handleLikeClick = () => setLiked(!liked);
  const handleCopyClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(cupboard.name);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleDetailsModalShow = () => setShowDetailsModal(true);
  const handleDetailsModalClose = () => setShowDetailsModal(false);

  const handleContactShow = () => {
    setShowDetailsModal(false); // Close details modal first
    setTimeout(() => setShowContactModal(true), 300); // Open contact modal after slight delay for smooth transition
  };
  const handleContactClose = () => setShowContactModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedPhone(formData.phone); // Display phone number with icon
  };

  return (
    <>
      <Card className="cupboard-card">
        <div className="icon-container">
          <div onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
            {liked ? <BsHeartFill size={20} color="red" /> : <BsHeart size={20} />}
          </div>
          <div onClick={handleCopyClick} style={{ cursor: 'pointer' }}>
            {copied ? <BsClipboardCheck size={20} color="black" /> : <BsClipboard size={20} />}
          </div>
        </div>
        <Card.Img variant="top" src={cupboard.image} alt={cupboard.name} />
        <div className="overlay-buttons">
          <Button variant="primary" className="btn-overlay" onClick={handleDetailsModalShow}>
            Product Details
          </Button>
        </div>
      </Card>

      {/* Product Details Modal */}
      <Modal show={showDetailsModal} onHide={handleDetailsModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{cupboard.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <img src={cupboard.image} alt={cupboard.name} style={{ width: '100%', marginBottom: '15px' }} />
  <p style={{ color: 'black' }}>{cupboard.details}</p>
  <p style={{ color: 'black' }}><strong style={{ color: 'black' }}>Price:</strong> {cupboard.price}</p>
  <p style={{ color: 'black' }}><strong style={{ color: 'black' }}>Size:</strong> {cupboard.size}</p>
  <p style={{ color: 'black' }}><strong style={{ color: 'black' }}>Rating:</strong> {cupboard.rating} ⭐</p>
</Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleDetailsModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleContactShow}>
            Contact Supplier
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Contact Supplier Modal */}
      <Modal show={showContactModal} onHide={handleContactClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Supplier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submittedPhone ? (
            <div className="text-center">
              <BsTelephoneFill size={20} color="green" /> <span>{submittedPhone}</span>
            </div>
          ) : (
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone" className="mt-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-4">
                Submit
              </Button>
            </Form>
          )}
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default PVCCupboards;

