import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './nav-item';
import {NavService} from './nav.service';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer', { static: true }) appDrawer: ElementRef;

  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: '/'
    },
    {
      displayName: 'Nav Item 1',
      iconName: 'videocam',
      route: 'nav-item-1',
      children: [
        {
          displayName: 'Nav Item 1 - C(1)',
          iconName: 'group',
          route: 'nav-item-1/child-1',
          children: [
            {
              displayName: 'Nav Item 1 - C(1) - C(1)',
              iconName: 'person',
              route: 'child-2',
              children: [
                {
                  displayName: 'Nav Item 1 - C(1) - C(1) - C(1)',
                  iconName: 'star_rate',
                  route: ''
                }
              ]
            },
            {
              displayName: 'Nav Item 1 - C(1) - C(2)',
              iconName: 'person',
              route: ''
            },
            {
              displayName: 'Nav Item 1 - C(1) - C(3)',
              iconName: 'person',
              route: '',
              children: [
                {
                  displayName: 'Nav Item 1 - C(1) - C(3) - C(1)',
                  iconName: 'star_rate',
                  route: ''
                },
                {
                  displayName: 'Nav Item 1 - C(1) - C(3) - C(2)',
                  iconName: 'star_rate',
                  route: ''
                }
              ]
            }
          ]
        },
        {
          displayName: 'Nav Item 1 - C(2)',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'Nav Item 1 - C(2) - C(1)',
              iconName: 'star_rate',
              route: ''
            },
            {
              displayName: 'Nav Item 1 - C(2) - C(2)',
              iconName: 'star_rate',
              route: ''
            },
            {
              displayName: 'Nav Item 1 - C(2) - C(3)',
              iconName: 'star_rate',
              route: ''
            },
            {
              displayName: 'Nav Item 1 - C(2) - C(4)',
              iconName: 'star_rate',
              route: ''
            }
          ]
        },
        {
          displayName: 'Nav Item 1 - C(3)',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Help',
      iconName: 'info',
      route: 'help'
    },
    {
      displayName: 'Form',
      iconName: 'info',
      route: 'form'
    }
  ];

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
