import { Component, OnInit } from '@angular/core';
import { arts } from 'src/assets/data/arts';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
})
export class ArtComponent {
  public arts = arts;
  constructor() {}
}
