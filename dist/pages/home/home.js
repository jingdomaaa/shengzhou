"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;
// import * as actions from '@actions/home'

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _style = require("../../utils/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RECOMMEND_SIZE = 20;

// @connect(state => state.home, { ...actions, dispatchCartNum })
var Home = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Home, _BaseComponent);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__3", "$compid__4", "loaded", "loading", "lastItemId", "hasMore"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.state = {
      loaded: false,
      loading: false,
      lastItemId: 0,
      hasMore: true
    }, _this.customComponents = ["AtNoticebar", "Banner", "Todo"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "handleLoadMoreClick",
    value: function handleLoadMoreClick() {
      _index2.default.navigateTo({
        url: "/pages/msg/myMsg"
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
      var $compid__3 = (0, _index.genCompid)(__prefix + "$compid__3");
      var $compid__4 = (0, _index.genCompid)(__prefix + "$compid__4");

      // if (!this.state.loaded) {
      //   return <Loading />
      // }

      // const { homeInfo, searchCount, recommend, pin } = this.props

      var homeInfo = {};
      homeInfo.focus = [{
        img: 'http://img2.zjolcdn.com/pic/0/12/24/16/12241670_262052.jpg',
        rank: 0
      }, {
        img: 'http://img2.zjolcdn.com/pic/0/12/24/16/12241670_262052.jpg',
        rank: 1
      }];

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      _index.propsManager.set({
        "single": true,
        "showMore": true,
        "onGotoMore": this.handleLoadMoreClick.bind(this)
      }, $compid__3);
      _index.propsManager.set({
        "list": homeInfo.focus
      }, $compid__4);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__3: $compid__3,
        $compid__4: $compid__4
      });
      return this.__state;
    }
  }]);

  return Home;
}(_index.Component), _class.$$events = ["loadRecommend"], _class.$$componentPath = "pages/home/home", _temp2);
exports.default = Home;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Home, true));