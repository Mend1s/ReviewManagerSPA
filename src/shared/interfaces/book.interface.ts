export interface Book {
  id: number;
  title: string;
  description: string;
  isbn: string;
  author: string;
  publisher: string;
  genre: number;
  yearOfPublication: number;
  numberOfPages: number;
  createDate: string;
  imageUrl?: string;
  averageGrade: number;
}
