
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dnd from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;



/**
 *
 * @title 单个元素拖拽
 * @description 将某个元素设置为可拖拽
 *
 */
class Demo1 extends Component {

    onStart(){
        console.log('start');
    }

    onStop(){
        console.log('stop');
    }
    render() {
        return (
            <div>
                <Dnd onStart={this.onStart} onStop={this.onStop}>
                    <div className="demo">我可随意拖拽</div>
                </Dnd>
            </div>

        );
    }
}
/**
 *
 * @title 单个元素拖拽
 * @description 设置axis="x"只可以沿着x轴拖拽，同理axis="y"只可以沿着y轴拖拽
 *
 */

class Demo2 extends Component {

    onStart(){
        console.log('start');
    }

    onStop(){
        console.log('stop');
    }
    render() {
        return (
            <div>
                <Dnd axis="x" onStart={this.onStart} onStop={this.onStop}>
                    <div className="demo">我只可延X轴拖拽</div>
                </Dnd>
            </div>

        );
    }
}
/**
 *
 * @title 单个元素拖拽
 * @description 设置 onStart 的返回值为false，则不可以拖拽
 *
 */

class Demo3 extends Component {

    onStart(){
        console.log('start');
        return false;
    }

    onStop(){
        console.log('stop');
    }
    render() {
        return (
            <div>
                <Dnd onStart={this.onStart}  onStop={this.onStop}>
                    <div className="demo">我不可以拖拽</div>
                </Dnd>
            </div>

        );
    }
}/**
 *
 * @title 单个元素拖拽
 * @description 设置 handle，值为选择器，例如 '.handle'
 *              设置不可拖拽区域 cancel，值为选择器，例如 '.handle'
 */

class Demo4 extends Component {

    onStart() {
        console.log('start');
    }

    onStop() {
        console.log('stop');
    }

    render() {
        return (
            <div className="demo-4">
                <div>
                    <Dnd handle=".handle" onStart={this.onStart} onStop={this.onStop}>
                        <div className="demo demo4 ">
                            <div className="handle">我是把手</div>
                            <div className="drag-context">需要拖拽把手</div>
                        </div>
                    </Dnd>
                </div>
                <div>
                    <Dnd cancel=".handle" >
                        <div className="demo demo4 ">
                            <div className="handle">我是把手</div>
                            <div className="drag-context">不要拖拽把手</div>
                        </div>
                    </Dnd>
                </div>
            </div>


        );
    }
}
/**
 *
 * @title 单个元素拖拽
 * @description 设置 grid={[x,y]}
 *
 */

class Demo5 extends Component {

    onStart(){
        console.log('start');
    }

    onStop(){
        console.log('stop');
    }
    render() {
        return (
            <div>
                <Dnd grid={[25, 25]} onStart={this.onStart}  onStop={this.onStop}>
                    <div className="demo">我每次拖拽可移动25px</div>
                </Dnd>
            </div>

        );
    }
}
/**
 *
 * @title 单个元素拖拽
 * @description 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}
 *
 */

class Demo6 extends Component {

    onStart(){
        console.log('start');
    }

    onStop(){
        console.log('stop');
    }
    render() {
        return (
            <div>
                <Dnd bounds={{top: -50, left: -50, right: 50, bottom: 50}} onStart={this.onStart} onStop={this.onStop}>
                    <div className="demo">我只能再上下左右50px内移动</div>
                </Dnd>
            </div>

        );
    }
}
/**
 *
 * @title 单个元素拖拽
 * @description 设置只可以在指定容器中移动
 * bounds的也可以设置为选择器,bounds=".demo8-parent"意为在class=demo8-parent的容器中移动
 */

class Demo7 extends Component {

    onStart(){
        console.log('start');
    }
    onStop(){
        console.log('stop');
    }
    render() {
        return (
            <div>
                <div className="demo7-parent">
                    <Dnd bounds=".demo7-parent" onStart={this.onStart} onStop={this.onStop}>
                        <div className="demo">我只能在父级元素中移动</div>
                    </Dnd>
                </div>
            </div>


        );
    }
}
/**
 *
 * @title 拖拽列表排序
 * @description 增加list 可以为 [1,2,3]数组，也可以为 [{name:1},{name:2}]，后者需要有name属性，便于显示
 *
 */

class Demo8 extends Component {

    onDragStart(){
        console.log('开始');
    }
    onDragEnd(){
        console.log('结束');
    }
    render() {
        let list=['第一','第二','第三','第四','第五'];
        return (
            <Dnd list={list} onStart={this.onDragStart} onStop={this.onDragEnd}/>
        );
    }
}var DemoArray = [{"example":<Demo1 />,"title":" 单个元素拖拽","code":"\n/**\n *\n * @title 单个元素拖拽\n * @description 将某个元素设置为可拖拽\n *\n */\nclass Demo1 extends Component {\n\n    onStart(){\n        console.log('start');\n    }\n\n    onStop(){\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我可随意拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}","desc":" 将某个元素设置为可拖拽"},{"example":<Demo2 />,"title":" 单个元素拖拽","code":"\n/**\n *\n * @title 单个元素拖拽\n * @description 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽\n *\n */\n\nclass Demo2 extends Component {\n\n    onStart(){\n        console.log('start');\n    }\n\n    onStop(){\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd axis=\"x\" onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我只可延X轴拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}","desc":" 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽"},{"example":<Demo3 />,"title":" 单个元素拖拽","code":"\n/**\n *\n * @title 单个元素拖拽\n * @description 设置 onStart 的返回值为false，则不可以拖拽\n *\n */\n\nclass Demo3 extends Component {\n\n    onStart(){\n        console.log('start');\n        return false;\n    }\n\n    onStop(){\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd onStart={this.onStart}  onStop={this.onStop}>\n                    <div className=\"demo\">我不可以拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}","desc":" 设置 onStart 的返回值为false，则不可以拖拽"},{"example":<Demo4 />,"title":" 单个元素拖拽","code":"/**\n *\n * @title 单个元素拖拽\n * @description 设置 handle，值为选择器，例如 '.handle'\n *              设置不可拖拽区域 cancel，值为选择器，例如 '.handle'\n */\n\nclass Demo4 extends Component {\n\n    onStart() {\n        console.log('start');\n    }\n\n    onStop() {\n        console.log('stop');\n    }\n\n    render() {\n        return (\n            <div className=\"demo-4\">\n                <div>\n                    <Dnd handle=\".handle\" onStart={this.onStart} onStop={this.onStop}>\n                        <div className=\"demo demo4 \">\n                            <div className=\"handle\">我是把手</div>\n                            <div className=\"drag-context\">需要拖拽把手</div>\n                        </div>\n                    </Dnd>\n                </div>\n                <div>\n                    <Dnd cancel=\".handle\" >\n                        <div className=\"demo demo4 \">\n                            <div className=\"handle\">我是把手</div>\n                            <div className=\"drag-context\">不要拖拽把手</div>\n                        </div>\n                    </Dnd>\n                </div>\n            </div>\n\n\n        );\n    }\n}","desc":" 设置 handle，值为选择器，例如 '.handle'"},{"example":<Demo5 />,"title":" 单个元素拖拽","code":"\n/**\n *\n * @title 单个元素拖拽\n * @description 设置 grid={[x,y]}\n *\n */\n\nclass Demo5 extends Component {\n\n    onStart(){\n        console.log('start');\n    }\n\n    onStop(){\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd grid={[25, 25]} onStart={this.onStart}  onStop={this.onStop}>\n                    <div className=\"demo\">我每次拖拽可移动25px</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}","desc":" 设置 grid={[x,y]}"},{"example":<Demo6 />,"title":" 单个元素拖拽","code":"\n/**\n *\n * @title 单个元素拖拽\n * @description 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}\n *\n */\n\nclass Demo6 extends Component {\n\n    onStart(){\n        console.log('start');\n    }\n\n    onStop(){\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd bounds={{top: -50, left: -50, right: 50, bottom: 50}} onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我只能再上下左右50px内移动</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}","desc":" 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}"},{"example":<Demo7 />,"title":" 单个元素拖拽","code":"\n/**\n *\n * @title 单个元素拖拽\n * @description 设置只可以在指定容器中移动\n * bounds的也可以设置为选择器,bounds=\".demo8-parent\"意为在class=demo8-parent的容器中移动\n */\n\nclass Demo7 extends Component {\n\n    onStart(){\n        console.log('start');\n    }\n    onStop(){\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <div className=\"demo7-parent\">\n                    <Dnd bounds=\".demo7-parent\" onStart={this.onStart} onStop={this.onStop}>\n                        <div className=\"demo\">我只能在父级元素中移动</div>\n                    </Dnd>\n                </div>\n            </div>\n\n\n        );\n    }\n}","desc":" 设置只可以在指定容器中移动"},{"example":<Demo8 />,"title":" 拖拽列表排序","code":"\n/**\n *\n * @title 拖拽列表排序\n * @description 增加list 可以为 [1,2,3]数组，也可以为 [{name:1},{name:2}]，后者需要有name属性，便于显示\n *\n */\n\nclass Demo8 extends Component {\n\n    onDragStart(){\n        console.log('开始');\n    }\n    onDragEnd(){\n        console.log('结束');\n    }\n    render() {\n        let list=['第一','第二','第三','第四','第五'];\n        return (\n            <Dnd list={list} onStart={this.onDragStart} onStop={this.onDragEnd}/>\n        );\n    }\n}","desc":" 增加list 可以为 [1,2,3]数组，也可以为 [{name:1},{name:2}]，后者需要有name属性，便于显示"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
