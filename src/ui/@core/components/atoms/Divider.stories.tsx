import { Meta, Story } from '@storybook/react'
import Divider from './Divider'

export default {
  title: 'π¨ λμμΈμμ€ν / μ»΄ν¬λνΈ(@core) / π¦  Atoms / Divider',
  component: Divider,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          "<strong>import Input from '@/ui/@core/components/atoms/Button'</strong> <br/> λ²νΌμλλ€."
        // subcomponents: {
        //   IconOnly: 'hello'
        // }
      }
    }
  }
} as Meta

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args: any) => {
  return <Divider {...args} />
}

export const firstDivider = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
firstDivider.storyName = 'Divider'
