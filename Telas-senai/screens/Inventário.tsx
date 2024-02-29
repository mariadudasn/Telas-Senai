import {View} from 'react-native';
import Nav from '../components/Nav';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Footer from '../components/Footer';

export default function Inventário() {
  return (
    <>
      <View>
        <Nav icone={<Entypo name="menu" size={30} color="#595959"/>} icone2={<Feather name="search"  size={30} color="#595959"/>} />
        <Footer colorr="#FF0000" icone={<Entypo name="menu" size={30} color="#595959"/>} icone2={<Feather name="search"  size={30} color="#595959"/>}/>
      </View>
    </>
  );
}