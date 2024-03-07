import {View} from 'react-native';
import Nav from '../components/Nav';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import InputInv from '../components/InputInv';

export default function Cadastro_de_itens() {
  return (
    <>
      <View>
        <Nav corr="#FFFFFF" backcolor="#FF0000" icone={<AntDesign name="arrowleft" size={30} color="#FFFFFF" />} texto="Cadastro de Itens" icone2={<Ionicons name="add-circle-outline" size={30} color="#FFFFFF"/>} />
        <InputInv title="N° Inventário"/>
      </View>
    </>
  );
}

