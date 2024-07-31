import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Zbutton } from './zbutton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Zandir/Zbutton',
  component: Zbutton,
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
      description: 'O tipo de visual do botão',
      options: ['default', 'secondary', 'success', 'warning', 'error', 'outline', 'ghost', 'link']
     },
     size: {
      control: 'inline-radio',
      description: 'Tamanho do botão',
      options: ['default', 'sm', 'lg', 'icon']
     }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), children: 'Click me' },
} satisfies Meta<typeof Zbutton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'lg',
  },
};

