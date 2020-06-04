import { NgModule } from '@angular/core';

import { BookService } from '../book.service';
import { MockBookService } from './mock-book.service';

@NgModule({
  providers: [
    {
      provide: BookService,
      useClass: MockBookService,
    },
  ],
})
export class MockBookModule {}
