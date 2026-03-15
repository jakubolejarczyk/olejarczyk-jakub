import { Component } from '@angular/core';

import { HomeView } from './home/home.view';
import { NavigationView } from './navigation/navigation.view';

@Component({
  selector: 'header-view',
  templateUrl: './header.view.html',
  styleUrl: './header.view.scss',
  imports: [HomeView, NavigationView],
})
export class HeaderView {}
