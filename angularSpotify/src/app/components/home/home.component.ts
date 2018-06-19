import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   albumes: any = []
   image = []
   loading: boolean
  constructor(private spotify: SpotifyService, private router: Router ) {
     this.loading = false
    this.albumes = spotify.getNewReleases()

  }

  ngOnInit() {
  }
  reload() {
    const images = []
    this.albumes.forEach(element => {
      images.push(element.images)

    })
    this.image = images

  }
  OnClickArtist(id: string) {
    this.router.navigate(['/artista', id])
  }

}
