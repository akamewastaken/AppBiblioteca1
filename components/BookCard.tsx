import { type Book } from "@/data/books";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type BookCardProps = {
  book: Book;
  onPress: () => void;
  showRemove?: boolean;
  onRemove?: () => void;
};

export function BookCard({
  book,
  onPress,
  showRemove = false,
  onRemove,
}: BookCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={{ uri: book.cover }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        {showRemove && onRemove ? (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={onRemove}
            activeOpacity={0.8}
          >
            <Text style={styles.removeText}>Remover</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#111827",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#334155",
    marginBottom: 14,
  },
  cover: {
    width: 86,
    height: 128,
    borderRadius: 12,
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    color: "#F8FAFC",
    marginBottom: 6,
  },
  author: {
    fontSize: 14,
    color: "#94A3B8",
  },
  removeButton: {
    marginTop: 14,
    alignSelf: "flex-start",
    backgroundColor: "#7C3AED",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  removeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
});
