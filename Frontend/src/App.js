import React, { useState } from 'react';
import './App.css';

function App() {
  // Define student information
  const student = {
    name: 'John Doe',
    id: '123456'
  };

  const [cloudData, setCloudData] = useState({
    cloudName: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCloudData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", cloudData);
    setCloudData({
      cloudName: '',
      description: ''
    });
  };
  return (
    <div style={{ backgroundColor : "#CECDB2" , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>
        Unit 16: Cloud Computing Assignment 01
        </h2>
        <span style={{marginTop:'30px'}}>
          Student Name: {student.name}
        </span>
        <span style={{marginTop:'12px'}}>
          Student ID: {student.id}
        </span>
        <hr/>
        <div className="form-container">
        <h2 className="form-title">Enter Cloud Information</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            name="cloudName"
            placeholder="Cloud Name"
            value={cloudData.cloudName}
            onChange={handleChange}
          />
          <textarea
            className="form-input"
            name="description"
            placeholder="Description"
            value={cloudData.description}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>    
    </div>
  );
}

export default App;
