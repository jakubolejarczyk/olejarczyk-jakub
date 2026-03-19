import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateUtil {
  static getYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }
}
