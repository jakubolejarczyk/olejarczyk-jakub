import { Meta, StoryObj } from '@storybook/angular';

import { TextComponent } from './text.component';

const meta: Meta<TextComponent> = {
  title: 'Component/Text',
  component: TextComponent,
};
export default meta;
type Story = StoryObj<TextComponent>;

export const Primary: Story = {};
