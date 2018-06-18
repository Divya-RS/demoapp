webpackJsonp([0],{

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SpdBanner__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SearchResult__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StoreLocation__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Help__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__(94);









const PageUrls = {
    HOME: "home",
    SEARCH: "search",
    PARTS: "parts"
};
/* unused harmony export PageUrls */

class PageContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
        this.state = {
            searchstring: '',
            pageid: PageUrls.HOME
        };
        this.changePageParam = this.changePageParam.bind(this);
    }
    getInitialState() {
        this.state = {
            searchstring: '',
            pageid: PageUrls.HOME
        };
    }
    changePageParam(pData) {
        this.setState({ pageid: pData.pageid, searchstring: pData.searchstring });
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["a" /* BrowserRouter */], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], { changeParam: this.changePageParam }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["b" /* Switch */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["c" /* Route */], { exact: true, path: "/help", component: __WEBPACK_IMPORTED_MODULE_6__Help__["a" /* default */] }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["c" /* Route */], { exact: true, path: "/stores", component: __WEBPACK_IMPORTED_MODULE_5__StoreLocation__["a" /* default */] }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["c" /* Route */], { exact: true, path: "/", render: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](RenderPageContent, { pageid: this.state.pageid, searchstring: this.state.searchstring }) }))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], null)));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PageContainer;

const RenderPageContent = (pId) => {
    if (pId.pageid === "home")
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__SpdBanner__["a" /* default */], null)));
    if (pId.pageid === "search")
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__SearchResult__["a" /* default */], { searchString: pId.searchstring })));
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "No Pages Found"));
};


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(91);


class Footer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* Nav */], { className: "pull-down" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* NavItem */], { className: "pull-right" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "span3 anchorLayout" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: "content-subhead" }, "Quick Links"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { "data-omniture": "", href: "/partsdirect/product-types/" }, "All Categories")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            "  ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { "data-omniture": "", href: "/partsdirect/brands/" }, "All Brands ")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            "  ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { "data-omniture": "", href: "/partsdirect/user-manuals" }, "Owner's Manuals")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            "  ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { "data-omniture": "", href: "/partsdirect/getParentCategory.pd?categoryName=Kitchen+Appliance" }, "Appliance Parts")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            "  ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { "data-omniture": "", href: "/partsdirect/merchandiser/show.pd?description=Water%20Filters" }, "Refrigerator Water Filters")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            "  ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { "data-omniture": "", href: "/partsdirect/getParentCategory.pd?categoryName=Lawn-Mower-Parts" }, "Lawn Mower Parts")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { "data-omniture": "", href: "/partsdirect/getParentCategory.pd?categoryName=Snow-Blower-Parts" }, "Snowblower Parts"))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* NavItem */], { className: "pull-right" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "span3 anchorLayout" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: "content-subhead" }, "Your Account"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { "data-omniture": "", href: "/order-and-subscription-lookup.html", title: "Order status" }, "Your Order")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "/partsdirect/faq.pd?pop=flush&commercialUI=false#automaticReordersFAQ" }, "Automatic Reorders")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "https://www.searspartsdirect.com/partsdirect/myProfileSetupPreferences.pd" }, "Your Profile")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { "data-component": "/apps/searspartsdirect/components/content/spdRedesignGlobalFooter", "data-omniture": "Footer - Feedback" }, "Give Us Feedback")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "/partsdirect/aboutUs.pd", "data-omniture": "Footer - About Us" }, "About Us"))))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = Footer;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(94);



class Header extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            searchstring: '',
            pageid: 'search'
        };
        this.updateState = this.updateState.bind(this);
        this.search = this.search.bind(this);
    }
    updateState(e) {
        e.preventDefault();
        this.setState({ searchstring: this.refs.myInput.value });
    }
    search(e) {
        e.preventDefault();
        this.setState({ pageid: 'search' });
        this.props.changeParam(this.state);
    }
    render() {
        const bgBlue = { backgroundColor: '#00008B', color: "#FFF" };
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { value: this.state.searchstring, onChange: this.updateState, ref: "myInput" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: this.search }, "Search")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Navbar */], { style: bgBlue },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Navbar */].Header, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Navbar */].Brand, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#home" },
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["e" /* Image */], { src: "/assets/images/img/logo.jpg" })))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* Nav */], { className: "pull-right" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* NavItem */], { eventKey: 1, href: "#" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* NavItem */], { eventKey: 2, href: "#" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Link */], { to: "/help" }, " Help -888.873.3829")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* NavItem */], { eventKey: 4, href: "#" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Link */], { to: "/stores" }, "Store Location ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["f" /* NavDropdown */], { eventKey: 3, title: "Cart/Account", id: "basic-nav-dropdown" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["g" /* MenuItem */], { eventKey: 3.1 }, "Cart"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["g" /* MenuItem */], { eventKey: 3.2 }, "Account"))))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = Header;


/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class Help extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Help Page"));
    }
}
/* harmony default export */ __webpack_exports__["a"] = Help;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

function SearchResult(props) {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "SearchResults"),
        "No results for ",
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "srchstr" }, props.searchString)));
}
/* harmony default export */ __webpack_exports__["a"] = SearchResult;


/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(91);


class SpdBanner extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */].Item, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { width: 900, height: 500, alt: "900x500", src: "/assets/images/img/Mower.jpg" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */].Caption, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Offer1"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Offer1"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */].Item, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { width: 900, height: 500, alt: "900x500", src: "/assets/images/img/Mower.jpg" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */].Caption, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Offer2"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Offer3")))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = SpdBanner;


/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class StoreLocation extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Store Location"));
    }
}
/* harmony default export */ __webpack_exports__["a"] = StoreLocation;


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_less__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_components_PageContainer__ = __webpack_require__(154);
/**
 * ======================================
 * This the root component for your app.
 * ======================================
 */
// import root less file here as an entry point for all other less files. these are imported
// in index.less (including bootstrap).
// You can also import less files in other tsx files instead of importing them in index.less.

// import "React" here to prevent the error "TS2686 [...]refers to a UMD global[...]"



__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__modules_components_PageContainer__["a" /* PageContainer */], null), document.getElementById("app"));


/***/ })

},[352]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1BhZ2VDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9IZWxwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9TcGRCYW5uZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvU3RvcmVMb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQjtBQUNEO0FBQ0E7QUFFTTtBQUNNO0FBQ0U7QUFDbEI7QUFFdUM7QUFDTjtBQVdwRCxNQUFNLFFBQVEsR0FDakI7SUFDSSxJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0NBQ2pCLENBQUM7QUFBQTtBQUFBO0FBRUEsbUJBQXFCLFNBQVEsZ0RBQXlCO0lBRXhELHVEQUF1RDtJQUN2RCxZQUFZLEtBQUs7UUFDYixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1NBQ3hCLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENB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O2dCQUNaLDhEQUFLLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsU0FBUyxFQUFDLEdBQUcsRUFBQyw4QkFBOEIsR0FBRztnQkFDakYscURBQUMsaUVBQVEsQ0FBQyxPQUFPO29CQUNmLDBFQUFlO29CQUNmLHlFQUFhLENBQ0ksQ0FDTDtZQUNoQixxREFBQyxpRUFBUSxDQUFDLElBQUk7Z0JBQ1osOERBQUssS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxTQUFTLEVBQUMsR0FBRyxFQUFDLDhCQUE4QixHQUFHO2dCQUNqRixxREFBQyxpRUFBUSxDQUFDLE9BQU87b0JBQ2YsMEVBQWU7b0JBQ2YseUVBQWEsQ0FDSSxDQUVMLENBQ1AsQ0FHWixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBQ0Qsd0RBQWUsU0FBUyxDQUFDOzs7Ozs7Ozs7OztBQ3JDTTtBQUcvQixtQkFBb0IsU0FBUSxnREFBZTtJQUV6Qyx1REFBdUQ7SUFDdkQsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWYsQ0FBQztJQUVELE1BQU07UUFHSixNQUFNLENBQUMsQ0FDTixrRkFBdUIsQ0FFdkIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUNELHdEQUFlLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCN0I7QUFBQTs7OztHQUlHO0FBRUgsNEZBQTRGO0FBQzVGLHVDQUF1QztBQUN2Qyw2RkFBNkY7QUFDdkU7QUFFdEIscUZBQXFGO0FBQ3REO0FBQ087QUFFMkI7QUFFakUsaURBQWUsQ0FDWCxxREFBQyx3RkFBYSxPQUFHLEVBQ2pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQUMiLCJmaWxlIjoiYXBwLmU5YTQ1MThjNjc1OTk3ZDBmMzBkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBTZWFyY2hUYWIgZnJvbSBcIi4vU2VhcmNoVGFiXCI7XHJcbmltcG9ydCBTcGRCYW5uZXIgZnJvbSBcIi4vU3BkQmFubmVyXCI7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSBcIi4vU2VhcmNoUmVzdWx0XCI7XHJcbmltcG9ydCBTdG9yZUxvY2F0aW9uIGZyb20gXCIuL1N0b3JlTG9jYXRpb25cIjtcclxuaW1wb3J0IEhlbHAgZnJvbSBcIi4vSGVscFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgUmVkaXJlY3QsIExpbmssIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VQYXJhbWV0ZXJzIHtcclxuICAgIHNlYXJjaHN0cmluZzogc3RyaW5nO1xyXG4gICAgcGFnZWlkOiBzdHJpbmc7XHJcblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVByb3BzIHtcclxuICAgIGNoYW5nZVBhcmFtKHBEYXRhOiBQYWdlUGFyYW1ldGVycyk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFBhZ2VVcmxzID1cclxuICAgIHtcclxuICAgICAgICBIT01FOiBcImhvbWVcIixcclxuICAgICAgICBTRUFSQ0g6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgUEFSVFM6IFwicGFydHNcIlxyXG4gICAgfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XHJcblxyXG4gICAgLy8gdGhpcyBjb25zdHJ1Y3RvciBpcyBuZWNlc3NhcnkgdG8gbWFrZSB0aGUgcHJvcHMgd29ya1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoc3RyaW5nOiAnJyxcclxuICAgICAgICAgICAgcGFnZWlkOiBQYWdlVXJscy5IT01FXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2VQYXJhbSA9IHRoaXMuY2hhbmdlUGFnZVBhcmFtLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoc3RyaW5nOiAnJyxcclxuICAgICAgICAgICAgcGFnZWlkOiBQYWdlVXJscy5IT01FXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNoYW5nZVBhZ2VQYXJhbShwRGF0YTogUGFnZVBhcmFtZXRlcnMpIHtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlaWQ6IHBEYXRhLnBhZ2VpZCwgc2VhcmNoc3RyaW5nOiBwRGF0YS5zZWFyY2hzdHJpbmcgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgICAgIDxSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgY2hhbmdlUGFyYW09e3RoaXMuY2hhbmdlUGFnZVBhcmFtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaGVscFwiIGNvbXBvbmVudD17SGVscH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3N0b3Jlc1wiIGNvbXBvbmVudD17U3RvcmVMb2NhdGlvbn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiByZW5kZXI9eygpID0+IDxSZW5kZXJQYWdlQ29udGVudCBwYWdlaWQ9e3RoaXMuc3RhdGUucGFnZWlkfSBzZWFyY2hzdHJpbmc9e3RoaXMuc3RhdGUuc2VhcmNoc3RyaW5nfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZW5kZXJQYWdlQ29udGVudCA9IChwSWQpID0+IHtcclxuXHJcbiAgICBpZiAocElkLnBhZ2VpZCA9PT0gXCJob21lXCIpXHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PjxTcGRCYW5uZXIgLz48L2Rpdj4pO1xyXG4gICAgaWYgKHBJZC5wYWdlaWQgPT09IFwic2VhcmNoXCIpXHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PjxTZWFyY2hSZXN1bHQgc2VhcmNoU3RyaW5nPXtwSWQuc2VhcmNoc3RyaW5nfSAvPjwvZGl2Pik7XHJcbiAgICByZXR1cm4gKDxkaXY+Tm8gUGFnZXMgRm91bmQ8L2Rpdj4pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtOYXYsIEltYWdlLE5hdmJhciwgQ29sbGFwc2UsIE5hdkl0ZW0sIE5hdkxpbmtDb250YWluZXIgLE5hdkxpbmsgLE5hdkRyb3Bkb3duLE1lbnVJdGVtfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHRoaXMgY29uc3RydWN0b3IgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgdGhlIHByb3BzIHdvcmtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICByZXR1cm4gPE5hdiBjbGFzc05hbWU9XCJwdWxsLWRvd25cIj5cclxuICAgICAgPE5hdkl0ZW0gIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFuMyBhbmNob3JMYXlvdXRcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbnRlbnQtc3ViaGVhZFwiPlF1aWNrIExpbmtzPC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgIDxsaT4gPGEgZGF0YS1vbW5pdHVyZT1cIlwiIGhyZWY9XCIvcGFydHNkaXJlY3QvcHJvZHVjdC10eXBlcy9cIj5BbGwgQ2F0ZWdvcmllczwvYT48L2xpPlxyXG4gICAgIDxsaT4gIDxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL3BhcnRzZGlyZWN0L2JyYW5kcy9cIj5BbGwgQnJhbmRzIDwvYT48L2xpPlxyXG4gICAgIDxsaT4gIDxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL3BhcnRzZGlyZWN0L3VzZXItbWFudWFsc1wiPk93bmVyJ3MgTWFudWFsczwvYT48L2xpPlxyXG4gICAgIDxsaT4gIDxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL3BhcnRzZGlyZWN0L2dldFBhcmVudENhdGVnb3J5LnBkP2NhdGVnb3J5TmFtZT1LaXRjaGVuK0FwcGxpYW5jZVwiPkFwcGxpYW5jZSBQYXJ0czwvYT48L2xpPlxyXG4gICAgIDxsaT4gIDxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL3BhcnRzZGlyZWN0L21lcmNoYW5kaXNlci9zaG93LnBkP2Rlc2NyaXB0aW9uPVdhdGVyJTIwRmlsdGVyc1wiPlJlZnJpZ2VyYXRvciBXYXRlciBGaWx0ZXJzPC9hPjwvbGk+XHJcbiAgICAgPGxpPiAgPGEgZGF0YS1vbW5pdHVyZT1cIlwiIGhyZWY9XCIvcGFydHNkaXJlY3QvZ2V0UGFyZW50Q2F0ZWdvcnkucGQ/Y2F0ZWdvcnlOYW1lPUxhd24tTW93ZXItUGFydHNcIj5MYXduIE1vd2VyIFBhcnRzPC9hPjwvbGk+XHJcbiAgICAgPGxpPiA8YSBkYXRhLW9tbml0dXJlPVwiXCIgaHJlZj1cIi9wYXJ0c2RpcmVjdC9nZXRQYXJlbnRDYXRlZ29yeS5wZD9jYXRlZ29yeU5hbWU9U25vdy1CbG93ZXItUGFydHNcIj5Tbm93Ymxvd2VyIFBhcnRzPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPC8gTmF2SXRlbT5cclxuICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFuMyBhbmNob3JMYXlvdXRcIj5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImNvbnRlbnQtc3ViaGVhZFwiPllvdXIgQWNjb3VudDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL29yZGVyLWFuZC1zdWJzY3JpcHRpb24tbG9va3VwLmh0bWxcIiB0aXRsZT1cIk9yZGVyIHN0YXR1c1wiPllvdXIgT3JkZXI8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvcGFydHNkaXJlY3QvZmFxLnBkP3BvcD1mbHVzaCZhbXA7Y29tbWVyY2lhbFVJPWZhbHNlI2F1dG9tYXRpY1Jlb3JkZXJzRkFRXCI+QXV0b21hdGljIFJlb3JkZXJzPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuc2VhcnNwYXJ0c2RpcmVjdC5jb20vcGFydHNkaXJlY3QvbXlQcm9maWxlU2V0dXBQcmVmZXJlbmNlcy5wZFwiPllvdXIgUHJvZmlsZTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+PGEgIGRhdGEtY29tcG9uZW50PVwiL2FwcHMvc2VhcnNwYXJ0c2RpcmVjdC9jb21wb25lbnRzL2NvbnRlbnQvc3BkUmVkZXNpZ25HbG9iYWxGb290ZXJcIiBkYXRhLW9tbml0dXJlPVwiRm9vdGVyIC0gRmVlZGJhY2tcIj5HaXZlIFVzIEZlZWRiYWNrPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL3BhcnRzZGlyZWN0L2Fib3V0VXMucGRcIiBkYXRhLW9tbml0dXJlPVwiRm9vdGVyIC0gQWJvdXQgVXNcIj5BYm91dCBVczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8gTmF2SXRlbT5cclxuICAgICAgPC9OYXY+XHJcbiAgICB9XHJcbiB9XHJcbiBleHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9Gb290ZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXYsIEltYWdlLCBOYXZiYXIsIENvbGxhcHNlLCBOYXZJdGVtLCBOYXZMaW5rQ29udGFpbmVyLCBOYXZMaW5rLCBOYXZEcm9wZG93biwgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgUmVkaXJlY3QsIExpbmssIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFNlYXJjaFRhYiBmcm9tICcuL1NlYXJjaFRhYidcclxuXHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBCdXR0b24sIFRleHRBcmVhIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBQYWdlUHJvcHMsIFBhZ2VQYXJhbWV0ZXJzIH0gZnJvbSAnbW9kdWxlcy9jb21wb25lbnRzL1BhZ2VDb250YWluZXInO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGFnZVByb3BzLCBQYWdlUGFyYW1ldGVycz4ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VhcmNoc3RyaW5nOiAnJyxcclxuICAgICAgcGFnZWlkOiAnc2VhcmNoJ1xyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcylcclxuICAgIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKVxyXG5cclxuICB9XHJcbiAgdXBkYXRlU3RhdGUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaHN0cmluZzogdGhpcy5yZWZzLm15SW5wdXQudmFsdWUgfSk7XHJcblxyXG5cclxuICB9XHJcbiAgc2VhcmNoKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFnZWlkOiAnc2VhcmNoJyB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlUGFyYW0odGhpcy5zdGF0ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgYmdCbHVlID0geyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDhCJywgY29sb3I6IFwiI0ZGRlwiIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDxmb3JtID5cclxuXHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoc3RyaW5nfSBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX1cclxuICAgICAgICAgICAgcmVmPVwibXlJbnB1dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNofT5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPE5hdmJhciBzdHlsZT17YmdCbHVlfT5cclxuICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxyXG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiPiA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaW1nL2xvZ28uanBnXCIgLz48L2E+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XHJcblxyXG4gICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0gaHJlZj1cIiNcIj5cclxuXHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuXHJcblxyXG4gICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17Mn0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9oZWxwXCI+IEhlbHAgLTg4OC44NzMuMzgyOTwvTGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17NH0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9zdG9yZXNcIj5TdG9yZSBMb2NhdGlvbiA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxOYXZEcm9wZG93biBldmVudEtleT17M30gdGl0bGU9XCJDYXJ0L0FjY291bnRcIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17My4xfT5DYXJ0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezMuMn0+QWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcblxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL34vc291cmNlLW1hcC1sb2FkZXIhLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL0hlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY2xhc3MgSGVscCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIC8vIHRoaXMgY29uc3RydWN0b3IgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgdGhlIHByb3BzIHdvcmtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICBcclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgPGgxPkhlbHAgUGFnZTwvaDE+XHJcblxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVscDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9IZWxwLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZnVuY3Rpb24gU2VhcmNoUmVzdWx0KHByb3BzKVxyXG57XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+U2VhcmNoUmVzdWx0czwvaDE+XHJcbiAgICAgICAgICAgICAgICBObyByZXN1bHRzIGZvciA8ZGl2IGlkPVwic3JjaHN0clwiPntwcm9wcy5zZWFyY2hTdHJpbmd9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW1hZ2UsIENhcm91c2VsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNsYXNzIFNwZEJhbm5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIC8vIHRoaXMgY29uc3RydWN0b3IgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgdGhlIHByb3BzIHdvcmtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICBcclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgIDxDYXJvdXNlbD5cclxuICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgIDxpbWcgd2lkdGg9ezkwMH0gaGVpZ2h0PXs1MDB9IGFsdD1cIjkwMHg1MDBcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pbWcvTW93ZXIuanBnXCIgLz5cclxuICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8aDM+T2ZmZXIxPC9oMz5cclxuICAgICAgICAgICAgPHA+T2ZmZXIxPC9wPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgIDxpbWcgd2lkdGg9ezkwMH0gaGVpZ2h0PXs1MDB9IGFsdD1cIjkwMHg1MDBcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pbWcvTW93ZXIuanBnXCIgLz5cclxuICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8aDM+T2ZmZXIyPC9oMz5cclxuICAgICAgICAgICAgPHA+T2ZmZXIzPC9wPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cclxuICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcblxyXG5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNwZEJhbm5lcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9TcGRCYW5uZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIFN0b3JlTG9jYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyB0aGlzIGNvbnN0cnVjdG9yIGlzIG5lY2Vzc2FyeSB0byBtYWtlIHRoZSBwcm9wcyB3b3JrXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgXHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgIDxoMT5TdG9yZSBMb2NhdGlvbjwvaDE+XHJcblxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVMb2NhdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9TdG9yZUxvY2F0aW9uLnRzeCIsIi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFRoaXMgdGhlIHJvb3QgY29tcG9uZW50IGZvciB5b3VyIGFwcC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLy8gaW1wb3J0IHJvb3QgbGVzcyBmaWxlIGhlcmUgYXMgYW4gZW50cnkgcG9pbnQgZm9yIGFsbCBvdGhlciBsZXNzIGZpbGVzLiB0aGVzZSBhcmUgaW1wb3J0ZWRcbi8vIGluIGluZGV4Lmxlc3MgKGluY2x1ZGluZyBib290c3RyYXApLlxuLy8gWW91IGNhbiBhbHNvIGltcG9ydCBsZXNzIGZpbGVzIGluIG90aGVyIHRzeCBmaWxlcyBpbnN0ZWFkIG9mIGltcG9ydGluZyB0aGVtIGluIGluZGV4Lmxlc3MuXG5pbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcblxuLy8gaW1wb3J0IFwiUmVhY3RcIiBoZXJlIHRvIHByZXZlbnQgdGhlIGVycm9yIFwiVFMyNjg2IFsuLi5dcmVmZXJzIHRvIGEgVU1EIGdsb2JhbFsuLi5dXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQge1BhZ2VDb250YWluZXJ9IGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9QYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8UGFnZUNvbnRhaW5lciAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL34vc291cmNlLW1hcC1sb2FkZXIhLi9zcmMvaW5kZXgudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==