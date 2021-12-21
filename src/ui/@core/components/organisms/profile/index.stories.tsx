import { Meta, Story } from '@storybook/react'
import Profile from '.'

export default {
  title: '🎨 디자인시스템 / 컴포넌트(@core) / 🧬 Organisms / Profile',
  component: Profile,
  argTypes: {
    name: { control: 'text' },
    subName: { control: 'text' },
    size: { control: 'number', default: 50 }
  },
  parameters: {
    docs: {
      description: {
        component: '프로필'
        // subcomponents: {
        //   IconOnly: 'hello'
        // }
      }
    }
  }
} as Meta

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args: any) => {
  return <Profile {...args} />
}

export const firstProfile = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
firstProfile.storyName = 'Profile'
firstProfile.args = {
  name: '산드라박',
  subName: 'sandra@ssg.com',
  size: 50
}
