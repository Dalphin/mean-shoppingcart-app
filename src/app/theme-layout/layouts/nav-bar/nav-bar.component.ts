import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../layouts/side-bar/side-bar.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private listTitles: any[];
  constructor() { }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

}
