import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { BookCard } from "@/components/BookCard";
import { Navbar } from "@/components/Navbar";
import { useReadingList } from "@/context/ReadingListContext";

export default function ReadingListScreen() {
  const router = useRouter();
  const { readingList, removeFromReadingList } = useReadingList();

  return (
    <View style={styles.screen}>
      <Navbar title="Biblioteca" />
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Minha Lista de Leitura</Text>
        {readingList.length === 0 ? (
          <Text style={styles.emptyText}>
            Nenhum livro adicionado ainda. Volte à Home para escolher um livro.
          </Text>
        ) : (
          <FlatList
            data={readingList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <BookCard
                book={item}
                onPress={() =>
                  router.push({
                    pathname: "/book/[id]",
                    params: { id: item.id },
                  })
                }
                showRemove
                onRemove={() => removeFromReadingList(item.id)}
              />
            )}
            contentContainerStyle={styles.list}
          />
        )}
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: "#F8FAFC",
  },
  emptyText: {
    fontSize: 16,
    color: "#94A3B8",
    marginTop: 24,
    lineHeight: 24,
  },
  list: {
    paddingBottom: 100,
  },
});
