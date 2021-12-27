import React from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'
import PokemonCard from './PokemonCard'
import { SimplePokemon } from '../interfaces/pokemonInterface';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props{
    simplePokemonList: SimplePokemon[]
    loadPokemon: () => void
}

const PokemonList = ({ simplePokemonList, loadPokemon }: Props) => {
    const { top } = useSafeAreaInsets();
    
    return (
        <>
            <FlatList
                ListHeaderComponent={(
                    <Text style={[styles.title, { marginTop: top + 10, marginBottom: 10, marginHorizontal: 12 }]}>
                        Pokedex
                    </Text>
                )}  
                numColumns={2}
                data={simplePokemonList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} />
                )}
                showsVerticalScrollIndicator={false}
                
                // infinite scroll
                onEndReached={loadPokemon}
                onEndReachedThreshold={0.5}
                    
                ListFooterComponent={(
                    <ActivityIndicator 
                    style={{ height: 80 }}
                    size="large" 
                    color="grey" 
                    />
                )}
            />
        </>
    )
}

export default PokemonList
