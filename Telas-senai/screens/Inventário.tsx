import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';
import Nav from '../components/Nav';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Footer from '../components/Footer';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Item from '../components/Item';
import { Ionicons } from '@expo/vector-icons';

export default function Inventário() {
  return (
    <>
      <View style={stylesInv.container}>
        <Nav icone={<Entypo name="menu" size={30} color="#595959"/>} texto="Lista" icone2={<Feather name="search"  size={30} color="#595959"/>} />
          <ScrollView>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
            <Item titulo="956389" item="CADEIRA SENAI"/>
          </ScrollView>
          <TouchableOpacity style={stylesInv.icn}>
            <Ionicons name="add-circle" size={60} color="#FF0000" />
        </TouchableOpacity>
        <Footer bordacolor="#FF0000" corr="#595959" colorr="#FF0000" icone={<MaterialIcons name="flip-camera-ios" size={30} color="#FFFFFF" />} icone2={<Fontisto name="list-1" size={25} color="#FFFFFF" />}/>
      </View>
    </>
  );
}

const stylesInv = StyleSheet.create({
  container:{
    flex: 1
  },

  icn:{
      position: 'absolute',
      bottom: 80,
      right: 20,
      zIndex: 1,
  },

})