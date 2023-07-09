import React from "react";
import 'react-native-gesture-handler';
import {enableLatestRenderer} from 'react-native-maps';
import StackNavigation from "./src/navigation/StackNavigation";

enableLatestRenderer();

function App() {
  return (
    <StackNavigation />
  );
}

export default App;
