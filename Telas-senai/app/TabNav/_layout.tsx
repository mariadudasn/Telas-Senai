import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";


export default function layout(){
    return (
        <Tabs screenOptions={{tabBarShowLabel: false}}>
            <StatusBar style="light" translucent={true} backgroundColor="#FF0000" />
            <Tabs.Screen name="Scanner" options={{
                tabBarIcon: ({color, size}) => (
                    <Entypo name="camera" size={size} color={color} />
                ),
                headerTintColor: "#FFFFFF",
                headerStyle: { backgroundColor: "#FF0000"}
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
        </Tabs>
    )
}
