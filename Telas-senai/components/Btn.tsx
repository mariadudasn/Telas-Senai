import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Btn ({...props}) {
    return (
        <View>
            <StatusBar style='dark'/>
            <TouchableOpacity style={stylesBtn.iconee}>{props.icones}</TouchableOpacity>
        </View>
    );
  }

  const stylesBtn = StyleSheet.create({
    iconee: {
        position: 'absolute',
        bottom: 40,
        right: 20,
        zIndex: 1,
    },
  })
