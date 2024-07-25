// src/App.jsx
import React, { useState, useEffect } from "react";
import * as petService from './services/petServices'; // Ensure this path is correct
import PetDetail from "./components/PetDetail"; // Ensure this path is correct
import PetList from "./src/components/PetList.jsx"; // Ensure this path is correct
import PetForm from "./src/components/PetForm.jsx";

const App = () => {
  const [petList, setPetList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

  // src/App.jsx

// src/App.jsx

const handleAddPet = async (formData) => {
  try {
    const newPet = await petService.create(formData);

    if (newPet.error) {
      throw new Error(newPet.error);
    }

    setPetList([newPet, ...petList]);
    setIsFormOpen(false);
  } catch (error) {
    // Log the error to the console
    console.log(error);
  }
};



  useEffect(() => {
    const fetchPets = async () => {
      try {
        const pets = await petService.index(); // Ensure this function fetches the pet data correctly

        if (pets.error) {
          throw new Error(pets.error);
        }

        setPetList(pets);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPets();
  }, []);

  const updateSelected = (pet) => {
    setSelected(pet);
  };

 // src/App.jsx

// src/App.jsx

return (
  <>
    <PetList
      petList={petList}
      updateSelected={updateSelected}
      handleFormView={handleFormView}
      isFormOpen={isFormOpen}
    />
    {isFormOpen ? (
      <PetForm handleAddPet={handleAddPet} />
    ) : (
      <PetDetail selected={selected} />
    )}
  </>
);
};
export default App;
