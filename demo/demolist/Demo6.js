
/**
 *
 * @title 单个元素拖拽
 * @description 设置 grid={[x,y]}
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
                <Dnd grid={[25, 25]} onStart={this.onStart}  onStop={this.onStop}>
                    <div className="demo">我每次拖拽可移动25px</div>
                </Dnd>
            </div>

        );
    }
}