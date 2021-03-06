"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyMsg = (_temp2 = _class = function (_BaseComponent) {
  _inherits(MyMsg, _BaseComponent);

  function MyMsg() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyMsg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyMsg.__proto__ || Object.getPrototypeOf(MyMsg)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "$compid__20", "$compid__21", "$compid__22", "$compid__23", "$compid__24"], _this.config = {
      navigationBarTitleText: '我的消息'
    }, _this.customComponents = ["AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyMsg, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(MyMsg.prototype.__proto__ || Object.getPrototypeOf(MyMsg.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__20 = (0, _index.genCompid)(__prefix + "$compid__20");
      var $compid__21 = (0, _index.genCompid)(__prefix + "$compid__21");
      var $compid__22 = (0, _index.genCompid)(__prefix + "$compid__22");
      var $compid__23 = (0, _index.genCompid)(__prefix + "$compid__23");
      var $compid__24 = (0, _index.genCompid)(__prefix + "$compid__24");
      var anonymousState__temp = {
        size: 25,
        color: '#78A4FA',
        value: 'message'
      };
      var anonymousState__temp2 = {
        size: 25,
        color: '#FF4949',
        value: 'lightning-bolt'
      };
      var anonymousState__temp3 = {
        size: 25,
        color: '#FF4949',
        value: 'lightning-bolt'
      };
      var anonymousState__temp4 = {
        size: 25,
        color: '#FF4949',
        value: 'lightning-bolt'
      };
      var anonymousState__temp5 = {
        size: 25,
        color: '#FF4949',
        value: 'lightning-bolt'
      };
      _index.propsManager.set({
        "title": "\u65B0\u7684\u6D88\u606F(\u666E\u901A\u6D88\u606F)",
        "note": "\u6240\u957F 2019-07-22",
        "extraText": "\u8BE6\u7EC6\u4FE1\u606F",
        "arrow": "right",
        "iconInfo": anonymousState__temp
      }, $compid__20);
      _index.propsManager.set({
        "title": "\u65B0\u7684\u6D88\u606F(\u9605\u540E\u5373\u711A)",
        "note": "\u6240\u957F 2019-07-22",
        "extraText": "\u8BE6\u7EC6\u4FE1\u606F",
        "arrow": "right",
        "iconInfo": anonymousState__temp2
      }, $compid__21);
      _index.propsManager.set({
        "title": "\u65B0\u7684\u6D88\u606F(\u9605\u540E\u5373\u711A)",
        "note": "\u6240\u957F 2019-07-22",
        "extraText": "\u8BE6\u7EC6\u4FE1\u606F",
        "arrow": "right",
        "iconInfo": anonymousState__temp3
      }, $compid__22);
      _index.propsManager.set({
        "title": "\u65B0\u7684\u6D88\u606F(\u9605\u540E\u5373\u711A)",
        "note": "\u6240\u957F 2019-07-22",
        "extraText": "\u8BE6\u7EC6\u4FE1\u606F",
        "arrow": "right",
        "iconInfo": anonymousState__temp4
      }, $compid__23);
      _index.propsManager.set({
        "title": "\u65B0\u7684\u6D88\u606F(\u9605\u540E\u5373\u711A)",
        "note": "\u6240\u957F 2019-07-22",
        "extraText": "\u8BE6\u7EC6\u4FE1\u606F",
        "arrow": "right",
        "iconInfo": anonymousState__temp5
      }, $compid__24);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        $compid__20: $compid__20,
        $compid__21: $compid__21,
        $compid__22: $compid__22,
        $compid__23: $compid__23,
        $compid__24: $compid__24
      });
      return this.__state;
    }
  }]);

  return MyMsg;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/msg/myMsg", _temp2);
exports.default = MyMsg;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(MyMsg, true));