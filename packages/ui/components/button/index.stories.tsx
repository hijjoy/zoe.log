import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'ghost', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'neutral'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="text">Text</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const NeutralColor: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="solid" color="neutral">Solid</Button>
      <Button variant="outlined" color="neutral">Outlined</Button>
      <Button variant="ghost" color="neutral">Ghost</Button>
      <Button variant="text" color="neutral">Text</Button>
    </div>
  ),
};

export const WithSlots: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button leadingContent={<span>→</span>}>Leading</Button>
      <Button trailingContent={<span>←</span>}>Trailing</Button>
      <Button leadingContent={<span>⚡</span>} trailingContent={<span>→</span>}>Both</Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button iconOnly aria-label="Search" size="small">🔍</Button>
      <Button iconOnly aria-label="Search" size="medium">🔍</Button>
      <Button iconOnly aria-label="Search" size="large">🔍</Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button loading>Loading...</Button>
      <Button variant="outlined" loading>Loading...</Button>
      <Button color="neutral" loading>Loading...</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Button fullWidth>Full Width Button</Button>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Button as="a" href="#" variant="text">
      Link Button
    </Button>
  ),
};

export const Playground: Story = {
  args: {
    variant: 'solid',
    size: 'medium',
    color: 'primary',
    children: '버튼',
  },
};
