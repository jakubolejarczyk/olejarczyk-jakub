import { Meta, StoryObj } from '@storybook/angular';

import { TextComponent } from './text.component';

const meta: Meta<TextComponent> = {
  title: 'Component/Text',
  component: TextComponent,
};
export default meta;
type Story = StoryObj<TextComponent>;

export const Primary: Story = {
  args: {
    value: 'Hello paragraph',
  },
};

export const Header1: Story = {
  args: {
    type: 'header_1',
    value: 'Hello header 1',
  },
};

export const Header2: Story = {
  args: {
    type: 'header_2',
    value: 'Hello header 2',
  },
};

export const Header3: Story = {
  args: {
    type: 'header_3',
    value: 'Hello header 3',
  },
};

export const Typography: Story = {
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap: 1rem;">
        <text-component type="header_1" value="Header 1"></text-component>
        <text-component value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veniam ea voluptatibus ab est exercitationem, assumenda tenetur magni eius optio sit, eligendi officia expedita molestiae nesciunt architecto eos nulla ratione!"></text-component>
        <text-component type="header_2" value="Header 2"></text-component>
        <text-component value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veniam ea voluptatibus ab est exercitationem, assumenda tenetur magni eius optio sit, eligendi officia expedita molestiae nesciunt architecto eos nulla ratione!"></text-component>
        <text-component type="header_3" value="Header 3"></text-component>
        <text-component value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veniam ea voluptatibus ab est exercitationem, assumenda tenetur magni eius optio sit, eligendi officia expedita molestiae nesciunt architecto eos nulla ratione!"></text-component>
      </div>
    `,
  }),
};
