import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';


export default function Item ({...props}) {
    return (
        <Link href={props.link} asChild>
            <TouchableOpacity style={stylesItem.container}>
                <StatusBar style='dark'/>
                <Text style={stylesItem.titulo}>{props.titulo}</Text>
                <Text style={stylesItem.item}>{props.item}</Text>
            </TouchableOpacity>
        </Link>
    );
  }

const stylesItem = StyleSheet.create({
    container:{
        width: '100%',
        height: 66,
        borderWidth: 1,
        borderColor:"#F5F5F5",
        paddingLeft: 20,
        justifyContent: 'center',
        gap: 10
    },

    titulo:{
        fontSize: 16,
        fontWeight: "600",
    },

    item:{
        fontSize: 14,
        fontWeight: "400",
        color: "#595959",
    }
})