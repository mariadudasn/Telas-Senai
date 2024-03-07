import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Footer ({...props}) {
    return (
        <View style={[stylesFooter.footer, {backgroundColor: props.colorr}, {borderTopColor: props.bordacolor}]}>
            <StatusBar style='dark'/>
            <TouchableOpacity style={stylesFooter.icone}>{props.icone}</TouchableOpacity>
            <TouchableOpacity style={stylesFooter.icone}>{props.icone2}</TouchableOpacity>
        </View>
    );
  }

  const stylesFooter = StyleSheet.create({
    footer: {
        width: '100%',
        flexDirection: "row",
        height:60,
        gap: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        justifyContent:"center",
        borderTopWidth: 1
    },

    icone:{
      padding:6,
    }
    
  }
)