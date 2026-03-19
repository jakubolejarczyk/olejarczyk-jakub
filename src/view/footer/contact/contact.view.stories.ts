import { Meta, StoryObj } from '@storybook/angular';
import { ContactView } from './contact.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<ContactView> = {
  title: 'View/Footer/Contact',
  component: ContactView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<ContactView>;

export const Primary: Story = {};
