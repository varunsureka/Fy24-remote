// src/contexts/TravelContext.js
import React, { createContext, useState } from 'react';

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [travelPlans, setTravelPlans] = useState([]);

  // Task: Implement function to add a travel plan
  // This function should take a new travel plan object and add it to the list of travel plans.
  const addTravelPlan = (plan) => {
    setTravelPlans([...travelPlans, plan]);
  };

  // Task: Implement function to edit a travel plan
  // This function should take an index of the plan to be edited and the new plan object,
  // and update the corresponding plan in the list of travel plans.
  const editTravelPlan = (index, newPlan) => {
    const editedTravelPlans = [...travelPlans]
    editedTravelPlans[index] = newPlan;
    setTravelPlans(editedTravelPlans);

  };

  // Task: Implement function to delete a travel plan
  // This function should take an index of the plan to be deleted
  // and remove the corresponding plan from the list of travel plans.
  const deleteTravelPlan = (index) => {
    const deletePlan = travelPlans[index]
    setTravelPlans(travelPlans.filter((plan) => plan !== deletePlan))
  };

  // Task: Implement function to clear all travel plans
  // This function should remove all travel plans from the list, making it empty.
  const clearTravelPlans = () => {
    setTravelPlans([])
  };

  return (
    <TravelContext.Provider
      value={{ travelPlans, addTravelPlan, editTravelPlan, deleteTravelPlan, clearTravelPlans }}
    >
      {children}
    </TravelContext.Provider>
  );
};

