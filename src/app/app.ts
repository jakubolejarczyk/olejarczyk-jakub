import { Component } from '@angular/core';
import { Generator } from '../generator/generator/generator';
import { NodeModel } from '../generator/model/node/node.model';

@Component({
  selector: 'app',
  template: '<generator [nodes]="nodes"></generator>',
  imports: [Generator],
})
export class App {
  nodes: NodeModel[] = [
    {
      component: {
        kind: 'layout',
        layout: 'root',
        data: {
          base: {},
          extend: {},
        },
        metadata: {
          base: {
            palette: 'primary',
          },
          extend: {},
        },
      },
      children: [
        {
          component: {
            kind: 'layout',
            layout: 'main',
            data: {
              base: {},
              extend: {},
            },
            metadata: {
              base: {
                palette: 'primary',
              },
              extend: {},
            },
          },
          children: [
            {
              component: {
                kind: 'layout',
                layout: 'flex',
                data: {
                  base: {},
                  extend: {},
                },
                metadata: {
                  base: {
                    palette: 'primary',
                  },
                  extend: {},
                },
              },
              children: [
                {
                  component: {
                    kind: 'layout',
                    layout: 'flex-item',
                    data: {
                      base: {},
                      extend: {},
                    },
                    metadata: {
                      base: {
                        palette: 'primary',
                      },
                      extend: {},
                    },
                  },
                  children: [
                    {
                      component: {
                        kind: 'control',
                        control: 'text',
                        data: {
                          base: {},
                          extend: {
                            value:
                              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et magna sit amet justo ullamcorper ultricies. Vestibulum varius aliquam nibh vitae bibendum. Vestibulum fringilla eros dui, quis tempus diam tempus non. Aenean laoreet sem eu molestie fringilla. Suspendisse malesuada id orci quis consequat. Aenean maximus orci condimentum, gravida est eleifend, faucibus velit. Nam dignissim ipsum finibus, dapibus turpis et, elementum ipsum. Suspendisse tempus molestie est hendrerit lacinia. Donec rutrum dignissim magna, ut viverra ipsum feugiat ultrices. Nulla facilisi. Curabitur id urna ut diam placerat auctor. Nullam laoreet tellus dictum orci aliquet rhoncus. Nunc gravida ultricies nulla, non faucibus sapien consectetur ac. Proin fermentum ut augue et tempus. Nam pharetra ex nec metus mollis vulputate id sit amet tortor.',
                          },
                        },
                        metadata: {
                          base: {
                            palette: 'primary',
                          },
                          extend: {
                            type: 'p',
                          },
                        },
                      },
                    },
                  ],
                },
                {
                  component: {
                    kind: 'layout',
                    layout: 'flex-item',
                    data: {
                      base: {},
                      extend: {},
                    },
                    metadata: {
                      base: {
                        palette: 'primary',
                      },
                      extend: {},
                    },
                  },
                  children: [
                    {
                      component: {
                        kind: 'control',
                        control: 'text',
                        data: {
                          base: {},
                          extend: {
                            value:
                              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et magna sit amet justo ullamcorper ultricies. Vestibulum varius aliquam nibh vitae bibendum. Vestibulum fringilla eros dui, quis tempus diam tempus non. Aenean laoreet sem eu molestie fringilla. Suspendisse malesuada id orci quis consequat. Aenean maximus orci condimentum, gravida est eleifend, faucibus velit. Nam dignissim ipsum finibus, dapibus turpis et, elementum ipsum. Suspendisse tempus molestie est hendrerit lacinia. Donec rutrum dignissim magna, ut viverra ipsum feugiat ultrices. Nulla facilisi. Curabitur id urna ut diam placerat auctor. Nullam laoreet tellus dictum orci aliquet rhoncus. Nunc gravida ultricies nulla, non faucibus sapien consectetur ac. Proin fermentum ut augue et tempus. Nam pharetra ex nec metus mollis vulputate id sit amet tortor.',
                          },
                        },
                        metadata: {
                          base: {
                            palette: 'primary',
                          },
                          extend: {
                            type: 'p',
                          },
                        },
                      },
                    },
                  ],
                },
                {
                  component: {
                    kind: 'layout',
                    layout: 'flex-item',
                    data: {
                      base: {},
                      extend: {},
                    },
                    metadata: {
                      base: {
                        palette: 'primary',
                      },
                      extend: {},
                    },
                  },
                  children: [
                    {
                      component: {
                        kind: 'control',
                        control: 'text',
                        data: {
                          base: {},
                          extend: {
                            value:
                              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et magna sit amet justo ullamcorper ultricies. Vestibulum varius aliquam nibh vitae bibendum. Vestibulum fringilla eros dui, quis tempus diam tempus non. Aenean laoreet sem eu molestie fringilla. Suspendisse malesuada id orci quis consequat. Aenean maximus orci condimentum, gravida est eleifend, faucibus velit. Nam dignissim ipsum finibus, dapibus turpis et, elementum ipsum. Suspendisse tempus molestie est hendrerit lacinia. Donec rutrum dignissim magna, ut viverra ipsum feugiat ultrices. Nulla facilisi. Curabitur id urna ut diam placerat auctor. Nullam laoreet tellus dictum orci aliquet rhoncus. Nunc gravida ultricies nulla, non faucibus sapien consectetur ac. Proin fermentum ut augue et tempus. Nam pharetra ex nec metus mollis vulputate id sit amet tortor.',
                          },
                        },
                        metadata: {
                          base: {
                            palette: 'primary',
                          },
                          extend: {
                            type: 'p',
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          component: {
            kind: 'layout',
            layout: 'footer',
            data: {
              base: {},
              extend: {},
            },
            metadata: {
              base: {
                palette: 'primary',
              },
              extend: {},
            },
          },
          children: [
            {
              component: {
                kind: 'layout',
                layout: 'contact',
                data: {
                  base: {},
                  extend: {
                    firstName: 'Jakub',
                    lastName: 'Olejarczyk',
                    motto: ['I write code that works today', 'and will not fail tomorrow.'],
                    socialMedias: [
                      {
                        label: 'LinkedIn',
                        url: 'https://www.linkedin.com/in/jakub-olejarczyk',
                      },
                      {
                        label: 'GitHub',
                        url: 'https://github.com/jakubolejarczyk',
                      },
                      {
                        label: 'LeetCode',
                        url: 'https://leetcode.com/u/JakubOlejarczyk',
                      },
                    ],
                    email: 'jakub.olejarczyk@outlook.com',
                    phone: '+48 501 007 197',
                    country: 'Poland',
                    city: 'Kielce',
                  },
                },
                metadata: {
                  base: {
                    palette: 'primary',
                  },
                  extend: {},
                },
              },
            },
            {
              component: {
                kind: 'layout',
                layout: 'copyright',
                data: {
                  base: {},
                  extend: {
                    symbol: '©',
                    year: {
                      kind: 'current',
                    },
                    ownerName: 'Jakub Olejarczyk',
                    rightsStatements: 'All rights reserved.',
                  },
                },
                metadata: {
                  base: {
                    palette: 'primary',
                  },
                  extend: {},
                },
              },
              children: [],
            },
          ],
        },
      ],
    },
  ];
}
