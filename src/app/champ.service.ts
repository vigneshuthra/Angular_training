import { Injectable } from '@angular/core';
import { Champions } from './champions';
import { CHAMPIONS } from './mock-champions';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ChampService {

  constructor(private messageService:MessageService) { }

  getAll(): Observable<Champions[]>{
    const champs= of(CHAMPIONS) ;
    this.messageService.add('ChampsService: fetched Champs');

    return champs;

  }
}
