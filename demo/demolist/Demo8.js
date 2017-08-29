
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
        let list1=['第一','第二','第三','第四','第五'];
        let list2=[<div>DOM第一</div>,<div>DOM第二</div>,<div>DOM第三</div>,<div>DOM第四</div>,<div>DOM第五</div>];
        return (
            <div className="demo8">
                <div>
                    <Dnd list={list1} onStart={this.onDragStart} onStop={this.onDragEnd}/>
                </div>

                <div>
                    <Dnd list={list2} onStart={this.onDragStart} onStop={this.onDragEnd}/>
                </div>
            </div>
        );
    }
}