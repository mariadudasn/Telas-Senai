import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Descrição from '../components/Descrição';
import Input from '../components/Input';
import Botão from '../components/Botão';

export default function Cadastro() {
  return (
    <>
      <View>
        <Header cor="#FF0000" texto="Cadastre-se"></Header>
        <View style={stylesM.margin}>
            <Input nome="Nome:" texto2="Insira seu nome:"/>
        </View>
        <Input nome="Sobrenome:" texto2="Insira seu sobrenome:"/>
        <Input nome="E-mail:" texto2="Insira seu e-mail:"/>
        <Input nome="Telefone:" texto2="Insira seu telefone:"/>
        <Input nome="Senha:" texto2="Insira sua senha:"/>
        <Input nome="Confirmar senha:" texto2="Insira seu senha:"/>
        <Botão texto3="Cadastrar"/>
      </View>
    </>
  );
}

const stylesM = StyleSheet.create({

    margin:{
      marginTop:20,
    },
})