import { Meta, StoryObj } from '@storybook/angular';

import { ContactView } from './contact.view';

const meta: Meta<ContactView> = {
  title: 'View/Footer/Contact',
  component: ContactView,
};
export default meta;
type Story = StoryObj<ContactView>;

export const Primary: Story = {};
