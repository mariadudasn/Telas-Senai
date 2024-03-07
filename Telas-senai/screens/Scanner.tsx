import {View, StyleSheet, ScrollView, Image} from 'react-native';
import Nav from '../components/Nav';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Footer from '../components/Footer';


export default function Scanner() {
  return (
    <>
        <Nav corr="#FFFFFF" backcolor="#FF0000" icone={<AntDesign name="arrowleft" size={30} color="#FFFFFF" />} texto="Scanner" icone2={<Ionicons name="reload" size={30} color="#FFFFFF"/>} />
            <ScrollView style={stylesScanner.container}>
                <View style={stylesScanner.fundo}>
                    <Image source={require('../assets/QRcode.png')} />
                </View>
            </ScrollView>
        <Footer bordacolor= "#CBCBCB" corr="#595959" colorr="#FFFFFF" icone={<MaterialIcons name="flip-camera-ios" size={30} color="#595959" />} icone2={<Fontisto name="list-1" size={25} color="#595959" />}/>
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