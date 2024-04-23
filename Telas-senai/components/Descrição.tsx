import {StyleSheet, Text} from 'react-native';
import { Cores } from '../temas/Temas';

type DescriçãoProps ={
  textodes: string
  cores: Cores
}

export default function Descrição ({textodes, ...props}:DescriçãoProps) {

    const stylesdes = StyleSheet.create({
      texto: {
          width: 320,
          textAlign: 'center',
          alignSelf: 'center',
          fontWeight: '500',
          fontSize: 16,
          lineHeight: 19,
          paddingTop: 30,
          color: props.cores.txtcolorPrimary,
          paddingBottom: 40,
      }
    })

    return (
        <Text style={stylesdes.texto}>{textodes}</Text>
    );
  }

