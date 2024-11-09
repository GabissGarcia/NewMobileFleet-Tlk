webpackJsonp([20],{

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorPageModule", function() { return SensorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensor__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SensorPageModule = /** @class */ (function () {
    function SensorPageModule() {
    }
    SensorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sensor__["a" /* SensorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__sensor__["a" /* SensorPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], SensorPageModule);
    return SensorPageModule;
}());

//# sourceMappingURL=sensor.module.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the SensorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SensorPage = /** @class */ (function () {
    function SensorPage(navCtrl, navParams, veiculoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.veiculoService = veiculoService;
        this.sensores = this.navParams.get("sensores");
        this.veiculo = this.navParams.get("veiculo");
    }
    SensorPage.prototype.ionViewDidLoad = function () {
    };
    SensorPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.veiculoService
            .getStatusVeiculo(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.sensores = res;
        }, function (error) {
            refresher.complete();
        }, function () {
            refresher.complete();
        });
    };
    SensorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-sensor',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\sensor\sensor.html"*/'<!--\n  Generated template for the SensorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title center text-center>{{\'SENSORS\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n  <ion-list>\n    <ng-template ngFor let-sts [ngForOf]="sensores" let-i="index" let-odd="odd">\n      <ion-item *ngIf="sts.tipo !== \'T\'; else titulo">\n        <ion-avatar item-start>\n          <img [src]="\'assets/\' + sts.icon">\n        </ion-avatar>\n        <p>{{sts.dsc | translate}}</p>\n      </ion-item>\n      <ng-template #titulo>\n        <ion-item-divider color="light">\n          <h2>{{sts.dsc | translate}}</h2>\n        </ion-item-divider>\n      </ng-template>\n    </ng-template>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\sensor\sensor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__providers_api_veiculo_service__["a" /* VeiculoService */]])
    ], SensorPage);
    return SensorPage;
}());

//# sourceMappingURL=sensor.js.map

/***/ })

});
//# sourceMappingURL=20.js.map