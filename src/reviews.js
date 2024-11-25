import React from 'react';
import profile1 from './images/profile1.jpg';
import profile2 from './images/profile2.jpg';
import profile3 from './images/profile3.jpg';
import review1 from './images/review1.jpg';
import review2 from './images/review2.jpg';
import review3 from './images/review3.jpg';
import review4 from './images/review4.jpg';
import review5 from './images/review5.jpg';

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    profileImage: profile1, 
    reviewText: "I am very satisfied with my new PVC doors and cupboard. They are sturdy, durable, and look great in my home. Highly recommend!",
    images: [review1, review2],
  },
  {
    id: 2,
    name: "Sarah Lee",
    profileImage: profile2, 
    reviewText: "The cupboards are exactly what I was looking for. The installation was easy, and they have transformed my space!",
    images: [review3], 
  },
  {
    id: 3,
    name: "Michael Green",
    profileImage: profile3, 
    reviewText: "Great quality and fantastic customer service. My PVC door installation was smooth, and it looks fantastic!",
    images: [review4, review5],
  },
];

const ReviewPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Reviews</h1>
      {reviewsData.map((review) => (
        <div key={review.id} style={styles.review}>
          <div style={styles.reviewHeader}>
            <img src={review.profileImage} alt="Customer Profile" style={styles.profileImage} />
            <div style={styles.name}>{review.name}</div>
          </div>
          <div style={styles.reviewBody}>
            <p>{review.reviewText}</p>
            {review.images.map((image, index) => (
              <img key={index} src={image} alt={`Review Image ${index + 1}`} style={styles.reviewImage} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    paddingTop: '20px',
  },
  title: {
    textAlign: 'center',
    color: 'black',
  },
  review: {
    backgroundColor: 'white',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    
  },
  reviewHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  profileImage: {
    width: '50px',
    height: '50px', 
    borderRadius: '50%',
    objectFit: 'cover',
  },
  name: {
    fontWeight: 'bold',
    marginLeft: '10px',
    fontSize: '1.2em',
  },
  reviewBody: {
    marginTop: '15px',
    fontSize: '1em',
    color: 'black'
  },
  reviewImage: {
    width: '300px',  // Fixed width for all review images
    height: '200px', // Fixed height for all review images
    objectFit: 'cover', // Ensures that the image is scaled properly
    marginTop: '10px',
    marginRight: '10px', // Adds space between images if there are multiple
  },
};

export default ReviewPage;
