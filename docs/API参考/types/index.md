# types
## type
控件类型名称，作品唯一，标识不同控件

应使用大写字母+下划线
- 类型：`string`
- 示例：`"A_BUTTON"`
## icon
控件图标，显示在CoCo编辑器中
::: tip `@琦琦`的建议
全部用`svg`

~~可见控件用`png`；不可见控件用`svg`~~

我的可见控件用png是因为图标的白色描边需要单独用钢笔画出来，懒得画，就直接导出 png 了
:::
- 类型：`string`
- 示例：`"https://waddle.coco-central.cn/static/img/logo/logo-white.svg"`
## title
控件名称，显示在CoCo编辑器中
- 类型：`string`
- 示例：`"一个按钮"`
## docs
控件文档
- 类型：`object`
### url
属性面板下方“如何使用？”的跳转链接
- 类型：`string`
- 示例：`"https://coco.codemao.cn/"`
## isInvisibleWidget
是否为不可见控件
- 类型：`boolean`

| 值 | 描述 |
| --- | --- |
| `true` | 不可见控件 |
| `false` | 可见控件 |

## isGlobalWidget
是否为全局控件
- 类型：`boolean`

| 值 | 描述 |
| --- | --- |
| `true` | 全局控件 |
| `false` | 屏幕控件 |

::: warning 注意
当 isInvisibleWidget 为 false 时，本选项值必须为 false
:::
## platforms
控件的可用平台
- 类型：`string[]`
- 可用值：`'web'`,`'android'`,`'ios'`
- 缺省值：`["web", "android", "ios"]`

| 值 | 描述 |
| --- | --- |
| `web` | 网页（编辑器、h5预览、社区分享） |
| `android` | 安卓手机端（打包APP） |
| `ios` | （暂未实现） |

::: tip
不包含'web'时，编辑器调试会显示“控件暂不支持网页端运行，请打包后使用”的提示，具体是否可用取决于控件的代码实现，而非该选项
:::
::: tip
在编写代码时可以使用 [utils.isNative](/指南/模块文档#isnative) 进行判断是否为打包后的APP
:::
## version
控件版本号
- 类型：`string`
- 示例：`"1.0.0"`

请参考[语义化版本2.0](https://semver.org/lang/zh-CN/)

## hasAnyWidget
是否生成任意控件
- 类型：`boolean`
- 缺省值：`false`
## properties
控件属性
- 类型：`object[]`

详见[properties](/API参考/types/properties)
## methods
控件方法
- 类型：`object[]`

详见[methods](/API参考/types/methods)
## events
控件事件
- 类型：`object[]`

详见[events](/API参考/types/events)
