import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps{
  label:string
}

export default function Input({label, ...props}: InputProps) {
  const [hover, setHover] = useState("#F5F5F5")
  const stylesInp = StyleSheet.create({

    container:{
      paddingLeft:30,
      paddingRight:25,
    },

    titulo: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 17,
        color: '#000000',
        paddingBottom: 15,
    },

    inserir: {
      backgroundColor: '#F5F5F5',
      width: '100%',
      height:40,
      padding: 10,
      borderRadius: 5,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: hover
    }
  })

    return (
      <>
        <View style={stylesInp.container}>
          <Text style={stylesInp.titulo}>{label}</Text>
          <TextInput {...props} style={stylesInp.inserir} onFocus={() => {
            setHover("#F39200")
          }} onBlur={()=>{
            setHover("#F5F5F5")
          }}/>
        </View>
      </>
    );
  }