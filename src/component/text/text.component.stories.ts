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
    type: 'p',
    value: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
};

export const Header1: Story = {
  args: {
    type: 'h1',
    value: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
};

export const Header2: Story = {
  args: {
    type: 'h2',
    value: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
};

export const Header3: Story = {
  args: {
    type: 'h3',
    value: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
};

export const Typography: Story = {
  render: () => ({
    template: `
      <text-component type="h1" value="Header 1"></text-component>
      <text-component type="p" value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veniam ea voluptatibus ab est exercitationem, assumenda tenetur magni eius optio sit, eligendi officia expedita molestiae nesciunt architecto eos nulla ratione!"></text-component>
      <text-component type="h2" value="Header 2"></text-component>
      <text-component type="p" value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veniam ea voluptatibus ab est exercitationem, assumenda tenetur magni eius optio sit, eligendi officia expedita molestiae nesciunt architecto eos nulla ratione!"></text-component>
      <text-component type="h3" value="Header 3"></text-component>
      <text-component value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veniam ea voluptatibus ab est exercitationem, assumenda tenetur magni eius optio sit, eligendi officia expedita molestiae nesciunt architecto eos nulla ratione!"></text-component>
    `,
  }),
};
