import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value: string) => void
}

const SearchInput = ({ onDebounce }: Props) => {

    const [inputValue, setInputValue] = React.useState('');
    
    const debouncedValue = useDebouncedValue(inputValue, 800);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue])

    return (
        <View style={styles.container}>
            <View style={styles.textBg}>

                <TextInput 
                    placeholder='Search Pokemon'
                    style={styles.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <Icon name="search" size={30} color="grey" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 9999,
        width: '95%',
        alignSelf: 'center',
        top: '3%',  
    },
    textBg: {
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        fontSize: 18,
        top: 3
    }
})


export default SearchInput
