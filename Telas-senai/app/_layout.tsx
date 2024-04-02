import { Stack } from 'expo-router';

export default function layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false, statusBarColor:"#000000"}} />
      <Stack.Screen name="TelasIniciais/Recusenha" options={{headerTitle: "", statusBarColor:"#011E83", headerTransparent: true, headerTintColor:"#FFFFFF"}} />
      <Stack.Screen name="TelasIniciais/Cadastro" options={{headerTitle: "", headerTransparent: true, headerTintColor:"#FFFFFF", statusBarColor:"#FF0000"}} />
    </Stack>
  );
}
