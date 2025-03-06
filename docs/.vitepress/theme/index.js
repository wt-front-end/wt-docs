// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { VitePluginRadar } from 'vite-plugin-radar'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    VitePluginRadar({
      analytics: {
        id: 'G-73ZHQ52XPJ',
      },
      microsoftClarity: {
        id: 'qjqirq4yq4'
      },
    })
    enhanceAppWithTabs(app)
  },
  setup() {
      // Get frontmatter and route
      const { frontmatter } = useData();
      const route = useRoute();
      
      // Obtain configuration from: https://giscus.app/
      giscusTalk({
          repo: 'wt-front-end/wt-docs', 
          repoId: 'MDEwOlJlcG9zaXRvcnkzNTA5MzkzNjY=',   
          category: 'General', // default: `General` 
          categoryId: 'DIC_kwDOFOro5s4CiL20', 
          mapping: 'title', // default: `pathname`
          inputPosition: 'top', // default: `top`
          lang: 'zh-CN', // default: `zh-CN`
          lightTheme: 'light', // default: `light`
          darkTheme: 'transparent_dark', // default: `transparent_dark`
          loading: 'lazy', // default: `transparent_dark`
          crossorigin: 'anonymous', // default: `transparent_dark`
      }, {
          frontmatter, route
      },
          // Whether to activate the comment area on all pages.
          // The default is true, which means enabled, this parameter can be ignored;
          // If it is false, it means it is not enabled.
          // You can use `comment: true` preface to enable it separately on the page.
          true
      );
  }
}