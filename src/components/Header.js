import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header({ navigation }) {
    return (
        <View style={styles.Header}>
            <View style={styles.Biblioteca}>
                <Text style={styles.HeaderText}> Explore </Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.PlusText} onPress={() => navigation.navigate('AddBookScreen')}> + </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Header: {
        //backgroundColor: '#a9a9a9',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#3D5A6C',
        borderRadius: 16,
        marginRight: 10,
        alignItems: 'center',
    },
    HeaderText: {
        fontSize: 38,
        fontWeight: 'bold',
    },
    PlusText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold'
    },
});
