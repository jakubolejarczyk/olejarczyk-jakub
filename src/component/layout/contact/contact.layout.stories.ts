import { Meta, StoryObj } from '@storybook/angular';
import { ContactLayout } from './contact.layout';

const meta: Meta<ContactLayout> = {
  title: 'layout/contact',
  component: ContactLayout,
};
export default meta;
type Story = StoryObj<ContactLayout>;

export const Primary: Story = {
  args: {
    data: {
      base: {},
      extend: {
        firstName: 'Jakub',
        lastName: 'Olejarczyk',
        motto: ['I write code that works today', 'and will not fail tomorrow.'],
        socialMedias: [
          {
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jakub-olejarczyk',
          },
          {
            label: 'GitHub',
            url: 'https://github.com/jakubolejarczyk',
          },
          {
            label: 'LeetCode',
            url: 'https://leetcode.com/u/JakubOlejarczyk',
          },
        ],
        email: 'jakub.olejarczyk@outlook.com',
        phone: '+48 501 007 197',
        country: 'Poland',
        city: 'Kielce',
      },
    },
    metadata: {
      base: {
        palette: 'primary',
      },
      extend: {},
    },
  },
};
