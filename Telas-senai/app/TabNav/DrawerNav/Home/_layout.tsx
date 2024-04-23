import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import useColor from "../../../../temas/Temas";

export default function Layout(){
    const cores = useColor()
    return(
        <Stack>
            <Stack.Screen name="Inventário" options={{ headerTitle: "Lista", headerTitleAlign:"center",
                headerStyle: {backgroundColor: cores.bgPrimary }, headerTintColor: cores.txtcolorPrimary,
                headerLeft:() => (<DrawerToggleButton tintColor={cores.inptextcolorPrimaryVariant}/>),
                headerSearchBarOptions:{
                    headerIconColor: cores.txtcolorPrimary
                }
            }}/>
            <Stack.Screen name="Cadastro_de_itens" options={{ headerTitle: "Cadastro de itens", headerTitleAlign:"center", headerStyle: {backgroundColor: "#FF0000"}, headerTintColor: "#FFFFFF", 
                headerRight: () => (<TouchableOpacity><AntDesign name="pluscircleo" size={30}  color="#FFFFFF" style={{ marginRight: 10 }}/></TouchableOpacity>),
            }}/>
            <Stack.Screen name="Descricao_de_itens" options={{ headerTitle: "Descrição de itens", headerTitleAlign:"center", headerStyle: {backgroundColor: "#FF0000"}, headerTintColor: "#FFFFFF",
                headerRight: () => (<TouchableOpacity><AntDesign name="pluscircleo" size={30}  color="#FFFFFF" style={{ marginRight: 10 }}/></TouchableOpacity>),
            }}/>
            <Stack.Screen name="Editar" options={{ headerTitle: "Editar", headerTitleAlign:"center", headerStyle: {backgroundColor: "#FF0000"}, headerTintColor: "#FFFFFF",
                headerRight: () => (<TouchableOpacity><AntDesign name="checkcircle" size={30}  color="#FFFFFF" style={{ marginRight: 10 }}/></TouchableOpacity>),
            }}/>
        </Stack>
    )
}
