import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { App } from './app';
import { appConfig } from './app.config';

const meta: Meta<App> = {
  title: 'App',
  component: App,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<App>;

export const Primary: Story = {};
