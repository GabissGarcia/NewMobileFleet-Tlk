webpackJsonp([30],{

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadpontoPageModule", function() { return CadpontoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadponto__ = __webpack_require__(651);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadpontoPageModule = /** @class */ (function () {
    function CadpontoPageModule() {
    }
    CadpontoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cadponto__["a" /* CadpontoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__cadponto__["a" /* CadpontoPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CadpontoPageModule);
    return CadpontoPageModule;
}());

//# sourceMappingURL=cadponto.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadpontoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
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







var CadpontoPage = /** @class */ (function () {
    function CadpontoPage(navCtrl, navParams, formBuilder, modalCtrl, translateService, toastCtrl, user, app, loadingCtrl, veiculoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.veiculoService = veiculoService;
    }
    CadpontoPage.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            tptId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]({ value: "", disabled: false }),
            descricao: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]({ value: "", disabled: false }),
            codigo: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]({ value: "", disabled: false })
        });
        this.veiculo = this.navParams.get("veiculo");
    };
    CadpontoPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CadpontoPage");
    };
    CadpontoPage.prototype.onSubmit = function () {
        var _this = this;
        var vei = this.veiculoService.veiculos.find(function (element, index) {
            if (element.veiculoId === _this.veiculo.veiculoId) {
                return true;
            }
            return false;
        });
        if (vei !== undefined) {
            var loading_1 = this.loadingCtrl.create({
                content: this.veiculoService.waitString
            });
            loading_1.present();
            var ponto = this.form.value;
            ponto.latitude = vei.latitude;
            ponto.longitude = vei.longitude;
            ponto.clienteId = this.user._user.clienteId;
            this.veiculoService.salvarPonto(ponto).subscribe(function (res) {
                if (res.tipo == 'sucesso') {
                    var toast = _this.toastCtrl.create({
                        message: _this.veiculoService.savesuccessString,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                    _this.navCtrl.pop();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: _this.veiculoService.failureString,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: _this.veiculoService.failureString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                loading_1.dismiss();
            }, function () {
                loading_1.dismiss();
            });
        }
    };
    CadpontoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: "page-cadponto",template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\cadponto\cadponto.html"*/'<!--\n  Generated template for the CadpontoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title center text-center>{{\'POINT_REGISTER\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form" (submit)="onSubmit()">\n      <ion-item>\n          <ion-label floating>{{ \'DESCRIPTION\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="descricao"></ion-input>\n        </ion-item>\n  \n  \n        <ion-item>\n          <ion-label floating>{{ \'ADDITIONAL\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="codigo"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>{{\'TYPE_POINT\' | translate}}</ion-label>\n            <ion-select formControlName="tptId">\n              <ion-option value="" [selected]="true">{{ \'SELECT\' | translate }}</ion-option>\n              <ion-option value="16">Ponto</ion-option>\n              <ion-option value="17">Lanchonete</ion-option>\n              <ion-option value="18">Porto marítmo</ion-option>\n              <ion-option value="19">Perigo</ion-option>\n              <ion-option value="20">Correio</ion-option>\n              <ion-option value="21">Posto</ion-option>\n              <ion-option value="22">Mecânica</ion-option>\n              <ion-option value="23">Aeroporto</ion-option>\n              <ion-option value="24">Hospital</ion-option>\n              <ion-option value="25">Hotel</ion-option>\n            </ion-select>\n          </ion-item>\n  \n        <div padding>\n          <button ion-button color="dark" full>{{ \'SAVE\' | translate }}</button>\n        </div>\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\cadponto\cadponto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_api_veiculo_service__["a" /* VeiculoService */]])
    ], CadpontoPage);
    return CadpontoPage;
}());

//# sourceMappingURL=cadponto.js.map

/***/ })

});
//# sourceMappingURL=30.js.map