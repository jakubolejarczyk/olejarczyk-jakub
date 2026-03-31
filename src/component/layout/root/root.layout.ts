import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { Generator } from '../../../generator/generator/generator';
import { LayoutBase } from '../../base/layout.base';
import { RootDataModel } from '../../model/data/layout/root-data.model';
import { RootMetadataModel } from '../../model/metadata/layout/root-metadata.model';

@Component({
  selector: 'root-layout',
  templateUrl: './root.layout.html',
  styleUrl: '../../../style/component/layout/_root.layout.scss',
  imports: [CommonModule, Generator],
})
@RegisterComponent('root')
export class RootLayout extends LayoutBase<RootDataModel, RootMetadataModel> {
  constructor() {
    super('root');
  }
}
