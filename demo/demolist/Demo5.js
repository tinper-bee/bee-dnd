
/**
 *
 * @title 单个元素拖拽
 * @description 设置 不可拖拽区域 cancel，值为 选择器，例如 '.handle'
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
                <Dnd cancel=".handle" onStart={this.onStart}  onStop={this.onStop}>
                    <div className="demo demo4 ">
                        <div className="handle">我是把手</div>
                        <div className="drag-context">不要拖拽把手</div>
                    </div>
                </Dnd>
            </div>

        );
    }
}