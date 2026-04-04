export class StringUtility {
  static isEmpty(value?: string) {
    return value === undefined || value === null || value === '';
  }

  static isNotEmpty(value?: string) {
    return !this.isEmpty(value);
  }
}
