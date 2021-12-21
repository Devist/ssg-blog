import { Meta, Story } from '@storybook/react'
import Card from './Card'
import CardBody from './CardBody'
import CardTitle from './CardTitle'

export default {
  title: '🎨 디자인시스템 / 컴포넌트(@core) / 🩸 Molecules / Card',
  component: Card,
  argTypes: {
    text: { control: 'text' },
    children: { control: 'text' },
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
  return (
    <Card>
      {args.text && <CardTitle text={args.text} />}
      {args.children && <CardBody>{args.children}</CardBody>}
    </Card>
  )
}

export const defaultCard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
defaultCard.storyName = '기본 사용'
defaultCard.args = {
  text: '카드 제목 영역',
  children: '카드 바디 영역입니다. 내부에 children 컴포넌트 사용도 가능합니다.'
}

export const onlyTitle = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onlyTitle.storyName = '타이틀만 포함'
onlyTitle.args = {
  text: '카드 제목 영역'
}

export const onlyBody = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onlyBody.storyName = '바디만 포함'
onlyBody.args = {
  children: '카드 바디 영역입니다. 내부에 children 컴포넌트 사용도 가능합니다.'
}
