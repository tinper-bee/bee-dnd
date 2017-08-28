/**
 *
 * @title 单个元素拖拽
 * @description 穿梭框
 * bounds的也可以设置为选择器,bounds=".demo8-parent"意为在class=demo8-parent的容器中移动
 */

class Demo10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftList: ['左边第一个','左边第二个','左边第三个','左边第四个'],
            rightList:['右边第一个','右边第二个','右边第三个','右边第四个']
        };
    }

    onStart() {
        console.log(arguments);
        console.log('start');
    }

    onLeftStop() {
        console.log(arguments);
        console.log('stop');
    }




    render() {
        return (
            <div>
                <div className="demo10-parent">
                    <div className="pull-left">
                        {
                            this.state.leftList.map((item,index)=>{
                                return (
                                    <Dnd bounds=".demo10-parent"  onStop={this.onLeftStop}>
                                        <div className="demo">{item}</div>
                                    </Dnd>
                                )
                            })
                        }
                    </div>
                    <div className="pull-right">
                        {
                            this.state.rightList.map((item,index)=>{
                                return (
                                    <Dnd bounds=".demo10-parent"  onStop={this.onLeftStop}>
                                        <div className="demo">{item}</div>
                                    </Dnd>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        );
    }
}