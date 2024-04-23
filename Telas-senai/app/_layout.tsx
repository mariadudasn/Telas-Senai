import { Stack } from 'expo-router';
import useColor from '../temas/Temas';

export default function layout() {
  const cores = useColor()

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false, statusBarColor: cores.nome === 'dark' ? cores.bgPrimary : "#000000"}} />
      <Stack.Screen name="TelasIniciais/Recusenha" options={{headerTitle: "", statusBarColor:cores.nome === 'dark' ? cores.bgPrimary : "#011E83", headerTransparent: true, headerTintColor:"#FFFFFF"}} />
      <Stack.Screen name="TelasIniciais/Cadastro" options={{headerTitle: "", headerTransparent: true, headerTintColor:"#FFFFFF", statusBarColor:cores.nome === 'dark' ? cores.bgPrimary : "#FF0000"}} />
      <Stack.Screen name="TelasIniciais/Login" options={{headerTitle: "", headerTransparent: true, headerTintColor:"#FFFFFF", statusBarColor:cores.nome === 'dark' ? cores.bgPrimary : "#000000"}} />
      <Stack.Screen name="drawer" options={{headerShown: false}}/>
      <Stack.Screen name="TabNav" options={{headerShown: false, statusBarTranslucent: true}}/>
    </Stack>
  );
}
