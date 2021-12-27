import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParamList } from '../navigation/StackNavigation'
import usePokemonInfo from '../hooks/usePokemonInfo';
import PokemonDetails from '../components/PokemonDetails';
import { capitalize } from 'lodash';

interface Props extends StackScreenProps<RootStackParamList ,'PokemonScreen'> {}

const PokemonScreen = ({ route }:Props) => {
    const { simplePokemon, color } = route.params;
    const { id, name, sprite } = simplePokemon;
    const navigator = useNavigation()
    const { top } = useSafeAreaInsets();
    const { pokemonInfo, loading } = usePokemonInfo(id);

    return (
        <View>
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
                
            }}>
                {/* back button */}
                <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => navigator.goBack()}
                    style={{ ...styles.backButton, marginTop: top + 10 }}
                >
                    <Icon name="arrow-back-outline" size={30} color="white" />
                </TouchableOpacity>

                {/* name & id  */}
                <View style={{ marginTop: top + 80, alignSelf: 'flex-start' }}>
                    <Text style={{ ...styles.name }}>{capitalize(name)}</Text>
                    <Text style={{ ...styles.id }}>#{id}</Text>
                </View>

                {/* pokeball */}

                <Image 
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />


                {/* pokemon sprite */}
                <FadeInImage 
                    uri={sprite}
                    style={styles.pokemonImage}
                />


                {/* Pokemon info */}

            </View>
            <View style={{ height: 340 }}>
                {
                    false ? (
                        <ActivityIndicator size={80} color={color} style={{ alignSelf: 'center', marginTop: 60 }} />
                    ) : (
                        <PokemonDetails pokemon={pokemonInfo}/>
                    )
                            
                }
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        borderBottomStartRadius: 190,
        borderBottomEndRadius: 190,
        alignItems: 'center',

    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 999,
    },
    image: {
        width: 200,
        height: 200,
    },
    name: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 20
    },
    id: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 20
    },
    pokeball: {
        width: 250,
        height: 250,
        top: -37,
        zIndex: 999,
        opacity: 0.5,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        top: 75,
        zIndex: 999,
    },
})


export default PokemonScreen
