# properties
控件属性
- 类型：`object[]`

## 可见控件内置属性
| 参考值 | 功能 |
| --- | --- |
| `'__width'` | 可见控件宽度 |
| `'__height'` | 可见控件高度 |
| `'__size'` | 可见控件尺寸 |
| `'__opacity'` | 可见控件透明度（须自行设置 validators ） |
| `'__disabled'` | 可见控件是否禁用 |
| `'__visible'` | 可见控件是否显示 |

::: details 推荐的写法
```js
{
 | key: "__width", label: "宽度",
 | valueType: "number", defaultValue: 100,
 | blockOptions: { generateBlock: false, },
},
{
 | key: "__height", label: "高度",
 | valueType: "number", defaultValue: 100,
 | blockOptions: { generateBlock: false, },
},
{
 | key: "__size", label: "",
  valueType: "number", defaultValue: 100,
 | readonly: true, hidePropertyEditor: true,
 | blockOptions: {
 |  | setter: { keys: ["__height", "__width",], },
 |  | getter: { keys: ["__height", "__width",], },
 | },
},
{
 | key: "__opacity", label: "不透明度", valueType: "number", defaultValue: 100,
 | validators: { greaterThan: 0, lessThan: 100, isInteger: true, },
},
{ key: "__disabled", label: "禁用", valueType: "boolean", defaultValue: false, },
{ key: "__visible", label: "显示", valueType: "boolean", defaultValue: true, },
```
:::

## key
属性名称，控件内唯一，标识不同属性（遵循JavaScript命名规范）
- 类型：`string`
- 示例：`'property1'`

## label
属性积木文本
- 类型：`string`
- 示例：`'属性1'`

## valueType
属性类型，影响编辑器内积木嵌套和属性面板编辑
- 类型：`string`

| 参考值 | 功能 |
| --- | --- |
| `'number'` | 数字类型， `editorType` 默认为 `'InputNumber'` |
| `'string'` | 字符串类型， `editorType` 默认为 `'TextInput'` |
| `'boolean'` | 布尔类型， `editorType` 默认为 `'OptionSwitch'` |
| `'color'` | 颜色类型， `editorType` 默认为 `'OptionSwitch'` |
| `'image'` | 图片类型，内部返回值为图片文件名 |

## checkType
属性数据类型，影响编辑器内积木嵌套
- 类型：`string`

| 参考值 | 功能 |
| --- | --- |
| `'number'` | 数字类型 |
| `'string'` | 字符串类型 |
| `'boolean'` | 布尔类型 |
| `'color'` | 颜色类型 |

## editorType
属性编辑器类型，影响属性面板编辑
- 类型：`string`

| 参考值 | 功能 |
| --- | --- |
| TextInput | 文本（单行） |
| TextArea | 文本（多行） |
| InputNumber | 数字 |
| RichTextEditor | 富文本编辑器 |
| OptionSwitch | 选项开关 |
| Color | 选择颜色 |

::: details 还有高手？
| 参考值 | 功能 |
| --- | --- |
| FontFamily | 字体选择 |
| PreviewImage | 显示对话框预览效果，值为对话框的主题色 |
| AntSwitch | 开关 |
| HttpBody | POST请求文本 |
| HttpHeader | 请求头 |
| HttpParams | GET请求参数 |
| NumberSlider | 滑动条 |
| BrushDrawProcess | 绘画过程开关 |
| BrushPenColor | 颜色及光标形状 |
| DictFields | 云字典数据源 |
| TableFields | 云数据表数据源 |
| WarningFields | 停止服务警告 |
| BluetoothConnect | 蓝牙 |
| AqaraAuth | 绿米 |
| audioVolume | 音量条 |
| audioRate | 音速条 |
:::

## defaultValue
属性默认值
- 类型：`any`
## hidePropertyEditor
是否不在属性面板中显示
- 类型：`boolean`
## readonly
属性是否只读（只生成返回值积木并在属性面板中隐藏）
- 类型：`boolean`
## unit
属性 `valueType` 为 `'number'` 

## validators
属性值检查器
- 类型：`object`
### lessThan
检查属性 `valueType` 为 `'number'` 时是否小于指定值
- 类型：`object`
#### value
指定值
- 类型：`number`
#### message
不满足条件时的报错信息
- 类型：`string`


### greaterThan
检查属性 `valueType` 为 `'number'` 时是否大于指定值
- 类型：`object`
#### value
指定值
- 类型：`number`
#### message
不满足条件时的报错信息
- 类型：`string`


### isInteger
检查属性 `valueType` 为 `'number'` 时是否为整数
- 类型：`object`
#### value
是否为整数
- 类型：`boolean`
#### message
不满足条件时的报错信息
- 类型：`string`


### notEmpty
检查属性 `valueType` 为 `'string'` 时是否不为空
- 类型：`object`
#### value
是否不为空
- 类型：`boolean`
#### message
不满足条件时的报错信息
- 类型：`string`

### maxLength
检查属性 `valueType` 为 `'string'` 时是否小于指定长度
#### value
指定长度
- 类型：`number`
#### message
不满足条件时的报错信息
- 类型：`string`

### minLength
检查属性 `valueType` 为 `'string'` 时是否大于指定长度
#### value
指定长度
- 类型：`number`
#### message
不满足条件时的报错信息

## dropdown
属性值下拉列表
- 类型：`object[]`
### value
属性下拉选项值，属性内唯一，标识不同属性值选项
- 类型：`any`
### label
属性值下拉选项文本
- 类型：`string`

## tooltip
积木提示，鼠标悬浮在积木上显示
- 类型：`string`

## blockOptions
<!--@include: ./blockOptions.md-->