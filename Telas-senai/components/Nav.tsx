import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Nav ({...props}) {
    return (
        <View style={stylesNav.nav}>
            <StatusBar style='dark'/>
            <TouchableOpacity>{props.icone}</TouchableOpacity>
            <Text style={stylesNav.texto}>{props.texto}</Text>
            <TouchableOpacity>{props.icone2}</TouchableOpacity>
        </View>
    );
  }

  const stylesNav = StyleSheet.create({
    nav: {
        width: '100%',
        flexDirection: "row",
        height:60,
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5",
        gap: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        marginTop:30
    },

    texto: {
      fontSize: 14,
      color: "#595959"
    },
    
  }
)