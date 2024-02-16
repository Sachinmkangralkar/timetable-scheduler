import React from 'react';
import { Link } from 'react-router-dom';
import img from './logo.png';

const Main = () => {
  const subjects = [
    "Subject and Teacher Allotment",
    "Class and Lab Room Allotment",
    "Instructor Allotment",
    "Free Slot Searching",
    "PDF Generator",
    "Faculty Load Calculation",
  ];

  return (
    <body style={{ backgroundColor: '', margin: 0, fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ backgroundColor: '#fceed1', padding: '30px' }}>
        <img src={img} alt="Logo" style={{ maxWidth: '800px', maxHeight: '800px' }} />
      </nav>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to the Automatic time table generator</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {subjects.map((text, index) => (
            <button
              key={`module${index + 1}`}
              className={`button button-${index + 1}`}
              style={{
                backgroundColor: `#3bb19b`, 
                padding: '30px',
                borderRadius: '80px',
                cursor: 'pointer',
                border: 'thin',
                fontSize: '40px'
              }}
            >
              {text}
            </button>
          ))}
          <Link
            to="/login"
            className="button button-chart"
            style={{
              backgroundColor: `#3bb19b`, 
                color: '#fff',
                padding: '30px',
                borderRadius: '80px',
                cursor: 'pointer',
                border: 'none',
                fontSize: '40px'
            }}
          >
            Classroom and Lab utility chart
          </Link>
        </div>
      </div>
    </body>
  );
};

export default Main;
