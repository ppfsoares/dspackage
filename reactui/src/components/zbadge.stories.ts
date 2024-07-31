import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Zbadge } from './zbadge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Zandir/Zbadge',
  component: Zbadge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { 
      control: 'inline-radio',
      description: 'O tipo de visual do badge',
      options: ['default', 'secondary', 'outline', 'success', 'warning', 'error']
     },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), children: 'Badge Btch' },
} satisfies Meta<typeof Zbadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
  },
};

