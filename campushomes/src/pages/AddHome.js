import React, { useState } from 'react';
import axios from 'axios';

const AddPropertyPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/houses', formData);
      console.log('Property added successfully:', response.data);
    } catch (error) {
      console.error('There was an error adding the property!', error);
    }
  };

  return (
    <div className="add-property-page">
      <h2>Subir Vivienda</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddPropertyPage;
