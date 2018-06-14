import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent implements OnInit {
anio: number
  constructor() {
    this.anio = new Date().getFullYear()
}

  ngOnInit() {
  }

}
