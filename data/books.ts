export type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
  synopsis: string;
};

export const books: Book[] = [
  {
    id: "book-1",
    title: "O Segredo da Biblioteca",
    author: "Lúcia Mendes",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    synopsis:
      "Uma jovem bibliotecária descobre mapas antigos escondidos entre as estantes e inicia uma jornada para desvendar segredos de uma cidade esquecida.",
  },
  {
    id: "book-2",
    title: "Noite de Página Virada",
    author: "André Silva",
    cover:
      "https://images.unsplash.com/photo-1496104679561-38d0bc6fd39a?auto=format&fit=crop&w=400&q=80",
    synopsis:
      "Em uma cidade pequena, um escritor encontra inspiração em correspondências antigas e transforma a rotina em uma história emocionante.",
  },
  {
    id: "book-3",
    title: "A Última Crônica",
    author: "Marina Costa",
    cover:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
    synopsis:
      "Dois jornalistas reúnem memórias e lutam para publicar a última crônica de um autor lendário antes que seus manuscritos desapareçam.",
  },
  {
    id: "book-4",
    title: "Entre Livros e Estrelas",
    author: "Carlos Oliveira",
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
    synopsis:
      "Uma aventura de descoberta e amizade tem início quando um jovem encontra um livro misterioso que parece comunicar-se com o céu.",
  },
  {
    id: "book-5",
    title: "O Diário da Biblioteca",
    author: "Patrícia Ramos",
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    synopsis:
      "Um diário antigo revela a história de uma biblioteca mágica e dos primeiros leitores que transformaram palavras em memórias eternas.",
  },
  {
    id: "book-6",
    title: "Capítulos do Amanhã",
    author: "Eduardo Nunes",
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80",
    synopsis:
      "Em um futuro próximo, livros físicos voltam a ser preciosos e um jovem precisa proteger sua coleção contra quem deseja destruí-la.",
  },
  {
    id: "book-7",
    title: "O Som da Página",
    author: "Beatriz Gomes",
    cover:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80",
    synopsis:
      "Uma compositora encontra inspiração nos livros antigos de sua avó e descobre que cada página guarda uma melodia diferente.",
  },
  {
    id: "book-8",
    title: "A Casa dos Leitores",
    author: "Ricardo Teixeira",
    cover:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80",
    synopsis:
      "Uma comunidade de leitores transforma uma velha casa em ponto de encontro, criando histórias novas e laços inesperados.",
  },
];
