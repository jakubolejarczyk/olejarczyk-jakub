import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../app.config';
import { ContactComponent } from './contact.component';

const meta: Meta<ContactComponent> = {
  title: 'ContactComponent',
  component: ContactComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<ContactComponent>;

export const Primary: Story = {};
