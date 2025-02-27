// src/components/PetForm.jsx

import { useState } from 'react';

const PetForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    breed: '',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    props.handleAddPet(formData);
    setFormData({ name: '', age: '', breed: '' });
  };

  return (
    <div className="form-container">
  <form onSubmit={handleSubmit}>
    <label htmlFor="name"> Name </label>
    <input
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
    <label htmlFor="age"> Age </label>
    <input id="age" name="age" value={formData.age} onChange={handleChange} />
    <label htmlFor="breed"> Breed </label>
    <input
      id="breed"
      name="breed"
      value={formData.breed}
      onChange={handleChange}
    />
    <button type="submit">
      {props.selected ? 'Update Pet' : 'Add New Pet'}
    </button>
  </form>
</div>
  );
};

export default PetForm;
