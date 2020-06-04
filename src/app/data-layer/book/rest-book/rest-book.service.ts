import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMap, shareReplay } from 'rxjs/operators';

import { BookService, Book } from '../book.service';

const apiUrl = 'example';

@Injectable()
export class RestBookService implements BookService {
  books: Observable<Book[]>;
  private refreshBooks = new Subject<void>();

  constructor(private http: HttpClient) {
    console.log('REST Service Activated');

    this.books = this.refreshBooks.pipe(
      startWith(undefined),
      switchMap(() => this.http.get<Book[]>(apiUrl + '/books')),
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }

  async addBook(name: string) {
    await this.http.post(apiUrl + '/book', { name });
    this.refreshBooks.next();
  }

  async updateBook(book: Book) {
    await this.http.put(apiUrl + '/book/' + book.id, book);
    this.refreshBooks.next();
  }

  async removeBook(id: string) {
    await this.http.delete(apiUrl + '/book/' + id);
    this.refreshBooks.next();
  }
}
