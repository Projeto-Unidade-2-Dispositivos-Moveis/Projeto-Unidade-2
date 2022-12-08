import React from 'react'
import { TextInput, Text, View, StyleSheet} from 'react-native';
import { theme } from '../theme/theme';

export function Inputs() {
  
  return (
<>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        {error ? (
          <Text style={styles.error}>{error}</Text>
        ) : null}
      </View>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>      )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  input: {
    // backgroundColor: theme.fundo_secundario,
    // borderColor: theme.black,
    // borderWidth: 1,
    // borderRadius:10,
    // color:theme.black,
    // fontSize:14,
    // padding: 12,
    // marginHorizontal: 12,
    // marginVertical: 10,
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  error:{
    fontSize: 12, 
    color: '#FF0D10'
  }
})