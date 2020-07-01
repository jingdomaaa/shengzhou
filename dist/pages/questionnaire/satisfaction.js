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

var Satisfaction = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Satisfaction, _Taro$Component);

  function Satisfaction() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Satisfaction);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Satisfaction.__proto__ || Object.getPrototypeOf(Satisfaction)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__34", "$compid__35", "$compid__36", "$compid__37", "$compid__38", "$compid__39", "$compid__40", "$compid__41", "$compid__42", "$compid__43", "$compid__44", "$compid__45", "$compid__46", "options1", "value1", "value2", "value3", "value4", "value5", "value6"], _this.config = {
      navigationBarTitleText: '满意度问卷调查表'
    }, _this.customComponents = ["AtCard", "AtRadio", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Satisfaction, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Satisfaction.prototype.__proto__ || Object.getPrototypeOf(Satisfaction.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        options1: [{ label: '非常不同意', value: 'option1' }, { label: '不同意', value: 'option2' }, { label: '不确定或一般', value: 'option3' }, { label: '满意', value: 'option4' }, { label: '非常满意', value: 'option5' }],
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: ''
      };
      this.$$refs = [];
    }
  }, {
    key: "handleChange1",
    value: function handleChange1(value) {
      this.setState({
        value1: value
      });
    }
  }, {
    key: "handleChange2",
    value: function handleChange2(value) {
      this.setState({
        value2: value
      });
    }
  }, {
    key: "handleChange3",
    value: function handleChange3(value) {
      this.setState({
        value3: value
      });
    }
  }, {
    key: "handleChange4",
    value: function handleChange4(value) {
      this.setState({
        value4: value
      });
    }
  }, {
    key: "handleChange5",
    value: function handleChange5(value) {
      this.setState({
        value5: value
      });
    }
  }, {
    key: "handleChange6",
    value: function handleChange6(value) {
      this.setState({
        value6: value
      });
    }
  }, {
    key: "toPage",
    value: function toPage() {
      _index2.default.navigateTo({ url: '/pages/statistic/questionnaire' });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__34 = (0, _index.genCompid)(__prefix + "$compid__34");
      var $compid__35 = (0, _index.genCompid)(__prefix + "$compid__35");
      var $compid__36 = (0, _index.genCompid)(__prefix + "$compid__36");
      var $compid__37 = (0, _index.genCompid)(__prefix + "$compid__37");
      var $compid__38 = (0, _index.genCompid)(__prefix + "$compid__38");
      var $compid__39 = (0, _index.genCompid)(__prefix + "$compid__39");
      var $compid__40 = (0, _index.genCompid)(__prefix + "$compid__40");
      var $compid__41 = (0, _index.genCompid)(__prefix + "$compid__41");
      var $compid__42 = (0, _index.genCompid)(__prefix + "$compid__42");
      var $compid__43 = (0, _index.genCompid)(__prefix + "$compid__43");
      var $compid__44 = (0, _index.genCompid)(__prefix + "$compid__44");
      var $compid__45 = (0, _index.genCompid)(__prefix + "$compid__45");
      var $compid__46 = (0, _index.genCompid)(__prefix + "$compid__46");
      _index.propsManager.set({
        "title": "1.\u6211\u7684\u5DE5\u4F5C\u6709\u610F\u4E49"
      }, $compid__34);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value1,
        "onClick": this.handleChange1.bind(this)
      }, $compid__35);
      _index.propsManager.set({
        "title": "2.\u6211\u5BF9\u6211\u7684\u4E0A\u7EA7\u6EE1\u610F"
      }, $compid__36);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value2,
        "onClick": this.handleChange2.bind(this)
      }, $compid__37);
      _index.propsManager.set({
        "title": "3.\u6211\u5BF9\u6211\u7684\u540C\u4E8B\uFF08\u5E73\u7EA7\uFF09\u6EE1\u610F"
      }, $compid__38);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value3,
        "onClick": this.handleChange3.bind(this)
      }, $compid__39);
      _index.propsManager.set({
        "title": "4.\u6211\u5BF9\u5DE5\u4F5C\u6536\u5165\u6EE1\u610F"
      }, $compid__40);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value4,
        "onClick": this.handleChange4.bind(this)
      }, $compid__41);
      _index.propsManager.set({
        "title": "5.\u6211\u6709\u5DE5\u4F5C\u664B\u5347\u673A\u4F1A"
      }, $compid__42);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value5,
        "onClick": this.handleChange5.bind(this)
      }, $compid__43);
      _index.propsManager.set({
        "title": "6.\u7EFC\u5408\u800C\u8A00\uFF0C\u6211\u5BF9\u6211\u73B0\u5728\u7684\u5DE5\u4F5C\u60C5\u51B5\u6EE1\u610F"
      }, $compid__44);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value6,
        "onClick": this.handleChange6.bind(this)
      }, $compid__45);
      _index.propsManager.set({
        "onClick": this.toPage
      }, $compid__46);
      Object.assign(this.__state, {
        $compid__34: $compid__34,
        $compid__35: $compid__35,
        $compid__36: $compid__36,
        $compid__37: $compid__37,
        $compid__38: $compid__38,
        $compid__39: $compid__39,
        $compid__40: $compid__40,
        $compid__41: $compid__41,
        $compid__42: $compid__42,
        $compid__43: $compid__43,
        $compid__44: $compid__44,
        $compid__45: $compid__45,
        $compid__46: $compid__46
      });
      return this.__state;
    }
  }]);

  return Satisfaction;
}(_index2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/questionnaire/satisfaction", _temp2);
exports.default = Satisfaction;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Satisfaction, true));