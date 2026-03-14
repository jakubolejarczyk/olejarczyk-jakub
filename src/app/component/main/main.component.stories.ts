import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../../config/app.config';
import { MainComponent } from './main.component';

const meta: Meta<MainComponent> = {
  title: 'MainComponent',
  component: MainComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<MainComponent>;

export const Primary: Story = {};
