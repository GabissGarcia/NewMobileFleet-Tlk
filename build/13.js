webpackJsonp([13],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectClientePageModule", function() { return SelectClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pesquisa_cliente_pipe__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_cliente__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SelectClientePageModule = /** @class */ (function () {
    function SelectClientePageModule() {
    }
    SelectClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__select_cliente__["a" /* SelectClientePage */],
                __WEBPACK_IMPORTED_MODULE_0__pesquisa_cliente_pipe__["a" /* PesquisaClientePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_1__select_cliente__["a" /* SelectClientePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__select_cliente__["a" /* SelectClientePage */]
            ]
        })
    ], SelectClientePageModule);
    return SelectClientePageModule;
}());

//# sourceMappingURL=select-cliente.module.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaClientePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PesquisaClientePipe = /** @class */ (function () {
    function PesquisaClientePipe() {
    }
    PesquisaClientePipe.prototype.transform = function (items, term) {
        if (term === undefined || term.trim() === '')
            return items;
        return items.filter(function (item) {
            if (item.nome.toString().toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
            return false;
        });
    };
    PesquisaClientePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'pesquisaCliente'
        })
    ], PesquisaClientePipe);
    return PesquisaClientePipe;
}());

//# sourceMappingURL=pesquisa-cliente.pipe.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_search_service__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectClientePage = /** @class */ (function () {
    function SelectClientePage(navCtrl, navParams, formBuilder, modalCtrl, params, viewCtrl, searchService, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.searchService = searchService;
        this.user = user;
        this.queryText = '';
    }
    SelectClientePage.prototype.ionViewDidLoad = function () {
        this.clientes = this.params.get('clientes');
    };
    SelectClientePage.prototype.openItem = function (cliente) {
        this.viewCtrl.dismiss(cliente);
    };
    SelectClientePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    SelectClientePage.prototype.onIonInput = function (event) {
        //const val = event.target.value;
        /*this.searchService.getClientes({cliente: val, clienteMae: this.user._user.cliMae})
        .subscribe((res:any) => {
          this.clientes = res.data;
        },error => {
          // loading.dismiss();
        },() => {
          // loading.dismiss();
        });*/
    };
    SelectClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-select-cliente',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\select-cliente\select-cliente.html"*/'<ion-header>\n\n    <ion-navbar>\n        \n        <ion-buttons>\n            <button ion-button icon-only (click)="closeModal()">\n                <ion-icon item-right name="ios-arrow-back"></ion-icon>\n                {{ \'BACK_BUTTON_TEXT\' | translate }}\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <ion-toolbar no-border-top>\n        <ion-searchbar color="primary" [(ngModel)]="queryText" (ionInput)="onIonInput($event)" placeholder="Search">\n        </ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item-sliding *ngFor="let cliente of clientes | pesquisaCliente :queryText">\n            <button ion-item (click)="openItem(cliente)">\n                <h2>{{cliente.nome}}</h2>\n            </button>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\select-cliente\select-cliente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* User */]])
    ], SelectClientePage);
    return SelectClientePage;
}());

//# sourceMappingURL=select-cliente.js.map

/***/ })

});
//# sourceMappingURL=13.js.map