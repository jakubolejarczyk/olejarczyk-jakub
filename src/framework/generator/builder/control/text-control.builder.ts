// import { ColorType } from '../../../core/type/color.type';
// import { TextType } from '../../../core/type/text.type';
// import { NodeModel } from '../../model/node.model';

// export class TextControlBuilder {
//   private values: string[] = [];

//   private color: ColorType = 'primary';

//   static builder() {
//     return new TextControlBuilder();
//   }

//   addText(value: string) {
//     this.values.push(value);
//     return this;
//   }

//   setColor(color: ColorType) {
//     this.color = color;
//     return this;
//   }

//   build(type: TextType): NodeModel {
//     return {
//       componentNode: {
//         component: 'control',
//         kind: 'text',
//         data: {
//           base: {},
//           extend: {
//             values: this.values,
//           },
//         },
//         metadata: {
//           base: {
//             color: this.color,
//           },
//           extend: {
//             type,
//           },
//         },
//       },
//       children: [],
//     };
//   }
// }
