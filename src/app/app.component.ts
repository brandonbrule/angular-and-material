import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {NavService} from './shared/nav-item/nav.service';

import {AppNavigationConfig} from './shared/app-navigation-config';


@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  navigation_items:[] = [];
  @ViewChild('appDrawer', { static: true }) appDrawer: ElementRef;

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  ngOnInit(){
    AppNavigationConfig.forEach(function(nav) {
      this.navigation_items.push(nav);
    }, this);
  }
}
