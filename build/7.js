webpackJsonp([7],{

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroPageModule", function() { return MacroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__macro__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_shred_pipe__ = __webpack_require__(638);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MacroPageModule = /** @class */ (function () {
    function MacroPageModule() {
    }
    MacroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__macro__["a" /* MacroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__macro__["a" /* MacroPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_shred_pipe__["a" /* SharedPipeModule */]
            ],
        })
    ], MacroPageModule);
    return MacroPageModule;
}());

//# sourceMappingURL=macro.module.js.map

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

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MacroPage; });
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
 * Generated class for the MacroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MacroPage = /** @class */ (function () {
    function MacroPage(navCtrl, navParams, veiculoService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.veiculoService = veiculoService;
        this.toastCtrl = toastCtrl;
        this.macros = this.navParams.get("macros");
        this.veiculo = this.navParams.get("veiculo");
        this.scrollToBottom();
    }
    MacroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MacroPage');
    };
    MacroPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    MacroPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.veiculoService
            .getMacrosVeiculo(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.macros = res;
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Falha: Tente novamente!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            refresher.complete();
        }, function () {
            refresher.complete();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Content"])
    ], MacroPage.prototype, "content", void 0);
    MacroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-macro',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\macro\macro.html"*/'<!--\n  Generated template for the MacroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title center text-center>Macros</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\n  <ion-card *ngFor="let macro of macros">\n\n    <ion-card-content>\n      {{macro.conteudo}}\n    </ion-card-content>\n\n    <ion-row>\n        <ion-col>\n          \n        </ion-col>\n        <ion-col>\n          \n        </ion-col>\n        <ion-col center text-center>\n          <ion-note>\n              {{macro.dtEnviado | formatdate}}\n          </ion-note>\n        </ion-col>\n      </ion-row>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\macro\macro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__providers_api_veiculo_service__["a" /* VeiculoService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], MacroPage);
    return MacroPage;
}());

//# sourceMappingURL=macro.js.map

/***/ })

});
//# sourceMappingURL=7.js.map