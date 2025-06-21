# widget
控件实体

## 基类方法
从 `InvisibleWidget` 或者 `VisibleWidget` 继承的方法
### emit
触发控件事件
#### 用法
```js
this.emit(eventNameAndSubType, param1, param2, ...)
```
#### 示例
```js
// 触发 hello 事件
this.emit('hello') // （说你好）
// 触发 hello 事件，并传参 Alice 和 Bob
this.emit('hello', 'Alice', 'Bob') // （给 Alice 和 Bob 说你好）
// 触发 hello 事件，类型为 Loud 和 Excited，并传参 Alice 和 Bob
this.emit('helloLoudExcited', 'Alice', 'Bob') // （激动并大声地给 Alice 和 Bob 说你好）
```

| 字段 | 功能 |
| - | - |
| eventNameAndSubType | 需要将 `eventName` 和 `subType` 拼接 |
| eventName | 触发事件名称，值与 `events.key` 对应 |
| subType | 触发子事件值，值与 `events.subTypes.dropdown.value` 对应 |
| param | 触发事件传参，传参顺序与 `events.params` 对应 |

### setProps
::: warning 注意
不可见控件不需要渲染，设置属性直接使用 `this.prop1 = newValue` 即可'

可见控件需要渲染，设置属性需要调用 `this.setProps` 方法调用完成后，会自动重新渲染
:::
用于修改控件属性并重新渲染（仅限可见控件）
#### 用法
```js
this.setProps({ 'prop1': newValue1, 'prop2': newValue2, ... })
```

| 字段 | 功能 |
| - | - |
| prop | 被修改的属性名称，值与 `properties.key` 对应 |
| newValue | 新属性值 |

### widgetLog
CoCo控制台输出日志
#### 用法
```js
this.widgetLog('一行日志');
```
### widgetWarn
CoCo控制台输出警告
#### 用法
```js
this.widgetWarn('一行警告');
```
### widgetError
CoCo控制台输出错误
#### 用法
```js
this.widgetError('一行错误');
```
### widgetInterrupt
浏览器控制台输出错误（仅限不可见控件）
#### 用法
```js
this.widgetInterrupt('报错内容');
```