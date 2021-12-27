import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { capitalize } from "lodash";
import { Stat } from '../interfaces/pokemonInterface';

interface Props {
    stats: Stat[]
}

export default function PokemonStats({ stats }: Props) {
    const barStyles = (num: number) => {
        const color = num > 49 ? "#00ac17" : "#ff3e3e";
        return {
        backgroundColor: color,
        width: `${num}%`,
        };
    };

    return (
        <View>
            <Text style={styles.title}>Stats</Text>
            <View style={styles.content}>
                {
                    stats && stats.map((stat, index) => (
                        <View key={index} style={styles.block}>
                        <View style={styles.blockTitle}>
                            <Text style={styles.statName}>{capitalize(stat.stat.name)}</Text>
                        </View>
                        <View style={styles.blockInfo}>
                            <Text style={styles.number}>{stat.base_stat}</Text>
                            <View style={styles.bgBar}>
                            <View style={[styles.bar, barStyles(stat.base_stat)]} />
                            </View>
                        </View>
                        </View>
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: '5%',
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: 'white',
        padding: 10,
        
    },
    title: {
        marginTop: 12,
        fontWeight: "bold",
        fontSize: 24,
        color: 'black',
        paddingBottom: 5,
        marginHorizontal: '5%',
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    blockTitle: {
        width: "30%",
    },
    statName: {
        fontSize: 13,
        color: "#6b6b6b",
    },
    blockInfo: {
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
    },
    number: {
        width: "12%",
        fontSize: 12,
    },
    bgBar: {
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden",
    },
    bar: {
        // backgroundColor: "red",
        // width: "40%",
        height: 5,
        borderRadius: 20,
    },
});