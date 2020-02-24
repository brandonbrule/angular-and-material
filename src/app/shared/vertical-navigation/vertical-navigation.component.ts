import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html'
})
export class VerticalNavigationComponent implements  OnInit {

  @Input() data: {nav_items:[]};
  
  constructor() { }

  ngOnInit(){
    //console.log(this.data);
  }


}
