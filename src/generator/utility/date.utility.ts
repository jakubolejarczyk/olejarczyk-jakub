export class DateUtility {
  static getDate() {
    return new Date();
  }

  static getCurrentYear() {
    return this.getDate().getFullYear();
  }
}
