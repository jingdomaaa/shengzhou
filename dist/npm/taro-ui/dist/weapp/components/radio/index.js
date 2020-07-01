"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtRadio = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtRadio, _AtComponent);

  function AtRadio() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtRadio.__proto__ || Object.getPrototypeOf(AtRadio)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray1", "options", "customStyle", "className", "value"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtRadio, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtRadio.prototype.__proto__ || Object.getPrototypeOf(AtRadio.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "handleClick",
    value: function handleClick(option) {
      var _props;

      if (option.disabled) {
        return;
      }(_props = this.props).onClick.apply(_props, [option.value].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props2 = this.__props,
          customStyle = _props2.customStyle,
          className = _props2.className,
          options = _props2.options,
          value = _props2.value;


      var anonymousState__temp = (0, _index6.default)('at-radio', className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var loopArray1 = options.map(function (option, _anonIdx) {
        option = {
          $original: (0, _index.internal_get_original)(option)
        };
        var $loopState__temp4 = (0, _index6.default)({
          'at-radio__option': true,
          'at-radio__option--disabled': option.$original.disabled
        });
        var $loopState__temp6 = (0, _index6.default)({
          'at-radio__icon': true,
          'at-radio__icon--checked': value === option.$original.value
        });
        return {
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $original: option.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray1: loopArray1,
        options: options
      });
      return this.__state;
    }
  }]);

  return AtRadio;
}(_component2.default), _class.$$events = ["handleClick"], _class.$$componentPath = "F:/TaroProject/shengzhou/node_modules/taro-ui/dist/weapp/components/radio/index", _temp2);


AtRadio.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  options: [],
  onClick: function onClick() {}
};

AtRadio.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  value: _index4.default.string,
  options: _index4.default.array,
  onClick: _index4.default.func
};
exports.default = AtRadio;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtRadio));