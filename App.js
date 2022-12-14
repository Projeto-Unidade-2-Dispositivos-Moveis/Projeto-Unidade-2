import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import AddBookScreen from "./screens/AddBookScreen";
import LoginScreen from "./screens/LoginScreen";
import BookScreen from "./screens/BookScreen";


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />

        <Stack.Screen name='BookScreen' component={BookScreen} options={{ headerShown: false }} />
        <Stack.Screen name='AddBookScreen' component={AddBookScreen} option={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}