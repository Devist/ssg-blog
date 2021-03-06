import Input from './Input'

import { Meta, Story } from '@storybook/react'

export default {
  title: '๐จ ๋์์ธ์์คํ / ์ปดํฌ๋ํธ(@core) / ๐ฆ  Atoms / Input',
  component: Input,
  argTypes: {
    value: { control: 'text', default: null, description: '์๋ ฅ์ฐฝ์ ์ด๊ธฐ ํ์คํธ์๋๋ค.' },
    valid: { control: 'boolean', default: true, description: '๊ฐ์ด ์ ํจํ์ง๋ฅผ ํ์ํฉ๋๋ค.' },
    errorMessage: { control: 'text', description: 'valid๊ฐ false ์ผ ๋ ํ์๋ฉ๋๋ค.' },
    label: { control: 'text', description: '๊ฐ์ด ์๋ ๊ฒฝ์ฐ, ์๋ ฅ์ฐฝ ์์ ๋ผ๋ฒจ์ด ํ์๋ฉ๋๋ค.' },
    placeholder: {
      control: 'text',
      description: 'value๊ฐ ์๋ ๊ฒฝ์ฐ(๋น ์๋ ฅ์ฐฝ์ธ ๊ฒฝ์ฐ), placeholder ํ์คํธ๋ฅผ ํ์ํฉ๋๋ค.'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "<strong>import Input from '@/ui/@core/components/atoms/Input'</strong> <br/> ์๋ ฅ์ฐฝ์๋๋ค."
        // subcomponents: {
        //   IconOnly: 'hello'
        // }
      }
    }
  }
} as Meta

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args: any) => {
  return <Input {...args} />
}

export const first = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
first.storyName = '๊ธฐ๋ณธ'
first.args = {
  value: '์๋ํ์ธ์.'
}

export const second = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
second.storyName = '๋ผ๋ฒจ'
second.args = {
  value: 'P@ssw0rd',
  label: '๋น๋ฐ๋ฒํธ'
}

export const third = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
third.storyName = '๊ฒ์ฆ'
third.args = {
  label: '๋น๋ฐ๋ฒํธ',
  value: 'P@ssw0rd',
  valid: false,
  errorMessage: '๋น๋ฐ๋ฒํธ๋ 8์ ์ด์, ํน์๋ฌธ์, ๋๋ฌธ์, ์ซ์ ํฌํจ์๋๋ค.'
}

export const four = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
four.storyName = 'placeholder'
four.args = {
  value: null,
  placeholder: '๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํ์ธ์'
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button'
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button'
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button'
// }
