import { Component, Input, OnInit } from '@angular/core';
import { Champions } from '../champions';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss']
})
export class ChampionDetailComponent implements OnInit {
  @Input() champion?: Champions;

  constructor() { }
  
  ngOnInit(): void {
  }

}
