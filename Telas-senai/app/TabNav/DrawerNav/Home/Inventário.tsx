import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';
import Nav from '@comp/Nav';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Footer from '@comp/Footer';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Item from '@comp/Item';
import { Ionicons } from '@expo/vector-icons';
import Btn from '@comp/Btn';
import { Link } from 'expo-router';
import useColor from '../../../../temas/Temas';

export default function Inventário() {
  const cores = useColor()
  const stylesInv = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: cores.bgPrimary,
    },
    icn: {
      position: "absolute",
      bottom: 35,
      right: 20,
      zIndex: 1
    }
  })
  return (
    <>
      <View style={stylesInv.container}>
        <ScrollView>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
          <Item link='TabNav/DrawerNav/Home/Descricao_de_itens' titulo="956389" item="CADEIRA SENAI"/>
        </ScrollView>
        <Link href="/TabNav/DrawerNav/Home/Cadastro_de_itens" asChild>
            <TouchableOpacity style={stylesInv.icn}>
                <Ionicons name="add-circle" size={60} color="#ff0000"/>
            </TouchableOpacity>
        </Link>
      </View>
    </>
  )
}


