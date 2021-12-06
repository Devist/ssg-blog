export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

window.addEventListener('hashchange', function () {
  //code
  console.log('hash')
})

window.addEventListener('popstate', function () {
  //code
  console.log('pop')
})

import '@/ui/@core/scss/index.css'
