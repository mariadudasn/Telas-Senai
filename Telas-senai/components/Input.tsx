import { StyleSheet, Text, View, TextInput } from 'react-native';

type InputProps = {
  nome: string,
  texto2: string
}

export default function Input({nome, texto2}: InputProps) {
    return (
      <>
        <View style={stylesInp.container}>
          <Text style={stylesInp.titulo}>{nome}</Text>
          <TextInput style={stylesInp.inserir} placeholder={texto2} />
        </View>
      </>
    );
  }

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
    }
    
  })

