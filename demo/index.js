
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
 * @title 单个元素可拖拽
 * @description 将某个元素设置为可拖拽
 *
 */

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
/**
 *
 * @title 拖拽列表排序
 * @description 增加list 可以为 [1,2,3]数组，也可以为 [{name:1},{name:2}]，后者需要有name属性，便于显示
 *
 */

class Demo2 extends Component {

    onDragStart(){
        console.log('开始');
    }
    onDragEnd(){
        console.log('结束');
    }
    render() {
        let list=['第一','第二','第三','第四','第五'];
        return (
            <Dnd list={list} onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}/>
        );
    }
}var DemoArray = [{"example":<Demo1 />,"title":" 单个元素可拖拽","code":"\n/**\n *\n * @title 单个元素可拖拽\n * @description 将某个元素设置为可拖拽\n *\n */\n\nclass Demo1 extends Component {\n\n    render() {\n        return (\n            <div>\n                <Dnd >\n                    <div>我可拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}","desc":" 将某个元素设置为可拖拽"},{"example":<Demo2 />,"title":" 拖拽列表排序","code":"\n/**\n *\n * @title 拖拽列表排序\n * @description 增加list 可以为 [1,2,3]数组，也可以为 [{name:1},{name:2}]，后者需要有name属性，便于显示\n *\n */\n\nclass Demo2 extends Component {\n\n    onDragStart(){\n        console.log('开始');\n    }\n    onDragEnd(){\n        console.log('结束');\n    }\n    render() {\n        let list=['第一','第二','第三','第四','第五'];\n        return (\n            <Dnd list={list} onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}/>\n        );\n    }\n}","desc":" 增加list 可以为 [1,2,3]数组，也可以为 [{name:1},{name:2}]，后者需要有name属性，便于显示"}]


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
