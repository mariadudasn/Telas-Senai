import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function layout(){
    return (
        <Tabs screenOptions={{tabBarShowLabel: false}}>
            <Tabs.Screen name="Scanner" options={{
                tabBarIcon: ({color, size}) => (
                    <Entypo name="camera" size={size} color={color} />
                )
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
