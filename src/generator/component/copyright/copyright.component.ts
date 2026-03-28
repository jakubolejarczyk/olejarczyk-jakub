import { Component, inject } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { BaseComponent } from '../../base/base.component';
import { CopyrightComponentModel } from '../../model/component/copyright-component.model';
import { DateUtil } from '../../util/date.util';

@Component({
  selector: 'copyright-component',
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss',
})
@RegisterComponent('copyright')
export class CopyrightComponent extends BaseComponent<CopyrightComponentModel> {
  dateUtil = inject(DateUtil);

  buildSymbol() {
    const { symbol } = this.getData();
    return symbol;
  }

  buildYear() {
    const { year } = this.getData();
    if (year.kind === 'current') {
      return this.dateUtil.getCurrentYear();
    } else if (year.kind === 'range') {
      const { from, to } = year;
      if (to === 'current') {
        return `${from} - ${this.dateUtil.getCurrentYear()}`;
      }
      return `${from} - ${to}`;
    }
    throw new Error('Not supported year kind!');
  }

  private getData() {
    return this.component().data;
  }
}
