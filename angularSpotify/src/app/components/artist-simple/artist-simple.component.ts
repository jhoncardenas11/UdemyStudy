import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';
import { ArtistPage } from '../../objects/artist-page';

@Component({
  selector: 'app-artist-simple',
  templateUrl: './artist-simple.component.html',
  styleUrls: ['./artist-simple.component.css']
})
export class ArtistSimpleComponent implements OnInit {
  id: string
  artist= new ArtistPage()
  loading: boolean
  topTracks: any = []
  headersTable = ['Foto','Album','Canción','Vista Previa']
  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService) {
    this.loading= true
    this.route.params.subscribe(params => {
      this.id = params.id
    })
    this.getArtist(this.id)
    this.getTopTracks(this.id)
    this.loading= false
   }

  ngOnInit() {
  }
  getArtist(id: string) {
      this.artist= this.spotify.getArtist(id)
  }
  getTopTracks(id: string){
   this.topTracks= this.spotify.getTopTracks(id)
  }

}
