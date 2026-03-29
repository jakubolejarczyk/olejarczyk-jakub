import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'copyright-layout',
  templateUrl: './copyright.layout.html',
  styleUrl: '../../style/layout/copyright.layout.scss',
  imports: [CommonModule],
})
export class CopyrightComponent extends LayoutBase {
  constructor() {
    super('copyright');
  }
}
