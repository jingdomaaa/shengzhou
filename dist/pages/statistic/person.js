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

var Template = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Template, _BaseComponent);

  function Template() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Template);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Template.__proto__ || Object.getPrototypeOf(Template)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__25", "$compid__26", "$compid__27", "$compid__28"], _this.config = {
      navigationBarTitleText: 'person'
    }, _this.refMoveChart = function (node) {
      return _this.moveChart = node;
    }, _this.refLineChart = function (node) {
      return _this.lineChart = node;
    }, _this.customComponents = ["AtAvatar", "AtDivider", "AtTag", "MoveChart", "LineChart"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Template, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Template.prototype.__proto__ || Object.getPrototypeOf(Template.prototype), "_constructor", this).call(this, props);

      this.$$refs = [{
        type: "component",
        id: "LOQlH",
        refName: "",
        fn: this.refMoveChart
      }, {
        type: "component",
        id: "cPUTe",
        refName: "",
        fn: this.refLineChart
      }];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var chartData1 = {
        dimensions: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        measures: [{
          data: [10, 52, 200, 334, 390, 330, 220, 334, 390, 330, 220, 10, 52, 200]
        }]
      };
      var chartData2 = {
        dimensions: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        measures: [{
          data: [10, 520, 20, 33, 390, 83, 62, 33, 99, 33, 22, 100, 520, 200]
        }]
      };
      this.moveChart.refresh(chartData1);
      this.lineChart.refresh(chartData2);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__25 = (0, _index.genCompid)(__prefix + "$compid__25");
      var $compid__26 = (0, _index.genCompid)(__prefix + "$compid__26");
      var $compid__27 = (0, _index.genCompid)(__prefix + "$compid__27");
      var $compid__28 = (0, _index.genCompid)(__prefix + "$compid__28");
      _index.propsManager.set({
        "text": "\u51F9\u51F8\u5B9E\u9A8C\u5BA4",
        "size": "large"
      }, $compid__25);
      _index.propsManager.set({
        "content": "",
        "lineColor": "#006569"
      }, $compid__26);
      _index.propsManager.set({
        "content": "",
        "lineColor": "#006569"
      }, $compid__27);
      _index.propsManager.set({
        "content": "",
        "lineColor": "#006569"
      }, $compid__28);
      Object.assign(this.__state, {
        $compid__25: $compid__25,
        $compid__26: $compid__26,
        $compid__27: $compid__27,
        $compid__28: $compid__28
      });
      return this.__state;
    }
  }]);

  return Template;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/statistic/person", _temp2);
exports.default = Template;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Template, true));