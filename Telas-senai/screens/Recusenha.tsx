import {View} from 'react-native';
import Header from '../components/Header';
import Descrição from '../components/Descrição';
import Input from '../components/input';

export default function Recusenha() {
  return (
    <>
      <View>
        <Header cor="#011E83" texto="Recuperação de senha"></Header>
        <Descrição textodes="Insira seu e-mail para recuperar a senha!"></Descrição>
        <Input nome="Email:" texto="Insira seu e-mail"/>
      </View>
    </>
  );
}