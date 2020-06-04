import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { BookService } from '../book.service';
import { SocketBookService } from './socket-book.service';

const config: SocketIoConfig = { url: 'example', options: {} };

@NgModule({
  imports: [SocketIoModule.forRoot(config)],
  providers: [
    {
      provide: BookService,
      useClass: SocketBookService,
    },
  ],
})
export class SocketBookModule {}
