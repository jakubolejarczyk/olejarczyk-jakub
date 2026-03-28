import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateUtil {
  getDate() {
    return new Date();
  }

  getCurrentYear() {
    return this.getDate().getFullYear();
  }
}
