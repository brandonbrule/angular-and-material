import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  active_route:string;

  constructor(private router: Router ) {
    router.events.subscribe( (val) => {
          //this.active_route = val.url;
      });
  }


  ngOnInit() {
    this.active_route = this.router.url;
  }

}