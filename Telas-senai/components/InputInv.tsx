import { StyleSheet, Text,View, TextInput, TextInputProps } from "react-native"
import { useState } from "react"

interface InputInvProps extends TextInputProps{
    title: string
}

export default function InputInv ({title, ...props}: InputInvProps) {
    return(
        <View>
            <View>
                <Text style={styles.texto}>{title}<Text style={styles.asterisco}>*</Text></Text>
            </View>
            <View style={styles.container}>
                <TextInput {...props}/>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
  container:{
    height: 60,
    width: 320,
    borderWidth: 1,
    borderColor: "#5D5C5C",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 50,
  },
  
  texto:{
    position: "absolute",
    marginTop: 40,
    marginStart: 40,
    paddingStart: 10,
    paddingEnd: 10,
    backgroundColor: "#ffffff",
    zIndex: 1
  },

  asterisco:{
    color: "#ff0000"
  },
})
