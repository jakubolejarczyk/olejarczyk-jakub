import { Component } from '@angular/core';
import { FooterView } from './footer/footer.view';
import { MainView } from './main/main.view';
import { HeaderView } from './header/header.view';

@Component({
  selector: 'view',
  templateUrl: './view.html',
  imports: [FooterView, MainView, HeaderView],
})
export class View {}
