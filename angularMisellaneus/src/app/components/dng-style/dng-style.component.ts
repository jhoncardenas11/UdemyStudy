import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dng-style',
  templateUrl: './dng-style.component.html',
  styleUrls: ['./dng-style.component.css']
})
export class DngStyleComponent implements OnInit {
  tamanio = 20
  estilo = {
    'font-size': this.tamanio + 'px',
    color: 'red'
  }
  constructor() { }

  ngOnInit() {
  }
  aum() {
    this.tamanio = this.tamanio + 10
    this.estilo['font-size'] = this.tamanio + 'px'
  }
  dis() {
    this.tamanio = this.tamanio - 10
    this.estilo['font-size'] = this.tamanio  + 'px'
  }
  blue() {
    this.estilo.color = 'blue'
  }
  red() {
    this.estilo.color = 'red'
  }

}
