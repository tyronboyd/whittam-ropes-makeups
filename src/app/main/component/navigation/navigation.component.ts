import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public createPageActive: string = '';
  public listPageActive: string = '';

  constructor(private route: Router) {
  }

  ngOnInit() {
    if (this.route.isActive('/create-makeup', true)) {
      this.createPageActive = 'active';
      this.listPageActive = '';
    } else if (this.route.isActive('/makeup-list', true)) {
      this.listPageActive = 'active';
      this.createPageActive = '';
    }
  }
}

