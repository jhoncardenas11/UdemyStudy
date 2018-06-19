import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from '../objects/album';
import { Artist } from '../objects/artist';
import { ArtistPage } from '../objects/artist-page';
import { Track } from '../objects/track';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token =  'BQDhqGVN77ScM8LeL2ZySFbohiyX3ZOJAbQyfJbfAXNNtdXuVWZFRmCVNOeNhdGyt6Xrnhp1k6t42S7__pwSzfxnUjhlgxXfCFza93ZyMH6aaTdwBSdyd--cFDNVqxNNvOc0wJRXVq78En5KXZ5xFPvagqwEFQ'
  uri= 'https://api.spotify.com/v1/'
  constructor(private http: HttpClient) {
   }
  getNewReleases(): any {
    var albumes= []
    const headers = new HttpHeaders({
      'Authorization': 
      `Bearer ${this.token}`
    })
    this.http.get(`${this.uri}browse/new-releases`, { headers })
    .subscribe((data: any) => {
      data.albums.items.forEach(element => {
        var album= new Album()
        album.album_type= element.album_type
        album.artists= element.artists
        album.images= element.images[0].url
        album.name= element.name
        album.release_date= element.release_date
        albumes.push(album)
      });
    },(errorService)=>{
      albumes.push(errorService.error.error.message)
    })
    return albumes;
  }
  getSearch(busqueda: string) {
    var artistes= []
    const url =`${this.uri}search?q=${ busqueda }&type=artist`
    const headers = new HttpHeaders({
      'Authorization': 
      `Bearer ${this.token}`
    })
     this.http.get(url,{headers}).subscribe(
      (data: any) => {
        data.artists.items.forEach(element => {
          var artist= new Artist()
          artist.name= element.name
          artist.id= element.id
          try {
            artist.image=  element.images[0].url
          } catch (error) {
            artist.image=  './../../assets/img/not-found.png'
          }
          
          artistes.push(artist)
        });
        
      }
    )
    
    return artistes
  }
  getArtist(id: string){
    var artist= new ArtistPage() 
    const headers = new HttpHeaders({
      'Authorization': 
      `Bearer ${this.token}`
    })
    this.http.get( this.uri + `artists/${id}`, {headers} ).subscribe(
      (data: any) => {
        artist.id= data.id
        //artist.imagen= data.images[0].url
        artist.name= data.name
        artist.followers= data.followers.total
        artist.link=data.external_urls.spotify
        try {
          artist.imagen=  data.images[0].url
        } catch (error) {
          artist.imagen=  './../../assets/img/not-found.png'
        }
        /* data.generes.forEach(element => {
          artist.generes.push(element)
        }); */ 
      }
    )
    return artist
  }
  getTopTracks(id: string){
    var topTracks= []
    const headers = new HttpHeaders({
      'Authorization': 
      `Bearer ${this.token}`
    })
    this.http.get(`${this.uri}artists/${id}/top-tracks?country=ES`,{headers}).subscribe(
      (data: any) => {
        
        console.log(data.tracks)
        data.tracks.forEach(element => {
          var track= new Track()
          track.name= element.name
          track.album= element.album.name
          try {
            track.image= element.album.images[0].url
          } catch (error) {
            track.image= './../../assets/img/not-found.png'
          } 
          track.preview=element.uri
          topTracks.push(track)
        });

      }
    )
    return topTracks
  }
}

