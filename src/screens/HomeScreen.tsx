import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import PokemonList from '../components/PokemonList';
import { usePokemonFetch } from '../hooks/usePokemonFetch';
import { styles } from '../theme/appTheme';


const HomeScreen = () => {
    
    const { loading, simplePokemonList, loadPokemon } = usePokemonFetch();    

    return (
        <View>
            <Image 
                style={styles.pokeballBG}
                source={require('../assets/pokebola.png')}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <PokemonList simplePokemonList={simplePokemonList} loadPokemon={loadPokemon} />
            </View>
            
        </View>
    )
}

export default HomeScreen
