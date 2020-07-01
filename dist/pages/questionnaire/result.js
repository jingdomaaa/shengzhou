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

var Result = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Result, _BaseComponent);

  function Result() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Result);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Result.__proto__ || Object.getPrototypeOf(Result)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__167", "$compid__168"], _this.config = {
      navigationBarTitleText: '结果'
    }, _this.customComponents = ["Dialog", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Result, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Result.prototype.__proto__ || Object.getPrototypeOf(Result.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "toPage",
    value: function toPage() {
      //跳转问卷页面
      _index2.default.navigateTo({ url: '/pages/statistic/questionnaire' });
    }
  }, {
    key: "btnCancel",
    value: function btnCancel() {
      this.props.onCloseResult && this.props.onCloseResult();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__167 = (0, _index.genCompid)(__prefix + "$compid__167");
      var $compid__168 = (0, _index.genCompid)(__prefix + "$compid__168");
      _index.propsManager.set({
        "onClick": this.btnCancel.bind(this),
        "className": "btn-ok"
      }, $compid__167);
      _index.propsManager.set({
        "onClick": this.toPage,
        "className": "btn-back"
      }, $compid__168);
      Object.assign(this.__state, {
        $compid__167: $compid__167,
        $compid__168: $compid__168
      });
      return this.__state;
    }
  }]);

  return Result;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/questionnaire/result", _temp2);
exports.default = Result;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Result));