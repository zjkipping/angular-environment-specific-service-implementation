import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookImplementationModule } from 'src/environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // You could also just import the correct module here
    // instead of generically importing from environment file
    BookImplementationModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
