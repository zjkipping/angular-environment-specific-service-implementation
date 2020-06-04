import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BookService } from '../book.service';
import { RestBookService } from './rest-book.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: BookService,
      useClass: RestBookService,
    },
  ],
})
export class RestBookModule {}
