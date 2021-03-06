import { Meta, Story } from '@storybook/react'
import Card from './Card'
import CardBody from './CardBody'
import CardTitle from './CardTitle'

export default {
  title: 'π¨ λμμΈμμ€ν / μ»΄ν¬λνΈ(@core) / π©Έ Molecules / Card',
  component: Card,
  argTypes: {
    text: { control: 'text' },
    children: { control: 'text' },
    size: { control: 'number', default: 50 }
  },
  parameters: {
    docs: {
      description: {
        component: 'νλ‘ν'
        // subcomponents: {
        //   IconOnly: 'hello'
        // }
      }
    }
  }
} as Meta

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args: any) => {
  return (
    <Card>
      {args.text && <CardTitle text={args.text} />}
      {args.children && <CardBody>{args.children}</CardBody>}
    </Card>
  )
}

export const defaultCard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
defaultCard.storyName = 'κΈ°λ³Έ μ¬μ©'
defaultCard.args = {
  text: 'μΉ΄λ μ λͺ© μμ­',
  children: 'μΉ΄λ λ°λ μμ­μλλ€. λ΄λΆμ children μ»΄ν¬λνΈ μ¬μ©λ κ°λ₯ν©λλ€.'
}

export const onlyTitle = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onlyTitle.storyName = 'νμ΄νλ§ ν¬ν¨'
onlyTitle.args = {
  text: 'μΉ΄λ μ λͺ© μμ­'
}

export const onlyBody = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onlyBody.storyName = 'λ°λλ§ ν¬ν¨'
onlyBody.args = {
  children: 'μΉ΄λ λ°λ μμ­μλλ€. λ΄λΆμ children μ»΄ν¬λνΈ μ¬μ©λ κ°λ₯ν©λλ€.'
}
