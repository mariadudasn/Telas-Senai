import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '@comp/Header';
import Input from '@comp/Input';
import Botão from '@comp/Botão';
import useColor from '../../temas/Temas';

export default function Cadastro() {
  const cores = useColor()
  
  return (
    <>
      <ScrollView style={{backgroundColor : cores.bgPrimary, height: "100%"}}>
        <Header cor={cores.nome === 'dark' ? cores.bgPrimary : "#FF0000"} texto="Cadastre-se"></Header>
        <View style={stylesM.margin}>
            <Input cores={cores} label="Nome:" placeholder="Insira seu nome:" />
        </View>
        <Input cores={cores} label="Sobrenome:" placeholder="Insira seu sobrenome:"/>
        <Input cores={cores} label="E-mail:" placeholder="Insira seu e-mail:" />
        <Input cores={cores} label="Telefone:" placeholder="Insira seu telefone:" />
        <Input cores={cores} label="Senha:" placeholder="Insira sua senha:" secureTextEntry={true}/>
        <Input cores={cores} label="Confirmar senha:" placeholder="Insira seu senha:" secureTextEntry={true}/>
        <Botão cores={cores} href="TabNav" texto3="Cadastrar"/>
      </ScrollView>
    </>
  );
}

const stylesM = StyleSheet.create({

    margin:{
      marginTop:20,
    },
})