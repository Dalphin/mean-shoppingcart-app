import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavBarComponent } from '../theme-layout/layouts/nav-bar/nav-bar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-theme-layout',
  templateUrl: './theme-layout.component.html',
  styleUrls: ['./theme-layout.component.css']
})
export class ThemeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
