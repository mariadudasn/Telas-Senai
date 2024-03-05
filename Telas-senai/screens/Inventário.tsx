import {View} from 'react-native';
import Nav from '../components/Nav';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Footer from '../components/Footer';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Inventário() {
  return (
    <>
      <View>
        <Nav icone={<Entypo name="menu" size={30} color="#595959"/>} texto="Lista" icone2={<Feather name="search"  size={30} color="#595959"/>} />
        <Footer colorr="#FF0000" icone={<MaterialIcons name="flip-camera-ios" size={30} color="#FFFFFF" />} icone2={<Fontisto name="list-1" size={30} color="#FFFFFF" />}/>
      </View>
    </>
  );
}