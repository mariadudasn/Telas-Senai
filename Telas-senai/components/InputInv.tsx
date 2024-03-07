import { StyleSheet, Text,View, TextInput, TextInputProps } from "react-native"
import { useState } from "react"

interface InputInvProps extends TextInputProps{
    title: string
}

export default function InputInv ({title, ...props}: InputInvProps) {
    const [hover, setHover] = useState("#5D5C5C")
    const styles = StyleSheet.create({
        container1:{
            paddingLeft:30,
            paddingRight:30
        },

        container2:{
          height: 50,
          width: "100%",
          borderWidth: 1,
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 50,
          borderColor: hover,
          zIndex: -1,
          padding: 15
        },
        
        titlee:{
          position: "absolute",
          fontWeight: "600",
          marginTop: 40,
          marginStart: 25,
          paddingStart: 10,
          paddingEnd: 10,
          color:hover,
          backgroundColor: "#FFFFFF",
          zIndex: 1
        },
      
        asterisco:{
          color: "#ff0000"
        },
      })

    return(
        <View style={styles.container1}>
            <View>
                <Text style={styles.titlee}>{title}<Text style={styles.asterisco}> *</Text></Text>
            </View>
            <View style={styles.container2}>
                <TextInput {...props} onFocus={() => {
            setHover("#F39200")
          }} onBlur={()=>{
            setHover("#5D5C5C")
          }}/>
            </View>
        </View>
    )

}

