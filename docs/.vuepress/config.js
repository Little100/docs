import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { resolve } from "path";

export default defineUserConfig({
  // 根据环境动态设置base路径
  // GitHub Pages需要使用仓库名作为base路径
  base: process.env.NODE_ENV === 'production' ? '/docs/' : '/',
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ['vuepress-theme-hope'],
      },
    },
  }),
  
  // 添加自定义head标签
  head: [
    ['script', { src: '/font-switcher.js' }]
  ],

  // 站点范围的语言配置
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Little_100的文档',
      description: '这是我的第一个 VuePress 站点',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Little_100 Docs',
      description: 'This is my first VuePress site',
    },
    '/lzh/': {
      lang: 'zh-CN', // 使用zh-CN以获得更好的支持
      title: 'Little_100之文章',
      description: '此乃吾初作之 VuePress 站点也',
    },
    '/zh-TW/': {
      lang: 'zh-TW',
      title: 'Little_100的文件',
      description: '這是我的第一個 VuePress 站點',
    },
  },

  theme: hopeTheme({
    hostname: "https://little100.github.io",
    author: { name: "Little100" },
    repo: "https://github.com/Little100/docs",
    logo: "/img/logo.png",

    // 主题范围的语言配置 (用于UI文本)
    locales: {
      '/': {
        selectLanguageName: '🇨🇳 简体中文',
        // 假设这里的侧边栏和导航栏配置是正确的，因此予以保留
        navbar: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { 
            text: '🔤 字体选择', 
            children: [
              { text: '🎮 Minecraft AE', link: 'javascript:void(0)', rel: 'font-minecraft' },
              { text: '💻 系统默认', link: 'javascript:void(0)', rel: 'font-system' },
              { text: '📝 无衬线字体', link: 'javascript:void(0)', rel: 'font-sans' },
              { text: '📚 衬线字体', link: 'javascript:void(0)', rel: 'font-serif' },
              { text: '⌨️ 等宽字体', link: 'javascript:void(0)', rel: 'font-mono' },
              { text: '👁️ 护眼字体', link: 'javascript:void(0)', rel: 'font-comfort' }
            ],
            ariaLabel: '选择字体'
          },
        ],
        sidebar: [
          {
            text: '文档导航',
            collapsible: true,
            children: [ '/' ],
          },
          {
            text: 'ProjectE-Plugin (等价交换插件)',
            collapsible: true,
            children: [
              '/guide/',
              '/guide/projecte/',
              '/guide/projecte/one',
              {
                text: 'ProjectE 配置',
                collapsible: true,
                children: [
                  '/guide/projecte/projecteconfig',
                  '/guide/projecte/perecipe',
                  '/guide/projecte/pemainconfig',
                  '/guide/projecte/pelang',
                  '/guide/projecte/pecmd',
                  '/guide/projecte/peci',
                  '/guide/projecte/peopi',
                ],
              },
              '/guide/projecte/pecmdusage',
              '/guide/projecte/credits',
            ],
          },
          {
            text: 'Super Stick Sword',
            collapsible: true,
            children: [
              '/guide/super-stick-sword/super-stick-sword',
              '/guide/super-stick-sword/super-stick-sword-features',
            ],
          },
          {
            text: 'Super Farming',
            collapsible: true,
            children: [
              '/guide/super-farming/super-farming',
              '/guide/super-farming/super-usage',
              '/guide/super-farming/super-cmd',
              '/guide/super-farming/superconfig',
            ],
          },
        ],
      },
      '/en/': {
        selectLanguageName: '🇺🇸 English',
        navbar: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          { 
            text: '🔤 Font', 
            children: [
              { text: '🎮 Minecraft AE', link: 'javascript:void(0)', rel: 'font-minecraft' },
              { text: '💻 System Default', link: 'javascript:void(0)', rel: 'font-system' },
              { text: '📝 Sans Serif', link: 'javascript:void(0)', rel: 'font-sans' },
              { text: '📚 Serif', link: 'javascript:void(0)', rel: 'font-serif' },
              { text: '⌨️ Monospace', link: 'javascript:void(0)', rel: 'font-mono' },
              { text: '👁️ Comfort Reading', link: 'javascript:void(0)', rel: 'font-comfort' }
            ],
            ariaLabel: 'Select Font'
          },
        ],
        sidebar: [
          {
            text: 'Navigation',
            collapsible: true,
            children: [ '/en/' ],
          },
          {
            text: 'ProjectE-Plugin',
            collapsible: true,
            children: [
              '/en/guide/',
              '/en/guide/projecte/',
              '/en/guide/projecte/one',
              {
                text: 'ProjectE Config',
                collapsible: true,
                children: [
                  '/en/guide/projecte/projecteconfig',
                  '/en/guide/projecte/pemainconfig',
                  '/en/guide/projecte/perecipe',
                  '/en/guide/projecte/peci',
                  '/en/guide/projecte/peopi',
                  '/en/guide/projecte/pelang',
                  '/en/guide/projecte/pecmd',
                ],
              },
              '/en/guide/projecte/pecmdusage',
              '/en/guide/projecte/credits',
            ],
          },
          {
            text: 'Super Stick Sword',
            collapsible: true,
            children: [
              '/en/guide/super-stick-sword/super-stick-sword',
              '/en/guide/super-stick-sword/super-stick-sword-features',
            ],
          },
          {
            text: 'Super Farming',
            collapsible: true,
            children: [
              '/en/guide/super-farming/super-farming',
              '/en/guide/super-farming/super-usage',
              '/en/guide/super-farming/super-cmd',
              '/en/guide/super-farming/superconfig',
            ],
          },
        ],
      },
      '/lzh/': {
        selectLanguageName: 'lzh 文言文',
        navbar: [
          { text: '卷首', link: '/lzh/' },
          { text: '指引', link: '/lzh/guide/' },
          { 
            text: '🔤 字体', 
            children: [
              { text: '🎮 Minecraft AE', link: 'javascript:void(0)', rel: 'font-minecraft' },
              { text: '💻 系统字体', link: 'javascript:void(0)', rel: 'font-system' },
              { text: '📝 无衬线体', link: 'javascript:void(0)', rel: 'font-sans' },
              { text: '📚 衬线字体', link: 'javascript:void(0)', rel: 'font-serif' },
              { text: '⌨️ 等宽字体', link: 'javascript:void(0)', rel: 'font-mono' },
              { text: '👁️ 护眼字体', link: 'javascript:void(0)', rel: 'font-comfort' }
            ],
            ariaLabel: '选择字体'
          },
        ],
        sidebar: [
          {
            text: '导引',
            collapsible: true,
            children: [ '/lzh/' ]
          },
          {
            text: 'ProjectE-Plugin (等价交换插件)',
            collapsible: true,
            children: [
              '/lzh/guide/',
              '/lzh/guide/projecte/',
              '/lzh/guide/projecte/one',
              {
                text: 'ProjectE之策',
                collapsible: true,
                children: [
                  '/lzh/guide/projecte/projecteconfig',
                  '/lzh/guide/projecte/pemainconfig',
                  '/lzh/guide/projecte/perecipe',
                  '/lzh/guide/projecte/peci',
                  '/lzh/guide/projecte/peopi',
                  '/lzh/guide/projecte/pelang',
                  '/lzh/guide/projecte/pecmd'
                ]
              },
              '/lzh/guide/projecte/pecmdusage',
              '/lzh/guide/projecte/credits'
            ]
          },
          {
            text: '神奇棍剑',
            collapsible: true,
            children: [
              '/lzh/guide/super-stick-sword/super-stick-sword',
              '/lzh/guide/super-stick-sword/super-stick-sword-features'
            ]
          },
          {
            text: '超级农事',
            collapsible: true,
            children: [
              '/lzh/guide/super-farming/super-farming',
              '/lzh/guide/super-farming/super-usage',
              '/lzh/guide/super-farming/super-cmd',
              '/lzh/guide/super-farming/superconfig'
            ]
          }
        ],
        // 为lzh提供最小化的i18n配置以避免警告
        meta: {
          contributor: '撰者',
          editLink: '更易此頁',
          lastUpdated: '末改之日',
        },
        blog: {
          article: '文',
          articleList: '文列',
          category: '类',
          tag: '标',
          timeline: '时序',
          timelineTitle: '昔日',
          all: '皆',
          intro: '吾述',
          star: '星',
        },
      },
      '/zh-TW/': {
        selectLanguageName: '🇹🇼 繁體中文',
        navbar: [
          { text: '首頁', link: '/zh-TW/' },
          { text: '指南', link: '/zh-TW/guide/' },
          { 
            text: '🔤 字體', 
            children: [
              { text: '🎮 Minecraft AE', link: 'javascript:void(0)', rel: 'font-minecraft' },
              { text: '💻 系統預設', link: 'javascript:void(0)', rel: 'font-system' },
              { text: '📝 無襯線字體', link: 'javascript:void(0)', rel: 'font-sans' },
              { text: '📚 襯線字體', link: 'javascript:void(0)', rel: 'font-serif' },
              { text: '⌨️ 等寬字體', link: 'javascript:void(0)', rel: 'font-mono' },
              { text: '👁️ 護眼字體', link: 'javascript:void(0)', rel: 'font-comfort' }
            ],
            ariaLabel: '選擇字體'
          },
        ],
        sidebar: [
          {
            text: '文檔導航',
            collapsible: true,
            children: [ '/zh-TW/' ]
          },
          {
            text: 'ProjectE-Plugin (等價交換插件)',
            collapsible: true,
            children: [
              '/zh-TW/guide/',
              '/zh-TW/guide/projecte/',
              '/zh-TW/guide/projecte/one',
              {
                text: 'ProjectE 設定',
                collapsible: true,
                children: [
                  '/zh-TW/guide/projecte/projecteconfig',
                  '/zh-TW/guide/projecte/pemainconfig',
                  '/zh-TW/guide/projecte/perecipe',
                  '/zh-TW/guide/projecte/peci',
                  '/zh-TW/guide/projecte/peopi',
                  '/zh-TW/guide/projecte/pelang',
                  '/zh-TW/guide/projecte/pecmd'
                ]
              },
              '/zh-TW/guide/projecte/pecmdusage',
              '/zh-TW/guide/projecte/credits'
            ]
          },
          {
            text: '超級棍劍',
            collapsible: true,
            children: [
              '/zh-TW/guide/super-stick-sword/super-stick-sword',
              '/zh-TW/guide/super-stick-sword/super-stick-sword-features'
            ]
          },
          {
            text: '超級農事',
            collapsible: true,
            children: [
              '/zh-TW/guide/super-farming/super-farming',
              '/zh-TW/guide/super-farming/super-usage',
              '/zh-TW/guide/super-farming/super-cmd',
              '/zh-TW/guide/super-farming/superconfig'
            ]
          }
        ]
      },
    },

    plugins: {
      // 启用搜索功能
      search: {
        // 搜索热键
        hotKeys: ['s', '/'],
        // 最大推荐数
        maxSuggestions: 10,
        // 排除页面
        isSearchable: (page) => page.path !== '/',
        // 获取标签作为搜索内容
        getExtraFields: (page) => page.frontmatter.tags ?? [],
        locales: {
          '/': {
            placeholder: '搜索文档',
          },
          '/en/': {
            placeholder: 'Search docs',
          },
          '/lzh/': {
            placeholder: '寻文档',
          },
          '/zh-TW/': {
            placeholder: '搜尋文件',
          },
        },
      },
      
      mdEnhance: {
        // 开启自定义容器功能
        customContainers: true,
        // 注册自定义容器
        container: {
          tip: true,
          warning: true,
          danger: true,
          details: true,
          codeGroup: true,
          codeGroupItem: true,
          // 添加QuestionBlock自定义容器
          question: {
            details: true,
            summary: (info) => `❓ ${info || '问题'}`,
          },
        },
      },
      components: {
        components: ["Badge", "VPCard"],
      },
    },
  }),
});