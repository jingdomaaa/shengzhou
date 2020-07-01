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

var CareerAnchor = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CareerAnchor, _BaseComponent);

  function CareerAnchor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CareerAnchor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CareerAnchor.__proto__ || Object.getPrototypeOf(CareerAnchor)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__78", "$compid__79", "$compid__80", "$compid__81", "$compid__82", "$compid__83", "$compid__84", "$compid__85", "$compid__86", "$compid__87", "$compid__88", "$compid__89", "$compid__90", "$compid__91", "$compid__92", "$compid__93", "$compid__94", "$compid__95", "$compid__96", "$compid__97", "$compid__98", "$compid__99", "$compid__100", "$compid__101", "$compid__102", "$compid__103", "$compid__104", "$compid__105", "$compid__106", "$compid__107", "$compid__108", "$compid__109", "$compid__110", "$compid__111", "$compid__112", "$compid__113", "$compid__114", "$compid__115", "$compid__116", "$compid__117", "$compid__118", "$compid__119", "$compid__120", "$compid__121", "$compid__122", "$compid__123", "$compid__124", "$compid__125", "$compid__126", "$compid__127", "$compid__128", "$compid__129", "$compid__130", "$compid__131", "$compid__132", "$compid__133", "$compid__134", "$compid__135", "$compid__136", "$compid__137", "$compid__138", "$compid__139", "$compid__140", "$compid__141", "$compid__142", "$compid__143", "$compid__144", "$compid__145", "$compid__146", "$compid__147", "$compid__148", "$compid__149", "$compid__150", "$compid__151", "$compid__152", "$compid__153", "$compid__154", "$compid__155", "$compid__156", "$compid__157", "$compid__158", "showResultModel", "options1", "value1", "value2", "value3", "value4", "value5", "value6", "value7", "value8", "value9", "value10", "value11", "value12", "value13", "value14", "value15", "value16", "value17", "value18", "value19", "value20", "value21", "value22", "value23", "value24", "value25", "value26", "value27", "value28", "value29", "value30", "value31", "value32", "value33", "value34", "value35", "value36", "value37", "value38", "value39", "value40"], _this.config = {
      navigationBarTitleText: '职业锚测试表'
    }, _this.customComponents = ["AtCard", "AtRadio", "AtButton", "Result"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CareerAnchor, [{
    key: "_constructor",
    value: function _constructor() {
      _get(CareerAnchor.prototype.__proto__ || Object.getPrototypeOf(CareerAnchor.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        showResultModel: false, //显示问题浮层
        options1: [//选项
        { label: '完全不符合我的日常想法', value: 'option1' }, { label: '偶尔这么想', value: 'option2' }, { label: '有时这么想', value: 'option3' }, { label: '经常这么想', value: 'option4' }, { label: '总是这么想', value: 'option5' }, { label: '完全符合我的日常想法', value: 'option6' }],
        value1: '', //题目选项的状态
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
        value15: '',
        value16: '',
        value17: '',
        value18: '',
        value19: '',
        value20: '',
        value21: '',
        value22: '',
        value23: '',
        value24: '',
        value25: '',
        value26: '',
        value27: '',
        value28: '',
        value29: '',
        value30: '',
        value31: '',
        value32: '',
        value33: '',
        value34: '',
        value35: '',
        value36: '',
        value37: '',
        value38: '',
        value39: '',
        value40: ''
      };
      this.$$refs = [];
    }
  }, {
    key: "handleChange1",
    value: function handleChange1(value) {
      //点击时改变选择状态
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
    key: "handleChange16",
    value: function handleChange16(value) {
      this.setState({
        value16: value
      });
    }
  }, {
    key: "handleChange17",
    value: function handleChange17(value) {
      this.setState({
        value17: value
      });
    }
  }, {
    key: "handleChange18",
    value: function handleChange18(value) {
      this.setState({
        value18: value
      });
    }
  }, {
    key: "handleChange19",
    value: function handleChange19(value) {
      this.setState({
        value19: value
      });
    }
  }, {
    key: "handleChange20",
    value: function handleChange20(value) {
      this.setState({
        value20: value
      });
    }
  }, {
    key: "handleChange21",
    value: function handleChange21(value) {
      this.setState({
        value21: value
      });
    }
  }, {
    key: "handleChange22",
    value: function handleChange22(value) {
      this.setState({
        value22: value
      });
    }
  }, {
    key: "handleChange23",
    value: function handleChange23(value) {
      this.setState({
        value23: value
      });
    }
  }, {
    key: "handleChange24",
    value: function handleChange24(value) {
      this.setState({
        value24: value
      });
    }
  }, {
    key: "handleChange25",
    value: function handleChange25(value) {
      this.setState({
        value25: value
      });
    }
  }, {
    key: "handleChange26",
    value: function handleChange26(value) {
      this.setState({
        value26: value
      });
    }
  }, {
    key: "handleChange27",
    value: function handleChange27(value) {
      this.setState({
        value27: value
      });
    }
  }, {
    key: "handleChange28",
    value: function handleChange28(value) {
      this.setState({
        value28: value
      });
    }
  }, {
    key: "handleChange29",
    value: function handleChange29(value) {
      this.setState({
        value29: value
      });
    }
  }, {
    key: "handleChange30",
    value: function handleChange30(value) {
      this.setState({
        value30: value
      });
    }
  }, {
    key: "handleChange31",
    value: function handleChange31(value) {
      this.setState({
        value31: value
      });
    }
  }, {
    key: "handleChange32",
    value: function handleChange32(value) {
      this.setState({
        value32: value
      });
    }
  }, {
    key: "handleChange33",
    value: function handleChange33(value) {
      this.setState({
        value33: value
      });
    }
  }, {
    key: "handleChange34",
    value: function handleChange34(value) {
      this.setState({
        value34: value
      });
    }
  }, {
    key: "handleChange35",
    value: function handleChange35(value) {
      this.setState({
        value35: value
      });
    }
  }, {
    key: "handleChange36",
    value: function handleChange36(value) {
      this.setState({
        value36: value
      });
    }
  }, {
    key: "handleChange37",
    value: function handleChange37(value) {
      this.setState({
        value37: value
      });
    }
  }, {
    key: "handleChange38",
    value: function handleChange38(value) {
      this.setState({
        value38: value
      });
    }
  }, {
    key: "handleChange39",
    value: function handleChange39(value) {
      this.setState({
        value39: value
      });
    }
  }, {
    key: "handleChange40",
    value: function handleChange40(value) {
      this.setState({
        value40: value
      });
    }
  }, {
    key: "toPage",
    value: function toPage() {
      //跳转页面
      _index2.default.navigateTo({ url: '/pages/statistic/questionnaire' });
    }
  }, {
    key: "addQuestion",
    value: function addQuestion() {
      this.setState({
        showResultModel: true
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__78 = (0, _index.genCompid)(__prefix + "$compid__78");
      var $compid__79 = (0, _index.genCompid)(__prefix + "$compid__79");
      var $compid__80 = (0, _index.genCompid)(__prefix + "$compid__80");
      var $compid__81 = (0, _index.genCompid)(__prefix + "$compid__81");
      var $compid__82 = (0, _index.genCompid)(__prefix + "$compid__82");
      var $compid__83 = (0, _index.genCompid)(__prefix + "$compid__83");
      var $compid__84 = (0, _index.genCompid)(__prefix + "$compid__84");
      var $compid__85 = (0, _index.genCompid)(__prefix + "$compid__85");
      var $compid__86 = (0, _index.genCompid)(__prefix + "$compid__86");
      var $compid__87 = (0, _index.genCompid)(__prefix + "$compid__87");
      var $compid__88 = (0, _index.genCompid)(__prefix + "$compid__88");
      var $compid__89 = (0, _index.genCompid)(__prefix + "$compid__89");
      var $compid__90 = (0, _index.genCompid)(__prefix + "$compid__90");
      var $compid__91 = (0, _index.genCompid)(__prefix + "$compid__91");
      var $compid__92 = (0, _index.genCompid)(__prefix + "$compid__92");
      var $compid__93 = (0, _index.genCompid)(__prefix + "$compid__93");
      var $compid__94 = (0, _index.genCompid)(__prefix + "$compid__94");
      var $compid__95 = (0, _index.genCompid)(__prefix + "$compid__95");
      var $compid__96 = (0, _index.genCompid)(__prefix + "$compid__96");
      var $compid__97 = (0, _index.genCompid)(__prefix + "$compid__97");
      var $compid__98 = (0, _index.genCompid)(__prefix + "$compid__98");
      var $compid__99 = (0, _index.genCompid)(__prefix + "$compid__99");
      var $compid__100 = (0, _index.genCompid)(__prefix + "$compid__100");
      var $compid__101 = (0, _index.genCompid)(__prefix + "$compid__101");
      var $compid__102 = (0, _index.genCompid)(__prefix + "$compid__102");
      var $compid__103 = (0, _index.genCompid)(__prefix + "$compid__103");
      var $compid__104 = (0, _index.genCompid)(__prefix + "$compid__104");
      var $compid__105 = (0, _index.genCompid)(__prefix + "$compid__105");
      var $compid__106 = (0, _index.genCompid)(__prefix + "$compid__106");
      var $compid__107 = (0, _index.genCompid)(__prefix + "$compid__107");
      var $compid__108 = (0, _index.genCompid)(__prefix + "$compid__108");
      var $compid__109 = (0, _index.genCompid)(__prefix + "$compid__109");
      var $compid__110 = (0, _index.genCompid)(__prefix + "$compid__110");
      var $compid__111 = (0, _index.genCompid)(__prefix + "$compid__111");
      var $compid__112 = (0, _index.genCompid)(__prefix + "$compid__112");
      var $compid__113 = (0, _index.genCompid)(__prefix + "$compid__113");
      var $compid__114 = (0, _index.genCompid)(__prefix + "$compid__114");
      var $compid__115 = (0, _index.genCompid)(__prefix + "$compid__115");
      var $compid__116 = (0, _index.genCompid)(__prefix + "$compid__116");
      var $compid__117 = (0, _index.genCompid)(__prefix + "$compid__117");
      var $compid__118 = (0, _index.genCompid)(__prefix + "$compid__118");
      var $compid__119 = (0, _index.genCompid)(__prefix + "$compid__119");
      var $compid__120 = (0, _index.genCompid)(__prefix + "$compid__120");
      var $compid__121 = (0, _index.genCompid)(__prefix + "$compid__121");
      var $compid__122 = (0, _index.genCompid)(__prefix + "$compid__122");
      var $compid__123 = (0, _index.genCompid)(__prefix + "$compid__123");
      var $compid__124 = (0, _index.genCompid)(__prefix + "$compid__124");
      var $compid__125 = (0, _index.genCompid)(__prefix + "$compid__125");
      var $compid__126 = (0, _index.genCompid)(__prefix + "$compid__126");
      var $compid__127 = (0, _index.genCompid)(__prefix + "$compid__127");
      var $compid__128 = (0, _index.genCompid)(__prefix + "$compid__128");
      var $compid__129 = (0, _index.genCompid)(__prefix + "$compid__129");
      var $compid__130 = (0, _index.genCompid)(__prefix + "$compid__130");
      var $compid__131 = (0, _index.genCompid)(__prefix + "$compid__131");
      var $compid__132 = (0, _index.genCompid)(__prefix + "$compid__132");
      var $compid__133 = (0, _index.genCompid)(__prefix + "$compid__133");
      var $compid__134 = (0, _index.genCompid)(__prefix + "$compid__134");
      var $compid__135 = (0, _index.genCompid)(__prefix + "$compid__135");
      var $compid__136 = (0, _index.genCompid)(__prefix + "$compid__136");
      var $compid__137 = (0, _index.genCompid)(__prefix + "$compid__137");
      var $compid__138 = (0, _index.genCompid)(__prefix + "$compid__138");
      var $compid__139 = (0, _index.genCompid)(__prefix + "$compid__139");
      var $compid__140 = (0, _index.genCompid)(__prefix + "$compid__140");
      var $compid__141 = (0, _index.genCompid)(__prefix + "$compid__141");
      var $compid__142 = (0, _index.genCompid)(__prefix + "$compid__142");
      var $compid__143 = (0, _index.genCompid)(__prefix + "$compid__143");
      var $compid__144 = (0, _index.genCompid)(__prefix + "$compid__144");
      var $compid__145 = (0, _index.genCompid)(__prefix + "$compid__145");
      var $compid__146 = (0, _index.genCompid)(__prefix + "$compid__146");
      var $compid__147 = (0, _index.genCompid)(__prefix + "$compid__147");
      var $compid__148 = (0, _index.genCompid)(__prefix + "$compid__148");
      var $compid__149 = (0, _index.genCompid)(__prefix + "$compid__149");
      var $compid__150 = (0, _index.genCompid)(__prefix + "$compid__150");
      var $compid__151 = (0, _index.genCompid)(__prefix + "$compid__151");
      var $compid__152 = (0, _index.genCompid)(__prefix + "$compid__152");
      var $compid__153 = (0, _index.genCompid)(__prefix + "$compid__153");
      var $compid__154 = (0, _index.genCompid)(__prefix + "$compid__154");
      var $compid__155 = (0, _index.genCompid)(__prefix + "$compid__155");
      var $compid__156 = (0, _index.genCompid)(__prefix + "$compid__156");
      var $compid__157 = (0, _index.genCompid)(__prefix + "$compid__157");
      var $compid__158 = (0, _index.genCompid)(__prefix + "$compid__158");
      _index.propsManager.set({
        "title": "1.\u6211\u5E0C\u671B\u505A\u6211\u64C5\u957F\u7684\u5DE5\u4F5C\uFF0C\u8FD9\u6837\u6211\u7684\u5185\u884C\u5EFA\u8BAE\u53EF\u4EE5\u4E0D\u65AD\u88AB\u91C7\u7EB3\u3002"
      }, $compid__78);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value1,
        "onClick": this.handleChange1.bind(this)
      }, $compid__79);
      _index.propsManager.set({
        "title": "2.\u5F53\u6211\u6574\u5408\u5E76\u7BA1\u7406\u5176\u4ED6\u4EBA\u7684\u5DE5\u4F5C\u65F6\uFF0C\u6211\u975E\u5E38\u6709\u6210\u5C31\u611F\u3002"
      }, $compid__80);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value2,
        "onClick": this.handleChange2.bind(this)
      }, $compid__81);
      _index.propsManager.set({
        "title": "3.\u6211\u5E0C\u671B\u6211\u7684\u5DE5\u4F5C\u80FD\u8BA9\u6211\u7528\u81EA\u5DF1\u7684\u65B9\u5F0F\uFF0C\u6309\u81EA\u5DF1\u7684\u8BA1\u5212\u53BB\u5F00\u5C55\u3002"
      }, $compid__82);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value3,
        "onClick": this.handleChange3.bind(this)
      }, $compid__83);
      _index.propsManager.set({
        "title": "4.\u5BF9\u6211\u800C\u8A00\uFF0C\u5B89\u5B9A\u4E0E\u7A33\u5B9A\u6BD4\u81EA\u7531\u548C\u81EA\u4E3B\u66F4\u91CD\u8981\u3002"
      }, $compid__84);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value4,
        "onClick": this.handleChange4.bind(this)
      }, $compid__85);
      _index.propsManager.set({
        "title": "5.\u6211\u4E00\u76F4\u5728\u5BFB\u627E\u53EF\u4EE5\u8BA9\u6211\u521B\u7ACB\u81EA\u5DF1\u4E8B\u4E1A\uFF08\u516C\u53F8\uFF09\u7684\u521B\u610F\uFF08\u70B9\u5B50\uFF09\u3002"
      }, $compid__86);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value5,
        "onClick": this.handleChange5.bind(this)
      }, $compid__87);
      _index.propsManager.set({
        "title": "6.\u6211\u8BA4\u4E3A\u53EA\u6709\u5BF9\u793E\u4F1A\u505A\u51FA\u771F\u6B63\u8D21\u732E\u7684\u804C\u4E1A\u624D\u7B97\u662F\u6210\u529F\u7684\u804C\u4E1A\u3002"
      }, $compid__88);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value6,
        "onClick": this.handleChange6.bind(this)
      }, $compid__89);
      _index.propsManager.set({
        "title": "7.\u5728\u5DE5\u4F5C\u4E2D\uFF0C\u6211\u5E0C\u671B\u53BB\u89E3\u51B3\u90A3\u4E9B\u6709\u6311\u6218\u6027\u7684\u95EE\u9898\uFF0C\u5E76\u4E14\u80DC\u51FA\u3002"
      }, $compid__90);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value7,
        "onClick": this.handleChange7.bind(this)
      }, $compid__91);
      _index.propsManager.set({
        "title": "8.\u6211\u5B81\u613F\u79BB\u5F00\u516C\u53F8\uFF0C\u4E5F\u4E0D\u613F\u4ECE\u4E8B\u9700\u8981\u4E2A\u4EBA\u548C\u5BB6\u5EAD\u505A\u51FA\u4E00\u5B9A\u727A\u7272\u7684\u5DE5\u4F5C\u3002"
      }, $compid__92);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value8,
        "onClick": this.handleChange8.bind(this)
      }, $compid__93);
      _index.propsManager.set({
        "title": "9.\u5C06\u6211\u7684\u6280\u672F\u548C\u4E13\u4E1A\u6C34\u5E73\u53D1\u5C55\u5230\u4E00\u4E2A\u66F4\u5177\u6709\u7ADE\u4E89\u529B\u7684\u5C42\u6B21\u662F\u6210\u529F\u804C\u4E1A\u7684\u5FC5\u8981\u6761\u4EF6\u3002"
      }, $compid__94);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value9,
        "onClick": this.handleChange9.bind(this)
      }, $compid__95);
      _index.propsManager.set({
        "title": "10.\u6211\u5E0C\u671B\u80FD\u591F\u7BA1\u7406\u4E00\u4E2A\u5927\u7684\u516C\u53F8\uFF08\u7EC4\u7EC7\uFF09\uFF0C\u6211\u7684\u51B3\u7B56\u5C06\u4F1A\u5F71\u54CD\u8BB8\u591A\u4EBA\u3002"
      }, $compid__96);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value10,
        "onClick": this.handleChange10.bind(this)
      }, $compid__97);
      _index.propsManager.set({
        "title": "11.\u5982\u679C\u804C\u4E1A\u5141\u8BB8\u81EA\u7531\u5730\u51B3\u5B9A\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5185\u5BB9\u3001\u8BA1\u5212\u3001\u8FC7\u7A0B\u65F6\uFF0C\u6211\u4F1A\u975E\u5E38\u6EE1\u610F\u3002"
      }, $compid__98);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value11,
        "onClick": this.handleChange11.bind(this)
      }, $compid__99);
      _index.propsManager.set({
        "title": "12.\u5982\u679C\u5DE5\u4F5C\u7684\u7ED3\u679C\u4F7F\u6211\u4E27\u5931\u4E86\u81EA\u5DF1\u5728\u7EC4\u7EC7\u4E2D\u7684\u5B89\u5168\u7A33\u5B9A\u611F\uFF0C\u6211\u5B81\u613F\u79BB\u5F00\u8FD9\u4E2A\u5DE5\u4F5C\u5C97\u4F4D\u3002"
      }, $compid__100);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value12,
        "onClick": this.handleChange12.bind(this)
      }, $compid__101);
      _index.propsManager.set({
        "title": "13.\u5BF9\u6211\u800C\u8A00\uFF0C\u521B\u529E\u81EA\u5DF1\u7684\u516C\u53F8\u6BD4\u5728\u5176\u4ED6\u7684\u516C\u53F8\u4E2D\u4E89\u53D6\u4E00\u4E2A\u9AD8\u7684\u7BA1\u7406\u4F4D\u7F6E\u66F4\u6709\u610F\u4E49\u3002"
      }, $compid__102);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value13,
        "onClick": this.handleChange13.bind(this)
      }, $compid__103);
      _index.propsManager.set({
        "title": "14.\u6211\u7684\u804C\u4E1A\u6EE1\u8DB3\u6765\u81EA\u4E8E\u6211\u53EF\u4EE5\u7528\u81EA\u5DF1\u7684\u624D\u80FD\u53BB\u4E3A\u4ED6\u4EBA\u63D0\u4F9B\u670D\u52A1\u3002"
      }, $compid__104);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value14,
        "onClick": this.handleChange14.bind(this)
      }, $compid__105);
      _index.propsManager.set({
        "title": "15.\u6211\u8BA4\u4E3A\u804C\u4E1A\u7684\u6210\u5C31\u611F\u6765\u81EA\u4E8E\u514B\u670D\u81EA\u5DF1\u9762\u4E34\u7684\u975E\u5E38\u6709\u6311\u6218\u6027\u7684\u56F0\u96BE\u3002"
      }, $compid__106);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value15,
        "onClick": this.handleChange15.bind(this)
      }, $compid__107);
      _index.propsManager.set({
        "title": "16.\u6211\u5E0C\u671B\u6211\u7684\u804C\u4E1A\u80FD\u591F\u517C\u987E\u4E2A\u4EBA\u3001\u5BB6\u5EAD\u548C\u5DE5\u4F5C\u7684\u9700\u8981\u3002"
      }, $compid__108);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value16,
        "onClick": this.handleChange16.bind(this)
      }, $compid__109);
      _index.propsManager.set({
        "title": "17.\u5BF9\u6211\u800C\u8A00\uFF0C\u5728\u6211\u559C\u6B22\u7684\u4E13\u4E1A\u9886\u57DF\u5185\u505A\u8D44\u6DF1\u4E13\u5BB6\u6BD4\u603B\u7ECF\u7406\u66F4\u5177\u6709\u5438\u5F15\u529B\u3002"
      }, $compid__110);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value17,
        "onClick": this.handleChange17.bind(this)
      }, $compid__111);
      _index.propsManager.set({
        "title": "18.\u53EA\u6709\u5728\u6211\u6210\u4E3A\u516C\u53F8\u7684\u603B\u7ECF\u7406\u540E\uFF0C\u6211\u624D\u8BA4\u4E3A\u6211\u7684\u804C\u4E1A\u4EBA\u751F\u662F\u6210\u529F\u7684\u3002"
      }, $compid__112);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value18,
        "onClick": this.handleChange18.bind(this)
      }, $compid__113);
      _index.propsManager.set({
        "title": "19.\u6210\u529F\u7684\u804C\u4E1A\u5E94\u8BE5\u5141\u8BB8\u6211\u6709\u5B8C\u5168\u7684\u81EA\u4E3B\u4E0E\u81EA\u7531\u3002"
      }, $compid__114);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value19,
        "onClick": this.handleChange19.bind(this)
      }, $compid__115);
      _index.propsManager.set({
        "title": "20.\u6211\u613F\u610F\u5728\u80FD\u7ED9\u6211\u5B89\u5168\u611F\u3001\u7A33\u5B9A\u611F\u7684\u516C\u53F8\u4E2D\u5DE5\u4F5C\u3002"
      }, $compid__116);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value20,
        "onClick": this.handleChange20.bind(this)
      }, $compid__117);
      _index.propsManager.set({
        "title": "21.\u5F53\u901A\u8FC7\u81EA\u5DF1\u7684\u52AA\u529B\u6216\u60F3\u6CD5\u5B8C\u6210\u5DE5\u4F5C\u65F6\uFF0C\u6211\u7684\u5DE5\u4F5C\u6210\u5C31\u611F\u6700\u5F3A\u3002"
      }, $compid__118);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value21,
        "onClick": this.handleChange21.bind(this)
      }, $compid__119);
      _index.propsManager.set({
        "title": "22.\u5BF9\u6211\u800C\u8A00\uFF0C\u5229\u7528\u81EA\u5DF1\u7684\u624D\u80FD\u4F7F\u8FD9\u4E2A\u4E16\u754C\u53D8\u5F97\u66F4\u9002\u5408\u751F\u6D3B\u6216\u5C45\u4F4F\uFF0C\u6BD4\u4E89\u53D6\u4E00\u4E2A\u9AD8\u7684\u7BA1\u7406\u804C\u4F4D\u66F4\u91CD\u8981\u3002"
      }, $compid__120);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value22,
        "onClick": this.handleChange22.bind(this)
      }, $compid__121);
      _index.propsManager.set({
        "title": "23.\u6211\u89E3\u51B3\u4E86\u770B\u4E0A\u53BB\u4E0D\u53EF\u80FD\u89E3\u51B3\u7684\u95EE\u9898\uFF0C\u6216\u8005\u5728\u5FC5\u8F93\u65E0\u7591\u7684\u7ADE\u8D5B\u4E2D\u80DC\u51FA\uFF0C\u6211\u4F1A\u975E\u5E38\u6709\u6210\u5C31\u611F\u3002"
      }, $compid__122);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value23,
        "onClick": this.handleChange23.bind(this)
      }, $compid__123);
      _index.propsManager.set({
        "title": "24.\u6211\u8BA4\u4E3A\u53EA\u6709\u5F88\u597D\u5730\u5E73\u8861\u4E2A\u4EBA\u3001\u5BB6\u5EAD\u3001\u804C\u4E1A\u4E09\u8005\u7684\u5173\u7CFB\uFF0C\u751F\u6D3B\u624D\u80FD\u7B97\u662F\u6210\u529F\u7684\u3002"
      }, $compid__124);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value24,
        "onClick": this.handleChange24.bind(this)
      }, $compid__125);
      _index.propsManager.set({
        "title": "25.\u6211\u5B81\u613F\u79BB\u5F00\u516C\u53F8\uFF0C\u4E5F\u4E0D\u613F\u9891\u7E41\u63A5\u53D7\u90A3\u4E9B\u4E0D\u5C5E\u4E8E\u6211\u4E13\u4E1A\u9886\u57DF\u7684\u5DE5\u4F5C\u3002"
      }, $compid__126);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value25,
        "onClick": this.handleChange25.bind(this)
      }, $compid__127);
      _index.propsManager.set({
        "title": "26.\u5BF9\u6211\u800C\u8A00\uFF0C\u505A\u4E00\u4E2A\u5168\u9762\u7BA1\u7406\u8005\u6BD4\u5728\u6211\u559C\u6B22\u7684\u4E13\u4E1A\u9886\u57DF\u5185\u505A\u8D44\u6DF1\u4E13\u5BB6\u66F4\u6709\u5438\u5F15\u529B\u3002"
      }, $compid__128);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value26,
        "onClick": this.handleChange26.bind(this)
      }, $compid__129);
      _index.propsManager.set({
        "title": "27.\u5BF9\u6211\u800C\u8A00\uFF0C\u7528\u6211\u81EA\u5DF1\u7684\u65B9\u5F0F\u4E0D\u53D7\u7EA6\u675F\u5730\u5B8C\u6210\u5DE5\u4F5C\uFF0C\u6BD4\u5B89\u5168\u3001\u7A33\u5B9A\u66F4\u52A0\u91CD\u8981\u3002"
      }, $compid__130);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value27,
        "onClick": this.handleChange27.bind(this)
      }, $compid__131);
      _index.propsManager.set({
        "title": "28.\u53EA\u6709\u5F53\u6211\u7684\u6536\u5165\u548C\u5DE5\u4F5C\u6709\u4FDD\u969C\u65F6\uFF0C\u6211\u624D\u4F1A\u5BF9\u5DE5\u4F5C\u611F\u5230\u6EE1\u610F\u3002"
      }, $compid__132);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value28,
        "onClick": this.handleChange28.bind(this)
      }, $compid__133);
      _index.propsManager.set({
        "title": "29.\u5728\u6211\u7684\u804C\u4E1A\u751F\u6DAF\u4E2D\uFF0C\u5982\u679C\u6211\u80FD\u6210\u529F\u5730\u521B\u9020\u6216\u5B9E\u73B0\u5B8C\u5168\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EA7\u54C1\u6216\u70B9\u5B50\uFF0C\u6211\u4F1A\u611F\u5230\u975E\u5E38\u6210\u529F\u3002"
      }, $compid__134);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value29,
        "onClick": this.handleChange29.bind(this)
      }, $compid__135);
      _index.propsManager.set({
        "title": "30.\u6211\u5E0C\u671B\u4ECE\u4E8B\u5BF9\u4EBA\u7C7B\u548C\u793E\u4F1A\u771F\u6B63\u6709\u8D21\u732E\u7684\u5DE5\u4F5C\u3002"
      }, $compid__136);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value30,
        "onClick": this.handleChange30.bind(this)
      }, $compid__137);
      _index.propsManager.set({
        "title": "31.\u6211\u5E0C\u671B\u5DE5\u4F5C\u4E2D\u6709\u5F88\u591A\u7684\u673A\u4F1A\uFF0C\u53EF\u4EE5\u4E0D\u65AD\u6311\u6218\u6211\u89E3\u51B3\u95EE\u9898\u7684\u80FD\u529B\uFF08\u6216\u7ADE\u4E89\u529B\uFF09\u3002"
      }, $compid__138);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value31,
        "onClick": this.handleChange31.bind(this)
      }, $compid__139);
      _index.propsManager.set({
        "title": "32.\u80FD\u5F88\u597D\u5730\u5E73\u8861\u4E2A\u4EBA\u751F\u6D3B\u4E0E\u5DE5\u4F5C\uFF0C\u6BD4\u8FBE\u5230\u4E00\u4E2A\u9AD8\u7684\u7BA1\u7406\u804C\u4F4D\u66F4\u91CD\u8981\u3002"
      }, $compid__140);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value32,
        "onClick": this.handleChange32.bind(this)
      }, $compid__141);
      _index.propsManager.set({
        "title": "33.\u5982\u679C\u5728\u5DE5\u4F5C\u4E2D\u80FD\u7ECF\u5E38\u7528\u5230\u6211\u7279\u522B\u7684\u6280\u5DE7\u548C\u624D\u80FD\uFF0C\u6211\u4F1A\u611F\u5230\u7279\u522B\u6EE1\u610F\u3002"
      }, $compid__142);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value33,
        "onClick": this.handleChange33.bind(this)
      }, $compid__143);
      _index.propsManager.set({
        "title": "34.\u6211\u5B81\u613F\u79BB\u5F00\u516C\u53F8\uFF0C\u4E5F\u4E0D\u613F\u610F\u63A5\u53D7\u8BA9\u6211\u79BB\u5F00\u5168\u9762\u7BA1\u7406\u7684\u5DE5\u4F5C\u3002"
      }, $compid__144);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value34,
        "onClick": this.handleChange34.bind(this)
      }, $compid__145);
      _index.propsManager.set({
        "title": "35.\u6211\u5B81\u613F\u79BB\u5F00\u516C\u53F8\uFF0C\u4E5F\u4E0D\u613F\u610F\u63A5\u53D7\u7EA6\u675F\u6211\u81EA\u7531\u548C\u81EA\u4E3B\u63A7\u5236\u6743\u7684\u5DE5\u4F5C\u3002"
      }, $compid__146);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value35,
        "onClick": this.handleChange35.bind(this)
      }, $compid__147);
      _index.propsManager.set({
        "title": "36.\u6211\u5E0C\u671B\u6709\u4E00\u4EFD\u8BA9\u6211\u6709\u5B89\u5168\u611F\u548C\u7A33\u5B9A\u611F\u7684\u5DE5\u4F5C\u3002"
      }, $compid__148);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value36,
        "onClick": this.handleChange36.bind(this)
      }, $compid__149);
      _index.propsManager.set({
        "title": "37.\u6211\u68A6\u60F3\u7740\u521B\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4E8B\u4E1A\u3002"
      }, $compid__150);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value37,
        "onClick": this.handleChange37.bind(this)
      }, $compid__151);
      _index.propsManager.set({
        "title": "38.\u5982\u679C\u5DE5\u4F5C\u9650\u5236\u4E86\u6211\u4E3A\u4ED6\u4EBA\u63D0\u4F9B\u5E2E\u52A9\u6216\u670D\u52A1\uFF0C\u6211\u5B81\u613F\u79BB\u5F00\u516C\u53F8\u3002"
      }, $compid__152);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value38,
        "onClick": this.handleChange38.bind(this)
      }, $compid__153);
      _index.propsManager.set({
        "title": "39.\u53BB\u89E3\u51B3\u90A3\u4E9B\u51E0\u4E4E\u65E0\u6CD5\u89E3\u51B3\u7684\u96BE\u9898\uFF0C\u6BD4\u83B7\u5F97\u4E00\u4E2A\u9AD8\u7684\u7BA1\u7406\u804C\u4F4D\u66F4\u6709\u610F\u4E49\u3002"
      }, $compid__154);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value39,
        "onClick": this.handleChange39.bind(this)
      }, $compid__155);
      _index.propsManager.set({
        "title": "40.\u6211\u4E00\u76F4\u5728\u5BFB\u627E\u4E00\u4EFD\u80FD\u6700\u5C0F\u5316\u4E2A\u4EBA\u548C\u5BB6\u5EAD\u4E4B\u95F4\u51B2\u7A81\u7684\u5DE5\u4F5C\u3002"
      }, $compid__156);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value40,
        "onClick": this.handleChange40.bind(this)
      }, $compid__157);
      _index.propsManager.set({
        "onClick": this.toPage
      }, $compid__158);
      Object.assign(this.__state, {
        $compid__78: $compid__78,
        $compid__79: $compid__79,
        $compid__80: $compid__80,
        $compid__81: $compid__81,
        $compid__82: $compid__82,
        $compid__83: $compid__83,
        $compid__84: $compid__84,
        $compid__85: $compid__85,
        $compid__86: $compid__86,
        $compid__87: $compid__87,
        $compid__88: $compid__88,
        $compid__89: $compid__89,
        $compid__90: $compid__90,
        $compid__91: $compid__91,
        $compid__92: $compid__92,
        $compid__93: $compid__93,
        $compid__94: $compid__94,
        $compid__95: $compid__95,
        $compid__96: $compid__96,
        $compid__97: $compid__97,
        $compid__98: $compid__98,
        $compid__99: $compid__99,
        $compid__100: $compid__100,
        $compid__101: $compid__101,
        $compid__102: $compid__102,
        $compid__103: $compid__103,
        $compid__104: $compid__104,
        $compid__105: $compid__105,
        $compid__106: $compid__106,
        $compid__107: $compid__107,
        $compid__108: $compid__108,
        $compid__109: $compid__109,
        $compid__110: $compid__110,
        $compid__111: $compid__111,
        $compid__112: $compid__112,
        $compid__113: $compid__113,
        $compid__114: $compid__114,
        $compid__115: $compid__115,
        $compid__116: $compid__116,
        $compid__117: $compid__117,
        $compid__118: $compid__118,
        $compid__119: $compid__119,
        $compid__120: $compid__120,
        $compid__121: $compid__121,
        $compid__122: $compid__122,
        $compid__123: $compid__123,
        $compid__124: $compid__124,
        $compid__125: $compid__125,
        $compid__126: $compid__126,
        $compid__127: $compid__127,
        $compid__128: $compid__128,
        $compid__129: $compid__129,
        $compid__130: $compid__130,
        $compid__131: $compid__131,
        $compid__132: $compid__132,
        $compid__133: $compid__133,
        $compid__134: $compid__134,
        $compid__135: $compid__135,
        $compid__136: $compid__136,
        $compid__137: $compid__137,
        $compid__138: $compid__138,
        $compid__139: $compid__139,
        $compid__140: $compid__140,
        $compid__141: $compid__141,
        $compid__142: $compid__142,
        $compid__143: $compid__143,
        $compid__144: $compid__144,
        $compid__145: $compid__145,
        $compid__146: $compid__146,
        $compid__147: $compid__147,
        $compid__148: $compid__148,
        $compid__149: $compid__149,
        $compid__150: $compid__150,
        $compid__151: $compid__151,
        $compid__152: $compid__152,
        $compid__153: $compid__153,
        $compid__154: $compid__154,
        $compid__155: $compid__155,
        $compid__156: $compid__156,
        $compid__157: $compid__157,
        $compid__158: $compid__158
      });
      return this.__state;
    }
  }]);

  return CareerAnchor;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/questionnaire/careerAnchor", _temp2);
exports.default = CareerAnchor;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CareerAnchor, true));