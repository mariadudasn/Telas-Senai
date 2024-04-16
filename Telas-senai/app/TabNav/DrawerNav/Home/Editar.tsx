import {View, StyleSheet, ScrollView} from 'react-native';
import Nav from '@comp/Nav';
import { AntDesign } from '@expo/vector-icons';
import InputInv from '@comp/InputInv';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Footer from '@comp/Footer';

export default function Cadastro_de_itens() {
  return (
    <>
      <View style={stylesCadInv.container}>
        <ScrollView  style={stylesCadInv.container2}>
          <InputInv title="N° Inventário"/>
          <InputInv title="Descrição"/>
          <InputInv title="Local"/>
          <InputInv title="Responsável"/>
          <InputInv title="Data de Registro"/>
        </ScrollView>
      </View>
    </>
  );
}

const stylesCadInv = StyleSheet.create({
  container:{
    flex: 1
  },

  container2:{
    paddingTop: 30,
  },

})