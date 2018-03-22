'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
             * Created by haithamqudaih on 3/22/18.
             */


var _mjmlCore = require('mjml-core');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Tag Name. This is will be the component name that will be use in the mjml.
var tagName = 'mj-star';
// List of parent tags. Our component can be used inside the "mj-container".
var parentTag = ['mj-container'];
// If false, the component can contain MJML; if true, it can contain only plain HTML
var endingTag = false;
var defaultMJMLDefinition = {
    content: '',
    attributes: {
        countStars: 0

    }
    // Here, we're using an ES6 decorator. It basically enables us to benefit from the mjml-core features useful here.
};

//This is how we define  our component and how/what it renders.
var star = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {
    _inherits(star, _Component);

    function star() {
        _classCallCheck(this, star);

        return _possibleConstructorReturn(this, (star.__proto__ || Object.getPrototypeOf(star)).apply(this, arguments));
    }

    _createClass(star, [{
        key: 'render',
        value: function render() {
            var mjAttribute = this.props.mjAttribute;


            var stars = [];
            var blankStars = 5 - mjAttribute('countStars');

            for (var i = 0; i < mjAttribute('countStars'); i++) {
                stars.push('<img src="./public/img/star-gold.svg">');
            }

            for (var _i = 0; _i < blankStars; _i++) {
                stars.push('<img src="./public/img/star-gray.svg">');
            }

            var ulStyle = { "list-style-type": "none" };
            var liStyle = { "display": "inline-block" };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    { style: ulStyle },
                    stars.map(function (item) {
                        return _react2.default.createElement(
                            'li',
                            { style: liStyle },
                            item
                        );
                    })
                )
            );
        }
    }]);

    return star;
}(_react.Component)) || _class;

star.tagName = tagName;
star.parentTag = parentTag;
star.endingTag = endingTag;
star.defaultMJMLDefinition = defaultMJMLDefinition;

exports.default = star;