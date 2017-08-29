# bee-dnd

[![npm version](https://img.shields.io/npm/v/bee-dnd.svg)](https://www.npmjs.com/package/bee-dnd)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-dnd/master.svg)](https://travis-ci.org/tinper-bee/bee-dnd)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-dnd/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-dnd?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-dnd.svg)](https://david-dm.org/tinper-bee/bee-dnd#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-dnd.svg?style=flat)](https://npmjs.org/package/bee-dnd)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-dnd.svg)](http://isitmaintained.com/project/tinper-bee/bee-dnd "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-dnd.svg)](http://isitmaintained.com/project/tinper-bee/bee-dnd "Percentage of issues still open")


react bee-dnd component for tinper-bee

基于 `react-beautiful-dnd`的拖拽

## 使用方法

```
import Dnd from 'bee-dnd';
class Demo1 extends Component {

    render() {
        return (
            <div>
                <Dnd >
                    <div>我可拖拽</div>
                </Dnd>
            </div>

        );
    }
}
```

#### 样式引入
- 可以使用link引入build目录下Clipboard.css
```
<link rel="stylesheet" href="./node_modules/bee-clipboard/build/Dnd.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-dnd/src/Dnd.scss"
//或是
import "./node_modules/bee-dnd/build/Dnd.css"
```

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|list|需要遍历的数组|array|[]|
|onStop|拖拽开始的钩子函数|function|-|
|onStart|拖拽结束的钩子函数|function|-|
|axis|设置可拖拽的方向|string|-|
|handle|设置把手|string|-|
|cancel|设置不可拖拽区域|string|-|
|grid|设置每次拖拽移动的距离|array|-|
|bounds|设置移动范围|object/string|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-dnd
$ cd bee-dnd
$ npm install
$ npm run dev
```