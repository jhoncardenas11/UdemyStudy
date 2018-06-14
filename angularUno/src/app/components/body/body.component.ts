import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 hero:String
 mostrar:boolean
 villans:Array<String>
  constructor() {
    this.hero="Batman"
    this.mostrar=true
    this.villans=["Joker","hydra","Bane","wonder woman"]
  }

  ngOnInit() {
  }

}
