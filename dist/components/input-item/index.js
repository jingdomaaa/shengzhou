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

var iconClose = "/components/input-item/assets/clear.png";

var InputItem = (_temp2 = _class = function (_BaseComponent) {
  _inherits(InputItem, _BaseComponent);

  function InputItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InputItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputItem.__proto__ || Object.getPrototypeOf(InputItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "type", "value", "focus", "password", "placeholder", "iconClose", "compStyle", "inputStyle"], _this.handleInput = function (e) {
      _this.props.onInput(e.detail.value);
    }, _this.handleClear = function () {
      _this.props.onInput('');
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputItem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(InputItem.prototype.__proto__ || Object.getPrototypeOf(InputItem.prototype), "_constructor", this).call(this, props);

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

      var _props = this.__props,
          type = _props.type,
          value = _props.value,
          placeholder = _props.placeholder,
          focus = _props.focus,
          password = _props.password,
          compStyle = _props.compStyle,
          inputStyle = _props.inputStyle,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur;


      var anonymousState__temp = (0, _index.internal_inline_style)(compStyle);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(inputStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        type: type,
        value: value,
        focus: focus,
        password: password,
        placeholder: placeholder,
        iconClose: iconClose
      });
      return this.__state;
    }
  }, {
    key: "funPrivateyERqL",
    value: function funPrivateyERqL() {
      return this.props.onFocus.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }, {
    key: "funPrivatevJHAs",
    value: function funPrivatevJHAs() {
      return this.props.onBlur.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }]);

  return InputItem;
}(_index.Component), _class.$$events = ["handleInput", "funPrivateyERqL", "funPrivatevJHAs", "handleClear"], _class.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  focus: false,
  password: false,
  compStyle: '',
  inputStyle: '',
  onInput: function onInput() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
}, _class.$$componentPath = "components/input-item/index", _temp2);
exports.default = InputItem;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(InputItem));