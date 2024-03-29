import {View} from 'react-native';
import Header from '../components/Header';
import Descrição from '../components/Descrição';
import Input from '../components/Input';
import Botão from '../components/Botão';
import { Link } from "expo-router";

export default function Recusenha() {
  return (
    <>
      <View>
        <Header cor="#011E83" texto="Recuperação de senha"></Header>
        <Descrição textodes="Insira seu e-mail para recuperar a senha!"></Descrição>
        <Input label="Email:" placeholder="Insira seu e-mail:"/>
        <Botão href="drawer" texto3="Recuperar"/>
      </View>
    </>
  );
}