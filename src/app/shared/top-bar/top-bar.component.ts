import { Component, OnInit } from '@angular/core';
import {NavService} from '../nav-item/nav.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {

  constructor(public navService: NavService) { }

  ngOnInit() {
  }

}