import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {HeroesService} from '../../services/heroes.service'
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

heroe: any = {}
  constructor(private activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService,
              private router: Router) {
  this.activatedRoute.params.subscribe(params => {
    this.heroe = this._heroeService.getHeroe(params.id);
  }); }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['heroes']);
  }

}
