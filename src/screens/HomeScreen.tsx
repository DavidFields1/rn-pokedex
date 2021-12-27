import React, { useEffect } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import PokemonList from '../components/PokemonList';
import { usePokemonFetch } from '../hooks/usePokemonFetch';
import { styles } from '../theme/appTheme';
import SearchButton from '../components/SearchButton';
import Loading from '../components/Loading';


const HomeScreen = () => {
    
    const { loading, simplePokemonList, loadPokemon } = usePokemonFetch();    

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <View>
            <Image 
                style={styles.pokeballBG}
                source={require('../assets/pokebola.png')}
            />
            <SearchButton />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <PokemonList simplePokemonList={simplePokemonList} loadPokemon={loadPokemon} />
            </View>
        </View>
    )
}

export default HomeScreen
