import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

import { BookCard } from "@/components/BookCard";
import { Navbar } from "@/components/Navbar";
import { books } from "@/data/books";

export default function HomeScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredBooks = useMemo(
    () =>
      books.filter((book) => {
        const query = search.trim().toLowerCase();
        return (
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
        );
      }),
    [search],
  );

  return (
    <View style={styles.screen}>
      <Navbar title="Biblioteca" />
      <View style={styles.content}>
        <Text style={styles.subtitle}>Busque um livro relaxante</Text>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar por título ou autor"
          placeholderTextColor="#94A3B8"
          style={styles.searchInput}
        />
        <FlatList
          data={filteredBooks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BookCard
              book={item}
              onPress={() =>
                router.push({ pathname: "/book/[id]", params: { id: item.id } })
              }
            />
          )}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum livro encontrado.</Text>
          }
        />
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
  subtitle: {
    color: "#CBD5E1",
    fontSize: 16,
    marginBottom: 12,
  },
  searchInput: {
    height: 50,
    borderRadius: 16,
    backgroundColor: "#111827",
    color: "#F8FAFC",
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#334155",
  },
  list: {
    paddingBottom: 100,
  },
  emptyText: {
    fontSize: 16,
    color: "#94A3B8",
    marginTop: 20,
    textAlign: "center",
  },
});
