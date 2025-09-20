import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 客户端增强逻辑
  },
  
  setup() {
    // 客户端初始化逻辑
  },
  
  rootComponents: [],
})