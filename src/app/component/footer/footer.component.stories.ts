import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { appConfig } from '../../../config/app.config';

const meta: Meta<FooterComponent> = {
  title: 'FooterComponent',
  component: FooterComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<FooterComponent>;

export const Primary: Story = {};
