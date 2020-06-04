import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

import { BookService, Book } from '../book.service';

@Injectable()
export class SocketBookService implements BookService {
  books: Observable<Book[]>;

  constructor(private socket: Socket) {
    console.log('Socket Service Activated');

    this.books = socket
      .fromEvent<Book[]>('books')
      // don't know if the shareReplay is actually needed here
      .pipe(shareReplay({ refCount: true, bufferSize: 1 }));
  }

  async addBook(name: string) {
    this.socket.emit('addBook', { name });
    return Promise.resolve();
  }

  async updateBook(book: Book) {
    this.socket.emit('updateBook', book);
    return Promise.resolve();
  }

  async removeBook(id: string) {
    this.socket.emit('removeBook', { id });
    return Promise.resolve();
  }
}
