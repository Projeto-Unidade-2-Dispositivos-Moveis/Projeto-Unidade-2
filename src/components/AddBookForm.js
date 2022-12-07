import React, {useState} from 'react'
import { TextInput, Text, Button, Alert, View, StyleSheet, FlatList } from 'react-native';

//Files
import { theme } from '../theme/theme';
import {bookGenres} from '../utils/bookgenres'
import { SearchBar } from './SearchBar';

//Libs
import { Formik } from 'formik';
import * as yup from 'yup';
import {Picker} from '@react-native-picker/picker';
import { AirbnbRating } from 'react-native-ratings';

export function AddBookForm() {

  const [selectedGenre, setSelectedGenre] = useState();
  const [rating, setRating] = useState();
  
  return (
<Formik
        initialValues={{ 
          title: '',
          author:'',
          genre: '',
          rating: '',
          tag: ''
        }}

        // TODO: Linkar ao banco de dados (pode alterar essa linha sem dó)
        onSubmit={values => Alert.alert(JSON.stringify(values))}

        validationSchema={yup.object().shape({
          title: yup
            .string()
            .required('Insira o título do livro'),
          author: yup
            .string()
            .required('Insira o nome do autor'),
          rating: yup
            .string(),
          startDate: yup
            .date(),
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.container}>

            <View>
              <Text style={styles.label}> Título do livro </Text>
              <TextInput
                placeholder="ex: O Código da Vinci"
                onChangeText={handleChange('title')}
                onBlur={() => setFieldTouched('title')}
                style={styles.input}
                value={values.title}
              />
              {touched.title && errors.title &&
                <Text style={styles.error}>{errors.title}</Text>
              }
            </View>

            <SearchBar/>

            <Text style={styles.label}> Autor </Text>
            <TextInput
              placeholder="ex: Dan Brown"
              onChangeText={handleChange('author')}
              onBlur={() => setFieldTouched('author')}
              style={styles.input}
              value={values.author}
            />
            {touched.author && errors.author &&
              <Text style={styles.error}>{errors.author}</Text>
            }   

            <Text style={styles.label}>Picker de genero</Text> 
            <Picker 
              selectedValue={selectedGenre}
              onValueChange={(itemValue) => {setSelectedGenre(itemValue); values.genre = itemValue }}
              dropdownIconColor={theme.details_green}
              prompt='Selecione o gênero'
              style={styles.picker}
            >
              {bookGenres.map((item, index) => 
                {
                  return (<Picker.Item label={item.genre} value={item.genre} key={index} color={'#555'} style={styles.pickerItem} />);
                })}   
            </Picker>
            
            <Text style={styles.label}>Rating</Text> 
            <AirbnbRating
              count={5}
              size={30}
              imageSize={20}
              showRating={false}
              defaultRating={0}
              ratingContainerStyle={styles.rating}
              onFinishRating={ (value) => {setRating(value); values.rating = value;} }
            />
            <Text style={styles.label}>Tags</Text> 

            
            <Button
              color={theme.details_green}
              title='Submit'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    padding:12,
  },
  label: {
    color: '#555',
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    height:50,
    backgroundColor: theme.white,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius:10,
    fontSize:16,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  error:{
    fontSize: 14, 
    color: '#FF0D10'
  },
  picker: {
    color: '#555',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius:10,

  },
  rating: {
    padding:12,
  }
})