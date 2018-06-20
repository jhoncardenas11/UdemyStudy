import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  clase = 'alert-primary'
  claseB = 'btn btn-dark m-3'
  loading: boolean
  alerta: string ="info"
  constructor() { }

  ngOnInit() {
  }
  change() {
    if (this.clase === 'alert-primary') {
      this.clase = 'alert-secondary'
      this.claseB = 'btn btn-primary m-3'
    } else {
      this.clase = 'alert-primary'
      this.claseB = 'btn btn-dark m-3'
    }
  }
  ejecutar() {
    this.loading = true
    setTimeout(() => {
      this.alerta = 'error'
      this.loading = false
    }, 3000);
  }

}
