import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function LibraryTitle() {
    return (
        <View style={styles.LibraryTitleContainer}>
            <Text style={styles.LibraryTitleContainerText}> Popular Now </Text>
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
    }
})