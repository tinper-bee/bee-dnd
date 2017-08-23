
/**
 *
 * @title 拖拽列表排序
 * @description 增加list 可以为 [1,2,3]数组，也可以为 [{name:1},{name:2}]，后者需要有name属性，便于显示
 *
 */

class Demo9 extends Component {

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
}