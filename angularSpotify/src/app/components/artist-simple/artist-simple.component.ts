import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist-simple',
  templateUrl: './artist-simple.component.html',
  styleUrls: ['./artist-simple.component.css']
})
export class ArtistSimpleComponent implements OnInit {
  id: string
  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService) {
    this.route.params.subscribe(params => {
      this.id = params.id
    })
   }

  ngOnInit() {
  }
  getArtist(id: string) {
      this.spotify.getArtist(id)
  }

}
