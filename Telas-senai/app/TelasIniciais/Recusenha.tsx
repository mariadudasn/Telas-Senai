import {View} from 'react-native';
import Header from '@comp/Header';
import Descrição from '@comp/Descrição';
import Input from '@comp/Input';
import Botão from '@comp/Botão';
import useColor from '../../temas/Temas';

export default function Recusenha() {

  const cores = useColor()

  return (
    <>
      <View style={{backgroundColor : cores.bgPrimary, height: "100%"}}>
        <Header cor={cores.nome === 'dark' ? cores.bgPrimary : "#011E83"} texto="Recuperação de senha"></Header>
        <Descrição cores={cores} textodes="Insira seu e-mail para recuperar a senha!"></Descrição>
        <Input cores={cores} label="Email:" placeholder="Insira seu e-mail:"/>
        <Botão cores={cores} href="TelasIniciais/Login" texto3="Recuperar"/>
      </View>
    </>
  );
}