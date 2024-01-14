import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import LoginScreen from "../screens/Auth/LoginScreen";

const Stack = createStackNavigator();

export default function LoginNavigator() {
  return (
    <Stack.Navigator initialRouteName="Willkommen">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login">{props => <LoginScreen {...props} handleLogin={handleLogin} />}</Stack.Screen>
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  );
}
