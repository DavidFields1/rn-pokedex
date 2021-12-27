import React, { useEffect, useState } from 'react'
import { View, Text, Platform, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterface';

const SearchScreen = () => {
    const { top } = useSafeAreaInsets();
    const { pokemonList, isFetching } = usePokemonSearch();
    const [searchValue, setSearchValue] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState<SimplePokemon[]>([])

    useEffect(() => {
        try{
            if(searchValue.length === 0) setFilteredPokemon([]);
            if(isNaN(Number(searchValue))){
                setFilteredPokemon(pokemonList.filter(pokemon => pokemon.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())))
            } else {
                const pokemonId = pokemonList.find(pokemon => pokemon.id === searchValue);
                setFilteredPokemon(
                    pokemonId ? [pokemonId] : []
                )
            }
            
        } catch(error){
            console.log(error)
        }

    }, [searchValue])

    if(isFetching) {
        return (
            <Loading />
        )
    }

    return (
        <View style={{ 
            flex: 1,
            // marginTop: Platform.OS === 'ios' ? top : top + 10,
            paddingTop: Platform.OS === 'ios' ? top : top + 10,
            marginHorizontal: 10,
            backgroundColor: '#fff'
        }}>
            <SearchInput
                onDebounce={ value => setSearchValue(value) }
             />

            <FlatList
                ListHeaderComponent={(
                    <Text style={[styles.title, { marginTop: top + 70, marginBottom: 10, marginHorizontal: 12 }]}>
                        {searchValue}
                    </Text>
                )}  
                numColumns={2}
                data={filteredPokemon}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default SearchScreen