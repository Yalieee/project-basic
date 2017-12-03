import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopppingListComponent } from './shoppping-list/shoppping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopppingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
