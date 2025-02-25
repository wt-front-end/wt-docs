// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    googleAnalytics({
      id: 'G-73ZHQ52XPJ',
    })
    enhanceAppWithTabs(app)
  }
}