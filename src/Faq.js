import React, { useState } from "react";

const faqData = [
    {
      question: "What types of doors and cupboards do you offer?",
      answer: "We offer a wide variety of doors, including interior, exterior, and custom-made doors. Our cupboard range includes kitchen, wardrobe, and storage cupboards with customizable materials and finishes."
    },
    {
      question: "Can I customize the size and design of my doors and cupboards?",
      answer: "Yes, we offer custom sizes and designs to fit your space and style. Contact us for a consultation to discuss your specific needs."
    },
    {
      question: "What materials are available for doors and cupboards?",
      answer: "We provide various material options including wood, metal, glass, and composite materials. Each material offers unique aesthetics and durability."
    },
    {
      question: "How do I place an order?",
      answer: "You can place an order through our website by selecting your preferred products and customization options. For custom orders, contact us directly, and our team will assist you."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes, we offer professional installation services. Our team of experts will ensure that your doors and cupboards are installed safely and correctly."
    }
  ];
  

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>FAQ'S</h2>
      </div>

      <div style={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index} style={styles.faqItem}>
            <div
              style={styles.questionContainer}
              onClick={() => toggleFAQ(index)}
            >
              <p style={styles.question}>{item.question}</p>
              <span style={styles.icon}>
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <p style={styles.answer}>{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto"
  },
  header: {
    marginBottom: "30px"
  },
  image: {
    width: "400px",
    height: "300px",
    borderRadius: "30%",
    objectFit: "cover",
    marginBottom: "10px"
  },
  title: {
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "5px"
  },
  subtitle: {
    fontSize: "1em",
    color: "black"
  },
  faqContainer: {
    textAlign: "left",
    marginTop: "20px"
  },
  faqItem: {
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
    cursor: "pointer"
  },
  questionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  question: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "black" 
    
  },
  icon: {
    fontSize: "1.5em"
  },
  answer: {
    marginTop: "10px",
    fontSize: "0.9em",
    color: "#555"
  }
};

export default FAQ;
