webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _filter = __webpack_require__(238);

var _filter2 = _interopRequireDefault(_filter);

var _listings = __webpack_require__(239);

var _listings2 = _interopRequireDefault(_listings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainContent = function (_Component) {
  _inherits(MainContent, _Component);

  function MainContent() {
    _classCallCheck(this, MainContent);

    return _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).apply(this, arguments));
  }

  _createClass(MainContent, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "main-content-container" },
        _react2.default.createElement(_filter2.default, null),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_listings2.default, null)
        )
      );
    }
  }]);

  return MainContent;
}(_react.Component);

exports.default = MainContent;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    "header",
    null,
    _react2.default.createElement(
      "div",
      { className: "logo" },
      " Logo"
    ),
    _react2.default.createElement(
      "nav",
      null,
      _react2.default.createElement(
        "a",
        { href: "#" },
        "Create Ads "
      ),
      _react2.default.createElement(
        "a",
        { href: "#" },
        "About Us "
      ),
      _react2.default.createElement(
        "a",
        { href: "#" },
        "Log In"
      ),
      _react2.default.createElement(
        "button",
        { className: "register-btn" },
        " Register "
      )
    )
  );
}

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = __webpack_require__(231);

var _header2 = _interopRequireDefault(_header);

var _MainContent = __webpack_require__(230);

var _MainContent2 = _interopRequireDefault(_MainContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_MainContent2.default, null)
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filter;

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Filter() {
  return _react2.default.createElement(
    "section",
    { className: "filter-container" },
    _react2.default.createElement(
      "h4",
      null,
      " Filter "
    ),
    _react2.default.createElement(
      "select",
      { name: "neighborhood", className: "filters filter__neighborhood" },
      _react2.default.createElement(
        "option",
        null,
        " Hyde Park"
      ),
      _react2.default.createElement(
        "option",
        null,
        " South Shore"
      )
    ),
    _react2.default.createElement(
      "select",
      { name: "housetype", className: "filters filter__housetype" },
      _react2.default.createElement(
        "option",
        null,
        " Apartment"
      ),
      _react2.default.createElement(
        "option",
        null,
        " House"
      )
    ),
    _react2.default.createElement(
      "select",
      { name: "bedrooms", className: "filters filter__bedrooms" },
      _react2.default.createElement(
        "option",
        null,
        " Studio"
      ),
      _react2.default.createElement(
        "option",
        null,
        "2 Bedroom"
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "filter__price" },
      _react2.default.createElement(
        "span",
        { className: "filter__title" },
        " Price "
      ),
      _react2.default.createElement("input", { type: "text", name: "min-price", className: "filter__min-price" }),
      _react2.default.createElement("input", { type: "text", name: "max-price", className: "filter__max-price" })
    ),
    _react2.default.createElement(
      "div",
      { className: "filter__floor-space" },
      _react2.default.createElement(
        "span",
        { className: "filter__title" },
        " Floor Space "
      ),
      _react2.default.createElement("input", { type: "text", name: "min-price", className: "filter__min-price" }),
      _react2.default.createElement("input", { type: "text", name: "max-price", className: "filter__max-price" })
    ),
    _react2.default.createElement(
      "span",
      { className: "filter__title" },
      " Extras "
    ),
    _react2.default.createElement(
      "div",
      { className: "filter__extra" },
      _react2.default.createElement(
        "label",
        { htmlFor: "extras" },
        "Elevators",
        _react2.default.createElement("input", { type: "checkbox", name: "extras", value: "elevator" })
      ),
      _react2.default.createElement(
        "label",
        { htmlFor: "extras" },
        "Pool",
        _react2.default.createElement("input", { type: "checkbox", name: "extras", value: "pool" })
      ),
      _react2.default.createElement(
        "label",
        { htmlFor: "extras" },
        "Finished Basement",
        _react2.default.createElement("input", { type: "checkbox", name: "extras", value: "basement" }),
        " "
      ),
      _react2.default.createElement(
        "label",
        { htmlFor: "extras" },
        "Gym",
        _react2.default.createElement("input", { type: "checkbox", name: "extras", value: "gym" })
      )
    )
  );
}

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Listings;

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(236);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Listings() {
  return _react2.default.createElement(
    "section",
    { className: "listings-container" },
    _react2.default.createElement(
      "h2",
      null,
      " Short stay"
    ),
    _react2.default.createElement(
      "div",
      { className: "listings__search" },
      _react2.default.createElement("input", { type: "text", name: "search" }),
      _react2.default.createElement(
        "div",
        { className: "listings__search-sort" },
        _react2.default.createElement(
          "p",
          null,
          " 390 results found"
        ),
        _react2.default.createElement(
          "div",
          { className: "listings__search-options" },
          _react2.default.createElement(
            "select",
            { name: "sort", className: "sort" },
            _react2.default.createElement(
              "option",
              { value: "price-high" },
              " Highest Price"
            ),
            _react2.default.createElement(
              "option",
              { value: "price-low" },
              " Lowest Price"
            )
          )
        ),
        _react2.default.createElement("div", { className: "listings__view" }),
        "1 2"
      ),
      _react2.default.createElement("div", { className: "listings__result" }),
      _react2.default.createElement(
        "div",
        { className: "listings__img" },
        "Img",
        _react2.default.createElement(
          "span",
          { className: "listings__img-address" },
          " Address"
        ),
        _react2.default.createElement(
          "div",
          { className: "listings__details" },
          _react2.default.createElement(
            "div",
            { className: "listings__details-img" },
            "img"
          ),
          _react2.default.createElement(
            "div",
            { className: "listings__details-user" },
            "user details",
            _react2.default.createElement(
              "span",
              null,
              " Name"
            ),
            _react2.default.createElement(
              "span",
              null,
              " Date"
            ),
            _react2.default.createElement(
              "div",
              { className: "listings__details-info" },
              _react2.default.createElement(
                "div",
                { className: "square-space" },
                "square"
              ),
              _react2.default.createElement(
                "div",
                { className: "bedrooms" },
                "bedrooms"
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "listings__details-bottom-info" },
        _react2.default.createElement(
          "span",
          null,
          " $1000 / month "
        ),
        _react2.default.createElement(
          "span",
          null,
          " Hyde Park, Chicago "
        )
      ),
      _react2.default.createElement("div", { className: "listings__pagination" }),
      _react2.default.createElement(
        "ul",
        { className: "listings__pagination-nums" },
        _react2.default.createElement(
          "li",
          null,
          " Prev"
        ),
        _react2.default.createElement(
          "li",
          null,
          " 1"
        ),
        _react2.default.createElement(
          "li",
          null,
          " 2"
        ),
        _react2.default.createElement(
          "li",
          null,
          " 3"
        ),
        _react2.default.createElement(
          "li",
          null,
          " 4"
        ),
        _react2.default.createElement(
          "li",
          null,
          " 5"
        ),
        _react2.default.createElement(
          "li",
          null,
          " Next"
        )
      )
    )
  );
}

/***/ })

},[237]);