import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import useColor from "../../temas/Temas";

export default function layout(){
    const cores = useColor()
    return (
        <Tabs screenOptions={{tabBarShowLabel: false}}>
            <Tabs.Screen name="Scanner" options={{
                headerRight: () => (<TouchableOpacity><Ionicons name="refresh" size={30} color="#FFFFFF" style={{ marginRight: 10 }}/></TouchableOpacity>),
                tabBarIcon: ({color, size}) => (
                    <Entypo name="camera" size={size} color={color} />
                ),
                headerTintColor: "#FFFFFF",
                headerStyle: { backgroundColor: cores.bgSecundary},
                headerStatusBarHeight: 25,
                tabBarStyle: {backgroundColor: cores.bgPrimary}

            }}/>
            <Tabs.Screen name="DrawerNav" options={{
                headerShown:false, tabBarStyle: {
                    backgroundColor: "#FF0000"
                },
                tabBarIcon: ({color, size}) => (
                    <Entypo name="list" size={size} color={color}/>
                ),
                tabBarInactiveTintColor: "#FFFFFF",
                tabBarActiveTintColor: "#FFFFFF"
            }}/>
            <Tabs.Screen name="Cadastro_de_itens"/>
        </Tabs>
    )
}
