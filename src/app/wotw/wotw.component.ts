import { Component, OnInit } from '@angular/core';
import {WotwsService} from '../wotws.service';
import { Wonder } from '../wonder';

@Component({
  selector: 'app-wotw',
  templateUrl: './wotw.component.html',
  styleUrls: ['./wotw.component.css'],
  providers: [WotwsService]

})
export class WotwComponent implements OnInit {

  constructor(private wotwsService: WotwsService){}
  name:string = "";
  about:string = "";
  imgpath:string = "";
  getinfo(name:string):void{
    this.wotws.forEach(element => {
      if(element.name==name){
        this.name = element.name;
        this.about = element.about;
        this.imgpath=element.imgpath;
      }
    });
  }
  ngOnInit(): void {
  }
  wotws:Wonder[] = this.wotwsService.getwotws();

}
