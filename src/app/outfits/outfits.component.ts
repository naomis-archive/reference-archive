import { Component } from '@angular/core';
import { Outfits } from 'src/assets/data/outfits';

@Component({
  selector: 'app-outfits',
  templateUrl: './outfits.component.html',
  styleUrls: ['./outfits.component.css'],
})
export class OutfitsComponent {
  public outfits = Outfits;
  constructor() {}
}
