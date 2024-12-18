import type { Meta, StoryObj } from '@storybook/react'

import SenderPage from './SenderPage'

const meta: Meta<typeof SenderPage> = {
  component: SenderPage,
}

export default meta

type Story = StoryObj<typeof SenderPage>

export const Primary: Story = {}
