import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-Hans',
  title: 'Wcowin',
  description: 'Vite & Vue powered static site generator.',
  base: '/VitePress/',
  themeConfig: {
    logo: 'https://s1.imagehub.cc/images/2024/02/02/91a767e93d1a344e44c69936464c583e.png',
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
        ],
      },


    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
        ],
      },
      {
        text: 'About',
        items: [
          { text: '关于我', link: '/About' },
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
      copyright: "Copyright © 2023-2024 Wcowin.",
      message:
          'Released under the GPL License.',
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
