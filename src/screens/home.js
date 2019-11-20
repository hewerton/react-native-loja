import React from "react";
import { View, Text, Button, FlatList } from "react-native";

class HomeScreen extends React.Component {
  render() {
    const lojas = [
      {
        id: 1,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 1",
        descricao: "Está loja contém variedades."
      },
      {
        id: 2,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 2",
        descricao: "Está loja contém variedades."
      },
      {
        id: 3,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 3",
        descricao: "Está loja contém variedades."
      },
      {
        id: 4,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 4",
        descricao: "Está loja contém variedades."
      },
      {
        id: 5,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 5",
        descricao: "Está loja contém variedades."
      }
    ];

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlatList
          ItemSeparatorComponent={
            <View style={[style.separator, highlighted && { marginLeft: 0 }]} />
          }
          data={lojas}
          renderItem={({ item }) => <Text>{item.nome}</Text>}
        />
      </View>
    );
  }
}

export default HomeScreen;
