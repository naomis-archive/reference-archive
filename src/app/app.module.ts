import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { OutfitsComponent } from './outfits/outfits.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    OutfitsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
