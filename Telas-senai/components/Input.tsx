import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Input({nome, texto}) {
    return (
      <>
        <View>
          <Text style={stylesInp.titulo}>{nome}</Text>
          <TextInput style={stylesInp.inserir} placeholder={texto}/>
        </View>
      </>
    );
  }

  const stylesInp = StyleSheet.create({
    titulo: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 17,
    },

    inserir: {
        color: '#666666'
        paddingTop: 25,
        backgroundColor: '#F5F5F5',
        paddingBottom: 10,
    }

  })

