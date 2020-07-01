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

var TriedFeeling = (_temp2 = _class = function (_Taro$Component) {
  _inherits(TriedFeeling, _Taro$Component);

  function TriedFeeling() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TriedFeeling);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TriedFeeling.__proto__ || Object.getPrototypeOf(TriedFeeling)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__47", "$compid__48", "$compid__49", "$compid__50", "$compid__51", "$compid__52", "$compid__53", "$compid__54", "$compid__55", "$compid__56", "$compid__57", "$compid__58", "$compid__59", "$compid__60", "$compid__61", "$compid__62", "$compid__63", "$compid__64", "$compid__65", "$compid__66", "$compid__67", "$compid__68", "$compid__69", "$compid__70", "$compid__71", "$compid__72", "$compid__73", "$compid__74", "$compid__75", "$compid__76", "$compid__77", "options1", "value1", "value2", "value3", "value4", "value5", "value6", "value7", "value8", "value9", "value10", "value11", "value12", "value13", "value14", "value15"], _this.config = {
      navigationBarTitleText: '职业倦怠感问卷表'
    }, _this.customComponents = ["AtCard", "AtRadio", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TriedFeeling, [{
    key: "_constructor",
    value: function _constructor() {
      _get(TriedFeeling.prototype.__proto__ || Object.getPrototypeOf(TriedFeeling.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        options1: [{ label: '从不', value: 'option1' }, { label: '极少一年几次或更少', value: 'option2' }, { label: '偶尔一个月一次或者更少', value: 'option3' }, { label: '经常一个月几次', value: 'option4' }, { label: '频繁每星期一次', value: 'option5' }, { label: '非常频繁一星期几次', value: 'option6' }, { label: '每天', value: 'option7' }],
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: '',
        value14: '',
        value15: ''
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
    key: "handleChange7",
    value: function handleChange7(value) {
      this.setState({
        value7: value
      });
    }
  }, {
    key: "handleChange8",
    value: function handleChange8(value) {
      this.setState({
        value8: value
      });
    }
  }, {
    key: "handleChange9",
    value: function handleChange9(value) {
      this.setState({
        value9: value
      });
    }
  }, {
    key: "handleChange10",
    value: function handleChange10(value) {
      this.setState({
        value10: value
      });
    }
  }, {
    key: "handleChange11",
    value: function handleChange11(value) {
      this.setState({
        value11: value
      });
    }
  }, {
    key: "handleChange12",
    value: function handleChange12(value) {
      this.setState({
        value12: value
      });
    }
  }, {
    key: "handleChange13",
    value: function handleChange13(value) {
      this.setState({
        value13: value
      });
    }
  }, {
    key: "handleChange14",
    value: function handleChange14(value) {
      this.setState({
        value14: value
      });
    }
  }, {
    key: "handleChange15",
    value: function handleChange15(value) {
      this.setState({
        value15: value
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
      var $compid__47 = (0, _index.genCompid)(__prefix + "$compid__47");
      var $compid__48 = (0, _index.genCompid)(__prefix + "$compid__48");
      var $compid__49 = (0, _index.genCompid)(__prefix + "$compid__49");
      var $compid__50 = (0, _index.genCompid)(__prefix + "$compid__50");
      var $compid__51 = (0, _index.genCompid)(__prefix + "$compid__51");
      var $compid__52 = (0, _index.genCompid)(__prefix + "$compid__52");
      var $compid__53 = (0, _index.genCompid)(__prefix + "$compid__53");
      var $compid__54 = (0, _index.genCompid)(__prefix + "$compid__54");
      var $compid__55 = (0, _index.genCompid)(__prefix + "$compid__55");
      var $compid__56 = (0, _index.genCompid)(__prefix + "$compid__56");
      var $compid__57 = (0, _index.genCompid)(__prefix + "$compid__57");
      var $compid__58 = (0, _index.genCompid)(__prefix + "$compid__58");
      var $compid__59 = (0, _index.genCompid)(__prefix + "$compid__59");
      var $compid__60 = (0, _index.genCompid)(__prefix + "$compid__60");
      var $compid__61 = (0, _index.genCompid)(__prefix + "$compid__61");
      var $compid__62 = (0, _index.genCompid)(__prefix + "$compid__62");
      var $compid__63 = (0, _index.genCompid)(__prefix + "$compid__63");
      var $compid__64 = (0, _index.genCompid)(__prefix + "$compid__64");
      var $compid__65 = (0, _index.genCompid)(__prefix + "$compid__65");
      var $compid__66 = (0, _index.genCompid)(__prefix + "$compid__66");
      var $compid__67 = (0, _index.genCompid)(__prefix + "$compid__67");
      var $compid__68 = (0, _index.genCompid)(__prefix + "$compid__68");
      var $compid__69 = (0, _index.genCompid)(__prefix + "$compid__69");
      var $compid__70 = (0, _index.genCompid)(__prefix + "$compid__70");
      var $compid__71 = (0, _index.genCompid)(__prefix + "$compid__71");
      var $compid__72 = (0, _index.genCompid)(__prefix + "$compid__72");
      var $compid__73 = (0, _index.genCompid)(__prefix + "$compid__73");
      var $compid__74 = (0, _index.genCompid)(__prefix + "$compid__74");
      var $compid__75 = (0, _index.genCompid)(__prefix + "$compid__75");
      var $compid__76 = (0, _index.genCompid)(__prefix + "$compid__76");
      var $compid__77 = (0, _index.genCompid)(__prefix + "$compid__77");
      _index.propsManager.set({
        "title": "1.\u5DE5\u4F5C\u8BA9\u6211\u611F\u89C9\u8EAB\u5FC3\u4FF1\u60EB"
      }, $compid__47);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value1,
        "onClick": this.handleChange1.bind(this)
      }, $compid__48);
      _index.propsManager.set({
        "title": "2.\u4E0B\u73ED\u7684\u65F6\u5019\u6211\u611F\u89C9\u7CBE\u75B2\u529B\u7AED"
      }, $compid__49);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value2,
        "onClick": this.handleChange2.bind(this)
      }, $compid__50);
      _index.propsManager.set({
        "title": "3.\u65E9\u6668\u8D77\u5E8A\u4E0D\u5F97\u4E0D\u53BB\u9762\u5BF9\u4E00\u5929\u7684\u5DE5\u4F5C\u65F6\uFF0C\u6211\u611F\u89C9\u975E\u5E38\u7D2F"
      }, $compid__51);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value3,
        "onClick": this.handleChange3.bind(this)
      }, $compid__52);
      _index.propsManager.set({
        "title": "4.\u6574\u5929\u5DE5\u4F5C\u5BF9\u6211\u6765\u8BF4\u786E\u5B9E\u538B\u529B\u5F88\u5927"
      }, $compid__53);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value4,
        "onClick": this.handleChange4.bind(this)
      }, $compid__54);
      _index.propsManager.set({
        "title": "5.\u5DE5\u4F5C\u8BA9\u6211\u6709\u5FEB\u8981\u5D29\u6E83\u7684\u611F\u89C9"
      }, $compid__55);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value5,
        "onClick": this.handleChange5.bind(this)
      }, $compid__56);
      _index.propsManager.set({
        "title": "6.\u81EA\u4ECE\u5F00\u59CB\u5E72\u8FD9\u4EFD\u5DE5\u4F5C\uFF0C\u6211\u5BF9\u5DE5\u4F5C\u8D8A\u6765\u8D8A\u4E0D\u611F\u5174\u8DA3"
      }, $compid__57);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value6,
        "onClick": this.handleChange6.bind(this)
      }, $compid__58);
      _index.propsManager.set({
        "title": "7.\u6211\u5BF9\u5DE5\u4F5C\u4E0D\u50CF\u4EE5\u524D\u90A3\u6837\u70ED\u5FC3\u4E86"
      }, $compid__59);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value7,
        "onClick": this.handleChange7.bind(this)
      }, $compid__60);
      _index.propsManager.set({
        "title": "8.\u6211\u6000\u7591\u81EA\u5DF1\u6240\u505A\u5DE5\u4F5C\u7684\u610F\u4E49"
      }, $compid__61);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value8,
        "onClick": this.handleChange8.bind(this)
      }, $compid__62);
      _index.propsManager.set({
        "title": "9.\u6211\u5BF9\u81EA\u5DF1\u6240\u505A\u5DE5\u4F5C\u662F\u5426\u6709\u8D21\u732E\u8D8A\u6765\u8D8A\u4E0D\u5173\u5FC3"
      }, $compid__63);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value9,
        "onClick": this.handleChange9.bind(this)
      }, $compid__64);
      _index.propsManager.set({
        "title": "10.\u6211\u80FD\u6709\u6548\u5730\u89E3\u51B3\u5DE5\u4F5C\u4E2D\u51FA\u73B0\u7684\u95EE\u9898"
      }, $compid__65);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value10,
        "onClick": this.handleChange10.bind(this)
      }, $compid__66);
      _index.propsManager.set({
        "title": "11.\u6211\u89C9\u5F97\u6211\u5728\u4E3A\u516C\u53F8\u4F5C\u6709\u7528\u7684\u8D21\u732E"
      }, $compid__67);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value11,
        "onClick": this.handleChange11.bind(this)
      }, $compid__68);
      _index.propsManager.set({
        "title": "12.\u5728\u6211\u770B\u6765\uFF0C\u6211\u64C5\u957F\u4E8E\u81EA\u5DF1\u7684\u5DE5\u4F5C"
      }, $compid__69);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value12,
        "onClick": this.handleChange12.bind(this)
      }, $compid__70);
      _index.propsManager.set({
        "title": "13.\u5F53\u5B8C\u6210\u5DE5\u4F5C\u4E0A\u7684\u4E00\u4E9B\u4E8B\u60C5\u65F6\uFF0C\u6211\u611F\u5230\u975E\u5E38\u9AD8\u5174"
      }, $compid__71);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value13,
        "onClick": this.handleChange13.bind(this)
      }, $compid__72);
      _index.propsManager.set({
        "title": "14.\u6211\u5B8C\u6210\u4E86\u5F88\u591A\u6709\u4EF7\u503C\u7684\u5DE5\u4F5C"
      }, $compid__73);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value14,
        "onClick": this.handleChange14.bind(this)
      }, $compid__74);
      _index.propsManager.set({
        "title": "15.\u6211\u81EA\u4FE1\u81EA\u5DF1\u80FD\u6709\u6548\u5730\u5B8C\u6210\u5404\u9879\u5DE5\u4F5C"
      }, $compid__75);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value15,
        "onClick": this.handleChange15.bind(this)
      }, $compid__76);
      _index.propsManager.set({
        "onClick": this.toPage
      }, $compid__77);
      Object.assign(this.__state, {
        $compid__47: $compid__47,
        $compid__48: $compid__48,
        $compid__49: $compid__49,
        $compid__50: $compid__50,
        $compid__51: $compid__51,
        $compid__52: $compid__52,
        $compid__53: $compid__53,
        $compid__54: $compid__54,
        $compid__55: $compid__55,
        $compid__56: $compid__56,
        $compid__57: $compid__57,
        $compid__58: $compid__58,
        $compid__59: $compid__59,
        $compid__60: $compid__60,
        $compid__61: $compid__61,
        $compid__62: $compid__62,
        $compid__63: $compid__63,
        $compid__64: $compid__64,
        $compid__65: $compid__65,
        $compid__66: $compid__66,
        $compid__67: $compid__67,
        $compid__68: $compid__68,
        $compid__69: $compid__69,
        $compid__70: $compid__70,
        $compid__71: $compid__71,
        $compid__72: $compid__72,
        $compid__73: $compid__73,
        $compid__74: $compid__74,
        $compid__75: $compid__75,
        $compid__76: $compid__76,
        $compid__77: $compid__77
      });
      return this.__state;
    }
  }]);

  return TriedFeeling;
}(_index2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/questionnaire/triedFeeling", _temp2);
exports.default = TriedFeeling;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(TriedFeeling, true));