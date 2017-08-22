import React, {Component, PropTypes} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const propTypes = {
    onDragStart:PropTypes.func,
    onDragEnd:PropTypes.func,
    DragListClass:PropTypes.string,
    DragItemClass:PropTypes.string,
    list:PropTypes.array
};
const defaultProps = {
    onDragStart:()=>{

    },
    onDragEnd:()=>{

    },
    list:[]
};


// a little function to help us with reordering the result
const reorder =  (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

// using some little inline style helpers to make the app look okay
const getItemStyle = isDragging => {
    return isDragging ? 'bee-drag-item draging' : 'bee-drag-item';
};
const getListStyle = (isDraggingOver) => isDraggingOver ? 'bee-drag-list draging':'bee-drag-list';

class Dnd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.list||[]
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd (result) {
            if(!result.destination) {
            this.props.onDragEnd();
            return;
        }
        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );
        this.setState({
            items
        });
        this.props.onDragEnd(result);
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        let self=this;
        let list=()=>{
            let list=[];
            if(self.state.items.length){
                self.state.items.map((item,index)=>{
                    list.push(
                        <Draggable
                            key={index}
                            draggableId={index}
                        >
                            {(provided, snapshot) => (
                                <div className="dragTrue">
                                    <div
                                        ref={provided.innerRef}
                                        className={getItemStyle(snapshot.isDragging)}
                                        style={provided.draggableStyle}
                                        {...provided.dragHandleProps}
                                    >
                                        {item.name||item}
                                    </div>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Draggable>
                    )
                })
            }else{
                list.push(<Draggable
                    key='key'
                    draggableId='id'
                >
                    {(provided, snapshot) => (
                        <div className="dragTrue">
                            <div
                                ref={provided.innerRef}
                                className={getItemStyle(snapshot.isDragging)}
                                style={provided.draggableStyle}
                                {...provided.dragHandleProps}
                            >
                                {self.props.children}
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Draggable>);
            }
            return list;
        };
        return (
            <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.props.onDragStart}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} className={getListStyle(snapshot.isDraggingOver)}>
                            {list()}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}
Dnd.propTypes = propTypes;
Dnd.defaultProps = defaultProps;
export default Dnd;