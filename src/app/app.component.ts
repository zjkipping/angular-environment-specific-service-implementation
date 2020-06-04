import { Component } from '@angular/core';
import { BookService } from './data-layer/book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private bookService: BookService) {}
}
