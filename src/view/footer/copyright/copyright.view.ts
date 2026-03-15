import { Component } from '@angular/core';

import { TextComponent } from '../../../component/text/text.component';

@Component({
  selector: 'copyright-view',
  templateUrl: './copyright.view.html',
  styleUrl: './copyright.view.scss',
  imports: [TextComponent],
})
export class CopyrightView {}
