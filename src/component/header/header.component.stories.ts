import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../config/app.config';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {};
