import { Meta, StoryObj } from '@storybook/angular';
import { TextComponent } from './text.component';

const meta: Meta<TextComponent> = {
  title: 'component/text',
  component: TextComponent,
};
export default meta;
type Story = StoryObj<TextComponent>;

export const Small: Story = {
  args: {
    type: 'small',
    value: 'Hello World!',
  },
};

export const P: Story = {
  args: {
    type: 'p',
    value: 'Hello World!',
  },
};

export const H1: Story = {
  args: {
    type: 'h1',
    value: 'Hello World!',
  },
};

export const H2: Story = {
  args: {
    type: 'h2',
    value: 'Hello World!',
  },
};

export const H3: Story = {
  args: {
    type: 'h3',
    value: 'Hello World!',
  },
};

export const AllTypes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <text-component type="h1" value="Heading 1"></text-component>
        <text-component type="p" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elit odio. Phasellus faucibus ipsum eu venenatis rutrum. Curabitur condimentum risus eu faucibus placerat. Ut fringilla elementum lectus ac tempor. Mauris et odio non augue finibus molestie. Etiam ullamcorper, diam dapibus cursus volutpat, est eros tincidunt velit, in lacinia massa dolor eu tortor. Maecenas tortor magna, ultrices quis purus quis, dapibus congue risus. Aliquam accumsan gravida eros, a molestie libero eleifend eu. Vivamus ac eros et neque tristique fermentum. Aenean ut blandit dolor. Suspendisse et suscipit mi. Proin at pellentesque elit. Pellentesque lorem dui, tincidunt eget leo sollicitudin, cursus fermentum metus. Ut tristique, erat dictum faucibus blandit, lectus purus ultrices libero, sed rhoncus ipsum massa sit amet neque. Nunc a vestibulum sapien."></text-component>
        <text-component type="small" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elit odio. Phasellus faucibus ipsum eu venenatis rutrum. Curabitur condimentum risus eu faucibus placerat. Ut fringilla elementum lectus ac tempor. Mauris et odio non augue finibus molestie."></text-component>
        <text-component type="h2" value="Heading 2"></text-component>
        <text-component type="p" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elit odio. Phasellus faucibus ipsum eu venenatis rutrum. Curabitur condimentum risus eu faucibus placerat. Ut fringilla elementum lectus ac tempor. Mauris et odio non augue finibus molestie. Etiam ullamcorper, diam dapibus cursus volutpat, est eros tincidunt velit, in lacinia massa dolor eu tortor. Maecenas tortor magna, ultrices quis purus quis, dapibus congue risus. Aliquam accumsan gravida eros, a molestie libero eleifend eu. Vivamus ac eros et neque tristique fermentum. Aenean ut blandit dolor. Suspendisse et suscipit mi. Proin at pellentesque elit. Pellentesque lorem dui, tincidunt eget leo sollicitudin, cursus fermentum metus. Ut tristique, erat dictum faucibus blandit, lectus purus ultrices libero, sed rhoncus ipsum massa sit amet neque. Nunc a vestibulum sapien."></text-component>
        <text-component type="small" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elit odio. Phasellus faucibus ipsum eu venenatis rutrum. Curabitur condimentum risus eu faucibus placerat. Ut fringilla elementum lectus ac tempor. Mauris et odio non augue finibus molestie."></text-component>
        <text-component type="h3" value="Heading 3"></text-component>
        <text-component type="p" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elit odio. Phasellus faucibus ipsum eu venenatis rutrum. Curabitur condimentum risus eu faucibus placerat. Ut fringilla elementum lectus ac tempor. Mauris et odio non augue finibus molestie. Etiam ullamcorper, diam dapibus cursus volutpat, est eros tincidunt velit, in lacinia massa dolor eu tortor. Maecenas tortor magna, ultrices quis purus quis, dapibus congue risus. Aliquam accumsan gravida eros, a molestie libero eleifend eu. Vivamus ac eros et neque tristique fermentum. Aenean ut blandit dolor. Suspendisse et suscipit mi. Proin at pellentesque elit. Pellentesque lorem dui, tincidunt eget leo sollicitudin, cursus fermentum metus. Ut tristique, erat dictum faucibus blandit, lectus purus ultrices libero, sed rhoncus ipsum massa sit amet neque. Nunc a vestibulum sapien."></text-component>
        <text-component type="small" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elit odio. Phasellus faucibus ipsum eu venenatis rutrum. Curabitur condimentum risus eu faucibus placerat. Ut fringilla elementum lectus ac tempor. Mauris et odio non augue finibus molestie."></text-component>
      </div>
    `,
  }),
};
