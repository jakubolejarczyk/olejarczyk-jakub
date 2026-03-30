import { Injectable } from '@angular/core';
import { CopyrightDataModel } from '../../model/data/copyright-data.model';
import { DateUtility } from '../../../utility/date.utility';

@Injectable()
export class CopyrightService {
  buildCopyright(data: CopyrightDataModel) {
    const { symbol, ownerName, rightsStatements } = data.extend;
    const year = this.buildYear(data);
    const copyrightNotice = `${symbol} ${year} ${ownerName}.`;
    const copyrightAllRightsReserved = rightsStatements;
    return [copyrightNotice, copyrightAllRightsReserved];
  }

  private buildYear(data: CopyrightDataModel) {
    const { year } = data.extend;
    if (year.kind === 'current') {
      return DateUtility.getCurrentYear();
    } else if (year.kind === 'range') {
      const { from, to } = year;
      return `${from} - ${to === 'current' ? DateUtility.getCurrentYear() : to}`;
    }
    throw new Error('Invalid year kind');
  }
}
