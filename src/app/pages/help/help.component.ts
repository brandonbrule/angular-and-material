import { Component, OnInit } from '@angular/core';
import {NavService} from '../../shared/nav-item/nav.service';
import {NavigationConfig} from './app-help-navigation-config';

@Component({
  selector: 'page-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})

export class HelpComponent implements OnInit {
  navigation_items:[] = [];
  constructor(private navService: NavService) {
  }

  ngOnInit() {

    NavigationConfig.forEach(function(nav) {
      this.navigation_items.push(nav);
    }, this);
    
  }

}