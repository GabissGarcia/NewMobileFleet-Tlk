webpackJsonp([28],{

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEntregasPageModule", function() { return DashboardEntregasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_entregas__ = __webpack_require__(654);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardEntregasPageModule = /** @class */ (function () {
    function DashboardEntregasPageModule() {
    }
    DashboardEntregasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_entregas__["a" /* DashboardEntregasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__dashboard_entregas__["a" /* DashboardEntregasPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], DashboardEntregasPageModule);
    return DashboardEntregasPageModule;
}());

//# sourceMappingURL=dashboard-entregas.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardEntregasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_dashboard_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DashboardEntregasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardEntregasPage = /** @class */ (function () {
    function DashboardEntregasPage(navCtrl, navParams, dashboardService, veiculoService, user, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dashboardService = dashboardService;
        this.veiculoService = veiculoService;
        this.user = user;
        this.app = app;
    }
    DashboardEntregasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardEntregasPage');
    };
    DashboardEntregasPage.prototype.abrirCheckList = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__index__["b" /* ChecklistPage */]);
    };
    DashboardEntregasPage.prototype.logout = function () {
        this.user.logout();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__index__["j" /* LoginPage */]);
    };
    DashboardEntregasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-dashboard-entregas',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\dashboard-entregas\dashboard-entregas.html"*/'<ion-header>\n\n    <ion-navbar>\n  \n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="logout()">\n          <ion-icon name="md-exit"></ion-icon>\n          {{ \'EXIT\' | translate }}\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n      <ion-list>\n          <button ion-item (click)="abrirCheckList()">\n              Inspection\n            </button>\n      </ion-list>\n  </ion-card>\n  <!--<ion-row>\n    <ion-col>\n      <ion-card>\n        <h1 orange>ON Dutty</h1>\n        <p>00:00:00</p>\n      </ion-card>\n    </ion-col>\n\n    <ion-col>\n        <ion-card>\n          <h1 orange>Checklist</h1>\n          <p></p>\n        </ion-card>\n      </ion-col>\n\n    <ion-col>\n      <ion-card>\n        <h1 green>41</h1>\n        <p>Em gozo</p>\n      </ion-card>\n    </ion-col>\n\n    <ion-col>\n      <ion-card>\n        <h1 green>18</h1>\n        <p>Homologadas</p>\n      </ion-card>\n    </ion-col>\n  </ion-row>-->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\dashboard-entregas\dashboard-entregas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1__app_app_component__["a" /* MyApp */]])
    ], DashboardEntregasPage);
    return DashboardEntregasPage;
}());

//# sourceMappingURL=dashboard-entregas.js.map

/***/ })

});
//# sourceMappingURL=28.js.map