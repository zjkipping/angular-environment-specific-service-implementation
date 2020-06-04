import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BookService, Book } from '../book.service';

const mockBooks = [
  {
    id: '1',
    name: 'book1',
  },
  {
    id: '2',
    name: 'book2',
  },
];

@Injectable()
export class MockBookService implements BookService {
  bookData = mockBooks;
  nextId = mockBooks.length + 1;
  private books$ = new BehaviorSubject<Book[]>([...this.bookData]);
  books = this.books$.asObservable();

  constructor() {
    console.log('Mock Service Activated');
  }

  async addBook(name: string) {
    this.bookData = [
      ...this.bookData,
      { id: this.nextId.toString(), name },
    ];
    this.nextId++;
    this.books$.next(this.bookData);
    return Promise.resolve();
  }

  async updateBook(book: Book) {
    const index = this.bookData.indexOf(book);
    if (index > -1) {
      this.bookData = [
        ...this.bookData.slice(0, index),
        book,
        ...this.bookData.slice(index + 1, this.bookData.length),
      ];
    }
    this.books$.next(this.bookData);
    return Promise.resolve();
  }

  async removeBook(id: string) {
    this.bookData = this.bookData.filter(b => (b.id = id));
    this.books$.next(this.bookData);
    return Promise.resolve();
  }
}
