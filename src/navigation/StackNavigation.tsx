import { createStackNavigator } from "@react-navigation/stack";
import IobDetail from "../screens/IobDetail";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";

export type RootStackParamList = {
  TabNavigation: undefined;
  IobDetail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigation"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="IobDetail" component={IobDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
