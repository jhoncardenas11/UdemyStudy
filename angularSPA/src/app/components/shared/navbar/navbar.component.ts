import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lastI: String
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  buscarHeroe(i: String) {
      this.router.navigate(['heroes', i])
      if ( i !== this.lastI ) {
        window.location.reload()
      }
      this.lastI = i
      console.log(this.lastI)
  }

}
