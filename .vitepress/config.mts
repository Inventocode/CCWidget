import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "CoCo 自定义控件",
  description: "如果恰巧你会 JavaScript 的话，那么，更广阔的世界在向你招手！",
  srcDir: 'docs',
  themeConfig: {
    outline: {
      label: '目录',
      level: 'deep',
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/指南/快速上手' },
      { text: '参考', link: '/API参考' },
      { text: '工具', link: '/tools/'},
      { text: '控件商城', link: '/控件商城' },
      {
        text: '站外工具', items: [
          { text: '编程猫网盘', link: 'https://shequ.pgaot.com/?mod=codemaocdn' },
          { text: 'Waddle', link: 'https://waddle.cocotais.cn/' },
          { text: 'DuckSeek写控件', link: 'https://chat.deepseek.com/' },
          { text: '棕榈酸鸭AI控件', link: 'https://www.tbox.cn/share/202508APAvTl00517109' },
        ]
      }
    ],
    sidebar: [
      {
        text: '指南', items: [
          { text: '快速上手', link: '/指南/快速上手' },
          { text: '手把手教你写控件', link: '/指南/手把手教你写控件' },
          { text: '模块文档', link: '/指南/模块文档' },
          { text: 'Waddle手册', link: 'https://www.yuque.com/zaona/waddle/' },
        ]
      },
      {
        text: 'API参考', link:"/API参考/", items: [
          {
            text: 'types 控件类型', link: '/API参考/types/' , collapsed: false, items: [
              { text: 'methods 方法', link: '/API参考/types/methods' },
              { text: 'properties 属性', link: '/API参考/types/properties' },
              { text: 'events 事件', link: '/API参考/types/events' },
            ]
          },
          { text: 'widget 控件实体', link: '/API参考/widget' },
          { text: 'exports 导出', link: '/API参考/exports' }
        ]
      },
      { text: '实用工具', link: '/tools/', items: [
          { text: '[在线]控件限制快查', link: 'https://ccwidget.top/LQS.html' },
          { text: 'CCQI 快速导入', link: '/tools/CCQI' },
          { text: 'CCWMP 新概念控件商城', link: '/tools/CCWMP' },
          { text: 'CWLS 控件测试助手', link: '/tools/CWLS' },
          { text: 'CCPP 自动改包', link: '/tools/CCPP' },
          { text: 'ILQ 我爱Qii', link: '/tools/ILQ' },
          { text: 'BWL 绕控件限制', link: '/tools/BWL' },
        ]
      },
      {
        text: '控件商城', link: '/控件商城', items: [
          { text: '控件要求', link: '/控件商城/控件要求' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/Inventocode/coco-custom-widget' },
      { icon: 'github', link: 'https://github.com/Inventocode/ccwidget' }
    ],
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
