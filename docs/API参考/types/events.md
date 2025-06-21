# events
控件事件
- 类型：`object[]`
## key
事件名称，控件内唯一，标识不同事件（遵循JavaScript命名规范）
- 类型：`string`
- 示例：`'on_click'`
## label
事件积木文本
- 类型：`string`
- 示例：label: `'被点击时'`,
## params
事件参数
- 类型：`object[]`
## key
事件参数名称，事件内唯一，标识不同事件
- 类型：`string`
## label
参数文本
- 类型：`string`
## valueType
参数类型，影响编辑器内积木嵌套
- 类型：`string`

| 参考值 | 功能 |
| - | - |
| 'number' | 数字类型 |
| 'string' | 字符串类型 |
| 'boolean' | 布尔类型 |
| customType | 自定义类型 |
## subTypes
事件类型
- 类型：`object[]`
## key
事件类型参数名称，事件内唯一，标识不同事件类型
- 类型：`string`
## dropdown
事件类型参数下拉列表
- 类型：`object[]`
## value
事件类型下拉选项，事件类型唯内一，标识不同事件类型选项
- 类型：`any`
## label
事件类型下拉选项文本
- 类型：`string`
## tooltip
积木提示，鼠标悬浮在积木上显示
- 类型：`string`

## blockOptions
积木配置
- 类型：`object`

### icon
积木图标
- 类型：`string`

<!--@include: ./blockOptions.md-->