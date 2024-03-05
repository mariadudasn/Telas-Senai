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
            <Input label="Nome:" placeholder="Insira seu nome:" />
        </View>
        <Input label="Sobrenome:" placeholder="Insira seu sobrenome:"/>
        <Input label="E-mail:" placeholder="Insira seu e-mail:" />
        <Input label="Telefone:" placeholder="Insira seu telefone:" />
        <Input label="Senha:" placeholder="Insira sua senha:" secureTextEntry={true}/>
        <Input label="Confirmar senha:" placeholder="Insira seu senha:" secureTextEntry={true}/>
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