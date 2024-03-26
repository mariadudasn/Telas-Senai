import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';


interface LinkBtnProps extends LinkProps{
    texto3: string
  }

export default function Botão({texto3, ...props}: LinkBtnProps) {
    return (
      <>
        <View style={styles.pad}>
            <Link {...props} asChild>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.texto3}>{texto3}</Text>
                </TouchableOpacity>
            </Link>
        </View>
    </>
    )}

const styles = StyleSheet.create({
    pad: {
        paddingLeft: 30,
        paddingRight: 25,
    },

    botao: {
        marginTop: 10,
        backgroundColor: '#000000',
        width: '100%',
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 5
    },

    texto3: {
        color: '#FFFFFF',
        fontSize: 16,
    }
})