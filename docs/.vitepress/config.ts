import { defineConfig } from 'vitepress';
// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-Hans',
  title: 'Wcowin',
  description: 'Vite & Vue powered static site generator.',
  base: '/VitePress/',
  // srcDir: "docs",//等下需要新建一个目录，统一放这里
  themeConfig: {
    logo: 'https://pic4.zhimg.com/80/v2-a0456a5f527c1923f096759f2926012f_1440w.webp',
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/Wcowin/VitePress/edit/main/docs/:path'
      
    },
    nav: [
      { text: "主页", link: "/" },
      
      {
        text: '关于',
        items: [
          { text: '关于我', link: '/About' },
          { text: '个人简历', link: '/jianli' },
        ],
      },


    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: '关于我', link: '/About' },
          { text: '个人简历', link: '/jianli' },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Wcowin/VitePress",
      },
      { icon: "twitter", link: "https://twitter.com/wcowin_" },
    ],
    footer: {
      copyright: "Copyright © 2023-2025 Wcowin.",
      message:
          '“循此苦旅，以达星辰”.',
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    darkModeSwitchLabel: "外观",
    darkModeSwitchTitle: "切换到深色模式",
    lightModeSwitchTitle: "切换到浅色模式",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    externalLinkIcon: true,
  },
  markdown: {
    lineNumbers: true,
    theme: {
      light: "material-theme-lighter",
      dark: "material-theme-darker",
    },
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    math: true
  },
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://wcowin.work/VitePress/'
  },
  // locales: {
  //   root: {
  //     label: '简体中文',
  //     lang: 'zh-CN'
  //   },
  //   en_US: {
  //     label: 'English',
  //     lang: 'en-US',
  //   },
  // },  

  
}
);
