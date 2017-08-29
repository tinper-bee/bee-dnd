'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    onStart: _react.PropTypes.func,
    onStop: _react.PropTypes.func,
    DragListClass: _react.PropTypes.string,
    DragItemClass: _react.PropTypes.string,
    list: _react.PropTypes.array
};
var defaultProps = {
    onStart: function onStart() {},
    onDrag: function onDrag() {},
    onStop: function onStop() {},
    list: [],
    clsPrefix: 'u-drag'
};

var Dnd = function (_Component) {
    _inherits(Dnd, _Component);

    function Dnd(props) {
        _classCallCheck(this, Dnd);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.getListStyle = function (isDraggingOver) {
            return isDraggingOver ? _this.props.clsPrefix + '-list dragging' : _this.props.clsPrefix + '-list';
        };

        _this.getItemStyle = function (isDragging) {
            return isDragging ? _this.props.clsPrefix + '-item dragging' : _this.props.clsPrefix + '-item';
        };

        _this.reorder = function (list, startIndex, endIndex) {
            var result = Array.from(list);

            var _result$splice = result.splice(startIndex, 1),
                _result$splice2 = _slicedToArray(_result$splice, 1),
                removed = _result$splice2[0];

            result.splice(endIndex, 0, removed);
            return result;
        };

        _this.state = {
            items: _this.props.list || []
        };
        _this.onStop = _this.onStop.bind(_this);
        _this.getListStyle = _this.getListStyle.bind(_this);
        _this.getItemStyle = _this.getItemStyle.bind(_this);
        _this.reorder = _this.reorder.bind(_this);
        return _this;
    }

    Dnd.prototype.onStop = function onStop(result) {
        if (!result.destination) {
            this.props.onStop(result);
            return;
        }
        var items = this.reorder(this.state.items, result.source.index, result.destination.index);
        this.setState({
            items: items
        });
        this.props.onStop(result);
    };

    Dnd.prototype.render = function render() {
        var self = this;
        return _react2["default"].createElement(
            'div',
            null,
            self.state.items.length ? _react2["default"].createElement(
                _reactBeautifulDnd.DragDropContext,
                { onDragEnd: this.onStop, onDragStart: this.props.onStart },
                _react2["default"].createElement(
                    _reactBeautifulDnd.Droppable,
                    { droppableId: 'droppable' },
                    function (provided, snapshot) {
                        return _react2["default"].createElement(
                            'div',
                            { ref: provided.innerRef, className: self.getListStyle(snapshot.isDraggingOver) },
                            self.state.items.map(function (item, index) {
                                return _react2["default"].createElement(
                                    _reactBeautifulDnd.Draggable,
                                    {
                                        key: index,
                                        draggableId: index
                                    },
                                    function (provided, snapshot) {
                                        return _react2["default"].createElement(
                                            'div',
                                            { className: 'u-drag' },
                                            _react2["default"].createElement(
                                                'div',
                                                _extends({
                                                    ref: provided.innerRef,
                                                    className: self.getItemStyle(snapshot.isDragging),
                                                    style: provided.draggableStyle
                                                }, provided.dragHandleProps),
                                                item.name || item
                                            ),
                                            provided.placeholder
                                        );
                                    }
                                );
                            })
                        );
                    }
                )
            ) : _react2["default"].createElement(
                _reactDraggable2["default"],
                _extends({ defaultClassName: this.props.clsPrefix,
                    defaultClassNameDragging: ' u-dragging',
                    defaultClassNameDragged: ' u-dragged'
                }, this.props),
                self.props.children
            )
        );
    };

    return Dnd;
}(_react.Component);

Dnd.propTypes = propTypes;
Dnd.defaultProps = defaultProps;
Dnd.Drag = _reactDraggable2["default"];
exports["default"] = Dnd;
module.exports = exports['default'];