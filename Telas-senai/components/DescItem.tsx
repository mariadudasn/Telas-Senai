import { StyleSheet, View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import useColor from '../temas/Temas';

export default function DescItem ({...props}) {
    const cores = useColor()
    const stylesItem = StyleSheet.create({
        container:{
            width: '100%',
            height: 66,
            paddingLeft: 20,
            justifyContent: 'center',
            gap: 10
        },
    
        tituloo:{
            fontSize: 11,
            fontWeight: "600",
            color: cores.txtcolorPrimary
        },
    
        itemm:{
            fontSize: 16,
            fontWeight: "400",
            color: cores.inptextcolorPrimaryVariant
        }
    })
    return (
        <View style={stylesItem.container}>
            <Text style={stylesItem.tituloo}>{props.tituloo}</Text>
            <Text style={stylesItem.itemm}>{props.itemm}</Text>
        </View>
    );
  }

