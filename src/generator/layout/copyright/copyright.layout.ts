import { Component, inject } from '@angular/core';
import { TextComponent } from '../../component/text/text.component';
import { BaseComponent } from '../../base/base.component';
import { RegisterComponent } from '../../decorator/component.decorator';
import { CopyrightComponentModel } from '../../model/component/copyright-component.model';
import { YearRangeModel } from '../../model/data/copyright-data.model';
import { DateUtil } from '../../util/date.util';

@Component({
  selector: 'copyright-layout',
  templateUrl: './copyright.layout.html',
  styleUrl: '../../style/layout/copyright.layout.scss',
  imports: [TextComponent],
})
@RegisterComponent('copyright')
export class CopyrightComponent extends BaseComponent<CopyrightComponentModel> {
  dateUtil = inject(DateUtil);

  buildCopyrightStatement() {
    const { symbol, ownerName } = this.component().data;
    const year = this.buildYear();
    return `${symbol} ${year} ${ownerName}.`;
  }

  buildRightsStatements() {
    return this.component().data.rightsStatements;
  }

  private buildYear() {
    const { year } = this.component().data;
    switch (year.kind) {
      case 'current':
        return this.buildCurrentYear();
      case 'range':
        return this.buildRangeYear(year);
      default:
        throw new Error('Not supported year kind!');
    }
  }

  private buildCurrentYear() {
    return this.dateUtil.getCurrentYear();
  }

  private buildRangeYear(year: YearRangeModel) {
    const { from } = year;
    const to = year.to === 'current' ? this.dateUtil.getCurrentYear() : year.to;
    return `${from} - ${to}`;
  }
}
