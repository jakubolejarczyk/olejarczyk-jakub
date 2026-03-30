import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { CopyrightDataModel } from '../../model/data/copyright-data.model';
import { CopyrightMetadataModel } from '../../model/metadata/copyright-metadata.model';
import { DateUtility } from '../../utility/date.utility';
import { RegisterLayout } from '../../decorator/layout.decorator';
import { Generator } from '../../generator/generator';

@Component({
  selector: 'copyright-layout',
  templateUrl: './copyright.layout.html',
  styleUrl: '../../../style/layout/copyright.layout.scss',
  imports: [CommonModule, Generator],
})
@RegisterLayout('copyright')
export class CopyrightComponent extends LayoutBase<CopyrightDataModel, CopyrightMetadataModel> {
  constructor() {
    super('copyright');
  }

  buildCopyright() {
    const { symbol, ownerName, rightsStatements } = this.data().extend;
    const year = this.buildYear();
    const copyrightNotice = `${symbol} ${year} ${ownerName}`;
    const copyrightAllRightsReserved = rightsStatements;
    return [copyrightNotice, copyrightAllRightsReserved];
  }

  private buildYear() {
    const { year } = this.data().extend;
    if (year.kind === 'current') {
      return DateUtility.getCurrentYear();
    } else if (year.kind === 'range') {
      const { from, to } = year;
      return `${from} - ${to === 'current' ? DateUtility.getCurrentYear() : to}`;
    }
    throw new Error('Invalid year kind');
  }
}
