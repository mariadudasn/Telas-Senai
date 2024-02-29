import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Footer ({...props}) {
    return (
        <View style={[stylesFooter.footer, {backgroundColor: props.colorr}]}>
            <StatusBar style='dark'/>
            <TouchableOpacity>{props.icone}</TouchableOpacity>
            <TouchableOpacity>{props.icone2}</TouchableOpacity>
        </View>
    );
  }

  const stylesFooter = StyleSheet.create({
    footer: {
        width: '100%',
        flexDirection: "row",
        height:60,
        position: "relative",
        bottom: 0,
        gap: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        marginTop:30,
    },
    
  }
)