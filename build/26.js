webpackJsonp([26],{

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InpectionTextAreaModalPageModule", function() { return InpectionTextAreaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inpection_text_area_modal__ = __webpack_require__(648);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InpectionTextAreaModalPageModule = /** @class */ (function () {
    function InpectionTextAreaModalPageModule() {
    }
    InpectionTextAreaModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__inpection_text_area_modal__["a" /* InpectionTextAreaModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__inpection_text_area_modal__["a" /* InpectionTextAreaModalPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], InpectionTextAreaModalPageModule);
    return InpectionTextAreaModalPageModule;
}());

//# sourceMappingURL=inpection-text-area-modal.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InpectionTextAreaModalPage; });
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
var InpectionTextAreaModalPage = /** @class */ (function () {
    //@ViewChild('input') myInput;
    function InpectionTextAreaModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.obsTxt = '';
        this.preview = false;
        this.obsTxt = navParams.get('obs');
        this.preview = navParams.get('preview');
    }
    InpectionTextAreaModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InpectionTextAreaModalPage');
        /*setTimeout(() => {
          this.myInput.setFocus();
        },500);*/
    };
    InpectionTextAreaModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    InpectionTextAreaModalPage.prototype.confirmar = function () {
        this.viewCtrl.dismiss({ obs: this.obsTxt });
    };
    InpectionTextAreaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inpection-text-area-modal',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\inpection-text-area-modal\inpection-text-area-modal.html"*/'<!--\n  Generated template for the InpectionTextAreaModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        \n        <ion-buttons>\n            <button ion-button icon-only (click)="closeModal()">\n                <ion-icon item-right name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-buttons end>\n            <button ion-button icon-only [hidden]="preview" (click)="confirmar()">\n                <ion-icon item-right name="checkmark"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <textarea #input class="text-area" [(ngModel)]="obsTxt"></textarea>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\inpection-text-area-modal\inpection-text-area-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], InpectionTextAreaModalPage);
    return InpectionTextAreaModalPage;
}());

//# sourceMappingURL=inpection-text-area-modal.js.map

/***/ })

});
//# sourceMappingURL=26.js.map