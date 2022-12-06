import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import FitScreen from '../pages/FitScreen';
import RestScreen from '../pages/RestScreen';
import WorkoutScreen from '../pages/WorkoutScreen';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerTransparent: true, headerShown: false, title: "" }}/>
            <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerTransparent: true, headerShown: false, title: "" }}/>
            <Stack.Screen name="FitScreen" component={FitScreen} options={{ headerTransparent: true, headerShown: false, title: "" }}/>
            <Stack.Screen name="RestScreen" component={RestScreen} options={{ headerTransparent: true, headerShown: false, title: "" }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default StackNavigator;