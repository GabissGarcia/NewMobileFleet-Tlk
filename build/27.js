webpackJsonp([27],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoVeiculoPageModule", function() { return InfoVeiculoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_veiculo__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InfoVeiculoPageModule = /** @class */ (function () {
    function InfoVeiculoPageModule() {
    }
    InfoVeiculoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_veiculo__["a" /* InfoVeiculoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__info_veiculo__["a" /* InfoVeiculoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], InfoVeiculoPageModule);
    return InfoVeiculoPageModule;
}());

//# sourceMappingURL=info-veiculo.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoVeiculoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the InfoVeiculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoVeiculoPage = /** @class */ (function () {
    function InfoVeiculoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.infoVeiculo = this.navParams.get("infoVeiculo");
    }
    InfoVeiculoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoVeiculoPage');
    };
    InfoVeiculoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-info-veiculo',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\info-veiculo\info-veiculo.html"*/'<!--\n  Generated template for the InfoVeiculoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title center text-center>{{\'VEHICLE_INFORMATION\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list inset>\n    <ion-item>\n      <ion-label>{{\'CODE\' | translate}}</ion-label>\n      <ion-input [readonly]="true" [(ngModel)]="infoVeiculo.codigo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{\'DESCRIPTION\' | translate}}</ion-label>\n      <ion-input [readonly]="true" [(ngModel)]="infoVeiculo.descricao"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Chassi</ion-label>\n      <ion-input [readonly]="true" [(ngModel)]="infoVeiculo.chassi"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{\'COLOR\' | translate}}</ion-label>\n      <ion-input [readonly]="true" [(ngModel)]="infoVeiculo.cor"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-list-header>\n    {{\'VEHICLE_TYPE\' | translate}}\n  </ion-list-header>\n  <ion-list inset>\n\n    <ion-item>\n      <ion-label>{{\'MODEL\' | translate}}</ion-label>\n      <ion-input [readonly]="true" [(ngModel)]="infoVeiculo.tipoVeiculo.modelo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{\'BRAND\' | translate}}</ion-label>\n      <ion-input [readonly]="true" [(ngModel)]="infoVeiculo.tipoVeiculo.marca"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-list-header>\n\n    {{\'VEHICLE_EQUIPMENT\' | translate}}\n\n  </ion-list-header>\n\n  <ion-list inset>\n\n    <ion-item>\n      <ion-label>{{\'MAIN\' | translate}}</ion-label>\n      <ion-input [readonly]="true" [(ngModel)]="infoVeiculo.equipamento.terminalId"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{\'TECHNOLOGY\' | translate}}</ion-label>\n      <ion-input [readonly]="true" [(ngModel)]="infoVeiculo.equipamento.tecnologia"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{\'MAIN\' | translate}}</ion-label>\n      <ion-input [readonly]="true" [(ngModel)]="infoVeiculo.equipamento2.terminalId"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{\'TECHNOLOGY\' | translate}}</ion-label>\n      <ion-input [readonly]="true" [(ngModel)]="infoVeiculo.equipamento2.tecnologia"></ion-input>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\info-veiculo\info-veiculo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], InfoVeiculoPage);
    return InfoVeiculoPage;
}());

//# sourceMappingURL=info-veiculo.js.map

/***/ })

});
//# sourceMappingURL=27.js.map