import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SearchButton = () => {

    const navigator = useNavigation();

    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.container}
                onPress={() => navigator.navigate('SearchScreen')}
            >
                <Icon name='search-outline' size={25} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: 70,
        borderRadius: 100,
        backgroundColor: '#55a680',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        position: 'absolute',
        top: 620,
        left: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})


export default SearchButton
