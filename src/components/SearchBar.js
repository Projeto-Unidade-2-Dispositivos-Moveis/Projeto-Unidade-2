import { FontAwesome5 } from '@expo/vector-icons';
import React, {useEffect, useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  TextInput,
  Platform,
  Alert,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import { theme } from '../theme/theme';


export function SearchBar() {

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [itemsInfo, setItemsInfo] = useState('');

  const endpoint = 'bla'
  const api_key ='bla'
  const google_books_url = 'bla'
  const key_header = 'bla'
  const url = 'https://github.com/';

  const [search, setSearch] = useState([]);

  useEffect(() => {
    setLoading(false);
  }, [itemsInfo]);

  const getData = async (url) => {
    try{
      const response = await fetch(url);
      const searchAPI = await response.json();
      setSearch(searchAPI);
      console.log(searchAPI.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(function(){
        getData('https://randomuser.me/api/?results=5');
  }, [])

  const onSearchStoreItems = textInput => {
    setInput(textInput);
  };

  return (
<>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btnBack}>
            <FontAwesome5 name="arrow-left" size={24} color="black" />          
          </TouchableOpacity>
          <View style={{flex: 0.9}}>
            <View style={styles.inputView}>
              <View style={styles.inputSearch}>
                <View style={styles.searchArea}>
                  <FontAwesome5 name="search" size={24} color="#555" />                  
                  <TextInput
                    style={{fontWeight: 'bold', color: 'black'}}
                    placeholder={'Book title'}
                    placeholderTextColor="gray"
                    onChangeText={onSearchStoreItems}
                    value={input}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
</>)}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  inputView: {
    marginVertical: 10,
    marginRight: 15,
    marginLeft: 10,
    backgroundColor: '#F5FCFF',
    shadowColor: 'rgba(0, 0, 0, 1)',
    elevation: 20,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  inputSearch: {
    flexDirection: 'row',
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 0.5,
  },
  toolbar: {
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 1)',
    elevation: 5,
    shadowRadius: 15,
    shadowOffset: {
      width: 1,
      height: 13,
    },
  },

  searchArea: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageNewFeed: {
    width: 18,
    height: 18,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  btnBack: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  btnDelete: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})