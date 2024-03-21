import {View, StyleSheet, ScrollView} from 'react-native';
import Nav from '../components/Nav';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Footer from '../components/Footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Btn from '../components/Btn';
import DescItem from '../components/DescItem';


export default function Descrição_de_itens() {
  return (
    <>
      <View style={stylesDescItem.container}>
        <Nav corr="#FFFFFF" backcolor="#FF0000" icone={<AntDesign name="arrowleft" size={30} color="#FFFFFF" />} texto="Descrição do Item" icone2={<Ionicons name="reload" size={30} color="#FFFFFF"/>} />
        <ScrollView>
            <View style={stylesDescItem.fundo}>
                <DescItem tituloo="N° do Inventário:" itemm="957689"/>
                <DescItem tituloo="Descrição:" itemm="CADEIRA GIRATÓRIA"/>
                <DescItem tituloo="Local:" itemm="SALA C13"/>
                <DescItem tituloo="Responsável:" itemm="CARLOS"/>
                <DescItem tituloo="Data de Registro:" itemm="05/03/2024"/>
            </View>
        </ScrollView>
        <Btn icones={<MaterialCommunityIcons name="pencil-circle" size={60} color="#FF0000"/>} />
        <Footer bordacolor= "#CBCBCB" corr="#595959" colorr="#FFFFFF" icone={<MaterialIcons name="flip-camera-ios" size={30} color="#595959" />} icone2={<Fontisto name="list-1" size={25} color="#595959" />}/>
      </View>
    </>
  );
}

const stylesDescItem = StyleSheet.create({
  container:{
    flex: 1
  },

  fundo:{
    width: "100%",
    height: 525,
    backgroundColor: "#FBFBFB",
    paddingTop: 40
  },

})