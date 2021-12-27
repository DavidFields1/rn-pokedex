import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { CompletePokemon } from '../interfaces/pokemonInterface';
import { FadeInImage } from './FadeInImage';
import PokemonStats from './PokemonStats';
import { capitalize } from "lodash";

interface Props {
    pokemon: CompletePokemon
}

const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{ ...StyleSheet.absoluteFillObject, marginTop: '-50%' }}
        >
            <View
                style={styles.container}
            >
                <View style={{ marginHorizontal: '0%' }}>
                    {/* types */}
                    <View>
                        <View style={{alignItems:'center'}}>
                            <View style={{ flexDirection: 'row', alignItems:'center'}} >
                                <Icon name='earth-outline' size={25} color={'black'} style={{ paddingTop: 10}} />
                                <Text style={styles.title}> Types </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 7 }}>
                            {
                                pokemon.types && (
                                    pokemon.types.map((type, index) => (
                                        <Text key={index} style={styles.normalText}>
                                            {capitalize(type.type.name)}
                                        </Text>
                                        
                                )))
                            }
                            </View>
                        </View>
                    </View>

                    {/* weight */}
                    <View>
                        <View style={{alignItems:'center'}}>
                            <View style={{ flexDirection: 'row', alignItems:'center'}} >
                                <Icon name='barbell-outline' size={25} color={'black'} style={{ paddingTop: 10}} />
                                <Text style={styles.title}> Weight </Text>
                            </View>
                            <Text style={styles.normalText}> {pokemon.weight} Kg </Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: '0%' }} >
                    {/* abilities */}
                    <View style={{alignItems:'center'}}>
                        <View style={{ flexDirection: 'row', alignItems:'center'}} >
                            <Icon name='build-outline' size={25} color={'black'} style={{ paddingTop: 10}} />
                            <Text style={styles.title}> Abilities </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 7 }}>
                        {
                            pokemon.abilities && (
                                pokemon.abilities.map((ability, index) => (
                                    <Text key={index} style={styles.normalText}>
                                        {capitalize(ability.ability.name)}
                                    </Text>
                                    
                            )))
                        }
                        </View>
                    </View>

                    {/* weight */}
                    <View style={{alignItems:'center'}}>
                            <View style={{ flexDirection: 'row', alignItems:'center'}} >
                                <Icon name='analytics-outline' size={25} color={'black'} style={{ paddingTop: 10}} />
                                <Text style={styles.title}> Height </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 7 }}>
                                <Text style={styles.normalText}> {pokemon.height} M </Text>
                            </View>
                        </View>
                </View>

            <View>
                    
                </View>
            </View>
            {/* sprites */}
            <View>
                <Text style={[styles.title, { marginLeft: 12 }]}> Sprites </Text>
                <ScrollView 
                    horizontal 
                    style={styles.sprites}
                    showsHorizontalScrollIndicator={false}
                >
                    {   
                        pokemon.sprites && (
                            <View style={styles.basicSpriteContainer}>
                                <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprite} />
                            </View>
                        )
                    }
                    {
                        pokemon.sprites && (
                            <View style={styles.basicSpriteContainer}>
                                <FadeInImage uri={pokemon.sprites.back_default} style={styles.basicSprite} />
                            </View>
                        )
                    }
                    {
                        pokemon.sprites && (
                            <View style={styles.basicSpriteContainer}>
                                <FadeInImage uri={pokemon.sprites.front_shiny} style={styles.basicSprite} />
                            </View>
                        )
                    }
                    {
                        pokemon.sprites && (
                            <View style={styles.basicSpriteContainer}>
                                <FadeInImage uri={pokemon.sprites.back_shiny} style={styles.basicSprite} />
                            </View>
                        )
                    }
                </ScrollView>
            </View>

            {/* stats */}
            <View>
                <PokemonStats stats={pokemon.stats} />
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        marginTop: '56%',
        width: '90%',
        backgroundColor: 'white',
        marginHorizontal: '5%',
        paddingBottom: 12,
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
        marginTop: 12
    },
    normalText: {
        fontSize: 16,
        marginRight: 10
    },
    sprites: {    
        width: '100%',
        paddingHorizontal: 12,
        marginBottom: 12
    },
    basicSpriteContainer: {
        width: 150,
        height: 150,
        marginRight: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: 'white',
        marginHorizontal: 5,
        marginVertical: 5,
    },
    basicSprite: {
        height: 150,
        width: 150,
        
    }

})


export default PokemonDetails
