import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Nav from '@comp/Nav';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Footer from '@comp/Footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Btn from '@comp/Btn';
import DescItem from '@comp/DescItem';
import { Link } from 'expo-router';


export default function Descrição_de_itens() {
  return (
    <>
      <View style={stylesDescItem.container}>
        <ScrollView>
            <View style={stylesDescItem.fundo}>
                <DescItem tituloo="N° do Inventário:" itemm="957689"/>
                <DescItem tituloo="Descrição:" itemm="CADEIRA GIRATÓRIA"/>
                <DescItem tituloo="Local:" itemm="SALA C13"/>
                <DescItem tituloo="Responsável:" itemm="CARLOS"/>
                <DescItem tituloo="Data de Registro:" itemm="05/03/2024"/>
            </View>
        </ScrollView>
        <Link href="/TabNav/DrawerNav/Home/Editar" asChild>
            <TouchableOpacity style={stylesDescItem.icn}>
              <MaterialCommunityIcons name="pencil-circle" size={60} color="#FF0000"/>
            </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}

const stylesDescItem = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  fundo:{
    width: "100%",
    height: 525,
    backgroundColor: "#FBFBFB",
    paddingTop: 40
  },
  icn: {
    position: "absolute",
    bottom: 80,
    right: 20,
    zIndex: 1
  }

})