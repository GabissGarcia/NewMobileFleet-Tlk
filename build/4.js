webpackJsonp([4],{

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RastroSearchPageModule", function() { return RastroSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rastro_search__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_shred_pipe__ = __webpack_require__(638);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RastroSearchPageModule = /** @class */ (function () {
    function RastroSearchPageModule() {
    }
    RastroSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__rastro_search__["a" /* RastroSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__rastro_search__["a" /* RastroSearchPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_6__pipes_shred_pipe__["a" /* SharedPipeModule */],
                __WEBPACK_IMPORTED_MODULE_5_ion2_calendar__["CalendarModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]
            ]
        })
    ], RastroSearchPageModule);
    return RastroSearchPageModule;
}());

//# sourceMappingURL=rastro-search.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistanciaPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistanciaPipe = /** @class */ (function () {
    function DistanciaPipe(translate) {
        this.translate = translate;
    }
    DistanciaPipe.prototype.transform = function (value) {
        var browserLang = this.translate.getBrowserLang();
        if (value == 0 || value == undefined) {
            return '';
        }
        if (browserLang) {
            if (browserLang === 'pt' || browserLang === 'pt-br') {
                return value + ' Km de ';
            }
        }
        return (value * 0.6213711922).toFixed(2) + ' miles from ';
    };
    DistanciaPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'distancia' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]])
    ], DistanciaPipe);
    return DistanciaPipe;
}());

//# sourceMappingURL=distancia.pipe.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedPipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__distancia_pipe__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__velocidade_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__format_date_pipe__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__format_simple_date_pipe__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__format_hora_pipe__ = __webpack_require__(641);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedPipeModule = /** @class */ (function () {
    function SharedPipeModule() {
    }
    SharedPipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__distancia_pipe__["a" /* DistanciaPipe */], __WEBPACK_IMPORTED_MODULE_1__velocidade_pipe__["a" /* VelocidadePipe */], __WEBPACK_IMPORTED_MODULE_3__format_date_pipe__["a" /* FormatDatePipe */], __WEBPACK_IMPORTED_MODULE_4__format_simple_date_pipe__["a" /* FormatSimpleDatePipe */], __WEBPACK_IMPORTED_MODULE_5__format_hora_pipe__["a" /* FormatHoraPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__distancia_pipe__["a" /* DistanciaPipe */], __WEBPACK_IMPORTED_MODULE_1__velocidade_pipe__["a" /* VelocidadePipe */], __WEBPACK_IMPORTED_MODULE_3__format_date_pipe__["a" /* FormatDatePipe */], __WEBPACK_IMPORTED_MODULE_4__format_simple_date_pipe__["a" /* FormatSimpleDatePipe */], __WEBPACK_IMPORTED_MODULE_5__format_hora_pipe__["a" /* FormatHoraPipe */]]
        })
    ], SharedPipeModule);
    return SharedPipeModule;
}());

//# sourceMappingURL=shred-pipe.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FormatDatePipe = /** @class */ (function (_super) {
    __extends(FormatDatePipe, _super);
    function FormatDatePipe(_locale, translate) {
        var _this = _super.call(this, _locale) || this;
        _this._locale = _locale;
        _this.translate = translate;
        return _this;
    }
    FormatDatePipe.prototype.transform = function (value) {
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'pt' || browserLang === 'pt-br') {
                return _super.prototype.transform.call(this, value, 'dd/MM/yyyy HH:mm:ss');
            }
        }
        return _super.prototype.transform.call(this, value, 'MM/dd/yyyy h:mm:ss a');
    };
    FormatDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Pipe"])({ name: 'formatdate' }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_core__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], FormatDatePipe);
    return FormatDatePipe;
}(__WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]));

//# sourceMappingURL=format-date.pipe.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatSimpleDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FormatSimpleDatePipe = /** @class */ (function (_super) {
    __extends(FormatSimpleDatePipe, _super);
    function FormatSimpleDatePipe(_locale, translate) {
        var _this = _super.call(this, _locale) || this;
        _this._locale = _locale;
        _this.translate = translate;
        return _this;
    }
    FormatSimpleDatePipe.prototype.transform = function (value) {
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'pt' || browserLang === 'pt-br') {
                return _super.prototype.transform.call(this, value, 'dd/MM/yyyy');
            }
        }
        return _super.prototype.transform.call(this, value, 'MM/dd/yyyy');
    };
    FormatSimpleDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Pipe"])({ name: 'formatsimpledate' }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_core__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], FormatSimpleDatePipe);
    return FormatSimpleDatePipe;
}(__WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]));

//# sourceMappingURL=format-simple-date.pipe.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatHoraPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FormatHoraPipe = /** @class */ (function (_super) {
    __extends(FormatHoraPipe, _super);
    function FormatHoraPipe(_locale, translate) {
        var _this = _super.call(this, _locale) || this;
        _this._locale = _locale;
        _this.translate = translate;
        return _this;
    }
    FormatHoraPipe.prototype.transform = function (value) {
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'pt' || browserLang === 'pt-br') {
                return _super.prototype.transform.call(this, value, 'HH:mm:ss');
            }
        }
        return _super.prototype.transform.call(this, value, 'h:mm:ss a');
    };
    FormatHoraPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Pipe"])({ name: 'formathoradate' }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_core__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], FormatHoraPipe);
    return FormatHoraPipe;
}(__WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]));

//# sourceMappingURL=format-hora.pipe.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RastroSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_veiculo_service__ = __webpack_require__(145);
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
 * Generated class for the RastroSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RastroSearchPage = /** @class */ (function () {
    function RastroSearchPage(navCtrl, navParams, datePicker, plt, modalCtrl, translateService, datePipe, veiculoService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.plt = plt;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.datePipe = datePipe;
        this.veiculoService = veiculoService;
        this.loadingCtrl = loadingCtrl;
        this.veiculo = this.navParams.get('veiculo');
        this.toDate = new Date();
        this.toHour = "23:59:59";
        this.fromHour = "00:00:00";
        this.fromDate = new Date();
        this.translateService
            .get(["WAIT", "CANCEL", "FROM_DATE", "TO_DATE"])
            .subscribe(function (values) {
            _this.translateString = values;
        });
    }
    RastroSearchPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad RastroSearchPage");
    };
    RastroSearchPage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            pickMode: "range",
            title: '',
            canBackwardsSelected: true,
            to: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            from: new Date(),
            closeLabel: this.translateString["CANCEL"],
            doneLabel: this.translateString["DONE"],
            closeIcon: true,
            doneIcon: true,
            color: 'secondary'
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            if (date != null) {
                _this.toDate = date.to.dateObj;
                _this.fromDate = date.from.dateObj;
            }
        });
    };
    RastroSearchPage.prototype.rastro = function () {
        var _this = this;
        var filtroRastro = {
            dtIni: new Date(this.datePipe.transform(this.fromDate, "yyyy-MM-dd") + 'T' + this.fromHour),
            dtFim: new Date(this.datePipe.transform(this.toDate, "yyyy-MM-dd") + 'T' + this.toHour),
            veiId: this.veiculo.veiculoId,
            gsm: true,
            sat: true
        };
        var loading = this.loadingCtrl.create({
            content: this.translateString['WAIT']
        });
        loading.present();
        this.veiculoService.getRastro(filtroRastro).subscribe(function (res) {
            console.log('teste: ', JSON.stringify(res.inspecao));
            _this.veiculoService.tabRef.getByIndex(0).push(__WEBPACK_IMPORTED_MODULE_0__index__["p" /* RastroPage */], {
                veiculo: _this.veiculo,
                rastro: res.rastro,
                inspecao: res.inspecao
            });
        }, function (error) {
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    RastroSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-rastro-search",template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\rastro-search\rastro-search.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'TRACK\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>{{\'FROM_DATE\' | translate}} :</ion-label>\n      <button ion-button item-content color="secondary" (click)="openCalendar()">\n        {{ fromDate | formatsimpledate }}\n      </button>\n      \n      <button ion-button item-content color="secondary">\n        <ion-datetime item-end displayFormat="h:mm:ss a" [(ngModel)]="fromHour"></ion-datetime>\n      </button>\n\n    </ion-item>\n    <ion-item>\n\n      <ion-label>{{\'TO_DATE\' | translate}} :</ion-label>\n\n      <button ion-button item-content color="secondary" (click)="openCalendar()">\n        {{ toDate | formatsimpledate }}\n      </button>\n      <button ion-button item-content color="secondary">\n        <ion-datetime item-end displayFormat="h:mm:ss a" [(ngModel)]="toHour"></ion-datetime>\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n<ion-footer>\n  <button ion-button block color="secondary" (click)="rastro()">\n    <ion-icon name="ios-search"></ion-icon> &nbsp; {{ \'FILTER\' | translate }}\n  </button>\n</ion-footer>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\rastro-search\rastro-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_7__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"]])
    ], RastroSearchPage);
    return RastroSearchPage;
}());

//# sourceMappingURL=rastro-search.js.map

/***/ })

});
//# sourceMappingURL=4.js.map