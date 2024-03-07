import {View, StyleSheet, ScrollView} from 'react-native';
import Nav from '../components/Nav';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import InputInv from '../components/InputInv';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Footer from '../components/Footer';

export default function Cadastro_de_itens() {
  return (
    <>
      <View style={stylesCadInv.container}>
        <Nav corr="#FFFFFF" backcolor="#FF0000" icone={<AntDesign name="arrowleft" size={30} color="#FFFFFF" />} texto="Cadastro de Itens" icone2={<Ionicons name="add-circle-outline" size={30} color="#FFFFFF"/>} />
        <ScrollView  style={stylesCadInv.container2}>
          <InputInv title="N° Inventário"/>
          <InputInv title="Descrição"/>
          <InputInv title="Local"/>
          <InputInv title="Responsável"/>
          <InputInv title="Data de Registro"/>
        </ScrollView>
      </View>
      <Footer bordacolor= "#CBCBCB" corr="#595959" colorr="#FFFFFF" icone={<MaterialIcons name="flip-camera-ios" size={30} color="#595959" />} icone2={<Fontisto name="list-1" size={25} color="#595959" />}/>
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
