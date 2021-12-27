import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { SimplePokemon } from '../interfaces/pokemonInterface';

export type RootStackParamList = {
    HomeScreen: undefined;
    PokemonScreen: {
        simplePokemon: SimplePokemon;
        color: string; 
    };
}

const Stack = createStackNavigator<RootStackParamList>()

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'white' }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation
