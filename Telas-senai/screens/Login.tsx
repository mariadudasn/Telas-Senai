import {View,TouchableOpacity, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import Descrição from '../components/Descrição';
import Input from '../components/Input';
import Botão from '../components/Botão';

export default function Login() {
  return (
    <>
      <View>
        <Header cor="#000000" texto="Login"></Header>
        <Descrição textodes="Faça Login para Acessar o Sistema!"></Descrição>
        <Input nome="Email:" texto2="Insira seu e-mail:" senha={false}/>
        <Input nome="Senha:" texto2="Insira sua senha:" senha={true}/>
        <Botão texto3="Entrar"/>
        <View style={styles.link}>
            <TouchableOpacity>
                <Text style={styles.linkText}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.linkText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    linkText: {
        marginTop: 10,
        color: '#4305C7',
      },

    link: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 25,
    }

})