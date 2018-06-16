import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.css']
})
export class HeoresComponent implements OnInit {
  heroes: any[] = []
  validatorSearch: String
  constructor( private _heoresService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) {
       this.activatedRoute.params.subscribe(params => {
          this.validatorSearch = params.validatorSearch
       })
       if (this.validatorSearch === 'Navbar') {
         this.heroes = this._heoresService.getHeroes()
       } else {
         this.heroes = this._heoresService.searchHeroe(
           this.validatorSearch.toLowerCase())
       }
  }

  ngOnInit() {


  }
  verHeroe(i: number) {
    this.router.navigate(['/heroe', i])
  }

}
