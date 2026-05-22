import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/exports";
import { useMemo, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Navbar } from "@/components/Navbar";
import { useReadingList } from "@/context/ReadingListContext";
import { books } from "@/data/books";

export default function BookDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addToReadingList, isInReadingList } = useReadingList();
  const [feedback, setFeedback] = useState("");

  const book = useMemo(() => books.find((item) => item.id === id), [id]);
  const alreadyAdded = useMemo(
    () => (id ? isInReadingList(id) : false),
    [id, isInReadingList],
  );

  if (!book) {
    return (
      <View style={styles.screen}>
        <Navbar title="Biblioteca" />
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Livro não encontrado.</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function handleAddToReadingList() {
    if (!book) {
      return;
    }
    if (alreadyAdded) {
      setFeedback("Este livro já está na sua lista de leitura.");
      return;
    }

    addToReadingList(book);
    setFeedback("Livro adicionado à sua lista de leitura!");
  }

  return (
    <View style={styles.screen}>
      <Navbar title="Biblioteca" onBack={() => router.back()} />
      <View style={styles.content}>
        <Image source={{ uri: book.cover }} style={styles.cover} />
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>por {book.author}</Text>
        <Text style={styles.synopsisTitle}>Sinopse</Text>
        <Text style={styles.synopsis}>{book.synopsis}</Text>
        <TouchableOpacity
          onPress={handleAddToReadingList}
          style={[styles.button, alreadyAdded ? styles.buttonActive : null]}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {alreadyAdded ? "Já adicionado" : "Adicionar à Leitura"}
          </Text>
        </TouchableOpacity>
        {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
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
  cover: {
    width: "100%",
    height: 320,
    borderRadius: 22,
    marginBottom: 18,
    backgroundColor: "#0F172A",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 8,
    color: "#F8FAFC",
  },
  author: {
    fontSize: 16,
    color: "#94A3B8",
    marginBottom: 20,
  },
  synopsisTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#F8FAFC",
    marginBottom: 8,
  },
  synopsis: {
    fontSize: 15,
    lineHeight: 24,
    color: "#CBD5E1",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#5B21B6",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonActive: {
    backgroundColor: "#2563EB",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  feedback: {
    marginTop: 16,
    color: "#A5F3FC",
    fontSize: 14,
  },
  emptyState: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#94A3B8",
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
