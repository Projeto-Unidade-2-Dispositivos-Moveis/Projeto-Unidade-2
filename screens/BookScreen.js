import { StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";

export default function BookScreen({ route }) {
    const { id } = route.params;

    const [bookscreen, setBookScreen] = useState([]);

    useEffect(function () {
        async function getData() {
            const response = await fetch(`https://raw.githubusercontent.com/Projeto-Unidade-2-Dispositivos-Moveis/Projeto-Unidade-2/BranchMaster/listaBooks.json/${id}`)
            const bookscreen = await response.json();
            setBookScreen(bookscreen);
        }
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.image_container}>
                <Image style={styles.image} source={{ uri: bookscreen.imgPerfil }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image_container: {
        backgroundColor: '#C2C2C2',
        marginTop: 60,
        height: 500,
        borderRadius: 30,
        marginHorizontal: 20,
    },
    image: {
        resizeMode: 'contain',
    }


});