import React, { useState } from "react";

import {
  View,
  Text,
  TouchableHighlight,
  TextInput
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import { estilos } from "./stylesheet/estilos";

function Conteudo() {

  const [nome, setNome] = useState('');
  const [linguagem, setLinguagem] = useState('Python');
  const [mensagem, setMensagem] = useState('');

  const [corInput, setCorInput] = useState('#fff');

  function corDeFoco(cor) {
    setCorInput(cor);
  }

  function mostrarMensagem() {

    if (nome === "") {
      setMensagem("Por favor, Digite seu nome!");
    } else {

      setMensagem(
        `Olá ${nome}, sua linguagem favorita é ${linguagem}`
      );
    }
  }

  return (

    <View style={estilos.conteudo}>

      <Text style={estilos.tituloConteudo}>
        Escolha Linguagem Favorita
      </Text>

      <TextInput
        placeholder="Digite seu nome"

        style={[
          estilos.inputNome,
          { backgroundColor: corInput }
        ]}

        value={nome}
        onChangeText={setNome}

        onFocus={() => corDeFoco('orange')}

        onBlur={() => corDeFoco('#fff')}
      />

      <Text style={estilos.textoConteudo}>
        Escolha uma linguagem:
      </Text>

      <Picker
        selectedValue={linguagem}
        style={estilos.picker}
        onValueChange={(itemValue) =>
          setLinguagem(itemValue)
        }
      >

        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="JavaScript" value="JavaScript" />
        <Picker.Item label="Python" value="Python" />
        <Picker.Item label="C#" value="C#" />

      </Picker>

      <TouchableHighlight
        style={estilos.botao}
        onPress={mostrarMensagem}
      >

        <Text style={estilos.textoBotao}>
          Confirmar
        </Text>

      </TouchableHighlight>

      <Text style={estilos.textoResultado}>
        {mensagem}
      </Text>

    </View>
  );
}

export default Conteudo;