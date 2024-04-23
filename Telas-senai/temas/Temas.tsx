import { useColorScheme } from "react-native"


export interface Cores {
    bgPrimary: string,
    bgSecundary: string,
    bgInfo?: string,
    txtcolorPrimary: string,
    txtcolorSecundary: string,
    inpbgPrimaryVariant: string,
    inptextcolorPrimaryVariant: string,
    inpbgHover: string,
    nome?: string

}

const light: Cores = {
    bgPrimary: "#FFFFFF",
    bgSecundary: "#FF0000",
    bgInfo: "#011E83",
    txtcolorPrimary: "#101010",
    txtcolorSecundary: "#FFFFFF",
    inpbgPrimaryVariant: "#F5F5F5",
    inptextcolorPrimaryVariant: "#595959",
    inpbgHover: "#F39200"
}
const dark: Cores = {
    bgPrimary:"#240707",
    bgSecundary: "#FF0000",
    txtcolorPrimary: "#FFFFFF",
    txtcolorSecundary: "#D9D9D9",
    inpbgPrimaryVariant: "#3A2828",
    inptextcolorPrimaryVariant: "#CBCBCB",
    inpbgHover: "#F39200",
}

export default function useColor(){
    const ColorScheme = useColorScheme()
    if (ColorScheme === 'dark'){
        dark.nome = "dark"
        return dark
    }
    else{
        light.nome = "light"
        return light
    }
}