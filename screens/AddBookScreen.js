import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useEffect } from 'react';
import { theme } from '../src/theme/theme';

import { db, collection, getDocs, addDoc  } from '../firebase';

import uuid from 'react-native-uuid';


export default function AddBookScreen() {
    const [text, setText] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [cities, setCities] = React.useState([]);
    const [showLoader, setShowLoader] = React.useState(false);
  
    useEffect(() => {
      async function getCities(db) {
        const citiesCol = collection(db, 'cities');
        const citySnapshot = await getDocs(citiesCol);
        const cities = citySnapshot.docs.map(doc => doc.data());
        setCities(cities);
      }
      getCities(db);
    }, []);
  
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  
    const saveItem = async () => {
      setShowLoader(true);
      if(text && idade) {
        try {
          const city = {
            id: uuid.v4(),
            name: text,
            idade: idade,
          };
          const docRef = await addDoc(collection(db, "cities"), city);
          setText('');
          setIdade('');
          setCities(cities.concat([city]));
  
          console.log("Document written with ID: ", docRef.id);
        } catch(e) {
          console.error("Error adding document: ", e);
        }
      }
      setShowLoader(false);
    }
  
    {/* codigo acrescentado */}
  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.inputcontainer}>
          <Text>NOME</Text>
          <TextInput style={styles.input} onChangeText={setText} value={text} />
          <TextInput style={styles.input} onChangeText={setIdade} value={idade} />
          <TouchableOpacity
            style={styles.button}
            onPress={saveItem}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
        <ActivityIndicator animating={showLoader}/>
        <FlatList
          data={cities}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
      flexDirection: 'row',
      width: '100%',
    },
    input: {
      flex: 1,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });