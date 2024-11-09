webpackJsonp([22],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoInpectionTextAreaModalPageModule", function() { return NoInpectionTextAreaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_inpection_text_area_modal__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoInpectionTextAreaModalPageModule = /** @class */ (function () {
    function NoInpectionTextAreaModalPageModule() {
    }
    NoInpectionTextAreaModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__no_inpection_text_area_modal__["a" /* NoInpectionTextAreaModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_0__no_inpection_text_area_modal__["a" /* NoInpectionTextAreaModalPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], NoInpectionTextAreaModalPageModule);
    return NoInpectionTextAreaModalPageModule;
}());

//# sourceMappingURL=no-inpection-text-area-modal.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoInpectionTextAreaModalPage; });
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
 * Generated class for the InpectionTextAreaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoInpectionTextAreaModalPage = /** @class */ (function () {
    function NoInpectionTextAreaModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.obsTxt = '';
        this.posicao = '';
        this.preview = false;
        this.obsTxt = navParams.get('obs');
        this.preview = navParams.get('preview');
        this.posicao = navParams.get('posicao');
    }
    NoInpectionTextAreaModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InpectionTextAreaModalPage');
        /*setTimeout(() => {
          this.textArea.setFocus();
        },150);*/
    };
    NoInpectionTextAreaModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    NoInpectionTextAreaModalPage.prototype.confirmar = function () {
        this.viewCtrl.dismiss({ obs: this.obsTxt, posicao: this.posicao });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textArea'),
        __metadata("design:type", Object)
    ], NoInpectionTextAreaModalPage.prototype, "textArea", void 0);
    NoInpectionTextAreaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'no-page-inpection-text-area-modal',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\no-inpection-text-area-modal\no-inpection-text-area-modal.html"*/'<!--\n  Generated template for the InpectionTextAreaModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        \n        <ion-buttons>\n            <button ion-button icon-only (click)="closeModal()">\n                <ion-icon item-right name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-buttons end>\n            <button ion-button icon-only [hidden]="preview" (click)="confirmar()">\n                <ion-icon item-right name="checkmark"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n        <ion-card>\n\n                <ion-card-content>\n                  <ion-textarea type="text" [(ngModel)]="posicao"></ion-textarea>\n                </ion-card-content>\n            \n              </ion-card>\n    \n    <hr>\n      <ion-list>\n      \n        <ion-item>\n            <ion-textarea #textArea class="text-area" [(ngModel)]="obsTxt"></ion-textarea>\n        </ion-item>\n      \n      </ion-list>\n        \n \n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\no-inpection-text-area-modal\no-inpection-text-area-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], NoInpectionTextAreaModalPage);
    return NoInpectionTextAreaModalPage;
}());

//# sourceMappingURL=no-inpection-text-area-modal.js.map

/***/ })

});
//# sourceMappingURL=22.js.map