import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native';
import { Cores } from '../temas/Temas';

interface InputProps extends TextInputProps{
  label:string
  cores: Cores
}

export default function Input({label, ...props}: InputProps) {
  const [hover, setHover] = useState(props.cores.inpbgPrimaryVariant)
  const stylesInp = StyleSheet.create({

    container:{
      paddingLeft:30,
      paddingRight:25,
    },

    titulo: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 17,
        color: props.cores.txtcolorPrimary,
        paddingBottom: 15,
    },

    inserir: {
      backgroundColor: props.cores.inpbgPrimaryVariant,
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
          <TextInput {...props} style={stylesInp.inserir} placeholderTextColor={props.cores.inptextcolorPrimaryVariant} onFocus={() => {
            setHover(props.cores.inpbgHover)
          }} onBlur={()=>{
            setHover(props.cores.inpbgPrimaryVariant)
          }}/>
        </View>
      </>
    );
  }