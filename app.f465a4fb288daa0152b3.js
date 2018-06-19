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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SpdBanner__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SearchResult__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StoreLocation__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Help__ = __webpack_require__(350);
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

/***/ 155:
/***/ (function(module, exports) {

module.exports = "assets/Mower.jpg";

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "assets/logo.jpg";

/***/ }),

/***/ 348:
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_logo_jpg__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_logo_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_assets_logo_jpg__);




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
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["e" /* Image */], { src: __WEBPACK_IMPORTED_MODULE_3_assets_logo_jpg___default.a })))),
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

/***/ 350:
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

/***/ 351:
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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_Mower_jpg__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_Mower_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_assets_Mower_jpg__);



class SpdBanner extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */].Item, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { width: 900, height: 500, alt: "900x500", src: __WEBPACK_IMPORTED_MODULE_2_assets_Mower_jpg___default.a }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */].Caption, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Offer1"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Offer1"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */].Item, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { width: 900, height: 500, alt: "900x500", src: __WEBPACK_IMPORTED_MODULE_2_assets_Mower_jpg___default.a }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Carousel */].Caption, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Offer2"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Offer3")))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = SpdBanner;


/***/ }),

/***/ 353:
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

/***/ 354:
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

},[354]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1BhZ2VDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvaW1nL01vd2VyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2ltZy9sb2dvLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvSGVscC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvU3BkQmFubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1N0b3JlTG9jYXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7QUFDRDtBQUNBO0FBRU07QUFDTTtBQUNFO0FBQ2xCO0FBRXVDO0FBQ047QUFXcEQsTUFBTSxRQUFRLEdBQ2pCO0lBQ0ksSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsT0FBTztDQUNqQixDQUFDO0FBQUE7QUFBQTtBQUVBLG1CQUFxQixTQUFRLGdEQUF5QjtJQUV4RCx1REFBdUQ7SUFDdkQsWUFBWSxLQUFLO1FBQ2IsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN4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QyxLQUFLLENBQUMsQ0FDakMsQ0FBQyIsImZpbGUiOiJhcHAuZjQ2NWE0ZmIyODhkYWEwMTUyYjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IFNlYXJjaFRhYiBmcm9tIFwiLi9TZWFyY2hUYWJcIjtcclxuaW1wb3J0IFNwZEJhbm5lciBmcm9tIFwiLi9TcGRCYW5uZXJcIjtcclxuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tIFwiLi9TZWFyY2hSZXN1bHRcIjtcclxuaW1wb3J0IFN0b3JlTG9jYXRpb24gZnJvbSBcIi4vU3RvcmVMb2NhdGlvblwiO1xyXG5pbXBvcnQgSGVscCBmcm9tIFwiLi9IZWxwXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgTGluaywgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVBhcmFtZXRlcnMge1xyXG4gICAgc2VhcmNoc3RyaW5nOiBzdHJpbmc7XHJcbiAgICBwYWdlaWQ6IHN0cmluZztcclxuXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlUHJvcHMge1xyXG4gICAgY2hhbmdlUGFyYW0ocERhdGE6IFBhZ2VQYXJhbWV0ZXJzKTtcclxufVxyXG5leHBvcnQgY29uc3QgUGFnZVVybHMgPVxyXG4gICAge1xyXG4gICAgICAgIEhPTUU6IFwiaG9tZVwiLFxyXG4gICAgICAgIFNFQVJDSDogXCJzZWFyY2hcIixcclxuICAgICAgICBQQVJUUzogXCJwYXJ0c1wiXHJcbiAgICB9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcclxuXHJcbiAgICAvLyB0aGlzIGNvbnN0cnVjdG9yIGlzIG5lY2Vzc2FyeSB0byBtYWtlIHRoZSBwcm9wcyB3b3JrXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hzdHJpbmc6ICcnLFxyXG4gICAgICAgICAgICBwYWdlaWQ6IFBhZ2VVcmxzLkhPTUVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZVBhcmFtID0gdGhpcy5jaGFuZ2VQYWdlUGFyYW0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hzdHJpbmc6ICcnLFxyXG4gICAgICAgICAgICBwYWdlaWQ6IFBhZ2VVcmxzLkhPTUVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2hhbmdlUGFnZVBhcmFtKHBEYXRhOiBQYWdlUGFyYW1ldGVycykge1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VpZDogcERhdGEucGFnZWlkLCBzZWFyY2hzdHJpbmc6IHBEYXRhLnNlYXJjaHN0cmluZyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICAgICAgPFJvdXRlciAgYmFzZW5hbWU9XCIvZGVtb2FwcC9cIiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgY2hhbmdlUGFyYW09e3RoaXMuY2hhbmdlUGFnZVBhcmFtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaGVscFwiIGNvbXBvbmVudD17SGVscH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3N0b3Jlc1wiIGNvbXBvbmVudD17U3RvcmVMb2NhdGlvbn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiByZW5kZXI9eygpID0+IDxSZW5kZXJQYWdlQ29udGVudCBwYWdlaWQ9e3RoaXMuc3RhdGUucGFnZWlkfSBzZWFyY2hzdHJpbmc9e3RoaXMuc3RhdGUuc2VhcmNoc3RyaW5nfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZW5kZXJQYWdlQ29udGVudCA9IChwSWQpID0+IHtcclxuXHJcbiAgICBpZiAocElkLnBhZ2VpZCA9PT0gXCJob21lXCIpXHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PjxTcGRCYW5uZXIgLz48L2Rpdj4pO1xyXG4gICAgaWYgKHBJZC5wYWdlaWQgPT09IFwic2VhcmNoXCIpXHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PjxTZWFyY2hSZXN1bHQgc2VhcmNoU3RyaW5nPXtwSWQuc2VhcmNoc3RyaW5nfSAvPjwvZGl2Pik7XHJcbiAgICByZXR1cm4gKDxkaXY+Tm8gUGFnZXMgRm91bmQ8L2Rpdj4pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci50c3giLCJtb2R1bGUuZXhwb3J0cyA9IFwiYXNzZXRzL01vd2VyLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9pbWcvTW93ZXIuanBnXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImFzc2V0cy9sb2dvLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9pbWcvbG9nby5qcGdcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtOYXYsIEltYWdlLE5hdmJhciwgQ29sbGFwc2UsIE5hdkl0ZW0sIE5hdkxpbmtDb250YWluZXIgLE5hdkxpbmsgLE5hdkRyb3Bkb3duLE1lbnVJdGVtfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHRoaXMgY29uc3RydWN0b3IgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgdGhlIHByb3BzIHdvcmtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICByZXR1cm4gPE5hdiBjbGFzc05hbWU9XCJwdWxsLWRvd25cIj5cclxuICAgICAgPE5hdkl0ZW0gIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFuMyBhbmNob3JMYXlvdXRcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbnRlbnQtc3ViaGVhZFwiPlF1aWNrIExpbmtzPC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgIDxsaT4gPGEgZGF0YS1vbW5pdHVyZT1cIlwiIGhyZWY9XCIvcGFydHNkaXJlY3QvcHJvZHVjdC10eXBlcy9cIj5BbGwgQ2F0ZWdvcmllczwvYT48L2xpPlxyXG4gICAgIDxsaT4gIDxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL3BhcnRzZGlyZWN0L2JyYW5kcy9cIj5BbGwgQnJhbmRzIDwvYT48L2xpPlxyXG4gICAgIDxsaT4gIDxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL3BhcnRzZGlyZWN0L3VzZXItbWFudWFsc1wiPk93bmVyJ3MgTWFudWFsczwvYT48L2xpPlxyXG4gICAgIDxsaT4gIDxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL3BhcnRzZGlyZWN0L2dldFBhcmVudENhdGVnb3J5LnBkP2NhdGVnb3J5TmFtZT1LaXRjaGVuK0FwcGxpYW5jZVwiPkFwcGxpYW5jZSBQYXJ0czwvYT48L2xpPlxyXG4gICAgIDxsaT4gIDxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL3BhcnRzZGlyZWN0L21lcmNoYW5kaXNlci9zaG93LnBkP2Rlc2NyaXB0aW9uPVdhdGVyJTIwRmlsdGVyc1wiPlJlZnJpZ2VyYXRvciBXYXRlciBGaWx0ZXJzPC9hPjwvbGk+XHJcbiAgICAgPGxpPiAgPGEgZGF0YS1vbW5pdHVyZT1cIlwiIGhyZWY9XCIvcGFydHNkaXJlY3QvZ2V0UGFyZW50Q2F0ZWdvcnkucGQ/Y2F0ZWdvcnlOYW1lPUxhd24tTW93ZXItUGFydHNcIj5MYXduIE1vd2VyIFBhcnRzPC9hPjwvbGk+XHJcbiAgICAgPGxpPiA8YSBkYXRhLW9tbml0dXJlPVwiXCIgaHJlZj1cIi9wYXJ0c2RpcmVjdC9nZXRQYXJlbnRDYXRlZ29yeS5wZD9jYXRlZ29yeU5hbWU9U25vdy1CbG93ZXItUGFydHNcIj5Tbm93Ymxvd2VyIFBhcnRzPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPC8gTmF2SXRlbT5cclxuICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFuMyBhbmNob3JMYXlvdXRcIj5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImNvbnRlbnQtc3ViaGVhZFwiPllvdXIgQWNjb3VudDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIGRhdGEtb21uaXR1cmU9XCJcIiBocmVmPVwiL29yZGVyLWFuZC1zdWJzY3JpcHRpb24tbG9va3VwLmh0bWxcIiB0aXRsZT1cIk9yZGVyIHN0YXR1c1wiPllvdXIgT3JkZXI8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvcGFydHNkaXJlY3QvZmFxLnBkP3BvcD1mbHVzaCZhbXA7Y29tbWVyY2lhbFVJPWZhbHNlI2F1dG9tYXRpY1Jlb3JkZXJzRkFRXCI+QXV0b21hdGljIFJlb3JkZXJzPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuc2VhcnNwYXJ0c2RpcmVjdC5jb20vcGFydHNkaXJlY3QvbXlQcm9maWxlU2V0dXBQcmVmZXJlbmNlcy5wZFwiPllvdXIgUHJvZmlsZTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+PGEgIGRhdGEtY29tcG9uZW50PVwiL2FwcHMvc2VhcnNwYXJ0c2RpcmVjdC9jb21wb25lbnRzL2NvbnRlbnQvc3BkUmVkZXNpZ25HbG9iYWxGb290ZXJcIiBkYXRhLW9tbml0dXJlPVwiRm9vdGVyIC0gRmVlZGJhY2tcIj5HaXZlIFVzIEZlZWRiYWNrPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL3BhcnRzZGlyZWN0L2Fib3V0VXMucGRcIiBkYXRhLW9tbml0dXJlPVwiRm9vdGVyIC0gQWJvdXQgVXNcIj5BYm91dCBVczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8gTmF2SXRlbT5cclxuICAgICAgPC9OYXY+XHJcbiAgICB9XHJcbiB9XHJcbiBleHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9Gb290ZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXYsIEltYWdlLCBOYXZiYXIsIENvbGxhcHNlLCBOYXZJdGVtLCBOYXZMaW5rQ29udGFpbmVyLCBOYXZMaW5rLCBOYXZEcm9wZG93biwgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgUmVkaXJlY3QsIExpbmssIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFNlYXJjaFRhYiBmcm9tICcuL1NlYXJjaFRhYidcclxuXHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBCdXR0b24sIFRleHRBcmVhIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBQYWdlUHJvcHMsIFBhZ2VQYXJhbWV0ZXJzIH0gZnJvbSAnbW9kdWxlcy9jb21wb25lbnRzL1BhZ2VDb250YWluZXInO1xyXG5cclxuXHJcbmltcG9ydCBsb2dvaW1nIGZyb20gJ2Fzc2V0cy9sb2dvLmpwZyc7IFxyXG5cclxuXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGFnZVByb3BzLCBQYWdlUGFyYW1ldGVycz4ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VhcmNoc3RyaW5nOiAnJyxcclxuICAgICAgcGFnZWlkOiAnc2VhcmNoJ1xyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcylcclxuICAgIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKVxyXG5cclxuICB9XHJcbiAgdXBkYXRlU3RhdGUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaHN0cmluZzogdGhpcy5yZWZzLm15SW5wdXQudmFsdWUgfSk7XHJcblxyXG5cclxuICB9XHJcbiAgc2VhcmNoKGUpIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFnZWlkOiAnc2VhcmNoJyB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlUGFyYW0odGhpcy5zdGF0ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgYmdCbHVlID0geyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDhCJywgY29sb3I6IFwiI0ZGRlwiIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDxmb3JtID5cclxuXHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoc3RyaW5nfSBvbkNoYW5nZT17dGhpcy51cGRhdGVTdGF0ZX1cclxuICAgICAgICAgICAgcmVmPVwibXlJbnB1dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNofT5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPE5hdmJhciBzdHlsZT17YmdCbHVlfT5cclxuICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxyXG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiPiA8SW1hZ2Ugc3JjPXtsb2dvaW1nfSAvPjwvYT5cclxuICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cclxuXHJcbiAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfSBocmVmPVwiI1wiPlxyXG5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsyfSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hlbHBcIj4gSGVscCAtODg4Ljg3My4zODI5PC9MaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXs0fSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3N0b3Jlc1wiPlN0b3JlIExvY2F0aW9uIDwvTGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG5cclxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duIGV2ZW50S2V5PXszfSB0aXRsZT1cIkNhcnQvQWNjb3VudFwiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXszLjF9PkNhcnQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17My4yfT5BY2NvdW50PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuXHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L05hdmJhcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jbGFzcyBIZWxwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gdGhpcyBjb25zdHJ1Y3RvciBpcyBuZWNlc3NhcnkgdG8gbWFrZSB0aGUgcHJvcHMgd29ya1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gIFxyXG5cclxuICAgIHJldHVybiAoICBcclxuICAgICA8aDE+SGVscCBQYWdlPC9oMT5cclxuXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWxwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL34vc291cmNlLW1hcC1sb2FkZXIhLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL0hlbHAudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5mdW5jdGlvbiBTZWFyY2hSZXN1bHQocHJvcHMpXHJcbntcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5TZWFyY2hSZXN1bHRzPC9oMT5cclxuICAgICAgICAgICAgICAgIE5vIHJlc3VsdHMgZm9yIDxkaXYgaWQ9XCJzcmNoc3RyXCI+e3Byb3BzLnNlYXJjaFN0cmluZ308L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSwgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgYmFubmVyaW1nIGZyb20gJ2Fzc2V0cy9Nb3dlci5qcGcnOyBcclxuY2xhc3MgU3BkQmFubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gdGhpcyBjb25zdHJ1Y3RvciBpcyBuZWNlc3NhcnkgdG8gbWFrZSB0aGUgcHJvcHMgd29ya1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gIFxyXG5cclxuICAgIHJldHVybiAoICBcclxuICAgICAgPENhcm91c2VsPlxyXG4gICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgPGltZyB3aWR0aD17OTAwfSBoZWlnaHQ9ezUwMH0gYWx0PVwiOTAweDUwMFwiIHNyYz17YmFubmVyaW1nfS8+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPGgzPk9mZmVyMTwvaDM+XHJcbiAgICAgICAgICAgIDxwPk9mZmVyMTwvcD5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICA8aW1nIHdpZHRoPXs5MDB9IGhlaWdodD17NTAwfSBhbHQ9XCI5MDB4NTAwXCIgc3JjPXtiYW5uZXJpbWd9IC8+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPGgzPk9mZmVyMjwvaDM+XHJcbiAgICAgICAgICAgIDxwPk9mZmVyMzwvcD5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHJcbiAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG5cclxuXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTcGRCYW5uZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvU3BkQmFubmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jbGFzcyBTdG9yZUxvY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gdGhpcyBjb25zdHJ1Y3RvciBpcyBuZWNlc3NhcnkgdG8gbWFrZSB0aGUgcHJvcHMgd29ya1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gIFxyXG5cclxuICAgIHJldHVybiAoICBcclxuICAgICA8aDE+U3RvcmUgTG9jYXRpb248L2gxPlxyXG5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlTG9jYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvU3RvcmVMb2NhdGlvbi50c3giLCIvKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBUaGlzIHRoZSByb290IGNvbXBvbmVudCBmb3IgeW91ciBhcHAuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8vIGltcG9ydCByb290IGxlc3MgZmlsZSBoZXJlIGFzIGFuIGVudHJ5IHBvaW50IGZvciBhbGwgb3RoZXIgbGVzcyBmaWxlcy4gdGhlc2UgYXJlIGltcG9ydGVkXG4vLyBpbiBpbmRleC5sZXNzIChpbmNsdWRpbmcgYm9vdHN0cmFwKS5cbi8vIFlvdSBjYW4gYWxzbyBpbXBvcnQgbGVzcyBmaWxlcyBpbiBvdGhlciB0c3ggZmlsZXMgaW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlbSBpbiBpbmRleC5sZXNzLlxuaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XG5cbi8vIGltcG9ydCBcIlJlYWN0XCIgaGVyZSB0byBwcmV2ZW50IHRoZSBlcnJvciBcIlRTMjY4NiBbLi4uXXJlZmVycyB0byBhIFVNRCBnbG9iYWxbLi4uXVwiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IHtQYWdlQ29udGFpbmVyfSBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFBhZ2VDb250YWluZXIgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VSb290IjoiIn0=