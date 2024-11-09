webpackJsonp([21],{

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlacaPageModule", function() { return SelectPlacaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_placa__ = __webpack_require__(674);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SelectPlacaPageModule = /** @class */ (function () {
    function SelectPlacaPageModule() {
    }
    SelectPlacaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__select_placa__["a" /* SelectPlacaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__select_placa__["a" /* SelectPlacaPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], SelectPlacaPageModule);
    return SelectPlacaPageModule;
}());

//# sourceMappingURL=select-placa.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPlacaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_diagnostic__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_dashboard_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_location_accuracy__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_android_permissions__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SelectPlacaPage = /** @class */ (function () {
    function SelectPlacaPage(navCtrl, navParams, toastCtrl, loadingCtrl, modalCtrl, user, app, veiculoService, dashboardService, geocoder, alertCtrl, locac, androidPermissions, diagnostic) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.app = app;
        this.veiculoService = veiculoService;
        this.dashboardService = dashboardService;
        this.geocoder = geocoder;
        this.alertCtrl = alertCtrl;
        this.locac = locac;
        this.androidPermissions = androidPermissions;
        this.diagnostic = diagnostic;
        this.placa = "";
        this.gpslocation = {};
        this.subsciptionPosition = null;
        this.mapaGoogle = null;
        this.mark = null;
        this.isMarked = false;
    }
    SelectPlacaPage_1 = SelectPlacaPage;
    SelectPlacaPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SelectPlacaPage");
    };
    SelectPlacaPage.prototype.selectPlaca = function () {
        var _this = this;
        if (this.mark != null) {
            if (this.subsciptionPosition != null) {
                this.subsciptionPosition.unsubscribe();
                this.subsciptionPosition = null;
            }
            this.mapaGoogle.clear();
            this.isMarked = false;
            this.mark = null;
        }
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.veiculoService.findVeiculoByPlaca(this.placa).subscribe(function (res) {
            if (res == null) {
                var toast = _this.toastCtrl.create({
                    message: "Plate not found",
                    duration: 3000,
                    position: "top"
                });
                toast.present();
            }
            else {
                _this.veiculoSelected = res;
                if (_this.mapaGoogle == null) {
                    var element = _this.mapElement.nativeElement;
                    _this.mapaGoogle = __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["a" /* GoogleMaps */].create(element);
                    _this.mapaGoogle.one(__WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                        // this.openInpection();
                    });
                }
                else {
                    // this.openInpection();
                }
            }
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    SelectPlacaPage.prototype.logout = function () {
        this.user.logout();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_1__index__["j" /* LoginPage */]);
    };
    SelectPlacaPage.prototype.redirectInpection = function () {
        if (this.subsciptionPosition != null) {
            this.subsciptionPosition.unsubscribe();
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__index__["b" /* ChecklistPage */], {
            posicao: this.mark.getTitle(),
            latitude: this.mark.getPosition().lat,
            longitude: this.mark.getPosition().lng,
            veiculo: this.veiculoSelected
        });
    };
    SelectPlacaPage.prototype.redirectNotInpection = function () {
        var _this = this;
        if (this.subsciptionPosition != null) {
            this.subsciptionPosition.unsubscribe();
        }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__index__["n" /* NoInpectionTextAreaModalPage */], {
            obs: '',
            posicao: this.mark.getTitle()
        });
        profileModal.onDidDismiss(function (data) {
            if (data != null && data.obs.trim().length > 0) {
                var loading_1 = _this.loadingCtrl.create({
                    content: "Please wait..."
                });
                loading_1.present();
                var inspe = {
                    dh: new Date(),
                    lat: _this.mark.getPosition().lat,
                    lng: _this.mark.getPosition().lng,
                    posicao: data.posicao,
                    veiculoId: _this.veiculoSelected.id,
                    inspecaosTipo: [],
                    obs: data.obs
                };
                _this.veiculoService.salvarInspecao(inspe).subscribe(function (res) {
                    var alert = _this.alertCtrl.create({
                        title: 'Success',
                        subTitle: 'Saved successfully',
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.app.getRootNav().setRoot(SelectPlacaPage_1);
                }, function (erro) {
                    loading_1.dismiss();
                }, function () {
                    loading_1.dismiss();
                });
            }
        });
        profileModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_core__["ElementRef"])
    ], SelectPlacaPage.prototype, "mapElement", void 0);
    SelectPlacaPage = SelectPlacaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: "page-select-placa",template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\select-placa\select-placa.html"*/'<!--\n  Generated template for the SelectPlacaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="md-exit"></ion-icon>\n        {{ \'EXIT\' | translate }}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div #map id="map">\n        \n      </div>\n  <ion-item>\n    <ion-input type="text" [(ngModel)]="placa" placeholder="Select Plate..."></ion-input>\n    <button ion-button color="primary" clear item-right (click)="selectPlaca()">Select</button>\n  </ion-item>\n  <hr>\n  <ion-card [hidden]="veiculoSelected == null">\n\n    <ion-card-content>\n      <p>Client: {{ veiculoSelected?.cliente }}</p>\n      <p>Plate: {{ veiculoSelected?.placa }}</p>\n\n\n      <button ion-button end [disabled]="!isMarked" (click)="redirectInpection()">Inspection</button>\n      <button ion-button end [disabled]="!isMarked" color="danger" (click)="redirectNotInpection()">Not Inspected</button>\n      \n    </ion-card-content>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\select-placa\select-placa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_diagnostic__["a" /* Diagnostic */]])
    ], SelectPlacaPage);
    return SelectPlacaPage;
    var SelectPlacaPage_1;
}());

//# sourceMappingURL=select-placa.js.map

/***/ })

});
//# sourceMappingURL=21.js.map