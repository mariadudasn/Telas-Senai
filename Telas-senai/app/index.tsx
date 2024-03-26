import {View,TouchableOpacity, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import Descrição from '../components/Descrição';
import Input from '../components/Input';
import Botão from '../components/Botão';
import { Link } from 'expo-router';

export default function Login() {
  return (
    <>
      <View>
        <Header cor="#000000" texto="Login"></Header>
        <Descrição textodes="Faça Login para Acessar o Sistema!"></Descrição>
        <Input label="Email:" placeholder="Insira seu e-mail:" />
        <Input label="Senha:" placeholder="Insira sua senha:" secureTextEntry={true}/>
        <Botão href="drawer" texto3="Entrar"/>
        <View style={styles.link}>
          <Link href="/Cadastro" asChild>
            <TouchableOpacity>
                <Text style={styles.linkText}>Cadastre-se</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/Recusenha" asChild>
            <TouchableOpacity>
                <Text style={styles.linkText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    linkText: {
        color: '#4305C7',
      },

    link: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 25,
    }

})