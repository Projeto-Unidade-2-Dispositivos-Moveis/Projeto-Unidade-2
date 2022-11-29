import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { theme } from '../src/theme/theme';
import {AddBookForm} from '../src/components/AddBookForm';

export default function AddBookScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <AddBookForm />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    }
});