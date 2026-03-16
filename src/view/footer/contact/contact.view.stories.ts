import { Meta, StoryObj } from '@storybook/angular';
import { ContactView } from './contact.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<ContactView> = {
  title: 'View/Footer/Contact',
  component: ContactView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<ContactView>;

export const Primary: Story = {};
