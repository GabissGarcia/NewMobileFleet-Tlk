webpackJsonp([16],{

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeiculoMenuPageModule", function() { return VeiculoMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__veiculo_menu__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VeiculoMenuPageModule = /** @class */ (function () {
    function VeiculoMenuPageModule() {
    }
    VeiculoMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__veiculo_menu__["a" /* VeiculoMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__veiculo_menu__["a" /* VeiculoMenuPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__veiculo_menu__["a" /* VeiculoMenuPage */]
            ]
        })
    ], VeiculoMenuPageModule);
    return VeiculoMenuPageModule;
}());

//# sourceMappingURL=veiculo-menu.module.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_veiculo_service__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VeiculoMenuPage = /** @class */ (function () {
    function VeiculoMenuPage(navCtrl, navParams, veiculoService, translateService, loadingCtrl, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.veiculoService = veiculoService;
        this.translateService = translateService;
        this.loadingCtrl = loadingCtrl;
        this.user = user;
        this.isInspection = false;
        var funcao = this.user._user.perfil.funcao;
        if (funcao.indexOf('mobileinspection') >= 0) {
            this.isInspection = true;
        }
        this.veiculo = this.navParams.get("veiculo");
        this.translateService.get(["WAIT"]).subscribe(function (values) {
            _this.waitString = values["WAIT"];
        });
    }
    VeiculoMenuPage.prototype.mapa = function () {
        var _this = this;
        this.veiculoService.setSelectVeiculo = this.veiculoService.marcadores.get(this.veiculo.veiculoId).veiculo;
        this.veiculo = this.veiculoService.marcadores.get(this.veiculo.veiculoId).veiculo;
        if (this.veiculoService.mapa != null) {
            setTimeout(function () {
                var optionsvei = {
                    target: { lat: _this.veiculo.latitude, lng: _this.veiculo.longitude },
                    zoom: 14,
                    duration: 1000
                };
                _this.veiculoService.mapa.animateCamera(optionsvei);
                if (_this.veiculoService.mapa != null) {
                    _this.veiculoService.marcadores.get(_this.veiculo.veiculoId).marker.showInfoWindow();
                }
            }, 1000);
        }
        this.veiculoService.tabRef.select(2);
    };
    VeiculoMenuPage.prototype.rastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index__["q" /* RastroSearchPage */], {
            veiculo: this.veiculo
        });
    };
    VeiculoMenuPage.prototype.sensor = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService
            .getStatusVeiculo(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.page = _this.veiculoService.tabRef
                .getByIndex(0)
                .push(__WEBPACK_IMPORTED_MODULE_2__index__["u" /* SensorPage */], {
                veiculo: _this.veiculo,
                sensores: res
            });
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    VeiculoMenuPage.prototype.mensage = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService
            .getMensagem(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.page = _this.veiculoService.tabRef
                .getByIndex(0)
                .push(__WEBPACK_IMPORTED_MODULE_2__index__["m" /* MensagemPage */], {
                veiculo: _this.veiculo,
                mensagens: res.mensagens
            });
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    VeiculoMenuPage.prototype.macro = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService
            .getMacrosVeiculo(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.page = _this.veiculoService.tabRef.getByIndex(0).push(__WEBPACK_IMPORTED_MODULE_2__index__["k" /* MacroPage */], {
                veiculo: _this.veiculo,
                macros: res
            });
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    VeiculoMenuPage.prototype.infoVeiculo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService
            .getInfoVeiculo(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.page = _this.veiculoService.tabRef
                .getByIndex(0)
                .push(__WEBPACK_IMPORTED_MODULE_2__index__["e" /* InfoVeiculoPage */], {
                veiculo: _this.veiculo,
                infoVeiculo: res
            });
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    VeiculoMenuPage.prototype.infoAdicional = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService
            .getInfoAdicional(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.page = _this.veiculoService.tabRef
                .getByIndex(0)
                .push(__WEBPACK_IMPORTED_MODULE_2__index__["d" /* InfoAdicionalPage */], {
                veiculo: _this.veiculo,
                infoAdd: res
            });
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    VeiculoMenuPage.prototype.cadPonto = function () {
        this.veiculo = this.veiculoService.marcadores.get(this.veiculo.veiculoId).veiculo;
        this.veiculoService.tabRef.getByIndex(0).push(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CadpontoPage */], {
            veiculo: this.veiculo
        });
    };
    VeiculoMenuPage.prototype.comando = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService
            .getInfoAdicional(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.veiculoService.tabRef.getByIndex(0)
                .push(__WEBPACK_IMPORTED_MODULE_2__index__["c" /* ComandoPage */], {
                veiculo: _this.veiculo,
                cmdConfig: res.cmdConfig
            });
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    VeiculoMenuPage.prototype.getInspections = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService
            .getInspectionVeiculo(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.veiculoService.tabRef
                .getByIndex(0).push(__WEBPACK_IMPORTED_MODULE_2__index__["h" /* InspectionGridPage */], {
                veiculo: _this.veiculo,
                inspecoes: res
            });
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    VeiculoMenuPage.prototype.abrirStreetView = function () {
        if (this.veiculo != null) {
            this.navCtrl.push("StreetViewPage", {
                target: { lat: this.veiculo.latitude, lng: this.veiculo.longitude }
            });
        }
    };
    VeiculoMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-veiculo-menu",template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\veiculo-menu\veiculo-menu.html"*/'<!--\n  Generated template for the VeiculoMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title center text-center>{{veiculo.placa}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-list>\n      <button ion-item (click)="mapa()">\n        <ion-icon name="ios-map-outline" item-start></ion-icon>\n        {{\'MAP\' | translate}}\n      </button>\n\n\n      <button ion-item (click)="abrirStreetView()">\n        <ion-icon name="ios-map-outline" item-start></ion-icon>\n        Street View\n      </button>\n\n\n      <button ion-item (click)="rastro()">\n        <ion-icon name="ios-map-outline" item-start></ion-icon>\n        {{\'GRAPHIC_QUERY\' | translate}}\n      </button>\n\n      <button ion-item (click)="sensor()" *ngIf="veiculo.ignicao != null">\n        <ion-icon name="logo-rss" item-start></ion-icon>\n        {{\'SENSORS\' | translate}}\n      </button>\n\n      <button ion-item (click)="mensage()" *ngIf="veiculo.ignicao != null">\n        <ion-icon name="md-chatboxes" item-start></ion-icon>\n        {{\'MESSAGES\' | translate}}\n      </button>\n\n      <button ion-item (click)="macro()" *ngIf="veiculo.ignicao != null">\n        <ion-icon name="ios-chatboxes" item-start></ion-icon>\n        Macros\n      </button>\n\n      <button ion-item (click)="infoVeiculo()" *ngIf="veiculo.ignicao != null">\n        <ion-icon name="ios-information-circle-outline" item-start></ion-icon>\n        {{\'VEHICLE_INFORMATION\' | translate}}\n      </button>\n\n      <button ion-item (click)="infoAdicional()" *ngIf="veiculo.ignicao != null">\n        <ion-icon name="ios-information-circle" item-start></ion-icon>\n        {{\'ADDITIONAL_INFORMATION\' | translate}}\n      </button>\n\n      <button ion-item (click)="cadPonto()" *ngIf="veiculo.ignicao != null">\n        <ion-icon name="ios-pin-outline" item-start></ion-icon>\n        {{\'POINT_REGISTER\' | translate}}\n      </button>\n\n\n      <button ion-item (click)="comando()" *ngIf="veiculo.ignicao != null">\n        <ion-icon name="ios-send-outline" item-start></ion-icon>\n        {{\'COMMAND\' | translate}}\n      </button>\n\n      <button ion-item (click)="getInspections()" *ngIf="isInspection">\n        <ion-icon name="md-clipboard" item-start></ion-icon>\n        Inspections\n      </button>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\veiculo-menu\veiculo-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* User */]])
    ], VeiculoMenuPage);
    return VeiculoMenuPage;
}());

//# sourceMappingURL=veiculo-menu.js.map

/***/ })

});
//# sourceMappingURL=16.js.map