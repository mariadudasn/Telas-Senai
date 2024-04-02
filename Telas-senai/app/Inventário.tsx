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

export default function Inventário() {
  return (
    <>
      <View style={stylesInv.container}>
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
        <Btn icones={<Ionicons name="add-circle" size={60} color="#FF0000"/>} />
      </View>
    </>
  );
}

const stylesInv = StyleSheet.create({
  container:{
    flex: 1
  },
})