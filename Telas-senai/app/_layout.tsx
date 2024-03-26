import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true, 
        headerTintColor: '#fff',
        headerTitle: "",
        statusBarStyle: 'light'
      }}>
    <Stack.Screen name="index" options={{ statusBarColor:"#000000"}}/>
    <Stack.Screen name="Cadastro_de_itens" options={{statusBarColor:"#FF0000"}}/>
    <Stack.Screen name="Cadastro" options={{statusBarColor:"#FF0000"}}/>
    <Stack.Screen name="Descrição_de_itens" options={{statusBarColor:"#FFFFFF"}}/>
    <Stack.Screen name="Editar" options={{statusBarColor:"#FFFFFF"}}/> 
    <Stack.Screen name="Recusenha" options={{statusBarColor:"#011E83"}}/> 
    <Stack.Screen name="drawer" options={{headerShown:false}}/> 
    </Stack>
  );
}
