import Avatar from './Avatar'

import { Meta, Story } from '@storybook/react'

export default {
  title: '🎨 디자인시스템 / 컴포넌트(@core) / 🦠 Atoms / Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'number', default: 50 }
  },
  parameters: {
    docs: {
      description: {
        component: '아바타'
        // subcomponents: {
        //   IconOnly: 'hello'
        // }
      }
    }
  }
} as Meta

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args: any) => {
  return <Avatar {...args} />
}

export const first = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
first.storyName = 'Avatar'
first.args = {
  size: 50
}
