
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