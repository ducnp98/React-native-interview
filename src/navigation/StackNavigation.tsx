import { createStackNavigator } from "@react-navigation/stack";
import IobScreen from "../screens/Iob";
import IobDetail from "../screens/IobDetail";

export type RootStackParamList = {
  Iob: undefined;
  IobDetail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Iob"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Iob" component={IobScreen} />
      <Stack.Screen name="IobDetail" component={IobDetail} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
