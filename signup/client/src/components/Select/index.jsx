import React, { useState } from 'react';
import axios from 'axios';
import img from './logo.png';

const Select = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [timetable, setTimetable] = useState(null);

  const classes = ['mb109', 'lab-3', 'step-hall'];
  const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'satur'];

  const handleSubmission = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/getSchedule', {
        selectedClass,
        selectedDay,
      });

      // Set the timetable state with the retrieved schedule
      setTimetable(response.data);
    } catch (error) {
      console.error('Error retrieving schedule:', error);
    }
  };

  return (
    <div>
      <nav style={{ backgroundColor: '#fceed1', padding: '30px' }}>
        <img src={img} alt="Logo" style={{ maxWidth: '800px', maxHeight: '800px' }} />
      </nav>
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#f8f8f8', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <label style={{ display: 'block', margin: '10px' }}>
          Select Class:
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="" disabled>Select Class</option>
            {classes.map((classItem, index) => (
              <option key={index} value={classItem}>
                {classItem}
              </option>
            ))}
          </select>
        </label>

        <label style={{ display: 'block', margin: '10px' }}>
          Select Day:
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="" disabled>Select Day</option>
            {days.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={handleSubmission}
          style={{
            backgroundColor: '#4e0eff',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
            marginLeft: '10px',
          }}
        >
          Submit
        </button>

        {timetable && (
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h2>Utility Chart for {selectedClass} on {selectedDay}:</h2>
            <ul>
              {Object.keys(timetable).map((subject, index) => (
                <li key={index}>{subject}: {timetable[subject]}</li>
              ))}
            </ul>
          </div>
        )}

        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Class - {selectedClass}, Day - {selectedDay}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Select;

