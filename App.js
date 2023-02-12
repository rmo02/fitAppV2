import {FitnessContext} from './src/context/FitnessContext';
import StackNavigator from "./src/routes/StackNavigator";
import React from 'react';

export default function App() {
  return (
      <FitnessContext>
        <StackNavigator />
      </FitnessContext>
  );
}
