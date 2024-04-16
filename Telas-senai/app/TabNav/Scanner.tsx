import {View, StyleSheet, ScrollView, Image} from 'react-native';
import Nav from '@comp/Nav';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Footer from '@comp/Footer';
import { StatusBar } from 'expo-status-bar';


export default function Scanner() {
  return (
    <>
      <ScrollView style={stylesScanner.container}>
          <View style={stylesScanner.fundo}>
              <Image source={require('@assets/QRcode.png')} />
          </View>
      </ScrollView>
    </>
  );
}

const stylesScanner = StyleSheet.create({
  container:{
    flex: 1
  },

  fundo:{
    width: "100%",
    height: 525,
    backgroundColor: "#FBFBFB",
    paddingTop: 40,
    alignItems:"center",
    justifyContent: "center",
  },

})