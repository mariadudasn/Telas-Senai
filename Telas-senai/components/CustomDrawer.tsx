import {DrawerItemList} from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import useColor from "../temas/Temas";

export default function CustomDrawer(props:any){
    const cores = useColor()
    return (
        <View style={{ paddingTop:60, backgroundColor: cores.bgPrimary, height: "100%"}}>
            <View style={{padding:20, display: "flex", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#D9D9D9"}}>
            <Image source={require('@assets/Flavio.png')}/>
                <View style={{marginLeft: 15, marginTop: 18}}>
                    <Text style={{fontWeight: "bold", fontSize: 16, color: cores.txtcolorPrimary}}>Flavio Josefo</Text>
                    <Text style={{color: cores.nome === 'dark' ? cores.txtcolorSecundary : cores.txtcolorPrimary}}>favio@gmail.com</Text>
                </View>
            </View>
        <DrawerItemList {...props}/>
        </View>
    )
}        