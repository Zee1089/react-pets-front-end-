// src/App.jsx
import React, { useState, useEffect } from "react";
import * as petService from './services/petServices'; // Ensure this path is correct
import PetDetail from "./components/PetDetail"; // Ensure this path is correct
import PetList from "./components/PetList.jsx"; // Ensure this path is correct

const App = () => {
  const [petList, setPetList] = useState([]);
  const [selected, setSelected] = useState(null);

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

  return (
    <>
      <PetList petList={petList} updateSelected={updateSelected} />
      <PetDetail selected={selected} />
    </>
  );
};

export default App;
