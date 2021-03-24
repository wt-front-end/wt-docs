module.exports = {
  base: '/wt-docs/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  title: '华通云前端文档',
  description: '前端基础指南',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  theme: 'antdocs',
  // 主题配置
  themeConfig: {
      //   头部导航
      nav: [
          { text: '首页', link: '/' },
          { text: '链接', link: '/link/' },
          { text: '资源', link: '/resource/' },
      ],
      //   侧边导航
      sidebar: [
          { text: '起步', link: '/start/' },
          { text: 'CSS规范', link: '/css/' },
          { text: 'JS规范', link: '/js/' },
          { text: 'Vue规范', link: '/vue/' },
          { text: '组件规范', link: '/element/' },
          { text: '大屏规范', link: '/dataV/' },
      ]
  }
}