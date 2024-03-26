import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';
import Nav from '../../../components/Nav';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Footer from '../../../components/Footer';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Item from '../../../components/Item';
import { Ionicons } from '@expo/vector-icons';
import Btn from '../../../components/Btn';

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