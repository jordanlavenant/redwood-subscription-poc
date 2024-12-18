import type { Meta, StoryObj } from '@storybook/react'

import ReceiverPage from './ReceiverPage'

const meta: Meta<typeof ReceiverPage> = {
  component: ReceiverPage,
}

export default meta

type Story = StoryObj<typeof ReceiverPage>

export const Primary: Story = {}
