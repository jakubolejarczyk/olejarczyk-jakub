import { Component } from '@angular/core';
import { FooterView } from './footer/footer.view';
import { MainView } from './main/main.view';

@Component({
  selector: 'view',
  templateUrl: './view.html',
  imports: [FooterView, MainView],
})
export class View {}
