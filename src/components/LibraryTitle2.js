import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function LibraryTitle2() {
    return (
        <View style={styles.LibraryTitleContainer}>
            <Text style={styles.LibraryTitleContainerText}> Your lib </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    LibraryTitleContainer: {
        //backgroundColor: 'green',
        marginTop: 40,
    },
    LibraryTitleContainerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ECF8F8',
    }
})