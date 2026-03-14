import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../../config/app.config';
import { NavigationComponent } from './navigation.component';

const meta: Meta<NavigationComponent> = {
  title: 'NavigationComponent',
  component: NavigationComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<NavigationComponent>;

export const Primary: Story = {};
