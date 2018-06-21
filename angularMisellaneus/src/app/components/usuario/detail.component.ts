import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail',
  template: `
    <p>
      detail works!
    </p>
  `,
  styles: []
})
export class DetailComponent implements OnInit {

  constructor(private activate: ActivatedRoute) {
    this.activate.parent.params.subscribe(params =>{
      console.log(params)
    })
   }

  ngOnInit() {
  }

}
