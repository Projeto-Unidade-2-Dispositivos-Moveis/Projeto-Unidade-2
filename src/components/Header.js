import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { theme } from '../theme/theme';


export default function Header({ navigation }) {
    return (
        <View style={styles.Header}>
            <View style={styles.Biblioteca}>
                <Text style={styles.HeaderText}> Explore </Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="plus" size={24} color={theme.white} onPress={() => navigation.navigate('AddBookScreen')}/>
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
        justifyContent: 'center',
        padding:10,
    },
    HeaderText: {
        fontSize: 38,
        fontWeight: 'bold',
    },
});
