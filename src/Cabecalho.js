import React from "react";

import {
  View,
  Text,
  Image
} from "react-native";

import { estilos } from "./stylesheet/estilos";

function Cabecalho() {

  return (

    <View style={estilos.topo}>

      <Image
        source={require("./img/picker.png")}
        style={estilos.imagem}
      />

      <Text style={estilos.titulo}>
        Componente Picker
      </Text>

    </View>
  );
}

export default Cabecalho;