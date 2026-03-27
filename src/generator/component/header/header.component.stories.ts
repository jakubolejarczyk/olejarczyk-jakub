import { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'component/header',
  component: HeaderComponent,
};
export default meta;
type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {};
