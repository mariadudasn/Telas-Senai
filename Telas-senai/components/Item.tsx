import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import useColor from '../temas/Temas';

export default function Item ({...props}) {
    const cores = useColor()
    const stylesItem = StyleSheet.create({
        container:{
            width: '100%',
            height: 66,
            borderWidth: 1,
            borderColor: cores.inpbgPrimaryVariant,
            paddingLeft: 20,
            justifyContent: 'center',
            gap: 10
        },
    
        titulo:{
            fontSize: 16,
            fontWeight: "600",
            color: cores.txtcolorPrimary,
        },
    
        item:{
            fontSize: 14,
            fontWeight: "400",
            color: cores.inptextcolorPrimaryVariant,
        }
    })
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

