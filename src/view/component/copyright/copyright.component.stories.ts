import { Meta, StoryObj } from '@storybook/angular';

import { CopyrightComponent } from './copyright.component';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<CopyrightComponent> = {
  title: 'CopyrightComponent',
  component: CopyrightComponent,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<CopyrightComponent>;

export const Primary: Story = {};
