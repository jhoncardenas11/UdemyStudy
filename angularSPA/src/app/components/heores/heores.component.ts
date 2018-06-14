import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.css']
})
export class HeoresComponent implements OnInit {
  heroes:any[]=[]
  constructor( private _heoresService:HeroesService,
  private router:Router ) {
  }

  ngOnInit() {
    this.heroes =this._heoresService.getHeroes();
  }
  verHeroe(i:number){
    this.router.navigate(['/heroe',i])
  }

}
