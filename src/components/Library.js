import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import {firebase } from '../../firebase';
import LibraryTitle2 from './LibraryTitle2';

export default function Library({ navigation }) {

    const [book, setBook] = useState([]);
    const [list, setList] = useState([]);

    useEffect(function () {
        async function getData() {
            const response = await fetch('https://raw.githubusercontent.com/Projeto-Unidade-2-Dispositivos-Moveis/Projeto-Unidade-2/BranchMaster/listaBooks.json');
            const menuBook = await response.json();
            setBook(menuBook)
        }
        getData();

        firebase.firestore().collection("books").onSnapshot((docs) => {
            const list = [];
            docs.forEach((doc) => {
                 list.push({ ...doc.data(), id: doc.id });
            });
            setList(list);
       });


    }, []);

    function renderItem({ item }) {
        return (
            <View style={styles.LibraryContainer}>
                <TouchableOpacity style={styles.PhotoContainer} onPress={() => navigation.navigate('BookScreen', { id: item.id })}>
                    <Image style={styles.PhotoImage} source={{ uri: item.imgPerfil }} />
                </TouchableOpacity>
                <View style={styles.TitleContainer}>
                    <Text style={styles.TitleText}> {item.nome} </Text>
                </View>
                <View style={styles.AutorContainer}>
                    <Text style={styles.AutorText}> {item.autor} </Text>
                </View>
            </View>
        );
    }

    function renderItem2({ item }) {
        return (
            <View style={styles.LibraryContainer}>
                <View style={styles.PhotoContainer}>
                    <Image style={styles.PhotoImage} source={{ uri: item.image }} />
                </View>
                <View style={styles.TitleContainer}>
                    <Text style={styles.TitleText}> {item.title} </Text>
                </View>
                <View style={styles.AutorContainer}>
                    <Text style={styles.AutorText}> {item.author} </Text>
                </View>
            </View>
        );
    }


    return (
        <>
        <View style={styles.inicio}>
            <FlatList
                data={book}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
        <LibraryTitle2 navigation={navigation} />
        <View style={styles.inicio}>
            <FlatList
                data={list}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
        
</>
    );
}

const styles = StyleSheet.create({
    LibraryContainer: {
        //backgroundColor: 'pink',
    },
    PhotoContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
    },
    PhotoImage: {
        height: 240,
        width: 120,
        aspectRatio: 0.65,
        resizeMode: 'contain',
        borderRadius: 30,
    },
    TitleContainer: {
        //backgroundColor: 'blue',
        marginLeft: 22
    },
    TitleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    AutorContainer: {
        //backgroudColor: 'red',
        marginLeft: 22,
    },
    AutorText: {
        color: 'gray',
        fontWeight: 'bold',

    }


});
