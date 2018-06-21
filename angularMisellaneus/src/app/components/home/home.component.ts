import { Component, OnInit, OnChanges,OnDestroy,
  DoCheck,AfterContentInit,AfterContentChecked,
  AfterViewChecked,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges,OnDestroy,
DoCheck,AfterContentInit,AfterContentChecked,
AfterViewChecked,AfterViewInit {
  

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterVViewInt')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngOnChanges(){
    console.log('OnChanges')

  }

}
