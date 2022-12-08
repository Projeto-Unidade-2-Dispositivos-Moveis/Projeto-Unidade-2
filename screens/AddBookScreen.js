import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useEffect } from 'react';
import { theme } from '../src/theme/theme';
import {Form} from '../src/components/AddBookForm';
import { db, collection, getDocs, addDoc } from '../firebase';

import uuid from 'react-native-uuid';


export default function AddBookScreen() {
  const [text, setText] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [genero, setGenero] = React.useState('');
  const [books, setbooks] = React.useState([]);
  const [showLoader, setShowLoader] = React.useState(false);

  useEffect(() => {
    async function getbooks(db) {
      const booksCol = collection(db, 'books');
      const citySnapshot = await getDocs(booksCol);
      const books = citySnapshot.docs.map(doc => doc.data());
      setbooks(books);
    }
    getbooks(db);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  const saveItem = async () => {
    setShowLoader(true);
    if (text && idade && genero) {
      try {
        const city = {
          id: uuid.v4(),
          name: text,
          idade: idade,
          genero: genero,
        };
        const docRef = await addDoc(collection(db, "books"), city);
        setText('');
        setIdade('');
        setGenero('');
        setbooks(books.concat([city]));

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    setShowLoader(false);
  }

  {/* codigo acrescentado */ }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Form />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputcontainer: {
    flex: 1,
    //flexDirection: 'row',
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderRadius: 30,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});