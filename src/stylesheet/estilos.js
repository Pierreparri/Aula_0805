import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
    alignItems: "center",
  },

  topo: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },

  imagem: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#7ec8e3",
    marginTop: 10,
  },

  conteudo: {
    width: "90%",
    marginTop: 20,
    alignItems: "center",
  },

  tituloConteudo: {
    fontSize: 22,
    color: "#1f1f1f",
    marginBottom: 20,
  },

  inputNome: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },

  textoConteudo: {
    fontSize: 20,
    marginBottom: 10,
  },

  picker: {
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#4CAF50",
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  textoResultado: {
    marginTop: 20,
    fontSize: 18,
    color: "#333",
  },

});