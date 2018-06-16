import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Santi';
  name = 'santiago pachon diaz'
  arrego =[1,2,3,4,5,6,7,8,9,10]
  pi = 3.14159265
  percentNumber =0.75
  currencyNumber =4500
  heroe = {
    nombre: "Flash",
    power:"SpeedForce",
    villan:[{
      name: "frio",
      power:"cold gun"
    },
    {
      name:"reverse flash",
      power:"speedForce"
    }]
  }
  valorPromesa =new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('ya es como tarde'),3500)
  })
  cumpleanos = new Date()
  youtube= 'https://www.youtube.com/embed/KDxJlW6cxRk'
}
