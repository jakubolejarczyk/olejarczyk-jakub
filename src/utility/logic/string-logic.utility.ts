export class StringLogicUtility {
  static isEmpty(value?: string) {
    return value === undefined || value === null || value === '';
  }

  static isNotEmpty(value?: string) {
    return !this.isEmpty(value);
  }

  static convertToString(value: any) {
    return this.isEmpty(value) ? '' : value.toString();
  }
}
