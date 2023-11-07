import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Details from "../screens/Details";

const Navigation: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Welcome} name="Welcome" />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Details} name="Details" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
