import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '.';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: ['display', 'title', 'heading', 'body', 'body-reading', 'label', 'caption'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['heading', 'body', 'secondary', 'primary', 'inherit'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="display" color="heading">Display — 히어로 타이틀</Typography>
      <Typography variant="title" color="heading">Title — 페이지 타이틀</Typography>
      <Typography variant="heading" color="heading">Heading — 섹션 제목</Typography>
      <Typography variant="body" color="body">Body — 일반 UI 텍스트입니다.</Typography>
      <Typography variant="body-reading" color="body">Body Reading — 블로그 본문에 적합한 넓은 행간의 텍스트입니다. 긴 글을 읽을 때 편안한 느낌을 줍니다.</Typography>
      <Typography variant="label" color="secondary">Label — 라벨, 메타 정보</Typography>
      <Typography variant="caption" color="secondary">Caption — 보조 텍스트, 날짜</Typography>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography variant="body" weight="regular" color="body">Regular (400)</Typography>
      <Typography variant="body" weight="medium" color="body">Medium (500)</Typography>
      <Typography variant="body" weight="semibold" color="body">Semibold (600)</Typography>
      <Typography variant="body" weight="bold" color="body">Bold (700)</Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography variant="body" color="heading">Heading color</Typography>
      <Typography variant="body" color="body">Body color</Typography>
      <Typography variant="body" color="secondary">Secondary color</Typography>
      <Typography variant="body" color="primary">Primary color</Typography>
    </div>
  ),
};

export const CustomTag: Story = {
  render: () => (
    <Typography variant="heading" as="h4" color="heading">
      heading variant rendered as h4
    </Typography>
  ),
};

export const Playground: Story = {
  args: {
    variant: 'body',
    weight: 'regular',
    color: 'body',
    children: '디자인 시스템 Typography 컴포넌트',
  },
};
