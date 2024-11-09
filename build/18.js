webpackJsonp([18],{

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_veiculo_service__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { BackgroundMode } from '@ionic-native/background-mode';
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, translateService, veiculoService, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.veiculoService = veiculoService;
        this.user = user;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5____["v" /* Tab1Root */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5____["w" /* Tab2Root */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5____["x" /* Tab3Root */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_0__index__["y" /* Tab4Root */];
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
        this.tab4Title = " ";
        this.isInspection = false;
        translateService
            .get(["TAB1_TITLE", "TAB2_TITLE", "TAB3_TITLE", "TAB4_TITLE"])
            .subscribe(function (values) {
            _this.tab1Title = values["TAB1_TITLE"];
            _this.tab2Title = values["TAB2_TITLE"];
            _this.tab3Title = values["TAB3_TITLE"];
            _this.tab4Title = "Inspections";
        });
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        //this.backgroundMode.enable();
        this.veiculoService.iniciaTimeNotification();
        var funcao = this.user._user.perfil.funcao;
        if (funcao.indexOf('mobileinspection') >= 0) {
            this.isInspection = true;
        }
        this.veiculoService.tabRef = this.tabRef;
        /*const user = this.user._user;
        const filtro = new FiltroVeiculo();
        if (user.clienteId !== null) {
          if (user.clienteId === 1) {
            
          } else {
            filtro.clienteIdFilter = user.clienteFilho;
          }
          filtro.lstClienteId = user.clienteFilho;
        }
        if(user.clienteId !== 1){
          this.veiculoService.filtroVeiculos(filtro);
        }*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Tabs"])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-tabs",template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\tabs\tabs.html"*/'<ion-tabs #myTabs [selectedIndex]="1">\n  <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" tabIcon="home" [tabBadge]="veiculoService.veiculos.length"\n  [tabBadgeStyle]="\'light\'"></ion-tab>\n  <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="md-map"></ion-tab>\n  <ion-tab *ngIf="isInspection" [root]="tab4Root" [tabTitle]="tab4Title" tabIcon="md-clipboard"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=18.js.map