import { Meta, StoryObj } from '@storybook/angular';
import { TextComponent } from './text.component';

const meta: Meta<TextComponent> = {
  title: 'component/text',
  component: TextComponent,
};
export default meta;
type Story = StoryObj<TextComponent>;

export const Small: Story = {
  args: {
    type: 'small',
    value: 'Hello World!',
  },
};

export const P: Story = {
  args: {
    type: 'p',
    value: 'Hello World!',
  },
};

export const H1: Story = {
  args: {
    type: 'h1',
    value: 'Hello World!',
  },
};

export const H2: Story = {
  args: {
    type: 'h2',
    value: 'Hello World!',
  },
};

export const H3: Story = {
  args: {
    type: 'h3',
    value: 'Hello World!',
  },
};
