import { StyleSheet, Text, View, Image } from 'react-native';

export default function Library() {
    return (
        <>
            <View style={styles.LibraryContainer}>
                <View style={styles.PhotoContainer}>
                    <Image style={styles.PhotoImage} source={require('C:/Users/Camillo/Documents/libri-master/BookPhotos/Volume_1.webp')} />
                </View>
                <View style={styles.InfoContainer}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}> TITULO </Text>
                    </View>
                    <View style={styles.ResumeContainer}>
                        <Text style={styles.ResumeText} > Resumo Rapaziadinha </Text>
                    </View>
                </View>
            </View>
            <View style={styles.LibraryContainer}>
                <View style={styles.PhotoContainer}>
                    <Image style={styles.PhotoImage} source={require('C:/Users/Camillo/Documents/libri-master/BookPhotos/Volume_1.webp')} />
                </View>
                <View style={styles.InfoContainer}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}> TITULO </Text>
                    </View>
                    <View style={styles.ResumeContainer}>
                        <Text style={styles.ResumeText} > Resumo Rapaziadinha </Text>
                    </View>
                </View>
            </View><View style={styles.LibraryContainer}>
                <View style={styles.PhotoContainer}>
                    <Image style={styles.PhotoImage} source={require('C:/Users/Camillo/Documents/libri-master/BookPhotos/Volume_1.webp')} />
                </View>
                <View style={styles.InfoContainer}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}> TITULO </Text>
                    </View>
                    <View style={styles.ResumeContainer}>
                        <Text style={styles.ResumeText} > Resumo Rapaziadinha </Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
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
        resizeMode: 'contain'
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
