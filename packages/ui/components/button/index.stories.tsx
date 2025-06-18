import type { Meta, StoryObj } from '@storybook/nextjs';
import * as React from 'react';
import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본 버튼',
  },
};

export const CustomClassName: Story = {
  args: {
    children: '커스텀 스타일 버튼',
    className: 'bg-gray-100 text-gray-500 hover:bg-main hover:text-white',
  },
};

export const AsLink: Story = {
  args: {
    asChild: true,
    children: React.createElement('a', { href: 'https://example.com' }, '링크 버튼'),
    variant: 'link',
  },
};

export const Disabled: Story = {
  args: {
    children: '비활성화 버튼',
    disabled: true,
  },
};

export const DarkMode: Story = {
  args: {
    children: '다크 모드 버튼',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
