// src/components/PetList.jsx
import React from 'react';

const PetList = (props) => {
    const pets = props.petList.map((pet) => (
        <li key={pet._id}>
            <a onClick={() => props.updateSelected(pet)}>{pet.name}</a>
        </li>
    ));

    return (
        // PetList.jsx

<div className="sidebar-container">
  <h1>Pet List</h1>
  <div className="list-container">
    {!props.petList.length ? (
      <h2>No Pets Yet!</h2>
    ) : (
      <ul role="list">{pets}</ul>
    )}
  </div>
  <button onClick={props.handleFormView}>
    {props.isFormOpen ? 'Close Form' : 'New Pet'}
  </button>
</div>

    );
};

export default PetList;
