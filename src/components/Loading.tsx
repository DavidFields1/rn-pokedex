import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const Loading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={50} color="grey" />
        </View>
    )
}

export default Loading
