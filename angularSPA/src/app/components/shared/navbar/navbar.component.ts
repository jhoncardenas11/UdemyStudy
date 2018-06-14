import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService) {
  }

  ngOnInit() {
  }
  buscarHeore(i: String) {
    this._heroesService.searchHeroe(i)
  }

}
