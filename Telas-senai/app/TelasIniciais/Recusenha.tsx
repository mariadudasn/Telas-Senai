import {View} from 'react-native';
import Header from '@comp/Header';
import Descrição from '@comp/Descrição';
import Input from '@comp/Input';
import Botão from '@comp/Botão';
import { useColor } from '../../temas/Temas';

export default function Recusenha() {

  const cores = useColor()

  return (
    <>
      <View>
        <Header cor="#011E83" texto="Recuperação de senha"></Header>
        <Descrição textodes="Insira seu e-mail para recuperar a senha!"></Descrição>
        <Input label="Email:" placeholder="Insira seu e-mail:"/>
        <Botão href="TelasIniciais/Login" texto3="Recuperar"/>
      </View>
    </>
  );
}