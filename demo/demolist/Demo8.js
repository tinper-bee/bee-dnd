/**
 *
 * @title 数据集合拖拽列表排序
 * @description 增加list 可以为 [1,2,3]数组，
 *              也可以为 [{name:1},{name:2}]，后者需要有name属性，便于显示。
 *              也可以为 dom集合，见后边示例
 *
 */

import React, { Component } from 'react';
import Dnd from '../../src/index';

class Demo8 extends Component {
    
    onDragStart=(result,list)=>{
        console.log('开始');
    }
    onDragEnd=(result,list)=>{
        console.log('结束');
    }
    render() {
        let list1=['第一','第二','第三','第四','第五'];
        return (
            <Dnd  list={list1} onStart={this.onDragStart} onStop={this.onDragEnd}/>
        );
    }
}

export default Demo8;