import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen'
import SearchScreen from '../screens/SearchScreen';
import { createStackNavigator } from '@react-navigation/stack'
import { SimplePokemon } from '../interfaces/pokemonInterface';

export type RootStackParamList = {
    HomeScreen: undefined;
    PokemonScreen: {
        simplePokemon: SimplePokemon;
        color: string; 
    };
    SearchScreen: undefined;
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
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation
