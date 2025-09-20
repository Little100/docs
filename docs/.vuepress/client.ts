import { defineClientConfig } from '@vuepress/client'
import QuestionBlock from './components/QuestionBlock.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 全局注册QuestionBlock组件
    app.component('QuestionBlock', QuestionBlock)
  },
})
