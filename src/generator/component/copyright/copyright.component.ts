import { Component, inject } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { BaseComponent } from '../../base/base.component';
import { CopyrightComponentModel } from '../../model/component/copyright-component.model';
import { DateUtil } from '../../util/date.util';
import { YearRangeModel } from '../../model/data/copyright-data.model';

@Component({
  selector: 'copyright-component',
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss',
})
@RegisterComponent('copyright')
export class CopyrightComponent extends BaseComponent<CopyrightComponentModel> {
  dateUtil = inject(DateUtil);

  buildSymbol() {
    return this.component().data.symbol;
  }

  buildYear() {
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

  buildOwnerName() {
    return this.component().data.ownerName;
  }

  buildRightsStatements() {
    return this.component().data.rightsStatements;
  }

  private buildCurrentYear() {
    return this.dateUtil.getCurrentYear();
  }

  private buildRangeYear(year: YearRangeModel) {
    const { from } = year;
    const to = year.to === 'current' ? this.dateUtil.getCurrentYear() : year.to;
    return ``;
  }
}
