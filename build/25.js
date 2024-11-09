webpackJsonp([25],{

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionCameraModalPageModule", function() { return InspectionCameraModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inspection_camera_modal__ = __webpack_require__(649);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InspectionCameraModalPageModule = /** @class */ (function () {
    function InspectionCameraModalPageModule() {
    }
    InspectionCameraModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__inspection_camera_modal__["a" /* InspectionCameraModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__inspection_camera_modal__["a" /* InspectionCameraModalPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], InspectionCameraModalPageModule);
    return InspectionCameraModalPageModule;
}());

//# sourceMappingURL=inspection-camera-modal.module.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionCameraModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(417);
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
 * Generated class for the InspectionCameraModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InspectionCameraModalPage = /** @class */ (function () {
    function InspectionCameraModalPage(navCtrl, navParams, camera, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.fotos = [];
        this.preview = false;
        this.insp = this.navParams.get('insp');
        this.insp.img = this.insp.img.map(function (i) { return i.replace(/(?:\r\n|\r|\n)/g, ''); });
        this.preview = navParams.get('preview');
        if (this.insp.img == undefined || this.insp.img == null || this.insp.img.length == 0) {
            this.tirarFoto();
        }
    }
    InspectionCameraModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InspectionCameraModalPage');
    };
    InspectionCameraModalPage.prototype.tirarFoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: true,
            mediaType: this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 960,
            targetWidth: 720
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.insp.img == undefined || _this.insp.img == null) {
                _this.insp.img = [];
            }
            _this.insp.img.push(imageData.replace(/(?:\r\n|\r|\n)/g, ''));
        }, function (err) {
            //this.displayErrorAlert(err);
        });
    };
    InspectionCameraModalPage.prototype.displayErrorAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error while trying to capture picture',
            buttons: ['OK']
        });
        alert.present();
    };
    InspectionCameraModalPage.prototype.excluirFoto = function () {
        if (this.insp.img.length == 0) {
            this.viewCtrl.dismiss(this.insp);
        }
        else {
            this.insp.img.splice(this.slides.getActiveIndex(), 1);
            this.slides.slidePrev();
        }
    };
    InspectionCameraModalPage.prototype.confirmarFoto = function () {
        this.viewCtrl.dismiss(this.insp);
    };
    InspectionCameraModalPage.prototype.sair = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Slides"])
    ], InspectionCameraModalPage.prototype, "slides", void 0);
    InspectionCameraModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-inspection-camera-modal',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\inspection-camera-modal\inspection-camera-modal.html"*/'<ion-header>\n	<ion-navbar>\n    <ion-buttons right >\n      <button ion-button large icon-only  color="dark" class="btn-cam" (click)="tirarFoto()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n      <button ion-button large icon-only color="dark" class="btn-cam" (click)="excluirFoto()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n      <button ion-button large icon-only color="dark" class="btn-cam" (click)="confirmarFoto()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-slides pager>\n    <ion-slide *ngFor="let foto of insp.img">\n      <img [src]="\'data:image/jpeg;base64,\'+foto">\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\inspection-camera-modal\inspection-camera-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"]])
    ], InspectionCameraModalPage);
    return InspectionCameraModalPage;
}());

//# sourceMappingURL=inspection-camera-modal.js.map

/***/ })

});
//# sourceMappingURL=25.js.map