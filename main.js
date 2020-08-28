(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, RoutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");






const routes = [
    { path: ' ', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const RoutingComponents = [
    _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'Genie Bazaar';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUssZ0JBQUE7QUFFTCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57bWFyZ2luLXRvcDogNTBweDt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");





// Start Angular Material











































// End Angular Material












class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_52__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_53__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_54__["fab"]);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_51__["FaIconLibrary"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_51__["FontAwesomeModule"],
            // Start Angular Material
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_47__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
            // End Angular Material
            _angular_forms__WEBPACK_IMPORTED_MODULE_55__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_48__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_49__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_56__["HomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_57__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__["NgbModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_51__["FontAwesomeModule"],
        // Start Angular Material
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_47__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
        // End Angular Material
        _angular_forms__WEBPACK_IMPORTED_MODULE_55__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_48__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_49__["FooterComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingComponents"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__["NgbModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_51__["FontAwesomeModule"],
                    // Start Angular Material
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_47__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
                    // End Angular Material
                    _angular_forms__WEBPACK_IMPORTED_MODULE_55__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_51__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");




const _c0 = function () { return ["fab", "facebook-square"]; };
const _c1 = function () { return ["fab", "linkedin"]; };
const _c2 = function () { return ["fab", "twitter-square"]; };
class FooterComponent {
    constructor() {
        this.brand = 'Genie Bazaar';
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 74, vars: 8, consts: [[1, "section", "footer-top-section"], [1, "container"], [1, "row"], [1, "col-sm-2"], ["routerLink", ""], ["src", "assets/img/logo-white.png", 1, "img-responsive", "hvr-grow", 3, "alt"], [1, "col-sm-8"], [1, "list-group", "nav"], [1, "nav-item"], ["href", "mailto:support@geniebazaar.com", "target", "blank", 1, "hvr-forward"], ["icon", "envelope"], ["icon", "map-marker-alt"], [1, "social-links"], ["href", "https://www.facebook.com/MyContractor", "target", "blank", 1, "hvr-pop"], [3, "icon"], ["href", "https://www.linkedin.com/company/genie-bazaar", "target", "blank", 1, "hvr-pop"], ["href", "https://twitter.com/geniebazaar", "target", "blank", 1, "hvr-pop"], [1, "footer-bottom-section", "pt-5", "pb-1"], [1, "row", "justify-content-xs-center"], [1, "col-sm-12"], [1, "nav"], ["href", "/mumbai/services/plumber", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/carpenter", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/electrician", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/painter", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/courier", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/cleaning", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/gifts", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/transportation", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/office-supplies", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/pantry", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/pest-control", 1, "nav-link", "hvr-float"], ["href", "/mumbai/services/power-backup", 1, "nav-link", "hvr-float"], [1, "col-sm-6"], [1, "copyright"], ["href", "/terms-conditions", 1, "privacy-ts-btn", "hvr-backward"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " support@geniebazaar.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 101, Siddhivinayaka CHS, Plot No 20 Sector 42A, Nerul, Navi Mumbai 400706 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "footer", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Plumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Carpenter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Electrician");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Painter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Courier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Gifts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Transportation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Office Supplies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Pantry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Pest Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Power Backup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Privacy & Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 2020 ", ctx.brand, " pvt ltd All Rights Reserved.");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".footer-top-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.section[_ngcontent-%COMP%] {\n  padding: 7% 0;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding: 0 0 15px 0;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.footer-bottom-section[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.05em;\n}\n\n.footer-bottom-section[_ngcontent-%COMP%]   .privacy-ts-btn[_ngcontent-%COMP%], .footer-bottom-section[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n@media (max-width: 768px) {\n  .footer-top-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n  .footer-top-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .footer-bottom-section[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 0;\n    text-align: center;\n  }\n\n  .footer-bottom-section[_ngcontent-%COMP%]   .privacy-ts-btn[_ngcontent-%COMP%] {\n    text-align: center;\n    display: block;\n  }\n}\n\n@media (min-width: 992px) {\n  .footer-top-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .footer-bottom-section[_ngcontent-%COMP%]   .privacy-ts-btn[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQXdCLFVBQUE7QUFDeEI7O0FBQUE7RUFBUyxhQUFBO0FBSVQ7O0FBSEE7RUFBa0MsZUFBQTtBQU9sQzs7QUFOQTtFQUFvQyxrQkFBQTtBQVVwQzs7QUFUQTtFQUE4QixtQkFBQTtBQWE5Qjs7QUFaQTtFQUFVLGVBQUE7QUFnQlY7O0FBZkE7RUFBaUMsZUNJcEI7RURKMEMsc0JBQUE7QUFvQnZEOztBQW5CQTtFQUEwRSxlQ0c3RDtBRG9CYjs7QUF0QkE7RUFDSTtJQUF3QixtQkFBQTtJQUFvQixpQkFBQTtJQUFtQixrQkFBQTtJQUFvQixjQUFBO0VBNkJyRjs7RUE1QkU7SUFBa0Msa0JBQUE7RUFnQ3BDOztFQS9CRTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQWtDTjs7RUFoQ0U7SUFBdUMsa0JBQUE7SUFBb0IsY0FBQTtFQXFDN0Q7QUFDRjs7QUFwQ0E7RUFDSTtJQUF3QixVQUFBO0VBdUMxQjs7RUF0Q0U7SUFDSSxZQ0NNO0VEd0NaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGUuc2Nzcyc7XHJcbi5mb290ZXItdG9wLXNlY3Rpb24gaW1ne3dpZHRoOiA0MCU7fVxyXG4uc2VjdGlvbntwYWRkaW5nOiA3JSAwO31cclxuLmZvb3Rlci10b3Atc2VjdGlvbiAuc29jaWFsLWxpbmtze2ZvbnQtc2l6ZTogMjZweDt9XHJcbi5mb290ZXItdG9wLXNlY3Rpb24gLnNvY2lhbC1saW5rcyBhe3BhZGRpbmctbGVmdDogMTBweDt9XHJcbi5mb290ZXItdG9wLXNlY3Rpb24gLm5hdiA+IGxpe3BhZGRpbmc6IDAgMCAxNXB4IDA7fVxyXG4ubmF2LWxpbmt7cGFkZGluZy1sZWZ0OiAwO31cclxuLmZvb3Rlci1ib3R0b20tc2VjdGlvbiAubmF2LWxpbmt7Zm9udC1zaXplOiAkc0ZvbnRTaXplO2xldHRlci1zcGFjaW5nOiAwLjA1ZW07fVxyXG4uZm9vdGVyLWJvdHRvbS1zZWN0aW9uIC5wcml2YWN5LXRzLWJ0biwgLmZvb3Rlci1ib3R0b20tc2VjdGlvbiAuY29weXJpZ2h0e2ZvbnQtc2l6ZTogJHNGb250U2l6ZTt9XHJcbkBtZWRpYSAobWF4LXdpZHRoIDogJG1lZGlhU20pe1xyXG4gICAgLmZvb3Rlci10b3Atc2VjdGlvbiBpbWd7bWFyZ2luLWJvdHRvbTogMzBweDttYXJnaW4tbGVmdDogYXV0bzsgbWFyZ2luLXJpZ2h0OiBhdXRvOyBkaXNwbGF5OiBibG9jazt9XHJcbiAgICAuZm9vdGVyLXRvcC1zZWN0aW9uIC5zb2NpYWwtbGlua3N7dGV4dC1hbGlnbjogY2VudGVyO31cclxuICAgIC5mb290ZXItYm90dG9tLXNlY3Rpb24gLmNvcHlyaWdodHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1ib3R0b20tc2VjdGlvbiAucHJpdmFjeS10cy1idG57dGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBibG9jazt9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGggOiAkbWVkaWFUYWJsZXRzKXtcclxuICAgIC5mb290ZXItdG9wLXNlY3Rpb24gaW1ne3dpZHRoOiA4MCU7fVxyXG4gICAgLmZvb3Rlci1ib3R0b20tc2VjdGlvbiAucHJpdmFjeS10cy1idG57XHJcbiAgICAgICAgZmxvYXQ6ICRmbG9hdFJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kY29sb3JCbHVlIDogIzI3YWFlMTtcclxuJGNvbG9yV2hpdGUgOiAjRkZGO1xyXG4kY29sb3JPcmFuZ2UgOiNmNzk0MWU7XHJcbiRjb2xvckRlZmF1bHQgOiAjMjMzNDNBO1xyXG4kY29sb3JEZWZhdWx0TGlnaHQgOiAjNDk1NzVkO1xyXG4kY29sb3JEZWZhdWx0RGFyayA6ICMxMjFhMWQ7XHJcbiRjb2xvckdyYXkgOiAjRjhGOEY4O1xyXG4kY29sb3JSZWQgOiByZ2IoMjI4LCAyMywgMjMpO1xyXG4vLyBGb250IFNpemVcclxuJHhzRm9udFNpemUgOiAxMHB4O1xyXG4kc0ZvbnRTaXplIDogMTJweDtcclxuJGZvbnRTaXplIDogMTRweDtcclxuJG1kRm9udFNpemUgOiAxNnB4O1xyXG4kbGdGb250U2l6ZSA6IDE4cHg7XHJcbiR4bEZvbnRTaXplIDogMjBweDtcclxuJHh4bEZvbnRTaXplIDogMjRweDtcclxuJHh4eGxGb250U2l6ZSA6IDMwcHg7XHJcbi8vIFdpZHRoIFNpemVcclxuJGZ1bGxTaXplIDogMTAwJTtcclxuJGhhbGZTaXplIDogNTAlO1xyXG4vLyBGbG9hdFxyXG4kZmxvYXRMZWZ0IDogbGVmdDtcclxuJGZsb2F0UmlnaHQgOiByaWdodDtcclxuLy8gTWVkaWEgU2l6ZVxyXG4kbWVkaWFYcyA6IDU3NnB4OyAvLyBQaG9uZVxyXG4kbWVkaWFTbSA6IDc2OHB4OyAvLyBUYWJsZXRzIGxhbmRzY2FwZVxyXG4kbWVkaWFUYWJsZXRzIDogOTkycHg7IC8vIFRhYmxldHMgcG9ydHJhaXRcclxuJG1lZGlhRGVza3RvcHMgOiAxMjAwcHg7IC8vIERlc2t0b3BzXHJcbiRtZWRpYUxhcHRvcHMgOiAxMzQ5cHg7IC8vIExhcHRvcHNcclxuJG1lZGlhTWQgOiAxNDQwcHg7IC8vIE1lZGl1bSBEZXNrdG9wc1xyXG4kbWVkaWFMZyA6IDE2MDBweDsgLy8gTGFyZ2UgRGVza3RvcHNcclxuJG1lZGlhWGwgOiAxOTIwcHg7IC8vIEV4dHJhIExhcmdlIERlc2t0b3BzIl19 */", ".bg-default[_ngcontent-%COMP%] {\n  background-color: #23343A;\n}\n\n.footer-top-section[_ngcontent-%COMP%] {\n  background: #49575d;\n}\n\nfooter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-bottom-section[_ngcontent-%COMP%] {\n  background: #121a1d;\n}\n\n.footer-bottom-section[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-bottom-section[_ngcontent-%COMP%]   .privacy-ts-btn[_ngcontent-%COMP%] {\n  color: #27aae1;\n}\n\n.footer-bottom-section[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy90aGVtZS1kZWZhdWx0LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFZLHlCQ0dJO0FERmhCOztBQUFBO0VBQW9CLG1CQ0dDO0FEQ3JCOztBQUhBO0VBQVUsV0NESTtBRFFkOztBQU5BO0VBQWtDLFdDRnBCO0FEWWQ7O0FBVEE7RUFBb0MsV0NIdEI7QURnQmQ7O0FBWkE7RUFBa0MsV0NKcEI7QURvQmQ7O0FBZkE7RUFBOEIsV0NMaEI7QUR3QmQ7O0FBbEJBO0VBQXVCLG1CQ0ZIO0FEd0JwQjs7QUFyQkE7RUFBaUMsV0NQbkI7QURnQ2Q7O0FBeEJBO0VBQXVDLGNDVDFCO0FEcUNiOztBQTNCQTtFQUFrQyxXQ1RwQjtBRHdDZCIsImZpbGUiOiJzcmMvYXNzZXRzL3Njc3MvdGhlbWUtZGVmYXVsdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGUuc2Nzcyc7XHJcbi5iZy1kZWZhdWx0e2JhY2tncm91bmQtY29sb3I6ICRjb2xvckRlZmF1bHQ7fVxyXG4uZm9vdGVyLXRvcC1zZWN0aW9ue2JhY2tncm91bmQ6ICRjb2xvckRlZmF1bHRMaWdodDt9XHJcbmZvb3RlciBoNHtjb2xvcjogJGNvbG9yV2hpdGU7fVxyXG4uZm9vdGVyLXRvcC1zZWN0aW9uIC5zb2NpYWwtbGlua3N7Y29sb3I6ICRjb2xvcldoaXRlO31cclxuLmZvb3Rlci10b3Atc2VjdGlvbiAuc29jaWFsLWxpbmtzIGF7Y29sb3I6ICRjb2xvcldoaXRlO31cclxuLmZvb3Rlci10b3Atc2VjdGlvbiAubmF2ID4gbGkgPiBhe2NvbG9yOiAkY29sb3JXaGl0ZTt9XHJcbi5mb290ZXItdG9wLXNlY3Rpb24gLm5hdiA+IGxpe2NvbG9yOiAkY29sb3JXaGl0ZTt9XHJcbi5mb290ZXItYm90dG9tLXNlY3Rpb257YmFja2dyb3VuZDogJGNvbG9yRGVmYXVsdERhcms7fVxyXG4uZm9vdGVyLWJvdHRvbS1zZWN0aW9uIC5uYXYtbGlua3tjb2xvcjogJGNvbG9yV2hpdGU7fVxyXG4uZm9vdGVyLWJvdHRvbS1zZWN0aW9uIC5wcml2YWN5LXRzLWJ0bntjb2xvcjogJGNvbG9yQmx1ZTt9XHJcbi5mb290ZXItYm90dG9tLXNlY3Rpb24gLmNvcHlyaWdodHtjb2xvcjogJGNvbG9yV2hpdGU7fSIsIi8vIENvbG9yc1xyXG4kY29sb3JCbHVlIDogIzI3YWFlMTtcclxuJGNvbG9yV2hpdGUgOiAjRkZGO1xyXG4kY29sb3JPcmFuZ2UgOiNmNzk0MWU7XHJcbiRjb2xvckRlZmF1bHQgOiAjMjMzNDNBO1xyXG4kY29sb3JEZWZhdWx0TGlnaHQgOiAjNDk1NzVkO1xyXG4kY29sb3JEZWZhdWx0RGFyayA6ICMxMjFhMWQ7XHJcbiRjb2xvckdyYXkgOiAjRjhGOEY4O1xyXG4kY29sb3JSZWQgOiByZ2IoMjI4LCAyMywgMjMpO1xyXG4vLyBGb250IFNpemVcclxuJHhzRm9udFNpemUgOiAxMHB4O1xyXG4kc0ZvbnRTaXplIDogMTJweDtcclxuJGZvbnRTaXplIDogMTRweDtcclxuJG1kRm9udFNpemUgOiAxNnB4O1xyXG4kbGdGb250U2l6ZSA6IDE4cHg7XHJcbiR4bEZvbnRTaXplIDogMjBweDtcclxuJHh4bEZvbnRTaXplIDogMjRweDtcclxuJHh4eGxGb250U2l6ZSA6IDMwcHg7XHJcbi8vIFdpZHRoIFNpemVcclxuJGZ1bGxTaXplIDogMTAwJTtcclxuJGhhbGZTaXplIDogNTAlO1xyXG4vLyBGbG9hdFxyXG4kZmxvYXRMZWZ0IDogbGVmdDtcclxuJGZsb2F0UmlnaHQgOiByaWdodDtcclxuLy8gTWVkaWEgU2l6ZVxyXG4kbWVkaWFYcyA6IDU3NnB4OyAvLyBQaG9uZVxyXG4kbWVkaWFTbSA6IDc2OHB4OyAvLyBUYWJsZXRzIGxhbmRzY2FwZVxyXG4kbWVkaWFUYWJsZXRzIDogOTkycHg7IC8vIFRhYmxldHMgcG9ydHJhaXRcclxuJG1lZGlhRGVza3RvcHMgOiAxMjAwcHg7IC8vIERlc2t0b3BzXHJcbiRtZWRpYUxhcHRvcHMgOiAxMzQ5cHg7IC8vIExhcHRvcHNcclxuJG1lZGlhTWQgOiAxNDQwcHg7IC8vIE1lZGl1bSBEZXNrdG9wc1xyXG4kbWVkaWFMZyA6IDE2MDBweDsgLy8gTGFyZ2UgRGVza3RvcHNcclxuJG1lZGlhWGwgOiAxOTIwcHg7IC8vIEV4dHJhIExhcmdlIERlc2t0b3BzIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss', '../../assets/scss/theme-default.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class HeaderComponent {
    constructor() {
        this.brand = 'Genie Bazaar';
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 24, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-default", "fixed-top"], ["routerLink", "", 1, "navbar-brand", "hvr-grow"], ["src", "assets/img/logo.png", 3, "alt"], [1, "my-2", "my-lg-0", "order-sm-12", "mobile-login"], [1, "nav", "navbar-nav"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["href", "javascript:void(0)", "id", "dropdownLogin", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownLogin", 1, "dropdown-menu", "dropdown-menu-lg-right"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "form-inline", "m-auto", "order-sm-1"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Vendor/Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Vendor/Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.brand);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: [".navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.dropdown-menu-lg-right[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n@media (max-width: 768px) {\n  .mobile-login[_ngcontent-%COMP%] {\n    float: right;\n  }\n\n  .mobile-login[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .mobile-login[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7QUFESjs7QUFHQTtFQUEyQixrQkFBQTtBQUMzQjs7QUFBQTtFQUF3QixRQUFBO0VBQVMsVUFBQTtBQUtqQzs7QUFKQTtFQUFzQixrQkFBQTtBQVF0Qjs7QUFQQTtFQUNBO0lBQWMsWUFBQTtFQVdaOztFQVZGO0lBQTBCLGNBQUE7RUFjeEI7O0VBYkY7SUFBb0MscUJBQUE7RUFpQmxDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGUuc2Nzcyc7XHJcblxyXG4ubmF2YmFyLWJyYW5kIGltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG4ubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudXtwb3NpdGlvbjogYWJzb2x1dGU7fVxyXG4uZHJvcGRvd24tbWVudS1sZy1yaWdodHtyaWdodDogMDtsZWZ0OiBhdXRvO31cclxuLm5hdmJhci1uYXYgLm5hdi1saW5re3BhZGRpbmctbGVmdDogMTVweDt9XHJcbkBtZWRpYSAobWF4LXdpZHRoIDogJG1lZGlhU20pe1xyXG4ubW9iaWxlLWxvZ2lue2Zsb2F0OiByaWdodDt9XHJcbi5tb2JpbGUtbG9naW4gLm5hdmJhci1uYXZ7ZGlzcGxheTogYmxvY2s7fVxyXG4ubW9iaWxlLWxvZ2luIC5uYXZiYXItbmF2IC5uYXYtaXRlbXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG59Il19 */", ".bg-default[_ngcontent-%COMP%] {\n  background-color: #23343A;\n}\n\n.footer-top-section[_ngcontent-%COMP%] {\n  background: #49575d;\n}\n\nfooter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-top-section[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-bottom-section[_ngcontent-%COMP%] {\n  background: #121a1d;\n}\n\n.footer-bottom-section[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n\n.footer-bottom-section[_ngcontent-%COMP%]   .privacy-ts-btn[_ngcontent-%COMP%] {\n  color: #27aae1;\n}\n\n.footer-bottom-section[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy90aGVtZS1kZWZhdWx0LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFZLHlCQ0dJO0FERmhCOztBQUFBO0VBQW9CLG1CQ0dDO0FEQ3JCOztBQUhBO0VBQVUsV0NESTtBRFFkOztBQU5BO0VBQWtDLFdDRnBCO0FEWWQ7O0FBVEE7RUFBb0MsV0NIdEI7QURnQmQ7O0FBWkE7RUFBa0MsV0NKcEI7QURvQmQ7O0FBZkE7RUFBOEIsV0NMaEI7QUR3QmQ7O0FBbEJBO0VBQXVCLG1CQ0ZIO0FEd0JwQjs7QUFyQkE7RUFBaUMsV0NQbkI7QURnQ2Q7O0FBeEJBO0VBQXVDLGNDVDFCO0FEcUNiOztBQTNCQTtFQUFrQyxXQ1RwQjtBRHdDZCIsImZpbGUiOiJzcmMvYXNzZXRzL3Njc3MvdGhlbWUtZGVmYXVsdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGUuc2Nzcyc7XHJcbi5iZy1kZWZhdWx0e2JhY2tncm91bmQtY29sb3I6ICRjb2xvckRlZmF1bHQ7fVxyXG4uZm9vdGVyLXRvcC1zZWN0aW9ue2JhY2tncm91bmQ6ICRjb2xvckRlZmF1bHRMaWdodDt9XHJcbmZvb3RlciBoNHtjb2xvcjogJGNvbG9yV2hpdGU7fVxyXG4uZm9vdGVyLXRvcC1zZWN0aW9uIC5zb2NpYWwtbGlua3N7Y29sb3I6ICRjb2xvcldoaXRlO31cclxuLmZvb3Rlci10b3Atc2VjdGlvbiAuc29jaWFsLWxpbmtzIGF7Y29sb3I6ICRjb2xvcldoaXRlO31cclxuLmZvb3Rlci10b3Atc2VjdGlvbiAubmF2ID4gbGkgPiBhe2NvbG9yOiAkY29sb3JXaGl0ZTt9XHJcbi5mb290ZXItdG9wLXNlY3Rpb24gLm5hdiA+IGxpe2NvbG9yOiAkY29sb3JXaGl0ZTt9XHJcbi5mb290ZXItYm90dG9tLXNlY3Rpb257YmFja2dyb3VuZDogJGNvbG9yRGVmYXVsdERhcms7fVxyXG4uZm9vdGVyLWJvdHRvbS1zZWN0aW9uIC5uYXYtbGlua3tjb2xvcjogJGNvbG9yV2hpdGU7fVxyXG4uZm9vdGVyLWJvdHRvbS1zZWN0aW9uIC5wcml2YWN5LXRzLWJ0bntjb2xvcjogJGNvbG9yQmx1ZTt9XHJcbi5mb290ZXItYm90dG9tLXNlY3Rpb24gLmNvcHlyaWdodHtjb2xvcjogJGNvbG9yV2hpdGU7fSIsIi8vIENvbG9yc1xyXG4kY29sb3JCbHVlIDogIzI3YWFlMTtcclxuJGNvbG9yV2hpdGUgOiAjRkZGO1xyXG4kY29sb3JPcmFuZ2UgOiNmNzk0MWU7XHJcbiRjb2xvckRlZmF1bHQgOiAjMjMzNDNBO1xyXG4kY29sb3JEZWZhdWx0TGlnaHQgOiAjNDk1NzVkO1xyXG4kY29sb3JEZWZhdWx0RGFyayA6ICMxMjFhMWQ7XHJcbiRjb2xvckdyYXkgOiAjRjhGOEY4O1xyXG4kY29sb3JSZWQgOiByZ2IoMjI4LCAyMywgMjMpO1xyXG4vLyBGb250IFNpemVcclxuJHhzRm9udFNpemUgOiAxMHB4O1xyXG4kc0ZvbnRTaXplIDogMTJweDtcclxuJGZvbnRTaXplIDogMTRweDtcclxuJG1kRm9udFNpemUgOiAxNnB4O1xyXG4kbGdGb250U2l6ZSA6IDE4cHg7XHJcbiR4bEZvbnRTaXplIDogMjBweDtcclxuJHh4bEZvbnRTaXplIDogMjRweDtcclxuJHh4eGxGb250U2l6ZSA6IDMwcHg7XHJcbi8vIFdpZHRoIFNpemVcclxuJGZ1bGxTaXplIDogMTAwJTtcclxuJGhhbGZTaXplIDogNTAlO1xyXG4vLyBGbG9hdFxyXG4kZmxvYXRMZWZ0IDogbGVmdDtcclxuJGZsb2F0UmlnaHQgOiByaWdodDtcclxuLy8gTWVkaWEgU2l6ZVxyXG4kbWVkaWFYcyA6IDU3NnB4OyAvLyBQaG9uZVxyXG4kbWVkaWFTbSA6IDc2OHB4OyAvLyBUYWJsZXRzIGxhbmRzY2FwZVxyXG4kbWVkaWFUYWJsZXRzIDogOTkycHg7IC8vIFRhYmxldHMgcG9ydHJhaXRcclxuJG1lZGlhRGVza3RvcHMgOiAxMjAwcHg7IC8vIERlc2t0b3BzXHJcbiRtZWRpYUxhcHRvcHMgOiAxMzQ5cHg7IC8vIExhcHRvcHNcclxuJG1lZGlhTWQgOiAxNDQwcHg7IC8vIE1lZGl1bSBEZXNrdG9wc1xyXG4kbWVkaWFMZyA6IDE2MDBweDsgLy8gTGFyZ2UgRGVza3RvcHNcclxuJG1lZGlhWGwgOiAxOTIwcHg7IC8vIEV4dHJhIExhcmdlIERlc2t0b3BzIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss', '../../assets/scss/theme-default.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");










function HomeComponent_ngb_carousel_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_13_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ngb_carousel_13_ng_template_1_Template, 19, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ngb_carousel_13_ng_template_2_Template, 19, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ngb_carousel_13_ng_template_3_Template, 19, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", ctx_r0.showNavigationArrows)("showNavigationIndicators", ctx_r0.showNavigationIndicators);
} }
function HomeComponent_ngb_carousel_14_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_14_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_14_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_14_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_14_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_14_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_14_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_14_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ngb_carousel_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ngb_carousel_14_ng_template_1_Template, 7, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ngb_carousel_14_ng_template_2_Template, 7, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ngb_carousel_14_ng_template_3_Template, 7, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ngb_carousel_14_ng_template_4_Template, 7, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_ngb_carousel_14_ng_template_5_Template, 7, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_ngb_carousel_14_ng_template_6_Template, 7, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_ngb_carousel_14_ng_template_7_Template, 7, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_ngb_carousel_14_ng_template_8_Template, 7, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_ngb_carousel_14_ng_template_9_Template, 7, 0, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", ctx_r1.showNavigationArrows)("showNavigationIndicators", ctx_r1.showNavigationIndicators);
} }
function HomeComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_36_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email ID is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_36_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email ID is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_36_span_1_Template, 2, 0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_36_span_2_Template, 2, 0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.email);
} }
function HomeComponent_span_42_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_42_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number must be of 10 digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_42_span_1_Template, 2, 0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_42_span_2_Template, 2, 0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.pattern);
} }
function HomeComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " construction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Request for Quote ");
} }
const _c0 = function () { return ["fas", "cubes"]; };
function HomeComponent_ng_template_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Inventory Management ");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function HomeComponent_ng_template_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Approval Workflows ");
} }
class HomeComponent {
    constructor() {
        // showDiv  =  {
        //     previous : false
        // }
        this.visible = true;
        // images = ['https://picsum.photos/900/500?random&t=1', 'https://picsum.photos/900/500?random&t=2', 'https://picsum.photos/900/500?random&t=3'];
        this.images = [];
    }
    smoothScroll($scrollElement) {
        $scrollElement.scrollIntoView({ behavior: 'smooth' });
        this.visible = false;
    }
    onSumbit(data) {
        console.warn(data);
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 208, vars: 8, consts: [[1, "banner-section"], [1, "banner-container"], [1, "container"], [1, "row", "justify-content-md-center"], [1, "col-md-7"], [1, "text-content-box"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "btn-lg", "big-btn", 3, "click"], [1, "slider-section"], ["class", "d-none d-md-block", 3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], ["class", "d-block d-md-none", 3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [1, "contact-form-section", "section"], ["targ", ""], [1, "col-md-5"], [1, "contact-form-box"], [1, "text-center"], [1, "form-horizontal", 3, "ngSubmit"], ["contactForm", "ngForm"], [1, "input-full-width"], ["name", "name", "ngModel", "", "required", "", "matInput", "", "placeholder", "Ex. Ram Sharma"], ["name", "ngModel"], ["class", "error", 4, "ngIf"], ["name", "email", "ngModel", "", "required", "", "email", "", "matInput", "", "placeholder", "Ex. ram@abc.com"], ["email", "ngModel"], ["name", "phone", "pattern", "^\\d{10}$", "maxlength", "10", "ngModel", "", "required", "", "matInput", "", "placeholder", "Ex. 9876543210"], ["phone", "ngModel"], ["matInput", "", "placeholder", ""], ["name", "message", "ngModel", "", "required", "", "matInput", "", "placeholder", "Ex. I need to enquire..."], ["message", "ngModel"], [1, ""], ["type", "submit", "mat-raised-button", "", "color", "primary"], [1, "section", "wmp"], [1, "row"], [1, "col-sm-3"], [1, "text-center", "wmp-box"], ["src", "assets/img/home/work-mp-01.png", "alt", ""], ["src", "assets/img/home/work-mp-02.png", "alt", ""], ["src", "assets/img/home/work-mp-03.png", "alt", ""], ["src", "assets/img/home/work-mp-04.png", "alt", ""], [1, "clearfix"], [1, "text-center", "pt-sm-5", "pt-5"], [1, "section", "tab-section"], ["mat-align-tabs", "center"], ["color", "accent"], ["mat-tab-label", ""], [1, "col-sm-5"], [1, "col-sm-7"], ["src", "assets/img/home/monitor-view-01.jpg", "alt", "RFQ", 1, "img-fluid"], ["src", "assets/img/home/monitor-view-02.jpg", "alt", "Inventory Management - Screen", 1, "img-fluid"], ["src", "assets/img/home/monitor-view-03.jpg", "alt", "Approval Workflows - Screen", 1, "img-fluid"], [1, "text-center", "wgb-box"], ["src", "assets/img/home/wgb-01.png", "alt", "Reliable Professionals"], ["src", "assets/img/home/wgb-02.png", "alt", "Timely Service"], ["src", "assets/img/home/wgb-03.png", "alt", "Unbeatable Prices"], ["src", "assets/img/home/wgb-04.png", "alt", "Marketplace Benefits"], [1, "section", "testimonal"], [1, "col-sm-6"], [1, "box"], ["src", "assets/img/home/client-logo-clr-01.png", "alt", "Bigbasket"], [1, "client-pic"], ["src", "assets/img/home/client-pic-01.png", "alt", "Vinayaka Gangavathi"], ["src", "assets/img/home/client-pic-02.png", "alt", "Brish Bhan Vaidya"], [1, "section", "demo-section"], [1, "container-80"], ["mat-stroked-button", "", 1, "seeGenieBazaar", 3, "click"], [1, "d-none", "d-md-block", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], [1, "col-md-2", "col-sm-2", "col-6"], ["href", "#"], ["src", "assets/img/home/client-logo-01.png", 1, ""], ["src", "assets/img/home/client-logo-02.png", 1, ""], ["src", "assets/img/home/client-logo-03.png", 1, ""], ["src", "assets/img/home/client-logo-04.png", 1, ""], ["src", "assets/img/home/client-logo-05.png", 1, ""], ["src", "assets/img/home/client-logo-06.png", 1, ""], ["src", "assets/img/home/client-logo-07.png", 1, ""], ["src", "assets/img/home/client-logo-08.png", 1, ""], ["src", "assets/img/home/client-logo-09.png", 1, ""], ["src", "assets/img/home/client-logo-10.png", 1, ""], ["src", "assets/img/home/client-logo-11.png", 1, ""], ["src", "assets/img/home/client-logo-12.png", 1, ""], ["src", "assets/img/home/client-logo-13.png", 1, ""], ["src", "assets/img/home/client-logo-14.png", 1, ""], ["src", "assets/img/home/client-logo-15.png", 1, ""], ["src", "assets/img/home/client-logo-16.png", 1, ""], ["src", "assets/img/home/client-logo-17.png", 1, ""], ["src", "assets/img/home/client-logo-18.png", 1, ""], [1, "d-block", "d-md-none", 3, "showNavigationArrows", "showNavigationIndicators"], [1, "col-6"], [1, "error"], [4, "ngIf"], [1, "material-icons"], [3, "icon"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["d", "M172.55,391.902c-0.13-0.64-0.32-1.27-0.57-1.88c-0.25-0.6-0.56-1.18-0.92-1.72c-0.36-0.55-0.78-1.06-1.24-1.52\n                                c-0.46-0.46-0.97-0.88-1.52-1.24c-0.54-0.36-1.12-0.67-1.73-0.92c-0.6-0.25-1.23-0.45-1.87-0.57c-1.29-0.26-2.62-0.26-3.9,0\n                                c-0.64,0.12-1.27,0.32-1.88,0.57c-0.6,0.25-1.18,0.56-1.72,0.92c-0.55,0.36-1.06,0.78-1.52,1.24c-0.46,0.46-0.88,0.97-1.24,1.52\n                                c-0.37,0.54-0.67,1.12-0.92,1.72c-0.25,0.61-0.45,1.24-0.57,1.88c-0.13,0.64-0.2,1.3-0.2,1.95c0,0.65,0.07,1.31,0.2,1.95\n                                c0.12,0.64,0.32,1.27,0.57,1.87c0.25,0.61,0.55,1.19,0.92,1.73c0.36,0.55,0.78,1.06,1.24,1.52c0.46,0.46,0.97,0.88,1.52,1.24\n                                c0.54,0.361,1.12,0.671,1.72,0.921c0.61,0.25,1.24,0.45,1.88,0.57c0.64,0.13,1.3,0.2,1.95,0.2c0.65,0,1.31-0.07,1.95-0.2\n                                c0.64-0.12,1.27-0.32,1.87-0.57c0.61-0.25,1.19-0.561,1.73-0.921c0.55-0.36,1.06-0.78,1.52-1.24c0.46-0.46,0.88-0.97,1.24-1.52\n                                c0.36-0.54,0.67-1.12,0.92-1.73c0.25-0.6,0.44-1.23,0.57-1.87s0.2-1.3,0.2-1.95S172.68,392.542,172.55,391.902z"], ["d", "M459.993,394.982c-0.039-0.1-0.079-0.199-0.121-0.297c-9.204-21.537-30.79-29.497-56.336-20.772l-69.668,19.266\n                                c-4.028-12.198-14.075-22.578-28.281-27.85c-0.088-0.032-0.176-0.064-0.265-0.094l-76.581-25.992\n                                c-6.374-8.239-26.34-29.321-63.723-29.321c-26.125,0-49.236,17.922-62.458,37.457H10c-5.523,0-10,4.477-10,10v126.077\n                                c0,5.523,4.477,10,10,10h59.457c5.523,0,10-4.477,10-10v-8.634h27.883c5.523,0,10-4.477,10-10v-2.878\n                                c16.254,1.418,21.6,4.501,36.528,13.109c11.48,6.62,28.831,16.625,60.077,30.674c0.145,0.065,0.292,0.127,0.439,0.185\n                                c5.997,2.359,17.72,6.065,32.173,6.065c10.06,0,21.445-1.797,33.131-7.094l153.991-55.136c0.274-0.098,0.544-0.208,0.808-0.33\n                                C449.204,442.646,471.135,423.563,459.993,394.982z M59.457,473.455H20V367.378h39.457V473.455z M97.34,454.821H79.457v-87.443\n                                H97.34V454.821z M426.496,431.074l-153.922,55.111c-0.135,0.048-0.318,0.12-0.451,0.174c-0.135,0.055-0.27,0.113-0.403,0.174\n                                c-21.437,9.852-41.814,3.954-49.8,0.849c-30.182-13.581-46.291-22.87-58.061-29.657c-16.364-9.436-24.249-13.984-46.519-15.823\n                                V361.36c9.479-15.536,27.861-31.439,47.679-31.439c33.986,0,48.387,22.105,48.953,22.997c1.221,1.986,3.098,3.483,5.305,4.232\n                                l79.475,26.974c12.693,4.764,19.401,15.634,16.318,26.474c-1.423,5.006-4.711,9.158-9.257,11.691\n                                c-4.507,2.511-9.717,3.132-14.683,1.758l-89.593-28.392c-5.268-1.669-10.886,1.247-12.554,6.512\n                                c-1.669,5.265,1.247,10.885,6.512,12.554l89.749,28.441c0.095,0.03,0.19,0.059,0.286,0.086c3.583,1.019,7.231,1.523,10.857,1.523\n                                c6.638,0,13.203-1.691,19.161-5.011c9.213-5.133,15.875-13.547,18.759-23.692c0.23-0.81,0.434-1.62,0.611-2.43l75.083-20.8\n                                c10.844-3.704,25.079-5.039,31.417,9.558C447.978,419.533,430.928,428.96,426.496,431.074z"], ["d", "M359.06,131.543c-0.13-0.64-0.32-1.27-0.58-1.88c-0.25-0.6-0.55-1.18-0.92-1.72c-0.36-0.55-0.78-1.06-1.24-1.52\n                                c-0.46-0.46-0.97-0.88-1.52-1.24c-0.54-0.36-1.12-0.67-1.72-0.92c-0.61-0.25-1.24-0.45-1.87-0.57c-1.29-0.26-2.62-0.26-3.91,0\n                                c-0.64,0.12-1.27,0.32-1.87,0.57c-0.61,0.25-1.19,0.56-1.73,0.92c-0.55,0.36-1.06,0.78-1.52,1.24c-0.46,0.46-0.88,0.97-1.24,1.52\n                                c-0.36,0.54-0.67,1.12-0.92,1.72c-0.25,0.61-0.45,1.24-0.57,1.88c-0.13,0.64-0.2,1.3-0.2,1.95c0,0.65,0.07,1.31,0.2,1.95\n                                c0.12,0.64,0.32,1.27,0.57,1.87c0.25,0.61,0.56,1.19,0.92,1.73c0.36,0.55,0.78,1.06,1.24,1.52c0.46,0.46,0.97,0.88,1.52,1.24\n                                c0.54,0.36,1.12,0.67,1.73,0.92c0.6,0.25,1.23,0.44,1.87,0.57s1.3,0.2,1.95,0.2c0.65,0,1.31-0.07,1.96-0.2\n                                c0.63-0.13,1.26-0.32,1.87-0.57c0.6-0.25,1.18-0.56,1.72-0.92c0.55-0.36,1.06-0.78,1.52-1.24c0.46-0.46,0.88-0.97,1.24-1.52\n                                c0.37-0.54,0.67-1.12,0.92-1.73c0.26-0.6,0.45-1.23,0.58-1.87c0.13-0.64,0.19-1.3,0.19-1.95\n                                C359.25,132.843,359.19,132.183,359.06,131.543z"], ["d", "M502,33.891h-59.457c-5.523,0-10,4.477-10,10v8.634H404.66c-5.523,0-10,4.477-10,10v2.878\n                                c-16.254-1.419-21.6-4.501-36.527-13.109c-11.48-6.62-28.831-16.625-60.078-30.674c-0.145-0.066-0.291-0.127-0.44-0.185\n                                c-10.171-4.002-36.828-11.876-65.299,1.027l-40.24,14.408L158.157,2.952c-3.905-3.905-10.237-3.905-14.142,0L32.657,114.309\n                                c-3.602,3.603-4.293,9.85,0,14.143l190.287,190.287c3.045,3.046,10.175,3.967,14.143,0l101.665-101.664\n                                c2.643,0.228,5.386,0.351,8.229,0.351c26.126,0,49.236-17.922,62.457-37.456H502c5.523,0,10-4.477,10-10V43.891\n                                C512,38.368,507.523,33.891,502,33.891z M151.085,24.165l22.792,22.792c-6.775,4.19-14.608,6.432-22.792,6.432\n                                c-8.185,0-16.017-2.241-22.792-6.432L151.085,24.165z M76.663,144.173L53.871,121.38l22.792-22.792\n                                c4.19,6.775,6.432,14.608,6.432,22.792C83.095,129.564,80.854,137.397,76.663,144.173z M230.016,297.525l-22.788-22.788\n                                c13.913-8.586,31.661-8.586,45.575,0L230.016,297.525z M267.211,260.331c-22.098-16.03-52.292-16.03-74.39,0L91.07,158.579\n                                c7.809-10.74,12.025-23.641,12.025-37.199c0-13.559-4.215-26.459-12.025-37.199l22.817-22.816\n                                c10.74,7.809,23.64,12.025,37.199,12.025c13.559,0,26.459-4.216,37.199-12.025l21.629,21.629\n                                c-4.667,0.689-9.218,2.227-13.462,4.592c-7.168,3.994-12.792,9.975-16.294,17.211c-11.28,2.089-21.723,7.55-29.915,15.741\n                                c-22.225,22.226-22.225,58.389,0.001,80.615c11.112,11.112,25.709,16.669,40.307,16.669c14.597,0,29.195-5.556,40.308-16.669\n                                c7.23-7.23,12.295-16.116,14.832-25.8l33.764,11.459c-3.801,17.608,0.092,36.132,10.593,50.682L267.211,260.331z M206.413,162.018\n                                c0.088,0.032,0.176,0.064,0.265,0.094l19.996,6.787c-1.51,6.815-4.927,13.081-9.957,18.112c-14.428,14.426-37.904,14.428-52.33,0\n                                c-14.428-14.427-14.428-37.902,0-52.33c3.48-3.482,7.587-6.203,12.062-8.048C178.295,141.995,189.356,155.688,206.413,162.018z\n                                 M304.457,223.084c-3.86-6.29-6.044-13.469-6.389-20.796c4.79,3.463,10.644,6.856,17.636,9.549L304.457,223.084z M394.659,165.983\n                                c-9.478,15.538-27.86,31.441-47.678,31.441c-3.708,0-7.183-0.264-10.432-0.734c-0.013-0.002-0.026-0.004-0.039-0.006\n                                c-21.596-3.137-33.213-15.411-37.042-20.271c-0.204-0.3-1.073-1.437-1.202-1.626c-1.165-2.082-3.075-3.756-5.511-4.583\n                                l-79.508-26.985c-12.688-4.762-19.395-15.627-16.321-26.463c0.002-0.007,0.004-0.014,0.006-0.021\n                                c0.003-0.008,0.005-0.017,0.007-0.025c1.429-4.99,4.711-9.129,9.247-11.656c4.506-2.511,9.715-3.134,14.683-1.757l89.593,28.391\n                                c5.266,1.671,10.886-1.247,12.554-6.512c1.668-5.265-1.247-10.885-6.512-12.554l-71.255-22.58l-0.622-0.622\n                                c-0.006-0.006-0.012-0.013-0.019-0.019l-36.89-36.89l31.708-11.354c0.107-0.039,0.239-0.088,0.345-0.131\n                                c0.027-0.011,0.079-0.031,0.105-0.042c0.136-0.055,0.27-0.113,0.403-0.174c21.436-9.852,41.812-3.955,49.799-0.849\n                                c30.183,13.581,46.293,22.87,58.063,29.657c16.364,9.437,24.249,13.984,46.518,15.823V165.983z M432.543,159.968H414.66V72.525\n                                h17.883V159.968z M492,159.968h-39.457V53.891H492V159.968z"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Manage your offices with Genie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Top rated vendors for office renovation, courier, handymen, printing, products, and many more for creating best workplace experiences.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.smoothScroll(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "See Genie Bazaar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_ngb_carousel_13_Template, 4, 2, "ngb-carousel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_ngb_carousel_14_Template, 10, 2, "ngb-carousel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "We will be in touch shortly!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.onSumbit(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_span_30_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeComponent_span_36_Template, 3, 2, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HomeComponent_span_42_Template, 3, 2, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, HomeComponent_span_52_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "The Workplace Management Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Repair & Maintenance Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "AC, UPS, Carpentry, Plumbing, Electrical, Painting, and Sanitization Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Courier Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Domestic and International (Document and Parcel via Surface and Air with insurance)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Office Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Stationery, Cleaning supplies, Pantry, Furniture, Appliances, Electronics, and Medicines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "All Other Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Utility and Rent Payment, Deep Cleaning, Catering, Events, Travel, Office Movers, and all other service providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Get multiple quotes from vendors. Utilize approval workflows for selecting best vendor matching criteria.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "section", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-tab-group", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-tab", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, HomeComponent_ng_template_97_Template, 3, 0, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Request for Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Get quotes from 10,000+ best service providers at competitive rates from our Service Marketplace.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Using Genie Bazaar \u201CRequest for Quote\u201D feature, you can receive multiple competitive bids from vendors for any product or service \u2013 Project work, AMC, Events, Transportation, Industrial goods, Manpower, Furniture, Repair and Maintenance, IT Services, and more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Onboarded vendors are recommended by large organizations and have gone through reference check. You can onboard your preferred vendors too.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, HomeComponent_ng_template_111_Template, 2, 2, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Inventory Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Automate consumable purchases for maintaining optimal inventory at your office.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Genie Bazaar analyses purchases and consumption and automates desired level of inventory for each item in each office. This reduces wastage and manual ordering mistakes. Inventory Management works for consumables like Stationery, Cleaning Supplies, Pantry, IT, and Medicines. Inventory can be extracted for any office.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, HomeComponent_ng_template_123_Template, 14, 0, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Approval Workflows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Increase controllership over your expenses by utilizing approval workflows in procurement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Approval workflows are customizable for each region, office, product type, or service type. Add requisitioners and approvers to each group. Orders are fulfilled after approval. It leads to better budget management and eliminates maverick spend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Why Genie Bazaar?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Reliable Professionals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Our service providers go through a stringent background check process. Many providers are manufacturer authorized.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Timely Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "We hold ourselves to unprecedented standards of customer service including timely service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Unbeatable Prices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "With Apart from providing superior quality, we sweeten the deal by offering unbeatable low prices on everyday services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Marketplace Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "You can compare prices, ratings, and recommendations across hundreds of service providers to select the service provider that is perfect for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "section", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Join thousands of innovative businesses that are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " powered by Genie Bazaar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "The Whole experience dealing with Genie Bazaar has been a pleasure. From the beginning, nothing was a problem. We have found Anil and his team very helpful with an excellent knowledge of vast range of products available. The products available through Genie Bazaar have been of incredibly high quality with competitive rates and have given us the ability to combine many requirements in one go for procurement rather than purchasing it from multiple suppliers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Vinayaka Gangavathi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Sr. Mgr. Projects, Bigbasket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "UBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "We have been working with Geniebazaar since 2017 and they have been supplying pantry items and few other housekeeping supplies to us across a few locations. Apart from supply of goods, we have been using GB for providing repair and maintenance services across locations. GB has been a good partner for our company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Brish Bhan Vaidya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Head of Strategic Sourcing & Supply Chain (APAC), Uber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "section", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Free trial for a better ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " office experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Let digitalization help you improve employee experience and collect data essential for reducing facility administration cost.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_206_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.smoothScroll(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors && (_r6.invalid && _r6.touched || _r6.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors && (_r8.invalid && _r8.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.invalid && _r10.touched);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbSlide"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]], styles: [".section[_ngcontent-%COMP%] {\n  padding: 7% 0;\n}\n\nsection.banner-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nsection[_ngcontent-%COMP%]   .banner-container[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/home/banner.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.text-content-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 14%;\n}\n\n.text-content-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding-bottom: 4%;\n  font-size: 30px;\n}\n\n.text-content-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n  padding-bottom: 7%;\n}\n\n@media (min-width: 992px) {\n  .carousel-inner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: table-cell;\n    height: 180px;\n    width: 200px;\n    vertical-align: middle;\n  }\n\n  .carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 150px;\n    margin: auto auto;\n    max-width: 100%;\n    height: 75px;\n  }\n\n  .text-content-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 42px;\n  }\n\n  .text-content-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .slider-section[_ngcontent-%COMP%] {\n    margin-top: 5%;\n    padding-bottom: 2%;\n  }\n}\n\n.slider-section[_ngcontent-%COMP%] {\n  margin-top: 9%;\n  padding-bottom: 10%;\n}\n\n  .carousel-inner {\n  margin: auto;\n  width: 90%;\n}\n\n  .carousel-item {\n  \n  display: block !important;\n  z-index: 1;\n  position: absolute;\n  transform: translateX(100%);\n  opacity: 0;\n  transition: all 0.6s;\n  visibility: hidden;\n}\n\n  .carousel-item.active {\n  position: relative;\n  transform: translateX(0);\n  visibility: visible;\n  opacity: 1;\n}\n\n@media (max-width: 768px) {\n    .carousel-inner .carousel-item img {\n    width: auto;\n    height: 90px;\n    display: inline-block;\n  }\n}\n\n@media (min-width: 992px) {\n    .carousel-inner .carousel-item img {\n    max-height: 150px;\n    margin: auto auto;\n    max-width: 100%;\n    height: 75px;\n  }\n}\n\n.contact-form-section[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/home/bg-contact-fm-sec.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.wmp[_ngcontent-%COMP%] {\n  background: #F8F8F8;\n}\n\n.wmp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 5px;\n}\n\n.wmp[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 0;\n  padding: 10px;\n  font-size: 18px;\n}\n\n.wmp[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px 23px;\n}\n\n.wmp-box[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n\n.wmp[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.tab-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], .wmp[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.tab-section[_ngcontent-%COMP%],   .mat-tab-body-content {\n  padding: 50px 15px;\n}\n\n.tab-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-bottom: 30px;\n  font-size: 30px;\n}\n\n.tab-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 30px;\n  font-size: 24px;\n}\n\n.tab-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  line-height: 28px;\n  padding-top: 10px;\n  font-size: 18px;\n}\n\n  .mat-tab-label .mat-tab-label-content svg {\n  fill: #23343A;\n  width: 35px;\n  height: 25px;\n}\n\n.wgb-box[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n\n.wgb-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: #27aae1;\n  border-radius: 5px;\n  width: 50px;\n  margin-bottom: 15px;\n}\n\n.testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  padding-bottom: 20px;\n  line-height: 2.5;\n  font-size: 24px;\n  color: #f7941e;\n  font-weight: 400;\n}\n\n.testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin-bottom: 16px;\n  color: #f7941e;\n  font-weight: 400;\n}\n\n.testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding-bottom: 3px;\n}\n\n.testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .client-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  padding-bottom: 10px;\n}\n\n@media (max-width: 767px) {\n  .testimonal[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    padding: 30px 0 15px 0;\n    border-bottom: 1px solid #e6e6e6;\n  }\n\n  .testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n  }\n\n  .testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 768px) {\n  .testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n\n  .testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  .testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    height: 160px;\n    padding: 0 25px;\n  }\n}\n\n@media (min-width: 1600px) {\n  .testimonal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n}\n\n.demo-section[_ngcontent-%COMP%] {\n  background: #27aae1;\n}\n\n.demo-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-weight: 500;\n  padding-bottom: 20px;\n}\n\n.demo-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #FFF;\n  padding-bottom: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.demo-section[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%] {\n  border-color: #FFF;\n  color: #FFF;\n  font-size: 22px;\n  padding: 10px 45px;\n}\n\n@media (max-width: 767px) {\n  .demo-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 40px;\n    margin-top: 0;\n  }\n\n  .demo-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n}\n\n@media (min-width: 768px) {\n  .demo-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 48px;\n    line-height: 60px;\n  }\n\n  .demo-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxhQUFBO0FBUEY7O0FBU0E7RUFBdUIsa0JBQUE7QUFMdkI7O0FBTUE7RUFDSSxvREFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUhKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0VBQU47O0VBRUk7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUN2Qkk7SUR3QkosWUFBQTtFQUNOOztFQUNFO0lBQXFCLGVBQUE7RUFHdkI7O0VBRkU7SUFBcUIsZUFBQTtFQU12Qjs7RUFMRTtJQUNJLGNBQUE7SUFDQSxrQkFBQTtFQVFOO0FBQ0Y7O0FBTEU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVNKOztBQU5FO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQVNKOztBQVBBO0VBQ0k7SUFBNkMsV0FBQTtJQUFhLFlBQUE7SUFBYSxxQkFBQTtFQWF6RTtBQUNGOztBQVpBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUFjTjtBQUNGOztBQVhBO0VBQ0UsK0RBQUE7RUFDQSwyQkFBQTtFQUNGLDRCQUFBO0VBQ0Esc0JBQUE7QUFhQTs7QUFQQTtFQUFLLG1CQzdGUTtBRHdHYjs7QUFWQTtFQUFTLFdBQUE7RUFBYSxrQkFBQTtBQWV0Qjs7QUFkQTtFQUFRLGdCQUFBO0VBQWtCLFNBQUE7RUFBVyxhQUFBO0VBQWUsZUN4RnRDO0FENkdkOztBQXBCQTtFQUFPLFNBQUE7RUFBVSxpQkFBQTtBQXlCakI7O0FBeEJBO0VBQVMsZUFBQTtBQTRCVDs7QUEzQkE7RUFBUSxlQUFBO0FBK0JSOztBQTdCQTtFQUE2QixTQUFBO0FBaUM3Qjs7QUFoQ0E7RUFBOEMsa0JBQUE7QUFvQzlDOztBQW5DQTtFQUFnQixTQUFBO0VBQVcsb0JDNUZYO0VENEYwQyxlQzVGMUM7QURxSWhCOztBQXhDQTtFQUFnQixTQUFBO0VBQVcsaUJDN0ZYO0VENkZ1QyxlQzlGeEM7QUQ0SWY7O0FBN0NBO0VBQWdCLGlCQUFBO0VBQW1CLGlCQUFBO0VBQW1CLGVDakd4QztBRG9KZDs7QUFsREE7RUFBb0QsYUFBQTtFQUNsRCxXQUFBO0VBQ0EsWUFBQTtBQXNERjs7QUFwREE7RUFBUyxlQUFBO0FBd0RUOztBQXZEQTtFQUFhLFlBQUE7RUFBYyxtQkNwSGQ7RURvSHNDLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxtQkFBQTtBQStEcEY7O0FBNURBO0VBQWlCLGtCQUFBO0FBZ0VqQjs7QUEvREE7RUFBcUIsV0FBQTtFQUFhLG9CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsY0N0SDVFO0VEc0hpRyxnQkFBQTtBQXdFL0c7O0FBdkVBO0VBQW9CLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixjQ3ZIMUM7RUR1SCtELGdCQUFBO0FBOEU3RTs7QUE3RUE7RUFBeUMsU0FBQTtBQWlGekM7O0FBaEZBO0VBQW9CLGdCQUFBO0VBQWlCLG1CQUFBO0FBcUZyQzs7QUFwRkE7RUFBaUMsV0FBQTtFQUFhLG9CQUFBO0FBeUY5Qzs7QUF4RkE7RUFDRTtJQUFZLGtCQUFBO0lBQW9CLG1CQUFBO0VBNkZoQzs7RUE1RkE7SUFBaUIsc0JBQUE7SUFBd0IsZ0NBQUE7RUFpR3pDOztFQWhHQTtJQUFtQixvQkFBQTtFQW9HbkI7O0VBbkdBO0lBQW9CLGVBQUE7RUF1R3BCO0FBQ0Y7O0FBdEdBO0VBQ0U7SUFBaUIsZUFBQTtFQXlHakI7O0VBeEdBO0lBQXFCLFlBQUE7RUE0R3JCOztFQTNHQTtJQUFtQixhQUFBO0lBQWUsZUFBQTtFQWdIbEM7QUFDRjs7QUEvR0E7RUFDRTtJQUFtQixhQUFBO0VBa0huQjtBQUNGOztBQS9HQTtFQUFjLG1CQzdJRDtBRCtQYjs7QUFqSEE7RUFBaUIsV0M3SUg7RUQ2SXVCLGdCQUFBO0VBQWtCLG9CQUFBO0FBdUh2RDs7QUF0SEE7RUFBaUIsV0M5SUg7RUQ4SXVCLG9CQUFBO0VBQXFCLGtCQUFBO0VBQW9CLG1CQUFBO0FBNkg5RTs7QUE1SEE7RUFBaUUsa0JDL0luRDtFRCtJNkUsV0MvSTdFO0VEK0lnRyxlQUFBO0VBQWdCLGtCQUFBO0FBbUk5SDs7QUFsSUE7RUFDRTtJQUFpQixlQUFBO0lBQWdCLGlCQUFBO0lBQW1CLGFBQUE7RUF3SXBEOztFQXZJQTtJQUFpQixpQkFBQTtFQTJJakI7QUFDRjs7QUExSUE7RUFDRTtJQUFpQixlQUFBO0lBQWdCLGlCQUFBO0VBOElqQzs7RUE3SUE7SUFBaUIsZUFBQTtJQUFnQixpQkFBQTtFQWtKakM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlLnNjc3MnO1xyXG5cclxuLy8gJG5hbWVTcGFjZTogJ2Nhcm91c2VsLWlubmVyJztcclxuLy8gOjpuZy1kZWVwIC4jeyRuYW1lU3BhY2V9e1xyXG4vLyAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgICAgd2lkdGg6IDkwJTtcclxuLy8gfVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDclIDA7XHJcbn1cclxuc2VjdGlvbi5iYW5uZXItc2VjdGlvbntwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG5zZWN0aW9uIC5iYW5uZXItY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLn4vYXNzZXRzL2ltZy9ob21lL2Jhbm5lci5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4udGV4dC1jb250ZW50LWJveHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNCU7XHJcbn1cclxuLnRleHQtY29udGVudC1ib3ggaDF7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi50ZXh0LWNvbnRlbnQtYm94IGg0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3JTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYVRhYmxldHMpIHtcclxuICAgIC5jYXJvdXNlbC1pbm5lciBhIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcm91c2VsLWlubmVyIGltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiAkZnVsbFNpemU7XHJcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICB9XHJcbiAgICAudGV4dC1jb250ZW50LWJveCBoMXtmb250LXNpemU6IDQycHg7fVxyXG4gICAgLnRleHQtY29udGVudC1ib3ggaDR7Zm9udC1zaXplOiAyMHB4O31cclxuICAgIC5zbGlkZXItc2VjdGlvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogOSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG59XHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtaW5uZXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAvKiBGb3JjZSB0byBhbHdheXMgYmUgYmxvY2sgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246YWxsICAwLjZzO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkbWVkaWFTbSkge1xyXG4gICAgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSBpbWd7d2lkdGg6IGF1dG87IGhlaWdodDogOTBweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWFUYWJsZXRzKSB7XHJcbiAgICA6Om5nLWRlZXAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIGltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgfVxyXG59XHJcblxyXG4uY29udGFjdC1mb3JtLXNlY3Rpb257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcufi9hc3NldHMvaW1nL2hvbWUvYmctY29udGFjdC1mbS1zZWMucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4vLyBGb3JtIFxyXG5cclxuXHJcbi53bXB7YmFja2dyb3VuZDogJGNvbG9yR3JheTt9XHJcbi53bXAgaW1ne3dpZHRoOiA2MHB4OyBtYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4ud21wIGg0e2ZvbnQtd2VpZ2h0OiA1MDA7IG1hcmdpbjogMDsgcGFkZGluZzogMTBweDsgZm9udC1zaXplOiAkbGdGb250U2l6ZTt9XHJcbi53bXAgcHttYXJnaW46IDA7cGFkZGluZzogMHB4IDIzcHg7fVxyXG4ud21wLWJveHttYXJnaW4tdG9wOiAyMCU7fVxyXG4ud21wIGgze2ZvbnQtc2l6ZTogMjJweDt9XHJcblxyXG4udGFiLXNlY3Rpb24gLnJvdywgLndtcCAucm93e21hcmdpbjogMDt9XHJcbi50YWItc2VjdGlvbiwgOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktY29udGVudHtwYWRkaW5nOiA1MHB4IDE1cHg7fVxyXG4udGFiLXNlY3Rpb24gaDJ7bWFyZ2luOiAwOyBwYWRkaW5nLWJvdHRvbTogJHh4eGxGb250U2l6ZTsgZm9udC1zaXplOiAkeHh4bEZvbnRTaXplO31cclxuLnRhYi1zZWN0aW9uIGgze21hcmdpbjogMDsgbGluZS1oZWlnaHQ6ICR4eHhsRm9udFNpemU7IGZvbnQtc2l6ZTogJHh4bEZvbnRTaXplO31cclxuLnRhYi1zZWN0aW9uIGg0e2xpbmUtaGVpZ2h0OiAyOHB4OyBwYWRkaW5nLXRvcDogMTBweDsgZm9udC1zaXplOiAkbGdGb250U2l6ZTt9XHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHN2Z3tmaWxsOiAjMjMzNDNBO1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMjVweDt9XHJcblxyXG4ud2diLWJveHttYXJnaW4tdG9wOiAyMCU7fVxyXG4ud2diLWJveCBpbWd7cGFkZGluZzogOHB4OyBiYWNrZ3JvdW5kOiAkY29sb3JCbHVlOyBib3JkZXItcmFkaXVzOiA1cHg7IHdpZHRoOiA1MHB4OyBtYXJnaW4tYm90dG9tOiAxNXB4O31cclxuXHJcblxyXG4udGVzdGltb25hbCAuYm94e3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi50ZXN0aW1vbmFsIC5ib3ggaW1ne3dpZHRoOiA4MHB4OyBwYWRkaW5nLWJvdHRvbTogMjBweDtsaW5lLWhlaWdodDogMi41OyBmb250LXNpemU6IDI0cHg7IGNvbG9yOiAkY29sb3JPcmFuZ2U7IGZvbnQtd2VpZ2h0OiA0MDA7fVxyXG4udGVzdGltb25hbCAuYm94IGgze3BhZGRpbmc6IDE2cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IGNvbG9yOiAkY29sb3JPcmFuZ2U7IGZvbnQtd2VpZ2h0OiA0MDA7fVxyXG4udGVzdGltb25hbCAuYm94IGg1LCAudGVzdGltb25hbCAuYm94IGg2e21hcmdpbjogMDt9XHJcbi50ZXN0aW1vbmFsIC5ib3ggaDV7Zm9udC13ZWlnaHQ6IDUwMDtwYWRkaW5nLWJvdHRvbTogM3B4O31cclxuLnRlc3RpbW9uYWwgLmJveCAuY2xpZW50LXBpYyBpbWd7d2lkdGg6IDcwcHg7IHBhZGRpbmctYm90dG9tOiAxMHB4O31cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnRlc3RpbW9uYWx7cGFkZGluZy1sZWZ0OiAxNXB4OyBwYWRkaW5nLXJpZ2h0OiAxNXB4O31cclxuICAudGVzdGltb25hbCAuYm94e3BhZGRpbmc6IDMwcHggMCAxNXB4IDA7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O31cclxuICAudGVzdGltb25hbCAuYm94IHB7cGFkZGluZy1ib3R0b206IDIwcHg7fVxyXG4gIC50ZXN0aW1vbmFsIC5ib3ggaDN7Zm9udC1zaXplOiAxOHB4O31cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAudGVzdGltb25hbCAuYm94e21hcmdpbi10b3A6IDEwJTt9XHJcbiAgLnRlc3RpbW9uYWwgLmJveCBpbWd7d2lkdGg6IDEwMHB4O31cclxuICAudGVzdGltb25hbCAuYm94IHB7aGVpZ2h0OiAxNjBweDsgcGFkZGluZzogMCAyNXB4O31cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgLnRlc3RpbW9uYWwgLmJveCBwe2hlaWdodDogMTIwcHg7fVxyXG59XHJcblxyXG5cclxuLmRlbW8tc2VjdGlvbntiYWNrZ3JvdW5kOiRjb2xvckJsdWU7fVxyXG4uZGVtby1zZWN0aW9uIGgze2NvbG9yOiAkY29sb3JXaGl0ZTsgZm9udC13ZWlnaHQ6IDUwMDsgcGFkZGluZy1ib3R0b206IDIwcHg7fVxyXG4uZGVtby1zZWN0aW9uIGg0e2NvbG9yOiAkY29sb3JXaGl0ZTsgcGFkZGluZy1ib3R0b206IDMwcHg7cGFkZGluZy1sZWZ0OiA0MHB4OyBwYWRkaW5nLXJpZ2h0OiA0MHB4O31cclxuLmRlbW8tc2VjdGlvbiAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbntib3JkZXItY29sb3I6ICRjb2xvcldoaXRlO2NvbG9yOiAkY29sb3JXaGl0ZTtmb250LXNpemU6IDIycHg7cGFkZGluZzogMTBweCA0NXB4O31cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmRlbW8tc2VjdGlvbiBoM3tmb250LXNpemU6IDMwcHg7bGluZS1oZWlnaHQ6IDQwcHg7IG1hcmdpbi10b3A6IDA7fVxyXG4gIC5kZW1vLXNlY3Rpb24gaDR7bGluZS1oZWlnaHQ6IDMwcHg7fVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5kZW1vLXNlY3Rpb24gaDN7Zm9udC1zaXplOiA0OHB4O2xpbmUtaGVpZ2h0OiA2MHB4O31cclxuICAuZGVtby1zZWN0aW9uIGg0e2ZvbnQtc2l6ZTogMjhweDtsaW5lLWhlaWdodDogNDBweDt9XHJcbn0iLCIvLyBDb2xvcnNcclxuJGNvbG9yQmx1ZSA6ICMyN2FhZTE7XHJcbiRjb2xvcldoaXRlIDogI0ZGRjtcclxuJGNvbG9yT3JhbmdlIDojZjc5NDFlO1xyXG4kY29sb3JEZWZhdWx0IDogIzIzMzQzQTtcclxuJGNvbG9yRGVmYXVsdExpZ2h0IDogIzQ5NTc1ZDtcclxuJGNvbG9yRGVmYXVsdERhcmsgOiAjMTIxYTFkO1xyXG4kY29sb3JHcmF5IDogI0Y4RjhGODtcclxuJGNvbG9yUmVkIDogcmdiKDIyOCwgMjMsIDIzKTtcclxuLy8gRm9udCBTaXplXHJcbiR4c0ZvbnRTaXplIDogMTBweDtcclxuJHNGb250U2l6ZSA6IDEycHg7XHJcbiRmb250U2l6ZSA6IDE0cHg7XHJcbiRtZEZvbnRTaXplIDogMTZweDtcclxuJGxnRm9udFNpemUgOiAxOHB4O1xyXG4keGxGb250U2l6ZSA6IDIwcHg7XHJcbiR4eGxGb250U2l6ZSA6IDI0cHg7XHJcbiR4eHhsRm9udFNpemUgOiAzMHB4O1xyXG4vLyBXaWR0aCBTaXplXHJcbiRmdWxsU2l6ZSA6IDEwMCU7XHJcbiRoYWxmU2l6ZSA6IDUwJTtcclxuLy8gRmxvYXRcclxuJGZsb2F0TGVmdCA6IGxlZnQ7XHJcbiRmbG9hdFJpZ2h0IDogcmlnaHQ7XHJcbi8vIE1lZGlhIFNpemVcclxuJG1lZGlhWHMgOiA1NzZweDsgLy8gUGhvbmVcclxuJG1lZGlhU20gOiA3NjhweDsgLy8gVGFibGV0cyBsYW5kc2NhcGVcclxuJG1lZGlhVGFibGV0cyA6IDk5MnB4OyAvLyBUYWJsZXRzIHBvcnRyYWl0XHJcbiRtZWRpYURlc2t0b3BzIDogMTIwMHB4OyAvLyBEZXNrdG9wc1xyXG4kbWVkaWFMYXB0b3BzIDogMTM0OXB4OyAvLyBMYXB0b3BzXHJcbiRtZWRpYU1kIDogMTQ0MHB4OyAvLyBNZWRpdW0gRGVza3RvcHNcclxuJG1lZGlhTGcgOiAxNjAwcHg7IC8vIExhcmdlIERlc2t0b3BzXHJcbiRtZWRpYVhsIDogMTkyMHB4OyAvLyBFeHRyYSBMYXJnZSBEZXNrdG9wcyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");




class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 112, vars: 0, consts: [[1, "container"], [1, "pt-5", "pb-5"], [1, "mt-5", "mb-5"], [1, "row"], [1, "col-md-6", "align-self-center"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 800 600"], ["id", "GlassClip"], ["d", "M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5\n                s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13\n                c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"], ["id", "cordClip"], ["width", "800", "height", "600"], ["id", "planet"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-miterlimit", "10", "cx", "572.859", "cy", "108.803", "r", "90.788"], ["id", "craterBig", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-miterlimit", "10", "cx", "548.891", "cy", "62.319", "r", "13.074"], ["id", "craterSmall", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-miterlimit", "10", "cx", "591.743", "cy", "158.918", "r", "7.989"], ["id", "ring", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "d", "\n\t\t\tM476.562,101.461c-30.404,2.164-49.691,4.221-49.691,8.007c0,6.853,63.166,12.408,141.085,12.408s141.085-5.555,141.085-12.408\n\t\t\tc0-3.378-15.347-4.988-40.243-7.225"], ["id", "ringShadow", "opacity", "0.5", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "d", "\n\t\t\tM483.985,127.43c23.462,1.531,52.515,2.436,83.972,2.436c36.069,0,68.978-1.19,93.922-3.149"], ["id", "stars"], ["id", "starsBig"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "518.07", "y1", "245.375", "x2", "518.07", "y2", "266.581"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "508.129", "y1", "255.978", "x2", "528.01", "y2", "255.978"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "154.55", "y1", "231.391", "x2", "154.55", "y2", "252.598"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "144.609", "y1", "241.995", "x2", "164.49", "y2", "241.995"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "320.135", "y1", "132.746", "x2", "320.135", "y2", "153.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "310.194", "y1", "143.349", "x2", "330.075", "y2", "143.349"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "200.67", "y1", "483.11", "x2", "200.67", "y2", "504.316"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "210.611", "y1", "493.713", "x2", "190.73", "y2", "493.713"], ["id", "starsSmall"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "432.173", "y1", "380.52", "x2", "432.173", "y2", "391.83"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "426.871", "y1", "386.175", "x2", "437.474", "y2", "386.175"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "489.555", "y1", "299.765", "x2", "489.555", "y2", "308.124"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "485.636", "y1", "303.945", "x2", "493.473", "y2", "303.945"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "231.468", "y1", "291.009", "x2", "231.468", "y2", "299.369"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "227.55", "y1", "295.189", "x2", "235.387", "y2", "295.189"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "244.032", "y1", "547.539", "x2", "244.032", "y2", "555.898"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "247.95", "y1", "551.719", "x2", "240.113", "y2", "551.719"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "186.359", "y1", "406.967", "x2", "186.359", "y2", "415.326"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "190.277", "y1", "411.146", "x2", "182.44", "y2", "411.146"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "480.296", "y1", "406.967", "x2", "480.296", "y2", "415.326"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "484.215", "y1", "411.146", "x2", "476.378", "y2", "411.146"], ["id", "circlesBig"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "588.977", "cy", "255.978", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "450.066", "cy", "320.259", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "168.303", "cy", "353.753", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "429.522", "cy", "201.185", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "200.67", "cy", "176.313", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "133.343", "cy", "477.014", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "283.521", "cy", "568.033", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "413.618", "cy", "482.387", "r", "7.952"], ["id", "circlesSmall"], ["fill", "#0E0620", "cx", "549.879", "cy", "296.402", "r", "2.651"], ["fill", "#0E0620", "cx", "253.29", "cy", "229.24", "r", "2.651"], ["fill", "#0E0620", "cx", "434.824", "cy", "263.931", "r", "2.651"], ["fill", "#0E0620", "cx", "183.708", "cy", "544.176", "r", "2.651"], ["fill", "#0E0620", "cx", "382.515", "cy", "530.923", "r", "2.651"], ["fill", "#0E0620", "cx", "130.693", "cy", "305.608", "r", "2.651"], ["fill", "#0E0620", "cx", "480.296", "cy", "477.014", "r", "2.651"], ["id", "spaceman", "clip-path", "url(cordClip)"], ["id", "cord", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\tM273.813,410.969c0,0-54.527,39.501-115.34,38.218c-2.28-0.048-4.926-0.241-7.841-0.548\n\t\t\tc-68.038-7.178-134.288-43.963-167.33-103.87c-0.908-1.646-1.793-3.3-2.654-4.964c-18.395-35.511-37.259-83.385-32.075-118.817"], ["id", "backpack", "fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\tM338.164,454.689l-64.726-17.353c-11.086-2.972-17.664-14.369-14.692-25.455l15.694-58.537\n\t\t\tc3.889-14.504,18.799-23.11,33.303-19.221l52.349,14.035c14.504,3.889,23.11,18.799,19.221,33.303l-15.694,58.537\n\t\t\tC360.647,451.083,349.251,457.661,338.164,454.689z"], ["id", "antenna"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "323.396", "y1", "236.625", "x2", "295.285", "y2", "353.753"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "cx", "323.666", "cy", "235.617", "r", "6.375"], ["id", "armR"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\tM360.633,363.039c1.352,1.061,4.91,5.056,5.824,6.634l27.874,47.634c3.855,6.649,1.59,15.164-5.059,19.02l0,0\n\t\t\t\tc-6.649,3.855-15.164,1.59-19.02-5.059l-5.603-9.663"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\tM388.762,434.677c5.234-3.039,7.731-8.966,6.678-14.594c2.344,1.343,4.383,3.289,5.837,5.793\n\t\t\t\tc4.411,7.596,1.829,17.33-5.767,21.741c-7.596,4.411-17.33,1.829-21.741-5.767c-1.754-3.021-2.817-5.818-2.484-9.046\n\t\t\t\tC375.625,437.355,383.087,437.973,388.762,434.677z"], ["id", "armL"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\tM301.301,347.66c-1.702,0.242-5.91,1.627-7.492,2.536l-47.965,27.301c-6.664,3.829-8.963,12.335-5.134,18.999h0\n\t\t\t\tc3.829,6.664,12.335,8.963,18.999,5.134l9.685-5.564"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\tM241.978,395.324c-3.012-5.25-2.209-11.631,1.518-15.977c-2.701-0.009-5.44,0.656-7.952,2.096\n\t\t\t\tc-7.619,4.371-10.253,14.09-5.883,21.71c4.371,7.619,14.09,10.253,21.709,5.883c3.03-1.738,5.35-3.628,6.676-6.59\n\t\t\t\tC252.013,404.214,245.243,401.017,241.978,395.324z"], ["id", "body"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\tM353.351,365.387c-7.948,1.263-16.249,0.929-24.48-1.278c-8.232-2.207-15.586-6.07-21.836-11.14\n\t\t\t\tc-17.004,4.207-31.269,17.289-36.128,35.411l-1.374,5.123c-7.112,26.525,8.617,53.791,35.13,60.899l0,0\n\t\t\t\tc26.513,7.108,53.771-8.632,60.883-35.158l1.374-5.123C371.778,395.999,365.971,377.536,353.351,365.387z"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\tM269.678,394.912L269.678,394.912c26.3,20.643,59.654,29.585,93.106,25.724l2.419-0.114"], ["id", "legs"], ["id", "legR"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t\tM312.957,456.734l-14.315,53.395c-1.896,7.07,2.299,14.338,9.37,16.234l0,0c7.07,1.896,14.338-2.299,16.234-9.37l17.838-66.534\n\t\t\t\t\tC333.451,455.886,323.526,457.387,312.957,456.734z"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "304.883", "y1", "486.849", "x2", "330.487", "y2", "493.713"], ["id", "legL"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t\tM296.315,452.273L282,505.667c-1.896,7.07-9.164,11.265-16.234,9.37l0,0c-7.07-1.896-11.265-9.164-9.37-16.234l17.838-66.534\n\t\t\t\t\tC278.993,441.286,286.836,447.55,296.315,452.273z"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "262.638", "y1", "475.522", "x2", "288.241", "y2", "482.387"], ["id", "head"], ["transform", "matrix(0.259 -0.9659 0.9659 0.259 -51.5445 563.2371)", "fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "cx", "341.295", "cy", "315.211", "rx", "61.961", "ry", "60.305"], ["id", "headStripe", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\tM330.868,261.338c-7.929,1.72-15.381,5.246-21.799,10.246"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\tM380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5s-28.485-16.599-34.877-24.192\n\t\t\t\tc-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13c6.755-0.61,20.546-0.608,41.785,5.087\n\t\t\t\ts33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"], ["clip-path", "url(#GlassClip)"], ["id", "glassShine", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-miterlimit", "10", "points", "\n\t\t\t\t\t278.436,375.599 383.003,264.076 364.393,251.618 264.807,364.928 \t\t\t\t"], ["href", "/", "mat-raised-button", "", "color", "primary"], ["_ngcontent-glo-c136", "", "href", "mailto:support@geniebazaar.com", "target", "blank", 1, "hvr-forward"], ["_ngcontent-glo-c136", "", "icon", "envelope", "ng-reflect-icon", "envelope", 1, "ng-fa-icon"], ["role", "img", "aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "envelope", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-envelope", "fa-w-16"], ["fill", "currentColor", "d", "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clipPath", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clipPath", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "line", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "line", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "line", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "line", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "line", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "line", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "line", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "line", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "line", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "line", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "line", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "line", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "line", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "line", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "line", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "g", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "circle", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "circle", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "circle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "circle", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "circle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "circle", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "g", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "circle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "circle", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "circle", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "circle", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "circle", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "circle", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "circle", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "g", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "g", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "line", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "circle", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "g", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "g", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "g", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "g", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "line", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "line", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "ellipse", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "polygon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "UH OH! You're lost.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Let's go to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " or report on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "fa-icon", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "svg", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " support@geniebazaar.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Krunal\Genie Bazaar\New look\Angular10\geniebazaar\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map