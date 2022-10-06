import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { OutfitsComponent } from './outfits/outfits.component';
import { RefComponent } from './ref/ref.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    OutfitsComponent,
    RefComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
