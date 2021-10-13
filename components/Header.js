import React from 'react'
import { View, Text } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgrondColor: '#f7287b',
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "black"
    }
})