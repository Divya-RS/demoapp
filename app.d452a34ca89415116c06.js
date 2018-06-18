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
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["a" /* BrowserRouter */], { basename: "/demoapp/" },
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
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { width: 900, height: 500, alt: "900x500", src: "%PUBLIC_URL%/assets/images/img/Mower.jpg" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */].Caption, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Offer1"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Offer1"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */].Item, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { width: 900, height: 500, alt: "900x500", src: "%PUBLIC_URL%/assets/images/img/Mower.jpg" }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1BhZ2VDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9IZWxwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9TcGRCYW5uZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvU3RvcmVMb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQjtBQUNEO0FBQ0E7QUFFTTtBQUNNO0FBQ0U7QUFDbEI7QUFFdUM7QUFDTjtBQVdwRCxNQUFNLFFBQVEsR0FDakI7SUFDSSxJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0NBQ2pCLENBQUM7QUFBQTtBQUFBO0FBRUEsbUJBQXFCLFNBQVEsZ0RBQXlCO0lBRXhELHVEQUF1RDtJQUN2RCxZQUFZLEtBQUs7UUFDYixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1NBQ3hCLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENB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cURBQUMsaUVBQVEsQ0FBQyxJQUFJO2dCQUNaLDhEQUFLLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsU0FBUyxFQUFDLEdBQUcsRUFBQywwQ0FBMEMsR0FBRztnQkFDN0YscURBQUMsaUVBQVEsQ0FBQyxPQUFPO29CQUNmLDBFQUFlO29CQUNmLHlFQUFhLENBQ0ksQ0FDTDtZQUNoQixxREFBQyxpRUFBUSxDQUFDLElBQUk7Z0JBQ1osOERBQUssS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxTQUFTLEVBQUMsR0FBRyxFQUFDLDBDQUEwQyxHQUFHO2dCQUM3RixxREFBQyxpRUFBUSxDQUFDLE9BQU87b0JBQ2YsMEVBQWU7b0JBQ2YseUVBQWEsQ0FDSSxDQUVMLENBQ1AsQ0FHWixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBQ0Qsd0RBQWUsU0FBUyxDQUFDOzs7Ozs7Ozs7OztBQ3JDTTtBQUcvQixtQkFBb0IsU0FBUSxnREFBZTtJQUV6Qyx1REFBdUQ7SUFDdkQsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWYsQ0FBQztJQUVELE1BQU07UUFHSixNQUFNLENBQUMsQ0FDTixrRkFBdUIsQ0FFdkIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUNELHdEQUFlLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCN0I7QUFBQTs7OztHQUlHO0FBRUgsNEZBQTRGO0FBQzVGLHVDQUF1QztBQUN2Qyw2RkFBNkY7QUFDdkU7QUFFdEIscUZBQXFGO0FBQ3REO0FBQ087QUFFMkI7QUFFakUsaURBQWUsQ0FDWCxxREFBQyx3RkFBYSxPQUFHLEVBQ2pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQUMiLCJmaWxlIjoiYXBwLmQ0NTJhMzRjYTg5NDE1MTE2YzA2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBTZWFyY2hUYWIgZnJvbSBcIi4vU2VhcmNoVGFiXCI7XHJcbmltcG9ydCBTcGRCYW5uZXIgZnJvbSBcIi4vU3BkQmFubmVyXCI7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSBcIi4vU2VhcmNoUmVzdWx0XCI7XHJcbmltcG9ydCBTdG9yZUxvY2F0aW9uIGZyb20gXCIuL1N0b3JlTG9jYXRpb25cIjtcclxuaW1wb3J0IEhlbHAgZnJvbSBcIi4vSGVscFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgUmVkaXJlY3QsIExpbmssIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VQYXJhbWV0ZXJzIHtcclxuICAgIHNlYXJjaHN0cmluZzogc3RyaW5nO1xyXG4gICAgcGFnZWlkOiBzdHJpbmc7XHJcblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVByb3BzIHtcclxuICAgIGNoYW5nZVBhcmFtKHBEYXRhOiBQYWdlUGFyYW1ldGVycyk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFBhZ2VVcmxzID1cclxuICAgIHtcclxuICAgICAgICBIT01FOiBcImhvbWVcIixcclxuICAgICAgICBTRUFSQ0g6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgUEFSVFM6IFwicGFydHNcIlxyXG4gICAgfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XHJcblxyXG4gICAgLy8gdGhpcyBjb25zdHJ1Y3RvciBpcyBuZWNlc3NhcnkgdG8gbWFrZSB0aGUgcHJvcHMgd29ya1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoc3RyaW5nOiAnJyxcclxuICAgICAgICAgICAgcGFnZWlkOiBQYWdlVXJscy5IT01FXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2VQYXJhbSA9IHRoaXMuY2hhbmdlUGFnZVBhcmFtLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoc3RyaW5nOiAnJyxcclxuICAgICAgICAgICAgcGFnZWlkOiBQYWdlVXJscy5IT01FXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNoYW5nZVBhZ2VQYXJhbShwRGF0YTogUGFnZVBhcmFtZXRlcnMpIHtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlaWQ6IHBEYXRhLnBhZ2VpZCwgc2VhcmNoc3RyaW5nOiBwRGF0YS5zZWFyY2hzdHJpbmcgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgICAgIDxSb3V0ZXIgIGJhc2VuYW1lPVwiL2RlbW9hcHAvXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGNoYW5nZVBhcmFtPXt0aGlzLmNoYW5nZVBhZ2VQYXJhbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2hlbHBcIiBjb21wb25lbnQ9e0hlbHB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9zdG9yZXNcIiBjb21wb25lbnQ9e1N0b3JlTG9jYXRpb259IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgcmVuZGVyPXsoKSA9PiA8UmVuZGVyUGFnZUNvbnRlbnQgcGFnZWlkPXt0aGlzLnN0YXRlLnBhZ2VpZH0gc2VhcmNoc3RyaW5nPXt0aGlzLnN0YXRlLnNlYXJjaHN0cmluZ30gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUm91dGVyPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcblxyXG4gICAgICAgIDwvZGl2Pik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgUmVuZGVyUGFnZUNvbnRlbnQgPSAocElkKSA9PiB7XHJcblxyXG4gICAgaWYgKHBJZC5wYWdlaWQgPT09IFwiaG9tZVwiKVxyXG4gICAgICAgIHJldHVybiAoPGRpdj48U3BkQmFubmVyIC8+PC9kaXY+KTtcclxuICAgIGlmIChwSWQucGFnZWlkID09PSBcInNlYXJjaFwiKVxyXG4gICAgICAgIHJldHVybiAoPGRpdj48U2VhcmNoUmVzdWx0IHNlYXJjaFN0cmluZz17cElkLnNlYXJjaHN0cmluZ30gLz48L2Rpdj4pO1xyXG4gICAgcmV0dXJuICg8ZGl2Pk5vIFBhZ2VzIEZvdW5kPC9kaXY+KTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL34vc291cmNlLW1hcC1sb2FkZXIhLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1BhZ2VDb250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TmF2LCBJbWFnZSxOYXZiYXIsIENvbGxhcHNlLCBOYXZJdGVtLCBOYXZMaW5rQ29udGFpbmVyICxOYXZMaW5rICxOYXZEcm9wZG93bixNZW51SXRlbX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyB0aGlzIGNvbnN0cnVjdG9yIGlzIG5lY2Vzc2FyeSB0byBtYWtlIHRoZSBwcm9wcyB3b3JrXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgcmV0dXJuIDxOYXYgY2xhc3NOYW1lPVwicHVsbC1kb3duXCI+XHJcbiAgICAgIDxOYXZJdGVtICBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhbjMgYW5jaG9yTGF5b3V0XCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJjb250ZW50LXN1YmhlYWRcIj5RdWljayBMaW5rczwvaDI+XHJcbiAgICAgIDx1bD5cclxuICAgICA8bGk+IDxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL3BhcnRzZGlyZWN0L3Byb2R1Y3QtdHlwZXMvXCI+QWxsIENhdGVnb3JpZXM8L2E+PC9saT5cclxuICAgICA8bGk+ICA8YSBkYXRhLW9tbml0dXJlPVwiXCIgaHJlZj1cIi9wYXJ0c2RpcmVjdC9icmFuZHMvXCI+QWxsIEJyYW5kcyA8L2E+PC9saT5cclxuICAgICA8bGk+ICA8YSBkYXRhLW9tbml0dXJlPVwiXCIgaHJlZj1cIi9wYXJ0c2RpcmVjdC91c2VyLW1hbnVhbHNcIj5Pd25lcidzIE1hbnVhbHM8L2E+PC9saT5cclxuICAgICA8bGk+ICA8YSBkYXRhLW9tbml0dXJlPVwiXCIgaHJlZj1cIi9wYXJ0c2RpcmVjdC9nZXRQYXJlbnRDYXRlZ29yeS5wZD9jYXRlZ29yeU5hbWU9S2l0Y2hlbitBcHBsaWFuY2VcIj5BcHBsaWFuY2UgUGFydHM8L2E+PC9saT5cclxuICAgICA8bGk+ICA8YSBkYXRhLW9tbml0dXJlPVwiXCIgaHJlZj1cIi9wYXJ0c2RpcmVjdC9tZXJjaGFuZGlzZXIvc2hvdy5wZD9kZXNjcmlwdGlvbj1XYXRlciUyMEZpbHRlcnNcIj5SZWZyaWdlcmF0b3IgV2F0ZXIgRmlsdGVyczwvYT48L2xpPlxyXG4gICAgIDxsaT4gIDxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL3BhcnRzZGlyZWN0L2dldFBhcmVudENhdGVnb3J5LnBkP2NhdGVnb3J5TmFtZT1MYXduLU1vd2VyLVBhcnRzXCI+TGF3biBNb3dlciBQYXJ0czwvYT48L2xpPlxyXG4gICAgIDxsaT4gPGEgZGF0YS1vbW5pdHVyZT1cIlwiIGhyZWY9XCIvcGFydHNkaXJlY3QvZ2V0UGFyZW50Q2F0ZWdvcnkucGQ/Y2F0ZWdvcnlOYW1lPVNub3ctQmxvd2VyLVBhcnRzXCI+U25vd2Jsb3dlciBQYXJ0czwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgIDwvZGl2PlxyXG4gICAgIDwvIE5hdkl0ZW0+XHJcbiAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhbjMgYW5jaG9yTGF5b3V0XCI+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJjb250ZW50LXN1YmhlYWRcIj5Zb3VyIEFjY291bnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBkYXRhLW9tbml0dXJlPVwiXCIgaHJlZj1cIi9vcmRlci1hbmQtc3Vic2NyaXB0aW9uLWxvb2t1cC5odG1sXCIgdGl0bGU9XCJPcmRlciBzdGF0dXNcIj5Zb3VyIE9yZGVyPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL3BhcnRzZGlyZWN0L2ZhcS5wZD9wb3A9Zmx1c2gmYW1wO2NvbW1lcmNpYWxVST1mYWxzZSNhdXRvbWF0aWNSZW9yZGVyc0ZBUVwiPkF1dG9tYXRpYyBSZW9yZGVyczwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LnNlYXJzcGFydHNkaXJlY3QuY29tL3BhcnRzZGlyZWN0L215UHJvZmlsZVNldHVwUHJlZmVyZW5jZXMucGRcIj5Zb3VyIFByb2ZpbGU8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPjxhICBkYXRhLWNvbXBvbmVudD1cIi9hcHBzL3NlYXJzcGFydHNkaXJlY3QvY29tcG9uZW50cy9jb250ZW50L3NwZFJlZGVzaWduR2xvYmFsRm9vdGVyXCIgZGF0YS1vbW5pdHVyZT1cIkZvb3RlciAtIEZlZWRiYWNrXCI+R2l2ZSBVcyBGZWVkYmFjazwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9wYXJ0c2RpcmVjdC9hYm91dFVzLnBkXCIgZGF0YS1vbW5pdHVyZT1cIkZvb3RlciAtIEFib3V0IFVzXCI+QWJvdXQgVXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvIE5hdkl0ZW0+XHJcbiAgICAgIDwvTmF2PlxyXG4gICAgfVxyXG4gfVxyXG4gZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2LCBJbWFnZSwgTmF2YmFyLCBDb2xsYXBzZSwgTmF2SXRlbSwgTmF2TGlua0NvbnRhaW5lciwgTmF2TGluaywgTmF2RHJvcGRvd24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IFJlZGlyZWN0LCBMaW5rLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBTZWFyY2hUYWIgZnJvbSAnLi9TZWFyY2hUYWInXHJcblxyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgQnV0dG9uLCBUZXh0QXJlYSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgUGFnZVByb3BzLCBQYWdlUGFyYW1ldGVycyB9IGZyb20gJ21vZHVsZXMvY29tcG9uZW50cy9QYWdlQ29udGFpbmVyJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBhZ2VQcm9wcywgUGFnZVBhcmFtZXRlcnM+IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlYXJjaHN0cmluZzogJycsXHJcbiAgICAgIHBhZ2VpZDogJ3NlYXJjaCdcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoLmJpbmQodGhpcylcclxuXHJcbiAgfVxyXG4gIHVwZGF0ZVN0YXRlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hzdHJpbmc6IHRoaXMucmVmcy5teUlucHV0LnZhbHVlIH0pO1xyXG5cclxuXHJcbiAgfVxyXG4gIHNlYXJjaChlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VpZDogJ3NlYXJjaCcgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZVBhcmFtKHRoaXMuc3RhdGUpO1xyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGJnQmx1ZSA9IHsgYmFja2dyb3VuZENvbG9yOiAnIzAwMDA4QicsIGNvbG9yOiBcIiNGRkZcIiB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8Zm9ybSA+XHJcblxyXG4gICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaHN0cmluZ30gb25DaGFuZ2U9e3RoaXMudXBkYXRlU3RhdGV9XHJcbiAgICAgICAgICAgIHJlZj1cIm15SW5wdXRcIj48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaH0+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxOYXZiYXIgc3R5bGU9e2JnQmx1ZX0+XHJcbiAgICAgICAgICA8TmF2YmFyLkhlYWRlcj5cclxuICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2hvbWVcIj4gPEltYWdlIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ltZy9sb2dvLmpwZ1wiIC8+PC9hPlxyXG4gICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxyXG5cclxuICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezF9IGhyZWY9XCIjXCI+XHJcblxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcblxyXG5cclxuICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezJ9IGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvaGVscFwiPiBIZWxwIC04ODguODczLjM4Mjk8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezR9IGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvc3RvcmVzXCI+U3RvcmUgTG9jYXRpb24gPC9MaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9ezN9IHRpdGxlPVwiQ2FydC9BY2NvdW50XCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezMuMX0+Q2FydDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXszLjJ9PkFjY291bnQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9IZWFkZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIEhlbHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyB0aGlzIGNvbnN0cnVjdG9yIGlzIG5lY2Vzc2FyeSB0byBtYWtlIHRoZSBwcm9wcyB3b3JrXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgXHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgIDxoMT5IZWxwIFBhZ2U8L2gxPlxyXG5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlbHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvSGVscC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmZ1bmN0aW9uIFNlYXJjaFJlc3VsdChwcm9wcylcclxue1xyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPlNlYXJjaFJlc3VsdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgTm8gcmVzdWx0cyBmb3IgPGRpdiBpZD1cInNyY2hzdHJcIj57cHJvcHMuc2VhcmNoU3RyaW5nfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL34vc291cmNlLW1hcC1sb2FkZXIhLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltYWdlLCBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5jbGFzcyBTcGRCYW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyB0aGlzIGNvbnN0cnVjdG9yIGlzIG5lY2Vzc2FyeSB0byBtYWtlIHRoZSBwcm9wcyB3b3JrXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgXHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICA8Q2Fyb3VzZWw+XHJcbiAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICA8aW1nIHdpZHRoPXs5MDB9IGhlaWdodD17NTAwfSBhbHQ9XCI5MDB4NTAwXCIgc3JjPVwiJVBVQkxJQ19VUkwlL2Fzc2V0cy9pbWFnZXMvaW1nL01vd2VyLmpwZ1wiIC8+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPGgzPk9mZmVyMTwvaDM+XHJcbiAgICAgICAgICAgIDxwPk9mZmVyMTwvcD5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICA8aW1nIHdpZHRoPXs5MDB9IGhlaWdodD17NTAwfSBhbHQ9XCI5MDB4NTAwXCIgc3JjPVwiJVBVQkxJQ19VUkwlL2Fzc2V0cy9pbWFnZXMvaW1nL01vd2VyLmpwZ1wiIC8+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPGgzPk9mZmVyMjwvaDM+XHJcbiAgICAgICAgICAgIDxwPk9mZmVyMzwvcD5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHJcbiAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG5cclxuXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTcGRCYW5uZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvU3BkQmFubmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jbGFzcyBTdG9yZUxvY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gdGhpcyBjb25zdHJ1Y3RvciBpcyBuZWNlc3NhcnkgdG8gbWFrZSB0aGUgcHJvcHMgd29ya1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gIFxyXG5cclxuICAgIHJldHVybiAoICBcclxuICAgICA8aDE+U3RvcmUgTG9jYXRpb248L2gxPlxyXG5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlTG9jYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvU3RvcmVMb2NhdGlvbi50c3giLCIvKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBUaGlzIHRoZSByb290IGNvbXBvbmVudCBmb3IgeW91ciBhcHAuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8vIGltcG9ydCByb290IGxlc3MgZmlsZSBoZXJlIGFzIGFuIGVudHJ5IHBvaW50IGZvciBhbGwgb3RoZXIgbGVzcyBmaWxlcy4gdGhlc2UgYXJlIGltcG9ydGVkXG4vLyBpbiBpbmRleC5sZXNzIChpbmNsdWRpbmcgYm9vdHN0cmFwKS5cbi8vIFlvdSBjYW4gYWxzbyBpbXBvcnQgbGVzcyBmaWxlcyBpbiBvdGhlciB0c3ggZmlsZXMgaW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlbSBpbiBpbmRleC5sZXNzLlxuaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XG5cbi8vIGltcG9ydCBcIlJlYWN0XCIgaGVyZSB0byBwcmV2ZW50IHRoZSBlcnJvciBcIlRTMjY4NiBbLi4uXXJlZmVycyB0byBhIFVNRCBnbG9iYWxbLi4uXVwiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IHtQYWdlQ29udGFpbmVyfSBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFBhZ2VDb250YWluZXIgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VSb290IjoiIn0=