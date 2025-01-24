// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/style.css'
import './style/custom.css'
import './style/rainbow.css'
// import Layout from "./Layout.vue" 
import Authors from "./components/Author.vue"

import backtotop from "./components/backtotop.vue"

import { inBrowser } from "vitepress";
import DataPanel from "./components/DataPanel.vue";
import busuanzi from 'busuanzi.pure.js'
import bsz from "./components/bsz.vue"
import MyLayout from "./components/MyLayout.vue" //视图过渡

import Confetti from "./components/Confetti.vue";// 五彩纸屑


// import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式

export default {
  extends: Theme,
  Layout: MyLayout,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //     "doc-footer-before": () => h(Authors),
  //   })
  // },
  // Layout() { 
  //   return h(Theme.Layout, null, {
  //     'doc-footer-before': () => h(backtotop), // 使用doc-footer-before插槽
  //   })
  // },

  enhanceApp({ app, router }) {
    app.component("DataPanel", DataPanel);//注册全局组件
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
        NProgress.done() // 停止进度条
      };
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
    }
    app.component("Confetti", Confetti); //注册全局组件
  },

  setup() {
    const route = useRoute();
    // const initZoom = () => {
    //   // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
    //   mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    // };
    // onMounted(() => {
    //   initZoom(); 
    // }); 
    // watch(  
    //   () => route.path,
    //   () => nextTick(() => initZoom())
    // );
  },

}
