import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Library({ navigation }) {

    const [book, setBook] = useState([]);

    useEffect(function () {
        async function getData() {
            const response = await fetch('https://raw.githubusercontent.com/Projeto-Unidade-2-Dispositivos-Moveis/Projeto-Unidade-2/BranchMaster/listaBooks.json');
            const menuBook = await response.json();
            setBook(menuBook)
        }
        getData();
    }, []);

    function renderItem({ item }) {
        return <View style={styles.LibraryContainer}>
            <View style={styles.PhotoContainer}>
                <Image style={styles.PhotoImage} source={{ uri: item.imgPerfil }} />
            </View>
            <View style={styles.InfoContainer}>
                <View style={styles.TitleContainer}>
                    <Text style={styles.TitleText}> {item.nome}</Text>
                </View>
                <View style={styles.ResumeContainer}>
                    <Text style={styles.ResumeText} > {item.texto}</Text>
                </View>
            </View>
        </View>
    }



    return (
        <View style={styles.inicio}>
            <FlatList
                data={book}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    inicio: {
        flex: 1,
    },
    LibraryContainer: {
        height: 250,
        marginTop: 25,
        //backgroundColor: 'pink',
        flexDirection: 'row'
    },
    PhotoContainer: {
        marginHorizontal: 6,
        justifyContent: 'center',
        //backgroundColor: 'green'
    },
    PhotoImage: {
        height: 240,
        width: 150,
        resizeMode: 'contain',
        aspectRatio: 0.65,
    },
    InfoContainer: {
        width: 225,
        //backgroundColor: 'red',
        alignContent: 'center', //eixo x
    },
    TitleContainer: {
        marginTop: 6,
        //backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TitleText: {
        fontSize: 30,
    },
    ResumeContainer: {
        marginTop: 6,
        backgroundColor: 'yellow',
        height: 190,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ResumeText: {
        fontSize: 18,
    }


});
