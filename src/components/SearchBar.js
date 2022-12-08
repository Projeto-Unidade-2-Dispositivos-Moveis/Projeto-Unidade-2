import { FontAwesome5 } from '@expo/vector-icons';
import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';

import { theme } from '../theme/theme';
import {GoogleBookSearch} from 'react-native-google-books';
import {BookSearch} from 'react-native-google-books';



export function SearchBar() {

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [itemsInfo, setItemsInfo] = useState('');

  const api_key ='AIzaSyCUl1iCePB3tjmdYkAYvX61UbA9NxYNdSM'

  const [search, setSearch] = useState([]);

  useEffect(() => {
    setLoading(false);
  }, [itemsInfo]);

  const getData = async (url) => {
    try{
      const response = await fetch(url);
      const searchAPI = await response.json();
      setSearch(searchAPI);
      // console.log(searchAPI.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(function(){
        getData('https://randomuser.me/api/?results=2');
  }, [])


  return (
<>
<GoogleBookSearch
    apikey={api_key}
    placeholder="Ex: Game of Thrones"
    searchContainerStyle={styles.container}
    searchInputStyle={styles.input}
    interval={100}
    onResultPress={(book)=> setSearch(book)}
  />
</>)}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: theme.size+1,
    backgroundColor: theme.white,    
    borderRadius:10,
    borderWidth: 1,
    borderColor: theme.grey,
  },
  boxButtonSearch: {
    width: theme.size,
    height: theme.size,
    backgroundColor:theme.grey,
    position: 'absolute',
    right: 0,
    borderRadius:9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: theme.size,
    marginLeft: 20,
  },
})