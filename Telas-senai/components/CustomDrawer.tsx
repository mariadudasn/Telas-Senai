import {DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import { View, Text } from "react-native";

export default function CustomDrawer(props:any){
    return (
        <View style={{marginTop: 60}}>
            <View style={{padding:20}}>
            <Text style={{fontWeight: "bold", fontSize: 16}}>Flavio Josefo</Text>
            <Text style={{color: "#595959"}}>favio@gmail.com</Text>
            </View>
        <DrawerItemList {...props}/>
        </View>
    )
}