import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import StackNavigation from "./StackNavigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IobScreen from "../screens/Iob";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="IobScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="CoinScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Coin",
          tabBarIcon: ({ color }) => (
            <Icon name="currency-usd" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="IobScreen"
        component={IobScreen}
        options={{
          tabBarLabel: "Iob",
          tabBarIcon: ({ color }) => (
            <Icon name="car-back" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="MenuScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <Icon name="menu" color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
