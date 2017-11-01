'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    onDragStart: _propTypes2["default"].func,
    onDragEnd: _propTypes2["default"].func,
    onDragingClass: _propTypes2["default"].string
};
var defaultProps = {
    onDragStart: function onDragStart() {
        console.log('drag 开始');
    },
    onDragEnd: function onDragEnd() {
        console.log('drag 结束');
    },
    onDragingClass: 'bee-draging'
};

var getItems = function getItems(count) {
    return Array.from({ length: count }, function (v, k) {
        return k;
    }).map(function (k) {
        return {
            id: 'item-' + k,
            content: 'item ' + k
        };
    });
};

// a little function to help us with reordering the result
var reorder = function reorder(list, startIndex, endIndex) {
    var result = Array.from(list);

    var _result$splice = result.splice(startIndex, 1),
        _result$splice2 = _slicedToArray(_result$splice, 1),
        removed = _result$splice2[0];

    result.splice(endIndex, 0, removed);
    return result;
};

// using some little inline style helpers to make the app look okay
var grid = 8;
var getItemStyle = function getItemStyle(draggableStyle, isDragging) {
    return _extends({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        marginBottom: grid,
        color: 'red',
        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'grey'
    }, draggableStyle);
};
var getListStyle = function getListStyle(isDraggingOver) {
    return {
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: grid,
        width: 250
    };
};

var DndText = function (_Component) {
    _inherits(DndText, _Component);

    function DndText(props) {
        _classCallCheck(this, DndText);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onDragEnd = function (result) {
            if (!result.destination) {
                return;
            }
            var items = reorder(_this.state.items, result.source.index, result.destination.index);
            _this.setState({
                items: items
            });
        };

        _this.state = {
            items: getItems(10)
        };
        return _this;
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    DndText.prototype.render = function render() {
        var _this2 = this;

        return _react2["default"].createElement(
            _reactBeautifulDnd.DragDropContext,
            { onDragEnd: this.onDragEnd },
            _react2["default"].createElement(
                _reactBeautifulDnd.Droppable,
                { droppableId: 'droppable' },
                function (provided, snapshot) {
                    return _react2["default"].createElement(
                        'div',
                        {
                            ref: provided.innerRef,
                            style: getListStyle(snapshot.isDraggingOver)
                        },
                        _this2.state.items.map(function (item) {
                            return _react2["default"].createElement(
                                _reactBeautifulDnd.Draggable,
                                {
                                    key: item.id,
                                    draggableId: item.id
                                },
                                function (provided, snapshot) {
                                    return _react2["default"].createElement(
                                        'div',
                                        { className: 'dragTrue' },
                                        _react2["default"].createElement(
                                            'div',
                                            _extends({
                                                ref: provided.innerRef,
                                                style: getItemStyle(provided.draggableStyle, snapshot.isDragging)
                                            }, provided.dragHandleProps),
                                            item.content
                                        ),
                                        provided.placeholder
                                    );
                                }
                            );
                        })
                    );
                }
            )
        );
    };

    return DndText;
}(_react.Component);

DndText.propTypes = propTypes;
DndText.defaultProps = defaultProps;
exports["default"] = DndText;
module.exports = exports['default'];