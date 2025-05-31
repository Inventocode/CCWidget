# methods
控件方法

- 类型：`object[]`

## key
方法名称，控件内唯一，标识不同方法（遵循JavaScript命名规范）

- 类型：`string`
- 示例：`'method1'`

## label
积木文本

- 类型：`string`
- 示例：`'方法1'`

## valueType
返回类型

| 参考值 | 说明 |
| --- | --- |
| `false` | 无返回值 |
| `'number'` | 返回值为数字 |
| `'string'` | 返回值为字符串 |
| `'boolean'` | 返回值为布尔值 |
| `array` | 返回值可能为列表内任意类型 |
| customType | 自定义类型 |

## params
方法参数
- 类型：`object[]`

### key
参数名称，方法内唯一，标识不同参数

- 类型：`string`
- 示例：`'name'`

### label
参数前缀文本

- 类型：`string`
- 示例：`'名称'`

### labelAfter
参数后缀文本

- 类型：`string`
- 示例：`'（必填）'`
### valueType
参数类型，影响编辑器内积木嵌套

- 类型：`string | string[]`

| 参考值 | 功能 |
| --- | --- |
| 'number' | 数字类型 |
| 'string' | 字符串类型 |
| 'boolean' | 布尔类型 |
| 'image' | 图片类型（积木表现为从图片选择器） |
| 'icon' | 图标类型（积木表现为从图标选择器） |
| 'color' | 颜色类型（积木表现为颜色选择器） |
| 'multilineString' | 多行文本类型（积木表现为可换行输入框）（此时 checkType 须包含 'string'） |
| 'richTextString' | 富文本类型（积木表现为富文本编辑器） |

### checkType
参数数据类型，影响编辑器内积木嵌套

- 类型：`string | string[]`

| 参考值 | 功能 |
| --- | --- |
| 'number' | 可放入数字类型积木 |
| 'string' | 可放入字符串类型积木 |
| 'boolean' | 可放入布尔类型积木 |
| 'array' | 可放入列表类型积木 |
| customType | 可放入返回值 valueType 与 customType 相同的积木 |

### controller
滑动条（仅`params.valueType`为`number`时有效）
- 类型：`object`

#### min
滑动条最小值
- 类型：`number`

#### max
滑动条最大值
- 类型：`number`

::: tip
仅设置 `min` 和 `max` ，不设置 `leftText` 和 `rightText` 将不提供滑动条，仅限制大小
:::
::: warning
min 和 max 值推荐设置为整数，否则滑条可能异常，设置此属性后值会被四舍五入至整数
:::
::: danger
目前无法设置步长，固定为1
:::
#### leftText
滑动条左侧文字
- 类型：`string`

#### rightText
滑动条右侧文字
- 类型：`string`

### dropdown
下拉选项
- 类型：`object[]`

#### value
下拉选项值，参数内唯一，标识不同参数选项
- 类型：`any`
#### label
下拉选项文本
- 类型：`string`
#### image
下拉选项图片
- 类型：`string`
#### isHideFieldImage
是否显示选项图片
- 类型：`boolean`
- 默认值：`true`
## tooltip
积木提示，鼠标悬浮在积木上显示
- 类型：`string`
## blockOptions
积木配置
- 类型：`object`
<!--@include: ./blockOptions.md-->