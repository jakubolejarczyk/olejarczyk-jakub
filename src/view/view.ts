import { Component } from '@angular/core';

import { FooterView } from './footer/footer.view';

@Component({
  selector: 'view',
  templateUrl: './view.html',
  styleUrl: './view.scss',
  imports: [FooterView],
})
export class View {}
