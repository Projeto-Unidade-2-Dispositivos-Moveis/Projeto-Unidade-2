import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
//import { Form } from '../src/components/Form';
import { theme } from '../src/theme/theme';

import Header from '../src/components/Header';
import LibraryTitle from '../src/components/LibraryTitle';
import Library from '../src/components/Library';


export default function HomeScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={theme.fundo_principal} />
      <Header navigation={navigation} />
      <LibraryTitle navigation={navigation} />
      <Library navigation={navigation} />
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