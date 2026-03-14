import { Component } from '@angular/core';

import { HeaderView } from './header/header.view';
import { MainView } from './main/main.view';
import { FooterView } from './footer/footer.view';

@Component({
  selector: 'view',
  templateUrl: './view.html',
  styleUrl: './view.scss',
  imports: [HeaderView, MainView, FooterView],
})
export class View {}
