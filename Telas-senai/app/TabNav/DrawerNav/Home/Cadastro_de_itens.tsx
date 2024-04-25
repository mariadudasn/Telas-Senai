import {View, StyleSheet, ScrollView} from 'react-native';
import InputInv from '@comp/InputInv';
import useColor from '../../../../temas/Temas';

export default function Cadastro_de_itens() {
  const cores = useColor()
  const stylesCadInv = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: cores.bgPrimary
    },
  
    container2:{
      paddingTop: 30,
    },
  
  })
  return (
    <>
      <View style={stylesCadInv.container}>
        <ScrollView  style={stylesCadInv.container2}>
          <InputInv cores={cores} title="N° Inventário"/>
          <InputInv cores={cores} title="Descrição"/>
          <InputInv cores={cores} title="Local"/>
          <InputInv cores={cores} title="Responsável"/>
          <InputInv cores={cores} title="Data de Registro"/>
        </ScrollView>
      </View>
    </>
  );
}


