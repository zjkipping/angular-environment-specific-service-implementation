import { Observable } from 'rxjs';

export interface Book {
  id: string;
  name: string;
}

export abstract class BookService {
  abstract books: Observable<Book[]>;

  abstract async addBook(name: string): Promise<void>;

  abstract async updateBook(book: Book): Promise<void>;

  abstract async removeBook(id: string): Promise<void>;
}
