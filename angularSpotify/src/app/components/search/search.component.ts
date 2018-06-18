import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistes: any
  loading: boolean
  constructor(private spotify: SpotifyService, private router: Router) {
   }
  ngOnInit() {
  }
  buscar(busqueda: string) {
    this.loading = true
    console.log(busqueda)
    this.artistes = this.spotify.getSearch( busqueda )
    console.log(this.artistes)
    this.loading = false
  }
  OnClickArtist(id: string) {
    this.router.navigate(['/artista', id])
  }

}
