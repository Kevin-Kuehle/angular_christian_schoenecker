function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-home-home-module */
        [__webpack_require__.e("default~modules-admin-admin-module~modules-home-home-module~modules-login-login-module"), __webpack_require__.e("default~modules-admin-admin-module~modules-home-home-module"), __webpack_require__.e("modules-home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/home/home.module */
        "./src/app/modules/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-login-login-module */
        [__webpack_require__.e("default~modules-admin-admin-module~modules-home-home-module~modules-login-login-module"), __webpack_require__.e("default~modules-admin-admin-module~modules-login-login-module"), __webpack_require__.e("modules-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/login/login.module */
        "./src/app/modules/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'admin/home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-admin-admin-module */
        [__webpack_require__.e("default~modules-admin-admin-module~modules-home-home-module~modules-login-login-module"), __webpack_require__.e("default~modules-admin-admin-module~modules-login-login-module"), __webpack_require__.e("default~modules-admin-admin-module~modules-home-home-module"), __webpack_require__.e("modules-admin-admin-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/admin/admin.module */
        "./src/app/modules/admin/admin.module.ts")).then(function (m) {
          return m.AdminModule;
        });
      }
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }, {
      path: '**',
      redirectTo: 'home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/header/header.component */
    "./src/app/core/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/footer/footer.component */
    "./src/app/core/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'actorWebsite';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_1__["init"]({
            duration: 800
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["ac-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "contentBody"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ac-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ac-footer");
        }
      },
      directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ac-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _actor_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @actor/core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/header/header.component */
    "./src/app/core/header/header.component.ts");
    /* harmony import */


    var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/footer/footer.component */
    "./src/app/core/footer/footer.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _actor_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _actor_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _actor_core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      providers: [],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, {
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]],
        exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          providers: [],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]],
          exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/footer/footer.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/footer/footer.component.ts ***!
    \*************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCoreFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_mobile_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/mobile-handler.service */
    "./src/app/core/services/mobile-handler.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function FooterComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Christian");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sch\xF6necker ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Impessum", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Datenschutz", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Login");
      }
    }

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(data) {
        _classCallCheck(this, FooterComponent);

        this.data = data;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.data.isMobile.subscribe(function (message) {
            return _this.isMobile = message;
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mobile_handler_service__WEBPACK_IMPORTED_MODULE_1__["MobileHandlerService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["ac-footer"]],
      decls: 2,
      vars: 3,
      consts: [[1, "footer"], ["class", "container center", 4, "ngIf"], [1, "container", "center"], [1, "flex-container"], [1, "logo"], [1, "name"], [1, "footer-menu-container"], [1, "footer-menu"], ["routerLink", "/login"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 18, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isMobile", ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  margin-top: 8rem;\n  background-color: #0D3D1B;\n}\n.footer.isMobile[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n}\nul.footer-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n}\nul.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\nul.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\nul.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: var(--main-font);\n  color: var(--light-color);\n  font-size: 1.125em;\n}\nul.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\nspan.name[_ngcontent-%COMP%] {\n  font-size: 1.8125em;\n  font-family: var(--main-font);\n  color: var(--light-color);\n  font-weight: 300;\n}\nspan.name[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvQzpcXFVzZXJzXFxLZXZpblxcRGVza3RvcFxcY2hyaXN0aWFuX3NjaG9lbmVja2VyL3NyY1xcYXBwXFxjb3JlXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDREY7QURHRTtFQUNFLFlBQUE7QUNESjtBREtBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDRkY7QURLQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDRkY7QURJRTtFQUNFLGtCQUFBO0FDRko7QURJSTtFQUNFLGVBQUE7QUNGTjtBREtJO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSE47QURLTTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQ0hSO0FEU0E7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ05GO0FEUUU7RUFDRSxtQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnZ3JpZCc7XHJcblxyXG4uZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDhyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBEM0QxQjtcclxuXHJcbiAgJi5pc01vYmlsZSB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG51bC5mb290ZXItbWVudSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XHJcbiAgICAgIGZvbnQtc2l6ZTogZW0oMThweCwgMTZweCk7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnNwYW4ubmFtZSB7XHJcbiAgZm9udC1zaXplOiBlbSgyOXB4LCAxNnB4KTtcclxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG4gIGIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcclxuICB9XHJcbn1cclxuIiwiLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiA4cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQzRDFCO1xufVxuLmZvb3Rlci5pc01vYmlsZSB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxudWwuZm9vdGVyLW1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG59XG51bC5mb290ZXItbWVudSBsaSB7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbnVsLmZvb3Rlci1tZW51IGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG51bC5mb290ZXItbWVudSBsaSBhIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cbnVsLmZvb3Rlci1tZW51IGxpIGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5zcGFuLm5hbWUge1xuICBmb250LXNpemU6IDEuODEyNWVtO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbnNwYW4ubmFtZSBiIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ac-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [{
          type: _services_mobile_handler_service__WEBPACK_IMPORTED_MODULE_1__["MobileHandlerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/header/header.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/header/header.component.ts ***!
    \*************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCoreHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_mobile_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/mobile-handler.service */
    "./src/app/core/services/mobile-handler.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["mobileMenu"];

    function HeaderComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.toggleMobileMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_3_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.scroll("sectionBiografie");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_3_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.scroll("sectionAktuell");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_3_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.scroll("sectionVita");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_3_Template_a_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.scroll("sectionMedia");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "Biogafie"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "Aktuell"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "Vita"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "Media"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 13, "Kontakt"));
      }
    }

    function HeaderComponent_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_4_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.scroll("sectionBiografie");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_4_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.scroll("sectionAktuell");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_4_Template_a_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.scroll("sectionVita");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_4_Template_a_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.scroll("sectionMedia");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_4_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.toggleMobileMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "Men\xFC"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, "Biogafie"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, "Aktuell"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, "Vita"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, "Media"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 18, "Kontakt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 20, "Impressum"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 22, "Datenschutz"));
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(data, renderer) {
        _classCallCheck(this, HeaderComponent);

        this.data = data;
        this.renderer = renderer;
        this.headerClasses = {
          flyOut: false
        };
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.data.isMobile.subscribe(function (status) {
            return _this2.isMobile = status;
          });
          this.hideTopBarHandler();
        }
      }, {
        key: "scroll",
        value: function scroll(el) {
          var toScroll = document.querySelector('#' + el);
          toScroll.scrollIntoView({
            behavior: 'smooth'
          });
          this.toggleMobileMenu();
        }
      }, {
        key: "toggleMobileMenu",
        value: function toggleMobileMenu() {
          this.mobileMenu.nativeElement.classList.toggle('menuOn');
        }
      }, {
        key: "hideTopBarHandler",
        value: function hideTopBarHandler() {
          var _this3 = this;

          var lastScrollTop = 0;
          var refValue = 0;
          addEventListener('scroll', function (test) {
            var siteYoffset = window.pageYOffset;

            if (lastScrollTop < siteYoffset && siteYoffset > 400) {
              _this3.headerClasses.flyOut = true;
              refValue = siteYoffset;
            } else if (refValue - 100 > siteYoffset) {
              _this3.headerClasses.flyOut = false;
            }

            lastScrollTop = siteYoffset <= 0 ? 0 : siteYoffset;
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mobile_handler_service__WEBPACK_IMPORTED_MODULE_1__["MobileHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["ac-header"]],
      viewQuery: function HeaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mobileMenu = _t.first);
        }
      },
      decls: 10,
      vars: 4,
      consts: [[1, "header", 3, "ngClass"], [1, "container", "grid"], ["class", "mobileButton", 3, "click", 4, "ngIf"], ["class", "main-menu", 4, "ngIf"], ["class", "mobileMenu", 4, "ngIf"], [1, "socials"], [1, "flex-container"], [1, "instagram", "iconBox", "instagram"], [1, "instagram", "iconBox", "facebook"], [1, "instagram", "iconBox", "youtube"], [1, "mobileButton", 3, "click"], ["enable-background", "new 0 0 384 384", "version", "1.1", "viewBox", "0 0 384 384", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg"], ["y", "277.33", "width", "384", "height", "42.667"], ["y", "170.67", "width", "384", "height", "42.667"], ["y", "64", "width", "384", "height", "42.667"], [1, "main-menu"], [3, "click"], [1, "mobileMenu"], ["mobileMenu", ""], [1, "menuTitle"], [1, "closeButton", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_2_Template, 5, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_ul_3_Template, 21, 15, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_ul_4_Template, 35, 24, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.headerClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]],
      styles: ["@font-face {\n  font-family: \"geomanistregular\";\n  src: url(\"/assets/fonts/geomanist-regular-webfont.eot\");\n  src: url(\"/assets/fonts/geomanist-regular-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/geomanist-regular-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/geomanist-regular-webfont.woff\") format(\"woff\"), url(\"/assets/fonts/geomanist-regular-webfont.ttf\") format(\"truetype\"), url(\"/assets/fonts/geomanist-regular-webfont.svg#geomanistregular\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\np[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-family: var(--main-font);\n  font-size: 1em;\n  line-height: 1.8125em;\n}\np.light[_ngcontent-%COMP%] {\n  color: var(--light-color);\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--title-font);\n  text-rendering: optimizeSpeed;\n  text-align: center;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--title-font);\n  font-size: 3.625em;\n  font-weight: 100 !important;\n}\nh1[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 30.4px;\n  color: var(--dark-color);\n  position: relative;\n  margin-bottom: 90px;\n  margin-top: 25px;\n}\n@media (min-width: 320px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: calc(30.4px + 7.6 * (100vw - 320px) / 640);\n  }\n}\n@media (min-width: 960px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n}\n@media (min-width: 320px) {\n  h2[_ngcontent-%COMP%] {\n    margin-bottom: calc(90px + 47 * (100vw - 320px) / 640);\n  }\n}\n@media (min-width: 960px) {\n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 137px;\n  }\n}\n@media (min-width: 320px) {\n  h2[_ngcontent-%COMP%] {\n    margin-top: calc(25px + 45 * (100vw - 320px) / 640);\n  }\n}\n@media (min-width: 960px) {\n  h2[_ngcontent-%COMP%] {\n    margin-top: 70px;\n  }\n}\nh2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 46px;\n  display: block;\n  height: 7px;\n  position: absolute;\n  background-color: var(--akzent-color);\n  left: 50%;\n  bottom: 100%;\n  transform: translateX(-50%) translateY(85px);\n}\n@media (max-width: 47em) {\n  h2[_ngcontent-%COMP%]::after {\n    transform: translateX(-50%) translateY(65px);\n  }\n}\nh2.light[_ngcontent-%COMP%] {\n  color: var(--light-color);\n}\nh2.light[_ngcontent-%COMP%]::after {\n  background-color: var(--light-color);\n}\nh3[_ngcontent-%COMP%] {\n  color: var(--akzent-color);\n  text-align: left;\n  font-size: 25.6px;\n  margin-bottom: 1rem;\n  margin-top: 1em;\n  text-transform: uppercase;\n}\n@media (min-width: 320px) {\n  h3[_ngcontent-%COMP%] {\n    font-size: calc(25.6px + 6.4 * (100vw - 320px) / 640);\n  }\n}\n@media (min-width: 960px) {\n  h3[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n.button[_ngcontent-%COMP%] {\n  width: 192px;\n  height: 56px;\n  border-radius: 8px !important;\n  background-color: #4d4d4d;\n  color: var(--light-color);\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  font-family: var(--main-font);\n  font-size: 1em;\n  border: none;\n  z-index: 5;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n}\n.button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 0.3rem;\n}\n.button.center[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.button.btn-1[_ngcontent-%COMP%] {\n  background-color: var(--akzent-color);\n}\n.button.btn-1[_ngcontent-%COMP%]:hover {\n  background-color: #0f431d;\n}\n.button.btn-2[_ngcontent-%COMP%] {\n  background-color: #141414;\n}\n.button.btn-2[_ngcontent-%COMP%]:hover {\n  background-color: #1f1f1f;\n}\n.button.btn-3[_ngcontent-%COMP%] {\n  background-color: var(--akzent-color);\n}\n.button.btn-3[_ngcontent-%COMP%]:hover {\n  background-color: var(--akzent-color-dark);\n}\n.button.btn-4[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.button.btn-4[_ngcontent-%COMP%]:hover {\n  background-color: grey;\n}\n.button.spaceArround[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n@media (min-width: 320px) {\n  .button.spaceArround[_ngcontent-%COMP%] {\n    margin-top: calc(1rem + 1 * (100vw - 320px) / 640);\n  }\n}\n@media (min-width: 960px) {\n  .button.spaceArround[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n}\n@media (min-width: 320px) {\n  .button.spaceArround[_ngcontent-%COMP%] {\n    margin-bottom: calc(1rem + 1 * (100vw - 320px) / 640);\n  }\n}\n@media (min-width: 960px) {\n  .button.spaceArround[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n*[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\nhtml[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  font-family: var(--main-font);\n  height: 100%;\n  background-color: var(--site-background-color);\n}\nsection[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-vottom: 30px;\n}\n@media (min-width: 320px) {\n  section[_ngcontent-%COMP%] {\n    margin-top: calc(30px + 90 * (100vw - 320px) / 640);\n  }\n}\n@media (min-width: 960px) {\n  section[_ngcontent-%COMP%] {\n    margin-top: 120px;\n  }\n}\n@media (min-width: 320px) {\n  section[_ngcontent-%COMP%] {\n    margin-vottom: calc(30px + 90 * (100vw - 320px) / 640);\n  }\n}\n@media (min-width: 960px) {\n  section[_ngcontent-%COMP%] {\n    margin-vottom: 120px;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--site-width);\n  margin: 0 auto;\n  padding: 0 1rem;\n  overflow-x: hidden;\n}\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.container.center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  height: 100%;\n}\n.container.topSpace[_ngcontent-%COMP%] {\n  padding-top: 4.5rem;\n}\n.vitaDialog[_ngcontent-%COMP%] {\n  z-index: 6000;\n  width: 90vw;\n  max-width: var(--site-width);\n  z-index: 12000 !important;\n}\n@media (max-width: 47em) {\n  .vitaDialog[_ngcontent-%COMP%] {\n    height: auto;\n    max-height: 75vh;\n    top: 70px;\n    overflow-y: scroll;\n  }\n}\n.ui-editor-container[_ngcontent-%COMP%], .ui-editor-toolbar[_ngcontent-%COMP%], .ui-editor-content[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.ui-card[_ngcontent-%COMP%], .admin-card[_ngcontent-%COMP%] {\n  flex: 0 0 30%;\n  margin-bottom: 4em;\n  margin-right: 1em;\n}\nbody[_ngcontent-%COMP%]   .ui-paginator-bottom[_ngcontent-%COMP%] {\n  padding: 0.8rem 0 0.9rem 0;\n}\nbody[_ngcontent-%COMP%]   .ui-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: none !important;\n  color: var(--dark-color) !important;\n  border: none !important;\n}\nbody[_ngcontent-%COMP%]   .ui-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: none !important;\n}\nbody[_ngcontent-%COMP%]   .ui-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.1) !important;\n}\nbody[_ngcontent-%COMP%]   .ui-paginator[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding-top: 0.5rem;\n}\nbody[_ngcontent-%COMP%]   .ui-paginator[_ngcontent-%COMP%]   .ui-state-active[_ngcontent-%COMP%] {\n  background-color: var(--akzent-color) !important;\n}\nbody[_ngcontent-%COMP%]   .ui-dataview[_ngcontent-%COMP%]   .ui-dataview-header[_ngcontent-%COMP%] {\n  background-color: #306b2e;\n  color: white;\n  border: none;\n}\nbody[_ngcontent-%COMP%]   .ui-dataview[_ngcontent-%COMP%]   .ui-dataview-header[_ngcontent-%COMP%]   p-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-content: center;\n  justify-content: space-between;\n  justify-items: start;\n  align-items: center;\n  width: 100%;\n}\nbody[_ngcontent-%COMP%]   .ui-dialog[_ngcontent-%COMP%]   .ui-dialog-titlebar[_ngcontent-%COMP%]   .ui-dialog-titlebar-icon[_ngcontent-%COMP%] {\n  color: white;\n}\nbody[_ngcontent-%COMP%]   .ui-dialog[_ngcontent-%COMP%]   .ui-dialog-titlebar[_ngcontent-%COMP%]   .ui-dialog-titlebar-icon[_ngcontent-%COMP%]:hover {\n  color: var(--warn-color);\n}\nbody[_ngcontent-%COMP%]   .ui-dialog[_ngcontent-%COMP%]   .ui-dialog-titlebar[_ngcontent-%COMP%] {\n  background-color: var(--akzent-color-dark);\n  color: white;\n  border: none;\n}\nbody[_ngcontent-%COMP%]   .ui-dataview[_ngcontent-%COMP%]   .ui-dataview-content[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  border: none;\n  background-color: #1a1a1a;\n  color: white;\n}\n.backend-title[_ngcontent-%COMP%] {\n  font-family: var(--main-font);\n  font-size: 2em;\n  padding: 2em;\n}\n.pt[_ngcontent-%COMP%] {\n  padding-top: 10rem;\n}\n.pt-1[_ngcontent-%COMP%] {\n  padding-top: 0.5em;\n}\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n.pt-3[_ngcontent-%COMP%] {\n  padding-top: 1.5em;\n}\n.pt-4[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n}\n.pb-1[_ngcontent-%COMP%] {\n  padding-bottom: 0.5em;\n}\n.pb-2[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n}\n.pb-3[_ngcontent-%COMP%] {\n  padding-bottom: 1.5em;\n}\n.pb-4[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n}\n.pr-1[_ngcontent-%COMP%] {\n  padding-right: 0.5em;\n}\n.pr-2[_ngcontent-%COMP%] {\n  padding-right: 1em;\n}\n.pr-3[_ngcontent-%COMP%] {\n  padding-right: 1.5em;\n}\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 2em;\n}\n.pr-5[_ngcontent-%COMP%] {\n  padding-right: 2.5em;\n}\n.mr-1[_ngcontent-%COMP%] {\n  margin-right: 0.5em !important;\n}\n.mr-2[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n.mr-3[_ngcontent-%COMP%] {\n  margin-right: 1.5em;\n}\n.mr-4[_ngcontent-%COMP%] {\n  margin-right: 2em;\n}\n.mr-5[_ngcontent-%COMP%] {\n  margin-right: 2.5em;\n}\nac-root[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto auto auto;\n  grid-template-columns: 100%;\n  grid-template-areas: \"header\" \"content\" \"footer\";\n  --light-color: rgba(225, 223, 223, 1);\n  --dark-color: rgba(72, 72, 72, 1);\n  --akzent-color: hsla(137, 64%, 14%, 1);\n  --akzent-color-dark: hsla(137, 64%, 9%, 1);\n  --akzent-color-light: hsla(137, 64%, 27%, 1);\n  --secondary-color: rgba(140, 29, 29, 1);\n  --site-background-color: rgb(250, 250, 244);\n  --warn-color: rgb(230, 69, 69);\n  --darkblue: rgb(61, 32, 131);\n  --site-width: 1200px;\n  --title-font: \"Sarabun\",\n  sans-serif;\n  --main-font: \"geomanistregular\",\n  sans-serif;\n}\nac-root[_ngcontent-%COMP%]   ac-header[_ngcontent-%COMP%] {\n  grid-area: header;\n  z-index: 3000;\n}\nac-root[_ngcontent-%COMP%]   .contentBody[_ngcontent-%COMP%] {\n  grid-area: content;\n  min-height: calc(100vh - 128px);\n}\nac-root[_ngcontent-%COMP%]   ac-footer[_ngcontent-%COMP%] {\n  grid-area: footer;\n}\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(41, 41, 41, 0.94) 0% 0% no-repeat padding-box;\n  width: 100%;\n  height: 68px;\n  display: flex;\n  align-content: center;\n  z-index: 1000 !important;\n  transition: transform 0.6s ease;\n}\nheader.flyOut[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\nheader[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto auto 1fr;\n  grid-template-rows: auto;\n  grid-template-areas: \". menu socials .\";\n  align-content: center;\n  align-items: center;\n}\n@media (max-width: 62em) {\n  header[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 20% 1fr 20% !important;\n    grid-template-areas: \"mobile socials .\";\n    justify-content: center;\n  }\n}\nheader[_ngcontent-%COMP%]   .mobileButton[_ngcontent-%COMP%] {\n  grid-area: mobile;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin-right: 3rem;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .mobileButton[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  fill: white;\n}\nheader[_ngcontent-%COMP%]   .mobileButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: 30px;\n  width: auto;\n}\nheader[_ngcontent-%COMP%]   ul.main-menu[_ngcontent-%COMP%] {\n  grid-area: menu;\n  display: flex;\n  width: auto;\n  flex-flow: row;\n}\nheader[_ngcontent-%COMP%]   ul.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  list-style: none;\n}\nheader[_ngcontent-%COMP%]   ul.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  margin: 0 22px;\n  transform: translateY(-2px);\n  width: 8px;\n  height: 8px;\n  background: transparent url('menu_seperator.svg') 0% 0% no-repeat padding-box;\n}\nheader[_ngcontent-%COMP%]   ul.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--light-color);\n  padding: 0.2rem;\n  font-family: var(--title-font);\n  transition: all 0.1s ease-in-out;\n}\nheader[_ngcontent-%COMP%]   ul.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #27b44f;\n}\n.socials[_ngcontent-%COMP%] {\n  grid-area: socials;\n}\n.socials[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-content: center;\n}\n@media (max-width: 62em) {\n  .socials[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.socials[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-right: 1.2rem;\n}\n.socials[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.socials[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.socials[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--light-color);\n}\n.socials[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%] {\n  background-image: url('instagram_white.svg');\n}\n.socials[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\n  background-image: url('facebook_white.svg');\n}\n.socials[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%] {\n  background-image: url('youtube_white.svg');\n}\nul.mobileMenu[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 80vw;\n  display: flex;\n  flex-flow: column nowrap;\n  background-color: rgba(0, 0, 0, 0.88);\n  padding: 2rem 0 2rem 1rem;\n  transform: translateX(-100%);\n  transition: transform 0.4s ease;\n  list-style: none;\n}\nul.mobileMenu.menuOn[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\nul.mobileMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.9rem;\n}\nul.mobileMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\nul.mobileMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.6rem;\n  color: white;\n  font-family: var(--main-font);\n  font-size: 1.3rem;\n}\nul.mobileMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nul.mobileMenu[_ngcontent-%COMP%]   span.menuTitle[_ngcontent-%COMP%] {\n  color: white;\n  font-family: var(--title-font);\n  font-size: 1.5rem;\n  margin-bottom: 1.7rem;\n}\nul.mobileMenu[_ngcontent-%COMP%]   .closeButton[_ngcontent-%COMP%] {\n  border: none;\n  width: auto;\n  white-space: nowrap;\n  width: -moz-max-content;\n  width: -webkit-max-content;\n  width: -o-max-content;\n  width: -ms-max-content;\n  display: table;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 1rem;\n  background: none !important;\n  color: white;\n}\nul.mobileMenu[_ngcontent-%COMP%]   .closeButton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXFVzZXJzXFxLZXZpblxcRGVza3RvcFxcY2hyaXN0aWFuX3NjaG9lbmVja2VyL3NyY1xcYXNzZXRzXFxzY3NzXFx0eXBvZ3JhcGh5LnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXFVzZXJzXFxLZXZpblxcRGVza3RvcFxcY2hyaXN0aWFuX3NjaG9lbmVja2VyL3NyY1xcYXNzZXRzXFxzY3NzXFxmbHVpZC10eXBlLnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL0M6XFxVc2Vyc1xcS2V2aW5cXERlc2t0b3BcXGNocmlzdGlhbl9zY2hvZW5lY2tlci9zcmNcXGFzc2V0c1xcc2Nzc1xcZ3JpZC5zY3NzIiwic3JjL2FwcC9jb3JlL2hlYWRlci9DOlxcVXNlcnNcXEtldmluXFxEZXNrdG9wXFxjaHJpc3RpYW5fc2Nob2VuZWNrZXIvc3JjXFxhc3NldHNcXHNjc3NcXGFuaW1hdGlvbnMuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXFVzZXJzXFxLZXZpblxcRGVza3RvcFxcY2hyaXN0aWFuX3NjaG9lbmVja2VyL3NyY1xcYXNzZXRzXFxzY3NzXFxnbG9iYWxzLnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL0M6XFxVc2Vyc1xcS2V2aW5cXERlc2t0b3BcXGNocmlzdGlhbl9zY2hvZW5lY2tlci9zcmNcXGFzc2V0c1xcc2Nzc1xcY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXFVzZXJzXFxLZXZpblxcRGVza3RvcFxcY2hyaXN0aWFuX3NjaG9lbmVja2VyL3NyY1xcYXNzZXRzXFxzY3NzXFxwcmltZW5nLW15dGhlbWUuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXFVzZXJzXFxLZXZpblxcRGVza3RvcFxcY2hyaXN0aWFuX3NjaG9lbmVja2VyL3NyY1xcYXNzZXRzXFxzY3NzXFxhZG1pbi1nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL0M6XFxVc2Vyc1xcS2V2aW5cXERlc2t0b3BcXGNocmlzdGlhbl9zY2hvZW5lY2tlci9zcmNcXGFzc2V0c1xcc2Nzc1xcaGVscGVyLnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL0M6XFxVc2Vyc1xcS2V2aW5cXERlc2t0b3BcXGNocmlzdGlhbl9zY2hvZW5lY2tlci9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb3JlL2hlYWRlci9DOlxcVXNlcnNcXEtldmluXFxEZXNrdG9wXFxjaHJpc3RpYW5fc2Nob2VuZWNrZXIvc3JjXFxhcHBcXGNvcmVcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsK0JBQUE7RUFDQSx1REFBQTtFQUNBLDhYQUFBO0VBS0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEV0E7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDVEY7QURZRTtFQUNFLHlCQUFBO0FDVko7QURjQTs7Ozs7O0VBTUUsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDWEY7QURjQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ1hGO0FEYUU7RUFDRSxpQkFBQTtBQ1hKO0FEZUE7RUVyQ0ksaUJGc0NpRTtFQUNuRSx3QkFBQTtFQUNBLGtCQUFBO0VFeENFLG1CRnlDcUU7RUV6Q3JFLGdCRjBDa0U7QUNadEU7QUMzQkU7RUZrQ0Y7SUVoQ00scURBQUE7RUQ2Qko7QUFDRjtBQzFCRTtFRjRCRjtJRTFCTSxlRjJCbUY7RUNDdkY7QUFDRjtBQ3JDRTtFRmtDRjtJRWhDTSxzREFBQTtFRHVDSjtBQUNGO0FDcENFO0VGNEJGO0lFMUJNLG9CRjhCeUU7RUNRN0U7QUFDRjtBQy9DRTtFRmtDRjtJRWhDTSxtREFBQTtFRGlESjtBQUNGO0FDOUNFO0VGNEJGO0lFMUJNLGdCRitCc0U7RUNpQjFFO0FBQ0Y7QURoQkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7QUNrQko7QUVuREk7RUh3QkY7SUFhSSw0Q0FBQTtFQ2tCSjtBQUNGO0FEZkU7RUFDRSx5QkFBQTtBQ2lCSjtBRGZJO0VBQ0Usb0NBQUE7QUNpQk47QURaQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUV4RUUsaUJGeUVpRTtFQUNuRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2VGO0FDeEZFO0VGbUVGO0lFakVNLHFEQUFBO0VEMEZKO0FBQ0Y7QUN2RkU7RUY2REY7SUUzRE0sZUY4RG1GO0VDMkJ2RjtBQUNGO0FEbkJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VJN0dBLGdDQUFBO0FIb0lGO0FEcEJFO0VBQ0UsZUFBQTtBQ3NCSjtBRG5CRTtFQUNFLG9CQUFBO0FDcUJKO0FEbEJFO0VBQ0UsY0FBQTtBQ29CSjtBRGpCRTtFQUNFLHFDQUFBO0FDbUJKO0FEakJJO0VBQ0UseUJBQUE7QUNtQk47QURmRTtFQUNFLHlCQUFBO0FDaUJKO0FEZkk7RUFDRSx5QkFBQTtBQ2lCTjtBRGJFO0VBQ0UscUNBQUE7QUNlSjtBRGJJO0VBQ0UsMENBQUE7QUNlTjtBRFhFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDYUo7QURYSTtFQUNFLHNCQUFBO0FDYU47QURURTtFRWpKRSxnQkZrSm9FO0VFbEpwRSxtQkZtSnVFO0FDVzNFO0FDM0pFO0VGOElBO0lFNUlJLGtEQUFBO0VENkpKO0FBQ0Y7QUMxSkU7RUZ3SUE7SUV0SUksZ0JGdUl3RTtFQ3FCNUU7QUFDRjtBQ3JLRTtFRjhJQTtJRTVJSSxxREFBQTtFRHVLSjtBQUNGO0FDcEtFO0VGd0lBO0lFdElJLG1CRndJMkU7RUM4Qi9FO0FBQ0Y7QUkvTEE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7QUprTUY7QUkvTEU7RUFDRSxxQkFBQTtBSmlNSjtBSTdMQTtFQUNFLGtCQUFBO0FKZ01GO0FJN0xBOztFQUVFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0FKZ01GO0FJN0xBO0VIVkksZ0JHY0E7RUhkQSxtQkdtQkE7QUp5TEo7QUN6TUU7RUdPRjtJSExNLG1EQUFBO0VEMk1KO0FBQ0Y7QUN4TUU7RUdDRjtJSENNLGlCR0lGO0VKc01GO0FBQ0Y7QUNuTkU7RUdPRjtJSExNLHNEQUFBO0VEcU5KO0FBQ0Y7QUNsTkU7RUdDRjtJSENNLG9CR1NGO0VKMk1GO0FBQ0Y7QUs3T0E7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FMZ1BGO0FLOU9FO0VBQ0Usa0JBQUE7QUxnUEo7QUs3T0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUwrT0o7QUs1T0U7RUFDRSxtQkFBQTtBTDhPSjtBTS9QQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBTmtRRjtBRXpPSTtFSTdCSjtJQU9JLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFTm1RRjtBQUNGO0FNaFFBOzs7RUFHRSxnQkFBQTtBTm1RRjtBTWhRQTs7RUFFRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBTm1RRjtBTTdQRTtFQUNFLDBCQUFBO0FOZ1FKO0FNNVBJO0VBQ0UsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0FOOFBOO0FNMVBNO0VBQ0UsMkJBQUE7QU40UFI7QU12UE07RUFDRSwyQ0FBQTtBTnlQUjtBTXBQRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FOc1BKO0FNcFBJO0VBQ0UsZ0RBQUE7QU5zUE47QU1sUEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FOb1BKO0FNbFBJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QU5vUE47QU1oUEU7RUFDRSxZQUFBO0FOa1BKO0FNaFBJO0VBQ0Usd0JBQUE7QU5rUE47QU05T0U7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FOZ1BKO0FNNU9FO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FOOE9KO0FPclZBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBUHdWRjtBUTNWQTtFQUNFLGtCQUFBO0FSOFZGO0FRM1ZBO0VBQ0Usa0JBQUE7QVI4VkY7QVExVkE7RUFDRSxnQkFBQTtBUjZWRjtBUTFWQTtFQUNFLGtCQUFBO0FSNlZGO0FRMVZBO0VBQ0UsbUJBQUE7QVI2VkY7QVExVkE7RUFDRSxxQkFBQTtBUjZWRjtBUXpWQTtFQUNFLG1CQUFBO0FSNFZGO0FRelZBO0VBQ0UscUJBQUE7QVI0VkY7QVF6VkE7RUFDRSxtQkFBQTtBUjRWRjtBUXpWQTtFQUNFLG9CQUFBO0FSNFZGO0FRelZBO0VBQ0Usa0JBQUE7QVI0VkY7QVF6VkE7RUFDRSxvQkFBQTtBUjRWRjtBUXpWQTtFQUNFLGtCQUFBO0FSNFZGO0FRelZBO0VBQ0Usb0JBQUE7QVI0VkY7QVF6VkE7RUFDRSw4QkFBQTtBUjRWRjtBUXpWQTtFQUNFLGlCQUFBO0FSNFZGO0FRelZBO0VBQ0UsbUJBQUE7QVI0VkY7QVF6VkE7RUFDRSxpQkFBQTtBUjRWRjtBUXpWQTtFQUNFLG1CQUFBO0FSNFZGO0FTdFpBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnREFBQTtFQWtCQSxxQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBO1lBQUE7RUFFQTtZQUFBO0FUeVlGO0FTcmFFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FUdWFKO0FTcGFFO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtBVHNhSjtBU25hRTtFQUNFLGlCQUFBO0FUcWFKO0FVbmNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsOERBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7QVZzY0Y7QVVwY0U7RUFDRSw0QkFBQTtBVnNjSjtBVW5jRTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FWcWNKO0FFOWJJO0VRYkY7SUFTSSw2Q0FBQTtJQUNBLHVDQUFBO0lBQ0EsdUJBQUE7RVZzY0o7QUFDRjtBVW5jRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBUUEsZUFBQTtBVjhiSjtBVXBjSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBVnNjTjtBVWpjSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBVm1jTjtBVTliRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QVZnY0o7QVU5Ykk7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FWZ2NOO0FVOWJNO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2RUFBQTtBVmdjUjtBVTdiTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VQaEZOLGdDQUFBO0FIZ2hCRjtBVTViUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FWOGJWO0FVdmJBO0VBQ0Usa0JBQUE7QVYwYkY7QVV4YkU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FWMGJKO0FFN2ZJO0VRZ0VGO0lBTUksdUJBQUE7RVYyYko7QUFDRjtBVXhiRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FWMGJKO0FVeGJJO0VBQ0UsZUFBQTtBVjBiTjtBVXZiSTtFQUNFLGVBQUE7QVZ5Yk47QVV0Ykk7RUFDRSx5QkFBQTtBVndiTjtBVXBiRTtFQUNFLDRDQUFBO0FWc2JKO0FVbmJFO0VBQ0UsMkNBQUE7QVZxYko7QVVsYkU7RUFDRSwwQ0FBQTtBVm9iSjtBVWhiQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBVm1iRjtBVWpiRTtFQUNFLHdCQUFBO0FWbWJKO0FVaGJFO0VBQ0UscUJBQUE7QVZrYko7QVVoYkk7RUFDRSxnQkFBQTtBVmtiTjtBVS9hSTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QVZpYk47QVUvYU07RUFDRSxlQUFBO0FWaWJSO0FVNWFFO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBVjhhSjtBVTNhRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBVjZhSjtBVTNhSTtFQUNFLGVBQUE7QVY2YU4iLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2dyaWQuc2Nzcyc7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJnZW9tYW5pc3RyZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2dlb21hbmlzdC1yZWd1bGFyLXdlYmZvbnQuZW90XCIpO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9nZW9tYW5pc3QtcmVndWxhci13ZWJmb250LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXHJcbiAgICB1cmwoXCIvYXNzZXRzL2ZvbnRzL2dlb21hbmlzdC1yZWd1bGFyLXdlYmZvbnQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXHJcbiAgICB1cmwoXCIvYXNzZXRzL2ZvbnRzL2dlb21hbmlzdC1yZWd1bGFyLXdlYmZvbnQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gICAgdXJsKFwiL2Fzc2V0cy9mb250cy9nZW9tYW5pc3QtcmVndWxhci13ZWJmb250LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcclxuICAgIHVybChcIi9hc3NldHMvZm9udHMvZ2VvbWFuaXN0LXJlZ3VsYXItd2ViZm9udC5zdmcjZ2VvbWFuaXN0cmVndWxhclwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbiRzaHJpbmtGYWN0b3I6IDAuODtcclxuXHJcblxyXG5wIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gIGZvbnQtc2l6ZTogZW0oMTZweCwgMTZweCk7XHJcbiAgbGluZS1oZWlnaHQ6IGVtKDI5cHgsIDE2cHgpO1xyXG5cclxuXHJcbiAgJi5saWdodCB7XHJcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcclxuICBmb250LXNpemU6IGVtKDU4cHgsIDE2cHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxuXHJcbiAgYiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICBAaW5jbHVkZSBmbHVpZC10eXBlKCdmb250LXNpemUnLCAkbWluLVNjcmVlblNpemUsICRtYXgtU2NyZWVuU2l6ZSwgMzhweCokc2hyaW5rRmFjdG9yLCAzOHB4KTtcclxuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIEBpbmNsdWRlIGZsdWlkLXR5cGUoJ21hcmdpbi1ib3R0b20nLCAkbWluLVNjcmVlblNpemUsICRtYXgtU2NyZWVuU2l6ZSwgOTBweCwgMTM3cHgpO1xyXG4gIEBpbmNsdWRlIGZsdWlkLXR5cGUoJ21hcmdpbi10b3AnLCAkbWluLVNjcmVlblNpemUsICRtYXgtU2NyZWVuU2l6ZSwgMjVweCwgNzBweCk7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDQ2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWt6ZW50LWNvbG9yKTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDg1cHgpO1xyXG5cclxuXHJcbiAgICBAaW5jbHVkZSBCcmVha1BvaW50KG1kKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDY1cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5saWdodCB7XHJcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiB2YXIoLS1ha3plbnQtY29sb3IpO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgQGluY2x1ZGUgZmx1aWQtdHlwZSgnZm9udC1zaXplJywgJG1pbi1TY3JlZW5TaXplLCAkbWF4LVNjcmVlblNpemUsIDMycHgqJHNocmlua0ZhY3RvciwgMzJweCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE5MnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oZ3JleSwgMjAlKTtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gIGZvbnQtc2l6ZTogZW0oMTZweCwgMTZweCk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbi0xO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgfVxyXG5cclxuICAmLmNlbnRlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICYuYnRuLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWt6ZW50LWNvbG9yKTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYWt6ZW50LWNvbG9yLCAyJSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmJ0bi0yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwJSwgMCUsIDglKTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAlLCAwJSwgMTIlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuYnRuLTMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWt6ZW50LWNvbG9yKTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWt6ZW50LWNvbG9yLWRhcmspO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5idG4tNCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc3BhY2VBcnJvdW5kIHtcclxuICAgIEBpbmNsdWRlIGZsdWlkLXR5cGUoJ21hcmdpbi10b3AnLCAkbWluLVNjcmVlblNpemUsICRtYXgtU2NyZWVuU2l6ZSwgMXJlbSwgMnJlbSk7XHJcbiAgICBAaW5jbHVkZSBmbHVpZC10eXBlKCdtYXJnaW4tYm90dG9tJywgJG1pbi1TY3JlZW5TaXplLCAkbWF4LVNjcmVlblNpemUsIDFyZW0sIDJyZW0pO1xyXG4gIH1cclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZ2VvbWFuaXN0cmVndWxhclwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvZ2VvbWFuaXN0LXJlZ3VsYXItd2ViZm9udC5lb3RcIik7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9nZW9tYW5pc3QtcmVndWxhci13ZWJmb250LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi9hc3NldHMvZm9udHMvZ2VvbWFuaXN0LXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9nZW9tYW5pc3QtcmVndWxhci13ZWJmb250LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9nZW9tYW5pc3QtcmVndWxhci13ZWJmb250LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9nZW9tYW5pc3QtcmVndWxhci13ZWJmb250LnN2ZyNnZW9tYW5pc3RyZWd1bGFyXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxucCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuODEyNWVtO1xufVxucC5saWdodCB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XG4gIGZvbnQtc2l6ZTogMy42MjVlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xufVxuaDEgYiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMzAuNHB4O1xuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiBjYWxjKDMwLjRweCArIDcuNiAqICgxMDB2dyAtIDMyMHB4KSAvIDY0MCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoOTBweCArIDQ3ICogKDEwMHZ3IC0gMzIwcHgpIC8gNjQwKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMzdweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIGgyIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDI1cHggKyA0NSAqICgxMDB2dyAtIDMyMHB4KSAvIDY0MCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICBoMiB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgfVxufVxuaDI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQ2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ha3plbnQtY29sb3IpO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoODVweCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDdlbSkge1xuICBoMjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDY1cHgpO1xuICB9XG59XG5oMi5saWdodCB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5oMi5saWdodDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbmgzIHtcbiAgY29sb3I6IHZhcigtLWFremVudC1jb2xvcik7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjUuNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogY2FsYygyNS42cHggKyA2LjQgKiAoMTAwdncgLSAzMjBweCkgLyA2NDApO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxufVxuXG4uYnV0dG9uIHtcbiAgd2lkdGg6IDE5MnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ZDRkO1xuICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyOiBub25lO1xuICB6LWluZGV4OiA1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuLmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24gYiB7XG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xufVxuLmJ1dHRvbi5jZW50ZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5idXR0b24uYnRuLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ha3plbnQtY29sb3IpO1xufVxuLmJ1dHRvbi5idG4tMTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjQzMWQ7XG59XG4uYnV0dG9uLmJ0bi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbn1cbi5idXR0b24uYnRuLTI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xufVxuLmJ1dHRvbi5idG4tMyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFremVudC1jb2xvcik7XG59XG4uYnV0dG9uLmJ0bi0zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWt6ZW50LWNvbG9yLWRhcmspO1xufVxuLmJ1dHRvbi5idG4tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYnV0dG9uLmJ0bi00OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cbi5idXR0b24uc3BhY2VBcnJvdW5kIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xuICAuYnV0dG9uLnNwYWNlQXJyb3VuZCB7XG4gICAgbWFyZ2luLXRvcDogY2FsYygxcmVtICsgMSAqICgxMDB2dyAtIDMyMHB4KSAvIDY0MCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAuYnV0dG9uLnNwYWNlQXJyb3VuZCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5idXR0b24uc3BhY2VBcnJvdW5kIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDFyZW0gKyAxICogKDEwMHZ3IC0gMzIwcHgpIC8gNjQwKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5idXR0b24uc3BhY2VBcnJvdW5kIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4qOmZvY3VzIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xufVxuXG5odG1sIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpdGUtYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tdm90dG9tOiAzMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IGNhbGMoMzBweCArIDkwICogKDEwMHZ3IC0gMzIwcHgpIC8gNjQwKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luLXZvdHRvbTogY2FsYygzMHB4ICsgOTAgKiAoMTAwdncgLSAzMjBweCkgLyA2NDApO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luLXZvdHRvbTogMTIwcHg7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHZhcigtLXNpdGUtd2lkdGgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAxcmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uY29udGFpbmVyID4gKiB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5jb250YWluZXIuY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIudG9wU3BhY2Uge1xuICBwYWRkaW5nLXRvcDogNC41cmVtO1xufVxuXG4udml0YURpYWxvZyB7XG4gIHotaW5kZXg6IDYwMDA7XG4gIHdpZHRoOiA5MHZ3O1xuICBtYXgtd2lkdGg6IHZhcigtLXNpdGUtd2lkdGgpO1xuICB6LWluZGV4OiAxMjAwMCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3ZW0pIHtcbiAgLnZpdGFEaWFsb2cge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xuICAgIHRvcDogNzBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuLnVpLWVkaXRvci1jb250YWluZXIsXG4udWktZWRpdG9yLXRvb2xiYXIsXG4udWktZWRpdG9yLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xufVxuXG4udWktY2FyZCxcbi5hZG1pbi1jYXJkIHtcbiAgZmxleDogMCAwIDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogNGVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuYm9keSAudWktcGFnaW5hdG9yLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDAuOHJlbSAwIDAuOXJlbSAwO1xufVxuYm9keSAudWktdGFibGUgdGgge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbmJvZHkgLnVpLXRhYmxlIHRoZWFkIHRyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuYm9keSAudWktdGFibGUgdGJvZHkgdGQge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xufVxuYm9keSAudWktcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuYm9keSAudWktcGFnaW5hdG9yIC51aS1zdGF0ZS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ha3plbnQtY29sb3IpICFpbXBvcnRhbnQ7XG59XG5ib2R5IC51aS1kYXRhdmlldyAudWktZGF0YXZpZXctaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNmIyZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5ib2R5IC51aS1kYXRhdmlldyAudWktZGF0YXZpZXctaGVhZGVyIHAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5ib2R5IC51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZWJhciAudWktZGlhbG9nLXRpdGxlYmFyLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5ib2R5IC51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZWJhciAudWktZGlhbG9nLXRpdGxlYmFyLWljb246aG92ZXIge1xuICBjb2xvcjogdmFyKC0td2Fybi1jb2xvcik7XG59XG5ib2R5IC51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFremVudC1jb2xvci1kYXJrKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5ib2R5IC51aS1kYXRhdmlldyAudWktZGF0YXZpZXctY29udGVudCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrZW5kLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBwYWRkaW5nOiAyZW07XG59XG5cbi5wdCB7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn1cblxuLnB0LTEge1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG59XG5cbi5wdC0yIHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbn1cblxuLnB0LTMge1xuICBwYWRkaW5nLXRvcDogMS41ZW07XG59XG5cbi5wdC00IHtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbn1cblxuLnBiLTEge1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG59XG5cbi5wYi0yIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuLnBiLTMge1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG59XG5cbi5wYi00IHtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbn1cblxuLnByLTEge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbn1cblxuLnByLTIge1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG5cbi5wci0zIHtcbiAgcGFkZGluZy1yaWdodDogMS41ZW07XG59XG5cbi5wci00IHtcbiAgcGFkZGluZy1yaWdodDogMmVtO1xufVxuXG4ucHItNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDIuNWVtO1xufVxuXG4ubXItMSB7XG4gIG1hcmdpbi1yaWdodDogMC41ZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTIge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLm1yLTMge1xuICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xufVxuXG4ubXItNCB7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4ubXItNSB7XG4gIG1hcmdpbi1yaWdodDogMi41ZW07XG59XG5cbmFjLXJvb3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyXCIgXCJjb250ZW50XCIgXCJmb290ZXJcIjtcbiAgLS1saWdodC1jb2xvcjogcmdiYSgyMjUsIDIyMywgMjIzLCAxKTtcbiAgLS1kYXJrLWNvbG9yOiByZ2JhKDcyLCA3MiwgNzIsIDEpO1xuICAtLWFremVudC1jb2xvcjogaHNsYSgxMzcsIDY0JSwgMTQlLCAxKTtcbiAgLS1ha3plbnQtY29sb3ItZGFyazogaHNsYSgxMzcsIDY0JSwgOSUsIDEpO1xuICAtLWFremVudC1jb2xvci1saWdodDogaHNsYSgxMzcsIDY0JSwgMjclLCAxKTtcbiAgLS1zZWNvbmRhcnktY29sb3I6IHJnYmEoMTQwLCAyOSwgMjksIDEpO1xuICAtLXNpdGUtYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNDQpO1xuICAtLXdhcm4tY29sb3I6IHJnYigyMzAsIDY5LCA2OSk7XG4gIC0tZGFya2JsdWU6IHJnYig2MSwgMzIsIDEzMSk7XG4gIC0tc2l0ZS13aWR0aDogMTIwMHB4O1xuICAtLXRpdGxlLWZvbnQ6IFwiU2FyYWJ1blwiLFxuICBzYW5zLXNlcmlmO1xuICAtLW1haW4tZm9udDogXCJnZW9tYW5pc3RyZWd1bGFyXCIsXG4gIHNhbnMtc2VyaWY7XG59XG5hYy1yb290IGFjLWhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICB6LWluZGV4OiAzMDAwO1xufVxuYWMtcm9vdCAuY29udGVudEJvZHkge1xuICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjhweCk7XG59XG5hYy1yb290IGFjLWZvb3RlciB7XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSg0MSwgNDEsIDQxLCAwLjk0KSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlO1xufVxuaGVhZGVyLmZseU91dCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG59XG5oZWFkZXIgLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiBtZW51IHNvY2lhbHMgLlwiO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjJlbSkge1xuICBoZWFkZXIgLmdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDFmciAyMCUgIWltcG9ydGFudDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm1vYmlsZSBzb2NpYWxzIC5cIjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuaGVhZGVyIC5tb2JpbGVCdXR0b24ge1xuICBncmlkLWFyZWE6IG1vYmlsZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5tb2JpbGVCdXR0b24gc3ZnIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZmlsbDogd2hpdGU7XG59XG5oZWFkZXIgLm1vYmlsZUJ1dHRvbiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogYXV0bztcbn1cbmhlYWRlciB1bC5tYWluLW1lbnUge1xuICBncmlkLWFyZWE6IG1lbnU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBhdXRvO1xuICBmbGV4LWZsb3c6IHJvdztcbn1cbmhlYWRlciB1bC5tYWluLW1lbnUgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmhlYWRlciB1bC5tYWluLW1lbnUgbGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMjJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvbWVudV9zZXBlcmF0b3Iuc3ZnXCIpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cbmhlYWRlciB1bC5tYWluLW1lbnUgbGkgYSB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cbmhlYWRlciB1bC5tYWluLW1lbnUgbGkgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMyN2I0NGY7XG59XG5cbi5zb2NpYWxzIHtcbiAgZ3JpZC1hcmVhOiBzb2NpYWxzO1xufVxuLnNvY2lhbHMgLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MmVtKSB7XG4gIC5zb2NpYWxzIC5mbGV4LWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5zb2NpYWxzIC5pY29uQm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcbn1cbi5zb2NpYWxzIC5pY29uQm94Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uc29jaWFscyAuaWNvbkJveDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zb2NpYWxzIC5pY29uQm94IGkge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuLnNvY2lhbHMgLmluc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2luc3RhZ3JhbV93aGl0ZS5zdmdcIik7XG59XG4uc29jaWFscyAuZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9mYWNlYm9va193aGl0ZS5zdmdcIik7XG59XG4uc29jaWFscyAueW91dHViZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3lvdXR1YmVfd2hpdGUuc3ZnXCIpO1xufVxuXG51bC5tb2JpbGVNZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDgwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg4KTtcbiAgcGFkZGluZzogMnJlbSAwIDJyZW0gMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbnVsLm1vYmlsZU1lbnUubWVudU9uIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxudWwubW9iaWxlTWVudSBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcbn1cbnVsLm1vYmlsZU1lbnUgbGk6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbnVsLm1vYmlsZU1lbnUgbGkgYSB7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjZyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxudWwubW9iaWxlTWVudSBsaSBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxudWwubW9iaWxlTWVudSBzcGFuLm1lbnVUaXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS43cmVtO1xufVxudWwubW9iaWxlTWVudSAuY2xvc2VCdXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiAtby1tYXgtY29udGVudDtcbiAgd2lkdGg6IC1tcy1tYXgtY29udGVudDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG51bC5tb2JpbGVNZW51IC5jbG9zZUJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIkbWluLVNjcmVlblNpemU6IDMyMHB4O1xyXG4kbWF4LVNjcmVlblNpemU6IDk2MHB4O1xyXG5cclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJG51bWJlcikge1xyXG4gIEBpZiB0eXBlLW9mKCRudW1iZXIpPT1cIm51bWJlclwiYW5kIG5vdCB1bml0bGVzcygkbnVtYmVyKSB7XHJcbiAgICBAcmV0dXJuICRudW1iZXIgLyAoJG51bWJlciAqIDAgKyAxKTtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJG51bWJlcjtcclxufVxyXG5cclxuQG1peGluIGZsdWlkLXR5cGUoJHByb3BlcnRpZXMsICRtaW4tdncsICRtYXgtdncsICRtaW4tdmFsdWUsICRtYXgtdmFsdWUpIHtcclxuICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgI3skcHJvcGVydHl9OiAkbWluLXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogY2FsYygjeyRtaW4tdmFsdWV9ICsgI3tzdHJpcC11bml0KCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKX0gKiAoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06ICRtYXgtdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZS1pbXBvcnRhbnQoJHByb3BlcnRpZXMsICRtaW4tdncsICRtYXgtdncsICRtaW4tdmFsdWUsICRtYXgtdmFsdWUpIHtcclxuICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgI3skcHJvcGVydHl9OiAkbWluLXZhbHVlICsgJyFpbXBvcnRhbnQnO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogY2FsYygjeyRtaW4tdmFsdWV9ICsgI3tzdHJpcC11bml0KCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKX0gKiAoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSsnIWltcG9ydGFudCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiAkbWF4LXZhbHVlICsgJyFpbXBvcnRhbnQnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYnAtY29udGV4dDogMTZweDtcclxuXHJcblxyXG4vLyBlbSBDb252ZXJzdGVyXHJcbkBmdW5jdGlvbiBlbSgkdG8tc2l6ZSwgJGZyb20tc2l6ZTogJGZvbnQtc2l6ZSkge1xyXG4gIEBpZiAkdG8tc2l6ZT09MHB4IHtcclxuICAgIEByZXR1cm4gMFxyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkdG8tc2l6ZSAvICRmcm9tLXNpemUgKiAxZW07XHJcbn1cclxuXHJcbi8vIHJlbSBDb252ZXJzdGVyXHJcbkBmdW5jdGlvbiByZW0oJHRvLXNpemUsICRmcm9tLXNpemU6ICRmb250LXNpemUpIHtcclxuICBAaWYgJHRvLXNpemU9PTBweCB7XHJcbiAgICBAcmV0dXJuIDBcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJHRvLXNpemUgLyAkZnJvbS1zaXplICogMXJlbTtcclxufVxyXG5cclxuLy8gTWFwXHJcbiRicmVha1BvaW50cyA6KCd4cyc6IGVtKDQ1NnB4LCAkYnAtY29udGV4dCksXHJcbiAgJ3NtJzogZW0oNjQwcHgsICRicC1jb250ZXh0KSxcclxuICAnbWQnOiBlbSg3NTJweCwgJGJwLWNvbnRleHQpLFxyXG4gICdsZyc6IGVtKDk5MnB4LCAkYnAtY29udGV4dCksXHJcbiAgJ3hsJzogZW0oMTE2OHB4LCAkYnAtY29udGV4dCksXHJcbiAgJ3h4bCc6IGVtKDEzNjZweCwgJGJwLWNvbnRleHQpKTtcclxuXHJcblxyXG5cclxuQG1peGluIEJyZWFrUG9pbnQoJFBvaW50KSB7XHJcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha1BvaW50cywgJFBvaW50KSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtQb2ludHMsICRQb2ludCkpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZWxzZSB7XHJcbiAgICBAd2FybiBcIlRoZSBicmVha3BvaW50ICN7JHBvaW50fSBpcyBub3QgaW4gQnJlYWtQb2ludHMgTWFwXCI7XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBhbmltYXRpb24tMSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuIiwiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5odG1sIHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaXRlLWJhY2tncm91bmQtY29sb3IpO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBAaW5jbHVkZSBmbHVpZC10eXBlKFwibWFyZ2luLXRvcFwiLFxyXG4gICAgJG1pbi1TY3JlZW5TaXplLFxyXG4gICAgJG1heC1TY3JlZW5TaXplLFxyXG4gICAgMzBweCxcclxuICAgIDEyMHB4KTtcclxuICBAaW5jbHVkZSBmbHVpZC10eXBlKFwibWFyZ2luLXZvdHRvbVwiLFxyXG4gICAgJG1pbi1TY3JlZW5TaXplLFxyXG4gICAgJG1heC1TY3JlZW5TaXplLFxyXG4gICAgMzBweCxcclxuICAgIDEyMHB4KTtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IHZhcigtLXNpdGUtd2lkdGgpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gID4qIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gICYuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gICYudG9wU3BhY2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDQuNXJlbTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL3Njc3MvZ3JpZC5zY3NzXCI7XHJcblxyXG5cclxuLy8gIFVudGVyIHZpdGFcclxuLnZpdGFEaWFsb2cge1xyXG4gIHotaW5kZXg6IDYwMDA7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaXRlLXdpZHRoKTtcclxuICB6LWluZGV4OiAxMjAwMCAhaW1wb3J0YW50O1xyXG5cclxuICBAaW5jbHVkZSBCcmVha1BvaW50KG1kKSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxuLnVpLWVkaXRvci1jb250YWluZXIsXHJcbi51aS1lZGl0b3ItdG9vbGJhcixcclxuLnVpLWVkaXRvci1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG59XHJcblxyXG4udWktY2FyZCxcclxuLmFkbWluLWNhcmQge1xyXG4gIGZsZXg6IDAgMCAzMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNGVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcblxyXG4gIC51aS1wYWdpbmF0b3ItYm90dG9tIHtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAwIDAuOXJlbSAwO1xyXG4gIH1cclxuXHJcbiAgLnVpLXRhYmxlIHtcclxuICAgIHRoIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcikgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGJvZHkge1xyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLXBhZ2luYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuXHJcbiAgICAudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWt6ZW50LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWRhdGF2aWV3IC51aS1kYXRhdmlldy1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDExOCUsIDQwJSwgMzAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBwLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlYmFyIC51aS1kaWFsb2ctdGl0bGViYXItaWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13YXJuLWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ha3plbnQtY29sb3ItZGFyayk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gIH1cclxuXHJcbiAgLnVpLWRhdGF2aWV3IC51aS1kYXRhdmlldy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoLTIzOSwgLTE5MCUsIDEwJSwgMSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuYmFja2VuZC10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgcGFkZGluZzogMmVtO1xyXG59XHJcbiIsIi5wdCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG59XHJcblxyXG4ucHQtMSB7XHJcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG5cclxufVxyXG5cclxuLnB0LTIge1xyXG4gIHBhZGRpbmctdG9wOiAxZW07XHJcbn1cclxuXHJcbi5wdC0zIHtcclxuICBwYWRkaW5nLXRvcDogMS41ZW07XHJcbn1cclxuXHJcbi5wdC00IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4ucGItMSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG5cclxufVxyXG5cclxuLnBiLTIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5wYi0zIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbn1cclxuXHJcbi5wYi00IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4ucHItMSB7XHJcbiAgcGFkZGluZy1yaWdodDogMC41ZW07XHJcbn1cclxuXHJcbi5wci0yIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5wci0zIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcclxufVxyXG5cclxuLnByLTQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcclxufVxyXG5cclxuLnByLTUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIuNWVtO1xyXG59XHJcblxyXG4ubXItMSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXItMiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5tci0zIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xyXG59XHJcblxyXG4ubXItNCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbn1cclxuXHJcbi5tci01IHtcclxuICBtYXJnaW4tcmlnaHQ6IDIuNWVtO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJhc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiYXNzZXRzL3Njc3MvZmx1aWQtdHlwZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhc3NldHMvc2Nzcy9ncmlkLnNjc3NcIjtcclxuQGltcG9ydCBcImFzc2V0cy9zY3NzL2FuaW1hdGlvbnMuc2Nzc1wiO1xyXG5cclxuQGltcG9ydCBcImFzc2V0cy9zY3NzL3R5cG9ncmFwaHkuc2Nzc1wiO1xyXG5cclxuQGltcG9ydCBcImFzc2V0cy9zY3NzL2dsb2JhbHMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiYXNzZXRzL3Njc3MvY3VzdG9tLWNsYXNzZXMuc2Nzc1wiO1xyXG5cclxuQGltcG9ydCBcImFzc2V0cy9zY3NzL3ByaW1lbmctbXl0aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhc3NldHMvc2Nzcy9hZG1pbi1nbG9iYWxzLnNjc3NcIjtcclxuXHJcbkBpbXBvcnQgXCJhc3NldHMvc2Nzcy9oZWxwZXIuc2Nzc1wiO1xyXG5cclxuXHJcblxyXG5hYy1yb290IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyXCJcImNvbnRlbnRcIlwiZm9vdGVyXCI7XHJcblxyXG4gIGFjLWhlYWRlciB7XHJcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICAgIHotaW5kZXg6IDMwMDA7XHJcbiAgfVxyXG5cclxuICAuY29udGVudEJvZHkge1xyXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEyOHB4KTtcclxuICB9XHJcblxyXG4gIGFjLWZvb3RlciB7XHJcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcclxuXHJcbiAgfVxyXG5cclxuICAvLyBDb2xvcnMgQ1NTIFZhcmFibGVzXHJcbiAgLS1saWdodC1jb2xvcjogcmdiYSgyMjUsIDIyMywgMjIzLCAxKTtcclxuICAtLWRhcmstY29sb3I6IHJnYmEoNzIsIDcyLCA3MiwgMSk7XHJcbiAgLS1ha3plbnQtY29sb3I6IGhzbGEoMTM3LCA2NCUsIDE0JSwgMSk7XHJcbiAgLS1ha3plbnQtY29sb3ItZGFyazogaHNsYSgxMzcsIDY0JSwgOSUsIDEpO1xyXG4gIC0tYWt6ZW50LWNvbG9yLWxpZ2h0OiBoc2xhKDEzNywgNjQlLCAyNyUsIDEpO1xyXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiByZ2JhKDE0MCwgMjksIDI5LCAxKTtcclxuICAtLXNpdGUtYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNDQpO1xyXG4gIC0td2Fybi1jb2xvcjogcmdiKDIzMCwgNjksIDY5KTtcclxuICAtLWRhcmtibHVlOiByZ2IoNjEsIDMyLCAxMzEpO1xyXG4gIC0tc2l0ZS13aWR0aDogMTIwMHB4O1xyXG4gIC0tdGl0bGUtZm9udDogXCJTYXJhYnVuXCIsXHJcbiAgc2Fucy1zZXJpZjtcclxuICAtLW1haW4tZm9udDogXCJnZW9tYW5pc3RyZWd1bGFyXCIsXHJcbiAgc2Fucy1zZXJpZjtcclxufVxyXG4iLCJAaW1wb3J0ICdncmlkJztcclxuQGltcG9ydCAnYW5pbWF0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDEsIDQxLCA0MSwgMC45NCkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcclxuXHJcbiAgJi5mbHlPdXQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICB9XHJcblxyXG4gIC5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG8gMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIG1lbnUgc29jaWFscyAuXCI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIEBpbmNsdWRlIEJyZWFrUG9pbnQobGcpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgMWZyIDIwJSAhaW1wb3J0YW50O1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm1vYmlsZSBzb2NpYWxzIC5cIjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9iaWxlQnV0dG9uIHtcclxuICAgIGdyaWQtYXJlYTogbW9iaWxlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBmaWxsOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdWwubWFpbi1tZW51IHtcclxuICAgIGdyaWQtYXJlYTogbWVudTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCAyMnB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvbWVudV9zZXBlcmF0b3Iuc3ZnJykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XHJcbiAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uLTE7XHJcblxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRha3plbnQtY29sb3IsIDI5JSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc29jaWFscyB7XHJcbiAgZ3JpZC1hcmVhOiBzb2NpYWxzO1xyXG5cclxuICAuZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIEBpbmNsdWRlIEJyZWFrUG9pbnQobGcpIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWNvbkJveCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmluc3RhZ3JhbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2luc3RhZ3JhbV93aGl0ZS5zdmcnKTtcclxuICB9XHJcblxyXG4gIC5mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2ZhY2Vib29rX3doaXRlLnN2ZycpO1xyXG4gIH1cclxuXHJcbiAgLnlvdXR1YmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy95b3V0dWJlX3doaXRlLnN2ZycpO1xyXG4gIH1cclxufVxyXG5cclxudWwubW9iaWxlTWVudSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogODB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODgpO1xyXG4gIHBhZGRpbmc6IDJyZW0gMCAycmVtIDFyZW07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICYubWVudU9uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcclxuXHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjZyZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzcGFuLm1lbnVUaXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuN3JlbTtcclxuICB9XHJcblxyXG4gIC5jbG9zZUJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcclxuICAgIHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xyXG4gICAgd2lkdGg6IC1vLW1heC1jb250ZW50O1xyXG4gICAgd2lkdGg6IC1tcy1tYXgtY29udGVudDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ac-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_mobile_handler_service__WEBPACK_IMPORTED_MODULE_1__["MobileHandlerService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        mobileMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mobileMenu']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/services/mobile-handler.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/services/mobile-handler.service.ts ***!
    \*********************************************************/

  /*! exports provided: MobileHandlerService */

  /***/
  function srcAppCoreServicesMobileHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileHandlerService", function () {
      return MobileHandlerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MobileHandlerService = /*#__PURE__*/function () {
      function MobileHandlerService() {
        _classCallCheck(this, MobileHandlerService);

        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('Default Message');
        this.globalIsMobile = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.currentMessage = this.messageSource.asObservable();
        this.isMobile = this.globalIsMobile.asObservable();
        this.mobileWidt = 992;
        this.isMobileStatus = null;
        this.checkSiteWidth();
        this.siteWidthController();
      }

      _createClass(MobileHandlerService, [{
        key: "changeMessage",
        value: function changeMessage(message) {
          this.messageSource.next(message);
        }
      }, {
        key: "changeMobileStatus",
        value: function changeMobileStatus(status) {
          this.globalIsMobile.next(status);
        }
      }, {
        key: "checkSiteWidth",
        value: function checkSiteWidth() {
          this.siteWidth = window.innerWidth;

          if (this.siteWidth < this.mobileWidt) {
            this.isMobileStatus = true;
            this.changeMobileStatus(this.isMobileStatus);
          } else {
            this.isMobileStatus = false;
            this.changeMobileStatus(this.isMobileStatus);
          }
        }
      }, {
        key: "siteWidthController",
        value: function siteWidthController() {
          var _this4 = this;

          window.addEventListener('resize', function () {
            _this4.checkSiteWidth();
          });
        }
      }]);

      return MobileHandlerService;
    }();

    MobileHandlerService.ɵfac = function MobileHandlerService_Factory(t) {
      return new (t || MobileHandlerService)();
    };

    MobileHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MobileHandlerService,
      factory: MobileHandlerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyD2wNNVMjEIoge78iqcQTQyAcE4RhCZYNs",
        authDomain: "christian-schoenecker.firebaseapp.com",
        databaseURL: "https://christian-schoenecker.firebaseio.com",
        projectId: "christian-schoenecker",
        storageBucket: "christian-schoenecker.appspot.com",
        messagingSenderId: "1096325630568",
        appId: "1:1096325630568:web:94c74f4a87a8a001fec9dd",
        measurementId: "G-5278GD8SW1"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Kevin\Desktop\christian_schoenecker\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map