import React, {Component, PropTypes} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Drag from 'react-draggable'

const propTypes = {
    onStart: PropTypes.func,
    onStop: PropTypes.func,
    DragListClass: PropTypes.string,
    DragItemClass: PropTypes.string,
    list: PropTypes.array
};
const defaultProps = {
    onStart: () => {

    },
    onDrag:()=>{

    },
    onStop: () => {

    },
    list: [],
    clsPrefix: 'u-drag',
    listClass:'u-drag-list',
    listDraggingClass:'u-list-dragging',
    draggingClass:'u-dragging',
    listItemClass:'u-drag-item',
    draggedClass:'u-dragged'
};

class Dnd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.list || []
        };
        this.onStop = this.onStop.bind(this);
        this.getListStyle = this.getListStyle.bind(this);
        this.getItemStyle = this.getItemStyle.bind(this);
        this.reorder = this.reorder.bind(this);
    }

    getListStyle = (isDraggingOver) => isDraggingOver ? this.props.listClass + ' '+this.props.listDraggingClass : this.props.listClass;
    getItemStyle = isDragging => {
        return isDragging ? this.props.listItemClass + ' '+this.props.draggingClass : this.props.listItemClass ;
    };
    reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    onStop(result) {
        if (!result.destination) {
            this.props.onStop(result);
            return;
        }
        const items = this.reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );
        this.setState({
            items
        });
        this.props.onStop(result);
    }

    render() {
        let self = this;
        return (
            <div>
                {
                    self.state.items.length ? (
                        <DragDropContext onDragEnd={this.onStop}  onDragStart={this.props.onStart}>
                            <Droppable droppableId="droppable" >
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef} className={self.getListStyle(snapshot.isDraggingOver)}>
                                        {self.state.items.map((item, index) =>
                                            (
                                                <Draggable
                                                    key={index}
                                                    draggableId={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div className={this.props.clsPrefix}>
                                                            <div
                                                                ref={provided.innerRef}
                                                                className={self.getItemStyle(snapshot.isDragging)}
                                                                style={provided.draggableStyle}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                {item.name || item}
                                                            </div>
                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            )
                                        )}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    ) : (
                        <Drag defaultClassName={this.props.clsPrefix}
                              defaultClassNameDragging={this.props.draggingClass}
                              defaultClassNameDragged={this.props.draggedClass}
                              {...this.props}>
                            {self.props.children}
                        </Drag>
                    )
                }
            </div>


        );
    }
}
Dnd.propTypes = propTypes;
Dnd.defaultProps = defaultProps;
Dnd.Drag = Drag;
export default Dnd;