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

var Questionnaire = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Questionnaire, _BaseComponent);

  function Questionnaire() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Questionnaire);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Questionnaire.__proto__ || Object.getPrototypeOf(Questionnaire)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__29", "$compid__30", "$compid__31", "$compid__32", "$compid__33"], _this.config = {
      navigationBarTitleText: 'questionnaire'
    }, _this.customComponents = ["AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Questionnaire, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Questionnaire.prototype.__proto__ || Object.getPrototypeOf(Questionnaire.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "toPage1",
    value: function toPage1() {
      if (_index2.default.getEnv() == _index2.default.ENV_TYPE.WEB) {
        _index2.default.navigateTo({
          url: '/pages/circle/circle'
        });
      } else {
        _index2.default.switchTab({
          url: '/pages/circle/circle'
        });
      }
    }
  }, {
    key: "toPage2",
    value: function toPage2() {
      _index2.default.navigateTo({ url: '/pages/questionnaire/satisfaction' });
    }
  }, {
    key: "toPage3",
    value: function toPage3() {
      _index2.default.navigateTo({ url: '/pages/questionnaire/triedFeeling' });
    }
  }, {
    key: "toPage4",
    value: function toPage4() {
      if (_index2.default.getEnv() == _index2.default.ENV_TYPE.WEB) {
        _index2.default.navigateTo({
          url: '/pages/user/user'
        });
      } else {
        _index2.default.switchTab({
          url: '/pages/user/user'
        });
      }
    }
  }, {
    key: "toPage5",
    value: function toPage5() {
      _index2.default.navigateTo({ url: '/pages/questionnaire/careerAnchor' });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__29 = (0, _index.genCompid)(__prefix + "$compid__29");
      var $compid__30 = (0, _index.genCompid)(__prefix + "$compid__30");
      var $compid__31 = (0, _index.genCompid)(__prefix + "$compid__31");
      var $compid__32 = (0, _index.genCompid)(__prefix + "$compid__32");
      var $compid__33 = (0, _index.genCompid)(__prefix + "$compid__33");
      _index.propsManager.set({
        "onClick": this.toPage1
      }, $compid__29);
      _index.propsManager.set({
        "onClick": this.toPage2
      }, $compid__30);
      _index.propsManager.set({
        "onClick": this.toPage3
      }, $compid__31);
      _index.propsManager.set({
        "onClick": this.toPage5
      }, $compid__32);
      _index.propsManager.set({
        "onClick": this.toPage4
      }, $compid__33);
      Object.assign(this.__state, {
        $compid__29: $compid__29,
        $compid__30: $compid__30,
        $compid__31: $compid__31,
        $compid__32: $compid__32,
        $compid__33: $compid__33
      });
      return this.__state;
    }
  }]);

  return Questionnaire;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/statistic/questionnaire", _temp2);
exports.default = Questionnaire;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Questionnaire, true));