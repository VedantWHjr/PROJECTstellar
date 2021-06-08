import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import {DailyPic} from './screens/DailyPic';
import {SpaceShip} from './screens/SpaceShip';
import {StarMap} from './screens/StarMap';

const Stack = createStackNavigator();

export default function nope() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = 'Home' screenOptions ={{headerShown: true}}>
    <Stack.Screen name = 'Home' component = {HomeScreen} />
    <Stack.Screen name = 'Daily Picture' component = {DailyPic} />
    <Stack.Screen name = 'Space Ship' component = {SpaceShip} />
    <Stack.Screen name = 'Star Map' component = {StarMap} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
