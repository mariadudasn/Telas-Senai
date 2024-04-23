import {View,TouchableOpacity, StyleSheet, Text} from 'react-native';
import Header from '@comp/Header';
import Descrição from '@comp/Descrição';
import Input from '@comp/Input';
import Botão from '@comp/Botão';
import { Link } from 'expo-router';
import useColor from '../../temas/Temas';

export default function Login() {

  const cores = useColor()

  const styles = StyleSheet.create({
    linkText: {
        color: cores.nome === 'dark' ? cores.inptextcolorPrimaryVariant : cores.bgInfo 
      },

    link: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 25,
    }

  })

  return (
    <>
      <View style={{backgroundColor : cores.bgPrimary, height: "100%"}}>
        <Header cor={cores.nome === 'dark' ? cores.bgPrimary : "#000000"} texto="Login"></Header>
        <Descrição cores={cores} textodes="Faça Login para Acessar o Sistema!"></Descrição>
        <Input cores={cores} label="Email:" placeholder="Insira seu e-mail:" />
        <Input cores={cores} label="Senha:" placeholder="Insira sua senha:" secureTextEntry={true}/>
        <Botão cores={cores} href="TabNav" texto3="Entrar"/>
        <View style={styles.link}>
          <Link href="TelasIniciais/Cadastro" asChild>
            <TouchableOpacity>
                <Text style={styles.linkText}>Cadastre-se</Text>
            </TouchableOpacity>
          </Link>
          <Link href="TelasIniciais/Recusenha" asChild>
            <TouchableOpacity>
                <Text style={styles.linkText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </>
  );
}

