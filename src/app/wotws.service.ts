import { Injectable } from '@angular/core';
import { Wonder} from './wonder';
import {Wonders} from './mock-wonder'

@Injectable({
  providedIn: 'root'
})
export class WotwsService {
  private wotws: Wonder[] = Wonders;
  constructor() {}
  getwotws():Wonder[]{
    return this.wotws;
  }
  getbyname(name : string):any{
    this.wotws.forEach(element => {
      if(element.name == name){
        return element;
      }
      return null;
    }

    );
    return null;
  }
}
