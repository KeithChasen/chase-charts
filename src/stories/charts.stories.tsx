import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from '../Chart';

const meta: Meta<typeof Chart> = {
	component: Chart,
	title: 'Components/Chart',
};

export default meta;
type Story = StoryObj<typeof Chart>;

export const Primary: Story = {
	args: {},
};
