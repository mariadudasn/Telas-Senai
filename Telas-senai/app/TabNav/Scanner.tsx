import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import useColor from '../../temas/Temas';

export default function Scanner() {
  const cores = useColor()
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    camera: {
      width: 450,
      height: 450,
    }
  });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  return (
    <View style={{backgroundColor : cores.bgPrimary, height: "100%"}}>
      <SafeAreaView style={styles.container}>
        <Camera style={styles.camera} ref={camRef}></Camera>
      </SafeAreaView>
    </View>
  );
}

