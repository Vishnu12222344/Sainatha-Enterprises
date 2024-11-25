import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import wdoor1 from './images/wdoor1.jpg';
import upvcwindow4 from './images/upvcwindows4.jpg';
import pvccupboard from './images/pvccupboard.png';
import pvcdoor from './images/pvcdoor.jpg';
import upvcdoor1 from './images/upvcdoor1.jpeg';
import wpcframe from './images/wpcframe.avif';

const Collections = () => {
  const [activeCollection, setActiveCollection] = useState('wpcDoors');

  const collections = {
    steelDoors: {
      name: 'PVC',
      products: [
        { id: 1, name: 'PVC Cupboards', images: [pvccupboard], link: '/products/PVCCupboards' },
        { id: 2, name: 'PVC Doors', images: [pvcdoor, pvcdoor], link: '/products/PVCDoors' },
      ],
    },
    steelWindows: {
      name: 'UPVC',
      products: [
        { id: 1, name: 'UPVC Windows', images: [upvcwindow4, upvcwindow4, upvcwindow4, upvcwindow4, upvcwindow4], link: '/products/UPVCWindows' },
        { id: 2, name: 'UPVC Doors', images: [upvcdoor1, upvcdoor1, upvcdoor1], link: '/products/UPVCDoors' },
      ],
    },
    wpcDoors: {
      name: 'WPC',
      products: [
        { id: 1, name: 'WPC Doors', images: [wdoor1, wdoor1, wdoor1, wdoor1], link: '/products/WPCDoors' },
        { id: 2, name: 'WPC Frames', images: [wpcframe], link: '/products/WPCFrames' },
      ],
    },
  };

  const renderCollectionProducts = () => {
    const products = collections[activeCollection].products;
    return products.map((product) => (
      <Link to={product.link} key={product.id} style={productCardStyle}>
        <div style={productImageContainerStyle}>
          <img
            src={product.images[0]} // Displaying first image for preview
            alt={product.name}
            style={productImageStyle}
          />
        </div>
        <p style={productTextStyle}>{product.name}</p>
      </Link>
    ));
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}><b>Collections</b></h2>
      <div style={collectionsNavStyle}>
        {Object.keys(collections).map((collectionKey) => (
          <button
            key={collectionKey}
            onClick={() => setActiveCollection(collectionKey)}
            style={{
              ...buttonStyle,
              borderBottom: activeCollection === collectionKey ? '3px solid red' : 'none',
              color: activeCollection === collectionKey ? 'red' : 'white',
            }}
          >
            {collections[collectionKey].name}
          </button>
        ))}
      </div>
      <div style={productsContainerStyle}>
        {renderCollectionProducts()}
      </div>
    </div>
  );
};

// Styles (unchanged)
const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#323333',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '30px',
  fontSize: '24px',
  color: 'white',
};

const collectionsNavStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  marginBottom: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  fontSize: '16px',
  outline: 'none',
  border: 'none',
  transition: 'color 0.3s ease',
};

const productsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px',
};

const productCardStyle = {
  textDecoration: 'none', // Removes link underline
  color: 'inherit', // Inherits text color
  textAlign: 'center',
  border: '1px solid #ddd',
  padding: '10px',
  width: '220px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const productImageContainerStyle = {
  position: 'relative',
};

const productImageStyle = {
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '4px',
  transition: 'transform 0.3s ease',
};

const productTextStyle = {
  marginTop: '10px',
  fontSize: '16px',
  color: '#555',
};

export default Collections;
