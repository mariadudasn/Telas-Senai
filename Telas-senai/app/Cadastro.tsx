import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Botão from '../components/Botão';

export default function Cadastro() {
  return (
    <>
      <ScrollView>
        <Header cor="#FF0000" texto="Cadastre-se"></Header>
        <View style={stylesM.margin}>
            <Input label="Nome:" placeholder="Insira seu nome:" />
        </View>
        <Input label="Sobrenome:" placeholder="Insira seu sobrenome:"/>
        <Input label="E-mail:" placeholder="Insira seu e-mail:" />
        <Input label="Telefone:" placeholder="Insira seu telefone:" />
        <Input label="Senha:" placeholder="Insira sua senha:" secureTextEntry={true}/>
        <Input label="Confirmar senha:" placeholder="Insira seu senha:" secureTextEntry={true}/>
        <Botão href="drawer" texto3="Cadastrar"/>
      </ScrollView>
    </>
  );
}

const stylesM = StyleSheet.create({

    margin:{
      marginTop:20,
    },
})