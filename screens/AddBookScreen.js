import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { theme } from '../src/theme/theme';


export default function AddBookScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor={theme.fundo_principal} />
            <Text> TESTE </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.fundo_principal,
        marginTop: Constants.statusBarHeight,
    }
});