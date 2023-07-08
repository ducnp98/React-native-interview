import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import StackNavigation from "./StackNavigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="IobStack"
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
          name="IobStack"
          component={StackNavigation}
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
    </NavigationContainer>
  );
}

export default TabNavigation;
