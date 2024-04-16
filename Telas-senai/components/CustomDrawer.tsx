import {DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";

export default function CustomDrawer(props:any){
    return (
        <View style={{marginTop: 60}}>
            <View style={{padding:20, display: "flex", flexDirection: "row"}}>
            <Image source={require('@assets/Flavio.png')}/>
            <View style={{marginLeft: 15, marginTop: 18}}>
                <Text style={{fontWeight: "bold", fontSize: 16}}>Flavio Josefo</Text>
                <Text style={{color: "#595959"}}>favio@gmail.com</Text>
            </View>
            </View>
        <DrawerItemList {...props}/>
        </View>
    )
}        