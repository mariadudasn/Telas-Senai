import {StyleSheet, Text} from 'react-native';

export default function Descrição ({textodes}) {
    return (
        <Text style={stylesdes.texto}>{textodes}</Text>
    );
  }

  const stylesdes = StyleSheet.create({
    texto: {
        width: 320,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        paddingTop: 50,
        color: '#000000',
        paddingBottom: 50,
    },
  }
)