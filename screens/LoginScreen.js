import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Touchable, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { theme } from '../src/theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



export default function LoginScreen({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorLogin,setErrorLogin] = React.useState('');

    const loginFirebase = ()=>{

    }

    useEffect(()=>{


    },[]);

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor={theme.fundo_principal} />
            <KeyboardAvoidingView
            behavior='height' 
            >
            <View style={styles.header_container}>
                <Text style={styles.title_text}> Ulib </Text>
                <Text style={styles.slogan_text}> Read without limits</Text>
            </View>
            <View style={styles.email_container}>
                <Text style={styles.email_text}> Your email address</Text>
                <View style={styles.email_input_container}>
                    <TextInput style={styles.text_input} label="Email" placeholder="Example@gmail.com" value={email} onChangeText={email => setEmail(email)} />
                </View>
            </View>
            <View style={styles.password_container}>
                <Text style={styles.password_text}> Choose a password </Text>
                <View style={styles.password_input_container}>
                    <TextInput secureTextEntry={true} style={styles.text_input} label="Password" placeholder="Minimum 8 characters" value={password} onChangeText={password => setPassword(password)} />
                </View>
            </View>
            <TouchableOpacity style={styles.buttom_container} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.buttom_text}> Continue </Text>
            </TouchableOpacity>
            <View style={styles.or_container}>
                <Text style={styles.or_text}> or </Text>
            </View>
            </KeyboardAvoidingView>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.fundo_principal,
        marginTop: Constants.statusBarHeight,
    },
    header_container: {
        marginVertical: 60,
        //backgroundColor: 'red',
        alignItems: 'center', //EIXO X
        justifyContent: 'center' //EIXO Y
    },
    title_text: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    slogan_text: {
        fontSize: 18,
    },
    email_container: {
        //backgroundColor: 'green',
        marginHorizontal: 16,
        marginBottom: 20,
    },
    email_text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    email_input_container: {
        justifyContent: 'center',
        height: 50,
        marginTop: 12,
        borderWidth: 4,
        borderColor: '#CCC',
        borderRadius: 30,
    },
    password_container: {
        //backgroundColor: 'pink',
        marginHorizontal: 16,
        marginTop: 20,

    },
    password_text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    password_input_container: {
        justifyContent: 'center',
        height: 50,
        marginTop: 12,
        borderWidth: 4,
        borderColor: '#CCC',
        borderRadius: 30,

    },
    buttom_container: {
        backgroundColor: 'gray',
        height: 60,
        borderRadius: 30,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    text_input: {
        marginLeft: 20,
    },
    buttom_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    or_container: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    or_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    }
});