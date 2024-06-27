import React from 'react';
import './AddPropertyPage.css';

const AddPropertyPage = () => {
  return (
    <div className="add-property-page">
      <h2>Subir Vivienda</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" required />
        </div>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddPropertyPage;