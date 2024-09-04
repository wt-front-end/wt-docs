import { defineConfig } from 'vitepress'
// .vitepress/config.mts
import taskLists from 'markdown-it-task-checkbox'

import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  title: '华通云',
  description: '前端基础指南',
  sitemap: {
    hostname: 'http://wt.jixiaokang.com/'
  },
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-nIAubvqIiJ' }],
    ['meta', { name: 'google-site-verification', content: 'WxwZ9S-HTh3jLY420sVeLk9QF_JEWA-obw_zufcjEhc' }],
    ['meta', { name: 'keywords', content: '华通云,前端,文档,指南,规范,华通云前端,华通云科技有限公司,华通云前端规范' }]
  ],
  theme: 'antdocs',
  markdown: {
    linkify: false,
    config: (md) => {
      md.use(taskLists, {
        disabled: true,
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_',
        ulClass: 'task-list',
        liClass: 'task-list-item',
      })
      md.use(tabsMarkdownPlugin)
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present xkloveme'
    },
    //   头部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '华通云开发工具', link: '/wt-edge' },
      { text: 'WATONE 命令行', link: '/wt-cli' },
      {
        text: '目录',
        items: [
          { text: '主页', link: '/start/' },
          { text: 'Css 规范', link: '/css/' },
          { text: 'Js 规范', link: '/js/' },
          { text: 'Vue 规范', link: '/vue/' },
          { text: '组件规范', link: '/element/' },
          { text: '大屏规范', link: '/dataV/' },
          { text: 'Git规范', link: '/git/' },
          { text: '打包规范', link: '/bale/' },
          { text: '常用 docker', link: '/docker/' },
          { text: '前端环境', link: '/front-end/' },
        ]
      },
      { text: '前端开发', link: '/front-end/' },
      {
        text: '其他',
        items: [
          { text: '链接', link: '/link/' },
          { text: '资源', link: '/resource/' },
        ]
      },
    ],
    //   侧边导航
    // sidebar:{
    //   '/': [{
    //     title: '起步',
    //     collapsable: false,
    //     children: [
    //       { title: '起步', path:'/start/'},
    //       { title: 'CSS规范', path:'/css/'}
    //     ]
    //   }]
    // } ,
    // sidebar:[
    //     { text: '起步', link: '/start/' },
    //     { text: 'CSS规范', link: '/css/' },
    //     { text: 'JS规范', link: '/js/' },
    //     { text: 'Vue规范', link: '/vue/' },
    //     { text: '内部规范', link: '/element/' },
    //     { text: '大屏规范', link: '/dataV/' },
    // ],
    repo: 'https://github.com/wt-front-end/wt-docs',
    repoLabel: 'GitHub'
  }
})
