import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的低代码平台',
  description: '基于 Cloudflare Pages 部署的 VitePress 站点',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '简介', link: '/guide/' },
          { text: '配置说明', link: '/guide/config' }
        ]
      }
    ]
  }
})
