import React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 2 }}>
        <Image
          style={{ flex: 1, width: undefined, height: undefined }}
          source={require("./assets/lojadoze.jpg")}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text>Loja do Zé</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Seguir"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
      </View>
      <View style={{ flex: 2 }}></View>
    </View>
  );
}
