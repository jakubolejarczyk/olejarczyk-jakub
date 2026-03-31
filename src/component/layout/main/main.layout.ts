import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { Generator } from '../../../generator/generator/generator';
import { LayoutBase } from '../../base/layout.base';
import { MainDataModel } from '../../model/data/layout/main-data.model';
import { MainMetadataModel } from '../../model/metadata/layout/main-metadata.model';

@Component({
  selector: 'main-layout',
  templateUrl: './main.layout.html',
  styleUrl: '../../../style/component/layout/_main.layout.scss',
  imports: [CommonModule, Generator],
})
@RegisterComponent('main')
export class MainLayout extends LayoutBase<MainDataModel, MainMetadataModel> {
  constructor() {
    super('main');
  }
}
