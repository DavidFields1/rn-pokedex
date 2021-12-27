import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterface';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';
import { capitalize } from 'lodash';

interface Props {
    pokemon: SimplePokemon
}

const windowWidth = Dimensions.get('window').width;

const PokemonCard = ({ pokemon }: Props) => {

    const [cardColor, setCardColor] = useState('grey')
    const isMounted = useRef(true);
    const navigator = useNavigation()

    useEffect(() => {
        try {
            ImageColors.getColors(pokemon.sprite).then(colors => {
    
                if (!isMounted.current) return
    
                (colors.platform == 'ios')
                    ? setCardColor(colors.background || 'grey')
                    : setCardColor(colors.darkMuted || 'grey')
            })
        } catch (error) {
            console.log(error)
        }
        return () => { 
            isMounted.current = false; 
        }
    }, [])

    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => navigator.navigate('PokemonScreen', { simplePokemon: pokemon, color: cardColor })}
        >
            <View style={{ ...styles.cardContainer, width: windowWidth * 0.4, backgroundColor: cardColor }}>
                <View>
                    <Text style={styles.name}>
                        {capitalize(pokemon.name)}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={styles.pokeballContainer}>
                    <Image 
                        source={ require('../assets/pokebola-blanca.png') } 
                        style={styles.pokeball}
                    />
                </View>
                <FadeInImage uri={pokemon.sprite} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        top: 5,
        left: 10,
    },
    pokeball: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25,
    },
    image: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
    pokeballContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5,
    }

})


export default PokemonCard
