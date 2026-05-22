import { type Book } from "@/data/books";
import {
    createContext,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";

type ReadingListContextType = {
  readingList: Book[];
  addToReadingList: (book: Book) => void;
  removeFromReadingList: (id: string) => void;
  isInReadingList: (id: string) => boolean;
};

const ReadingListContext = createContext<ReadingListContextType | null>(null);

export function ReadingListProvider({ children }: { children: ReactNode }) {
  const [readingList, setReadingList] = useState<Book[]>([]);

  const value = useMemo(
    () => ({
      readingList,
      addToReadingList: (book: Book) =>
        setReadingList((prev) =>
          prev.some((item) => item.id === book.id) ? prev : [...prev, book],
        ),
      removeFromReadingList: (id: string) =>
        setReadingList((prev) => prev.filter((book) => book.id !== id)),
      isInReadingList: (id: string) =>
        readingList.some((book) => book.id === id),
    }),
    [readingList],
  );

  return (
    <ReadingListContext.Provider value={value}>
      {children}
    </ReadingListContext.Provider>
  );
}

export function useReadingList() {
  const context = useContext(ReadingListContext);
  if (!context) {
    throw new Error("useReadingList must be used within ReadingListProvider");
  }

  return context;
}
