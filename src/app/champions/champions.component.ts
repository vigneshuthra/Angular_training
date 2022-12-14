import { Component, OnInit } from '@angular/core';
import { ChampService } from '../champ.service';
import { Champions } from '../champions';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit {
  champs: Champions[] = [];

  selectChampion?: Champions;

  constructor(private champService: ChampService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getChamps();
  }

  getChamps(){
    this.champService.getAll().subscribe(champs=>this.champs=champs);
  }

  onSelect(champions: Champions): void {
    this.selectChampion = champions;
    this.messageService.add(`ChampionsComponent: Selected Champion id=${champions.id}`)
  }
}
