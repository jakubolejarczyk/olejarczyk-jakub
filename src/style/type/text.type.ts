export enum TextEnum {
  small = 'small',
  p = 'p',
  h3 = 'h3',
  h2 = 'h2',
  h1 = 'h1',
}

export type TextType = keyof typeof TextEnum;
