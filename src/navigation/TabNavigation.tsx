import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import CoinScreen from "../screens/Coin";
import IobScreen from "../screens/Iob";
import MenuScreen from "../screens/Menu";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <NavigationContainer>
     <Tab.Navigator >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CoinScreen" component={CoinScreen} />
      <Tab.Screen name="IobScreen" component={IobScreen} />
      <Tab.Screen name="MenuScreen" component={MenuScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
