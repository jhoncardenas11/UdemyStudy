import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-new',
  template: `
    <p>
      edit-new works!
    </p>
  `,
  styles: []
})
export class EditNewComponent implements OnInit {

  constructor(private activate: ActivatedRoute) {
    this.activate.parent.params.subscribe(params =>{
      console.log(params)
    })
   }

  ngOnInit() {
  }

}
