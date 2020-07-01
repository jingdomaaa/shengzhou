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

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__5", "$compid__6", "$compid__7", "$compid__8", "$compid__9", "$compid__10", "$compid__11", "$compid__12", "$compid__13", "$compid__14", "$compid__15", "$compid__16", "$compid__17", "$compid__18", "showResultModel", "options1", "value1", "value2", "value3", "value4", "value5", "value6"], _this.config = {
      navigationBarTitleText: '工作压力测试表'
    }, _this.customComponents = ["AtCard", "AtRadio", "Result", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        showResultModel: false, //结果浮层显示flag
        options1: [//选项
        { label: '从未发生', value: 'option1' }, { label: '偶尔发生', value: 'option2' }, { label: '经常发生', value: 'option3' }],
        value1: '', //题目选项的状态
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
    key: "addResult",
    value: function addResult() {
      //显示结果浮层
      this.setState({
        showResultModel: true
      });
    }
  }, {
    key: "closeResult",
    value: function closeResult() {
      this.setState({
        showResultModel: false
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var showResultModel = this.showResultModel;

      var $compid__5 = (0, _index.genCompid)(__prefix + "$compid__5");
      var $compid__6 = (0, _index.genCompid)(__prefix + "$compid__6");
      var $compid__7 = (0, _index.genCompid)(__prefix + "$compid__7");
      var $compid__8 = (0, _index.genCompid)(__prefix + "$compid__8");
      var $compid__9 = (0, _index.genCompid)(__prefix + "$compid__9");
      var $compid__10 = (0, _index.genCompid)(__prefix + "$compid__10");
      var $compid__11 = (0, _index.genCompid)(__prefix + "$compid__11");
      var $compid__12 = (0, _index.genCompid)(__prefix + "$compid__12");
      var $compid__13 = (0, _index.genCompid)(__prefix + "$compid__13");
      var $compid__14 = (0, _index.genCompid)(__prefix + "$compid__14");
      var $compid__15 = (0, _index.genCompid)(__prefix + "$compid__15");
      var $compid__16 = (0, _index.genCompid)(__prefix + "$compid__16");
      var $compid__17 = (0, _index.genCompid)(__prefix + "$compid__17");
      var $compid__18 = (0, _index.genCompid)(__prefix + "$compid__18");
      _index.propsManager.set({
        "title": "1.\u89C9\u5F97\u6700\u8FD1\u624B\u4E0A\u5DE5\u4F5C\u592A\u591A\uFF0C\u65E0\u6CD5\u5E94\u4ED8"
      }, $compid__5);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value1,
        "onClick": this.handleChange1.bind(this)
      }, $compid__6);
      _index.propsManager.set({
        "title": "2.\u6700\u8FD1\u9047\u5230\u632B\u8D25\u65F6\u5F88\u5BB9\u6613\u53D1\u813E\u6C14"
      }, $compid__7);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value2,
        "onClick": this.handleChange2.bind(this)
      }, $compid__8);
      _index.propsManager.set({
        "title": "3.\u62C5\u5FC3\u522B\u4EBA\u5BF9\u81EA\u5DF1\u5DE5\u4F5C\u8868\u73B0\u7684\u8BC4\u4EF7"
      }, $compid__9);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value3,
        "onClick": this.handleChange3.bind(this)
      }, $compid__10);
      _index.propsManager.set({
        "title": "4.\u6700\u8FD1\u5E38\u5E74\u72AF\u5934\u75DB/\u80C3\u75DB/\u80CC\u75DB\u7684\u6BDB\u75C5"
      }, $compid__11);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value4,
        "onClick": this.handleChange4.bind(this)
      }, $compid__12);
      _index.propsManager.set({
        "title": "5.\u4E0A\u5E8A\u540E\u601D\u524D\u60F3\u540E\uFF0C\u96BE\u4EE5\u5165\u7761"
      }, $compid__13);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value5,
        "onClick": this.handleChange5.bind(this)
      }, $compid__14);
      _index.propsManager.set({
        "title": "6.\u5F53\u7A7A\u95F2\u65F6\u8F7B\u677E\u4E00\u4E0B\u4E5F\u4F1A\u89C9\u5F97\u5185\u759A"
      }, $compid__15);
      _index.propsManager.set({
        "options": this.__state.options1,
        "value": this.__state.value6,
        "onClick": this.handleChange6.bind(this)
      }, $compid__16);
      this.showResultModel && _index.propsManager.set({
        "onCloseResult": this.closeResult.bind(this)
      }, $compid__17);
      _index.propsManager.set({
        "onClick": this.addResult.bind(this)
      }, $compid__18);
      Object.assign(this.__state, {
        $compid__5: $compid__5,
        $compid__6: $compid__6,
        $compid__7: $compid__7,
        $compid__8: $compid__8,
        $compid__9: $compid__9,
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        $compid__14: $compid__14,
        $compid__15: $compid__15,
        $compid__16: $compid__16,
        $compid__17: $compid__17,
        $compid__18: $compid__18
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/circle/circle", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));