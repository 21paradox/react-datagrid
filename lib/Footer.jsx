'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _assign = require('object-assign');

var _assign2 = _interopRequireWildcard(_assign);

var _Centered = require('./centered');

var _Centered2 = _interopRequireWildcard(_Centered);

'use strict';

var logoURL = require('../resources/images/logo-simplu-w.png');

var Footer = (function (_React$Component) {
	var _class = function Footer() {
		_classCallCheck(this, _class);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	};

	_inherits(_class, _React$Component);

	_createClass(_class, [{
		key: 'render',
		value: function render() {

			var center = !this.context.router.isActive('examples');
			var props = this.prepareProps(this.props);

			return _React2['default'].createElement(
				'div',
				props,
				_React2['default'].createElement(
					_Centered2['default'],
					{ style: { width: center ? null : 'auto' } },
					_React2['default'].createElement(
						'div',
						null,
						_React2['default'].createElement('img', { src: logoURL, style: { width: 30, marginRight: 8 } }),
						_React2['default'].createElement(
							'p',
							null,
							_React2['default'].createElement(
								'a',
								{ style: { textDecoration: 'none', color: 'white' }, href: 'https://github.com/zippyui', target: '_blank' },
								'© Zippy Technologies'
							)
						)
					)
				)
			);
		}
	}, {
		key: 'prepareProps',
		value: function prepareProps(thisProps) {
			var props = _assign2['default']({}, thisProps);

			props.className = this.prepareClassName(props);

			return props;
		}
	}, {
		key: 'prepareClassName',
		value: function prepareClassName(props) {

			var className = props.className || '';

			className += ' footer';

			return className;
		}
	}]);

	return _class;
})(_React2['default'].Component);

Footer.contextTypes = {
	router: _React2['default'].PropTypes.func
};

exports['default'] = Footer;
module.exports = exports['default'];