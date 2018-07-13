### 安装
> npm i create-react-app -g 

### 虚拟DOM
##### 一般思路
1. state数据
2. JSX模板
3. 数据 + 模板结合,生成真实的DOM
4. state发生改变
5. 数据 + 模板结合,生成真实的DOM, 并不直接替换原始的DOM
6. 新的DOM(DocumentFragment)和原始的DOM做比对,找差异
7. 找出Input框发生了变化
8. 只用新的DOM中的input元素,替换掉老的DOM中的Input元素
> 性能提升不明显

##### React思路
1. state数据
2. JSX模板
4.数据 + 模板 生成虚拟DOM(虚拟DOM就是一个JS对象,用它来描述真实DOM) (损耗了性能)
 ['div',{id: 'bac'}, ['span', {}, 'hello world']]
3. 用虚拟DOM的结构生成真实的DOM来显示
<div id="abe"><span>hello world</span></div>
5. state发生变化
6. 数据 + 模板生成新的虚拟DOM (极大的提升了性能)
['div',{id: 'bac'}, ['span', {}, 'bye']]
7. 比较原始虚拟DOM和新的虚拟DOM的区别,找到区别是span中内容 (极大的提升了性能)
8. 直接操作DOM,改变span中的内容
> 1. 性能提升了 2. 它使得跨端应用得以实现
##### JSX实现DOM的原理
> JSX -> createElement -> 虚拟DOM(JS对象) -> 真实的DOM
##### setState
> setState是异步的,原因在于如果同时调用多次setState,而且间隔时间很小的话,会将setState合并为一次操作,节约性能

### Diff
> 同层比对
```
return <div>item</div> 等同于 return React.createElement('div', {}, 'item')
```
### 笔记
1. 只要用到JSX语法的地方就需要引入React
2. 当组件的state或者props发生改变的时候,render函数就会重新执行
3. 父组件的render函数被运行时,它的子组件的render都将被重新执行一次
### 常用技巧
1. Fragment作为占位符可以不包裹组件
2. 在JSX中使用JS表达式需要'{}'包裹
3. 通过setState来修改state
4. 使用bind来修改this的指向
5. dangerouslySetInnerHTML可以解析HTML

### propTypes & defaultProps
```
import PropTypes from 'prop-types'
```
```
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}
```

### ref
```
<input className="input" id="input" 
  ref={(input) => {this.input = input}}/>
```
```
const value = e.target.value
// 可以写成
const value = this.input.value
```
### 生命周期
> 生命周期函数在某一个时刻组件会自动调用执行的函数