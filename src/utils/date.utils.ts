import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateUtils {
  static getYear(): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }
}
