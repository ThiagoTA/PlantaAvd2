import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { NameScreen } from '../pages/NameScreen';
import { Welcome } from "../pages/Welcome";
import { StartScreen } from "../pages/StartScreen";
import { Home } from "../pages/Home";

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle:  {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen 
                name="Welcome"
                component={Welcome}
            />
            <Screen 
                name="NameScreen"
                component={NameScreen}
            />
            <Screen 
                name="StartScreen"
                component={StartScreen}
            />
            <Screen 
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}