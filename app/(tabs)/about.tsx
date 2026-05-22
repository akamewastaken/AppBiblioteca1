import { StyleSheet, Text, View } from "react-native";

import { Navbar } from "@/components/Navbar";

export default function AboutScreen() {
  return (
    <View style={styles.screen}>
      <Navbar title="Biblioteca" />
      <View style={styles.content}>
        <Text style={styles.title}>Sobre a Biblioteca</Text>
        <Text style={styles.paragraph}>
          Este aplicativo foi criado para exibir livros fictícios e permitir que
          você monte uma lista de leitura personalizada.
        </Text>
        <Text style={styles.paragraph}>
          Use a aba Home para buscar livros por título ou autor, toque em um
          livro para ver os detalhes e adicione-o à sua lista de leitura.
        </Text>
        <Text style={styles.paragraph}>
          A lista de leitura é gerenciada globalmente com contexto, então seus
          livros permanecem disponíveis enquanto você navega entre as telas.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#020617",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 12,
    color: "#F8FAFC",
  },
  paragraph: {
    fontSize: 16,
    color: "#94A3B8",
    lineHeight: 24,
    marginBottom: 14,
  },
});
