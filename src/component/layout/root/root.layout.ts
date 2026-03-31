import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { RootDataModel } from '../../model/data/root-data.model';
import { RootMetadataModel } from '../../model/metadata/root-metadata.model';
import { Generator } from '../../../generator/generator/generator';

@Component({
  selector: 'root-layout',
  templateUrl: './root.layout.html',
  styleUrl: '../../../style/layout/_root.layout.scss',
  imports: [CommonModule, Generator],
})
@RegisterComponent('root')
export class RootLayout extends LayoutBase<RootDataModel, RootMetadataModel> {
  constructor() {
    super('root');
  }
}
