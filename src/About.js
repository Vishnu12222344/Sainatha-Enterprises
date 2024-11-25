import React, { useState } from "react";
import "./About.css";
import about1 from './images/about1.jpg';
import about2 from './images/about2.jpg';
import about3 from './images/about3.jpg';
import about4 from './images/about4.jpg';
import about5 from './images/about5.jpg';
import about6 from './images/about6.webp';

function AboutSection() {
  const [showMore, setShowMore] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleVisitingCard = () => {
    setShowCard(!showCard);
  };

  return (
    <section className="about-section">
      <div className="content-wrapper">
        <article className="text-section">
          <h1 className="title">Sri Sainatha Enterprises</h1>
          <p>
            Sri Sainatha PVC Doors in Tirupati is one of the leading businesses in the door dealers' sector. Known for its exceptional service and quality products, the enterprise has carved a niche in the industry.
          </p>

          <h2>Location and Overview</h2>
          <p>
            Established in 2012, Sri Sainatha PVC Doors in Akkarampalli, Tirupati, has emerged as a top player in its field. With a prime location and unmatched services, it caters to a wide customer base across the region.
          </p>

          {showMore && (
            <>
              <h2>Overview</h2>
              <p>
                This establishment is recognized for offering excellent services in various categories, including door customization, quality assurance, and prompt delivery.
              </p>

              <h2>Products and Services</h2>
              <p>
                Sri Sainatha PVC Doors provides a broad array of products and services, ensuring customer satisfaction and meeting industry standards.
              </p>
            </>
          )}

          <button
            className="view-more-button"
            onClick={toggleShowMore}
            aria-expanded={showMore}
          >
            {showMore ? "View Less Details" : "View More Details"}
          </button>
        </article>

        <section className="features-section">
          <h2>Why Choose Us?</h2>
          <FeaturesList />
        </section>
      </div>

      {/* Visiting Card Button */}
      <button className="visiting-card-button" onClick={toggleVisitingCard}>
        {showCard ? "Hide Visiting Card" : "Show Visiting Card"}
      </button>

      {/* Visiting Card */}
      {showCard && (
        <div className="visiting-card">
          <h3>Sri Sainatha Enterprises</h3>
          <p>Address: Akkarampalli, Tirupati, Andhra Pradesh</p>
          <p>Phone: +91 6302486745</p>
          <p>Email: ssnenterprises2022@gmail.com</p>
        </div>
      )}
    </section>
  );
}

function FeaturesList() {
  const features = [
    {
      text: "Quality Products",
      image: about1,
    },
    {
      text: "100% Satisfaction Guarantee",
      image: about3,
    },
    {
      text: "Highly Professional Staff",
      image: about2,
    },
    {
      text: "3 Days Delivery",
      image: about4,
    },
    {
      text: "Accurate Testing Processes",
      image: about5,
    },
    {
      text: "Professional and Qualified Team",
      image: about6,
    },
  ];

  return (
    <ul className="features-list">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          <img src={feature.image} alt={feature.text} className="feature-image" />
          <div className="feature-text">
            <i className="fas fa-check-circle" aria-hidden="true"></i>
            {feature.text}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AboutSection;
