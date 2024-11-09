webpackJsonp([2],{

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_shred_pipe__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_master__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_velocidade_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_distancia_pipe__ = __webpack_require__(637);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__list_master__["a" /* ListMasterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1__pipes_shred_pipe__["a" /* SharedPipeModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__list_master__["a" /* ListMasterPage */]
            ], providers: [
                __WEBPACK_IMPORTED_MODULE_7__pipes_distancia_pipe__["a" /* DistanciaPipe */], __WEBPACK_IMPORTED_MODULE_6__pipes_velocidade_pipe__["a" /* VelocidadePipe */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

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

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, toastCtrl, loadingCtrl, translateService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.alertCtrl = alertCtrl;
        this.logoState = "in";
        this.cloudState = "in";
        this.loginState = "in";
        this.formState = "in";
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            username: '',
            password: '',
            isOnline: false
        };
        this.translateService.get(['LOGIN_ERROR', 'HTTP_LOGIN_ERROR', 'WAIT']).subscribe(function (values) {
            _this.loginErrorString = values['LOGIN_ERROR'];
            _this.httpErrorString = values['HTTP_LOGIN_ERROR'];
            _this.waitString = values['WAIT'];
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('yourTokenKey') != null && localStorage.getItem('yourTokenKey').length > 0) {
            this.user.validarLogin().subscribe(function (resp) {
                if (resp != null && resp.isMobile && !resp.primeiroAcesso) {
                    _this.user._user = resp;
                    if (_this.user._user != null && _this.user._user != undefined) {
                        if (_this.user._user.isMobile) {
                            if (_this.user._user.nivel == 6) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["t" /* SelectPlacaPage */]);
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["l" /* MainPage */]);
                            }
                        }
                    }
                }
                else {
                    localStorage.removeItem('yourTokenKey');
                }
            }, function (error) {
                localStorage.removeItem('yourTokenKey');
            });
        }
    };
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var data = {
            username: this.account.username.trim(),
            password: this.account.password,
            isOnline: this.account.isOnline
        };
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.user.login(data).subscribe(function (resp) {
            if (resp.id_token) {
                if (!resp.usuario.isMobile) {
                    var toast = _this.toastCtrl.create({
                        message: _this.loginErrorString,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
                else {
                    console.log(_this.account.isOnline);
                    if (_this.account.isOnline) {
                        localStorage.setItem('yourTokenKey', resp.id_token);
                    }
                    else {
                        sessionStorage.setItem('yourTokenKey', resp.id_token);
                    }
                    _this.user._user = resp.usuario;
                    if (resp.usuario.primeiroAcesso) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__index__["r" /* ResetPasswordPage */]);
                    }
                    else {
                        if (resp.usuario.nivel == 6) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["t" /* SelectPlacaPage */]);
                        }
                        else {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["l" /* MainPage */]);
                        }
                        //this.navCtrl.setRoot(SelectPlacaPage);
                    }
                }
                // this.navCtrl.setRoot(SelectPlacaPage);
            }
        }, function (err) {
            loading.dismiss();
            if (err.status === 401) {
                var toast = _this.toastCtrl.create({
                    message: _this.loginErrorString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.httpErrorString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            // Unable to log in
        }, function () {
            loading.dismiss();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\login\login.html"*/'<ion-content center text-center class="vertical-align-content">\n  <div padding [@flyInBottomFast]="cloudState" id="cloud-layer">\n    <div class="loginbox">\n    <ion-row>\n      <ion-col>\n        <img [@flyInBottomSlow]="logoState" src="assets/img/logoHps.png" />\n      </ion-col>\n    </ion-row>\n\n    <form (submit)="doLogin()">\n      <ion-row>\n        <ion-col>\n\n\n          <ion-list inset [@bounceInBottom]="formState">\n\n            <ion-item>\n              <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n              <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n              <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n              <ion-toggle clear item-right [(ngModel)]="account.isOnline" name="online"></ion-toggle>\n            </ion-item>\n          </ion-list>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button color="dark" class="login-button" full>{{ \'LOGIN_BUTTON\' | translate }}</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\login\login.html"*/,
            animations: [
                //For the logo
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('flyInBottomSlow', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({
                        transform: 'translate3d(0,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ transform: 'translate3d(0,2000px,0' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])('2000ms ease-in-out')
                    ])
                ]),
                //For the background detail
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('flyInBottomFast', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({
                        transform: 'translate3d(0,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ transform: 'translate3d(0,2000px,0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])('1000ms ease-in-out')
                    ])
                ]),
                //For the login form
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('bounceInBottom', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({
                        transform: 'translate3d(0,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])('2000ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ transform: 'translate3d(0,0,0)', offset: 1 })
                        ]))
                    ])
                ]),
                //For login button
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('fadeIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])('1000ms 2000ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_marcador__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_velocidade_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, modalCtrl, user, app, veiculoService, loadingCtrl, translateService, datePipe, velocidadePipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.app = app;
        this.veiculoService = veiculoService;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.datePipe = datePipe;
        this.velocidadePipe = velocidadePipe;
        this.queryText = "";
        this.translateService.get(["WAIT", "PLATE", "DIRECTION", "DATETIME", "SPEED", "LOCATION"]).subscribe(function (values) {
            _this.waitString = values["WAIT"];
            _this.placaString = values["PLATE"];
            _this.directionString = values["DIRECTION"];
            _this.dateTimeString = values["DATETIME"];
            _this.speedString = values["SPEED"];
            _this.locationString = values["LOCATION"];
        });
    }
    ListMasterPage.prototype.ngOnInit = function () { };
    ListMasterPage.prototype.logout = function () {
        this.user.logout();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    ListMasterPage.prototype.openVeiculo = function (veiculo) {
        this.veiculoService.tabRef.getByIndex(0).push(__WEBPACK_IMPORTED_MODULE_1__index__["z" /* VeiculoMenuPage */], {
            veiculo: this.veiculoService.marcadores.get(veiculo.veiculoId).veiculo
        });
    };
    ListMasterPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.veiculoService.getVeiculos(this.veiculoService.ultimoFiltro).subscribe(function (data) {
            if (data.length) {
                _this.veiculoService.veiculos = data;
                _this.veiculoService.limparMarcadores();
                _this.veiculoService.veiculos.forEach(function (veiculo) {
                    var marcador = new __WEBPACK_IMPORTED_MODULE_0__models_marcador__["a" /* Marcador */](veiculo.veiculoId, veiculo);
                    if (_this.veiculoService.mapa != null) {
                        var path = "assets/icon/car.png";
                        if (veiculo.ignicao) {
                            path = "assets/icon/car-ign.png";
                        }
                        var iconVeiculo = {
                            url: path,
                            size: {
                                width: 25,
                                height: 25
                            }
                        };
                        var direction = ((veiculo.direcao) * 45);
                        var metaMarker = {
                            position: { lat: veiculo.latitude, lng: veiculo.longitude },
                            icon: iconVeiculo,
                            flat: true,
                            rotation: direction
                        };
                        marcador.veiculo = veiculo;
                        _this.veiculoService.mapa.addMarker(metaMarker).then(function (mark) {
                            mark.on(__WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                                var htmlInfoWindow = _this.getWindowsInfo(marcador.veiculo);
                                htmlInfoWindow.open(mark);
                            });
                            marcador.marker = mark;
                        });
                    }
                    _this.veiculoService.marcadores.set(veiculo.veiculoId, marcador);
                });
            }
        }, function (error) {
            refresher.complete();
        }, function () {
            refresher.complete();
        });
    };
    ListMasterPage.prototype.getWindowsInfo = function (veiculo) {
        var dir = '';
        if (this.translateService.getBrowserLang() === 'pt' ||
            this.translateService.getBrowserLang() === 'pt-br') {
            switch (veiculo.direcao) {
                case 0:
                    dir = 'Norte';
                    break;
                case 1:
                    dir = 'Nordeste';
                    break;
                case 2:
                    dir = 'Leste';
                    break;
                case 3:
                    dir = 'Sudeste';
                    break;
                case 4:
                    dir = 'Sul';
                    break;
                case 5:
                    dir = 'Sudoeste';
                    break;
                case 6:
                    dir = 'Oeste';
                    break;
                case 7:
                    dir = 'Noroeste';
                    break;
            }
        }
        else {
            switch (veiculo.direcao) {
                case 0:
                    dir = 'North';
                    break;
                case 1:
                    dir = 'Northeast';
                    break;
                case 2:
                    dir = 'East';
                    break;
                case 3:
                    dir = 'Southeast';
                    break;
                case 4:
                    dir = 'South';
                    break;
                case 5:
                    dir = 'South-west';
                    break;
                case 6:
                    dir = 'West';
                    break;
                case 7:
                    dir = 'Northwest';
                    break;
            }
        }
        var velocidade = this.velocidadePipe.transform(veiculo.velocidade);
        var location = veiculo.posicao;
        var dh = this.datePipe.transform(veiculo.dh, 'dd/MM/yyyy HH:mm:ss');
        var htmlInfoWindow = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["d" /* HtmlInfoWindow */]();
        var frame = document.createElement('div');
        frame.innerHTML = [
            '<div>' + this.directionString + ': ' + dir + '</div>',
            '<div>' + this.dateTimeString + ': ' + dh + '</div>',
            '<div>' + this.placaString + ': ' + veiculo.placa + '</div>',
            '<div>' + this.speedString + ': ' + velocidade + '</div>',
            '<div>Latitude: ' + veiculo.latitude.toFixed(5) + '</div>',
            '<div>Longitude: ' + veiculo.longitude.toFixed(5) + '</div>',
            '<div>' + this.locationString + ': ' + location + '</div>',
        ].join("");
        htmlInfoWindow.setContent(frame, {
            width: "250px",
            height: "150px"
        });
        return htmlInfoWindow;
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: "page-list-master",template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\list-master\list-master.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title center text-center>{{ \'TAB1_TITLE\' | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="md-exit"></ion-icon>\n        {{ \'EXIT\' | translate }}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content #content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let veiculo of veiculoService.veiculos">\n      <button ion-item [ngClass]="{\'ign-on\': veiculo.ignicao, \'ign-off\': veiculo.ignicao == false, \'ign-null\': veiculo.ignicao == null}" (click)="openVeiculo(veiculo)">\n        <!--<ion-avatar item-start>\n          <img [src]="\'assets/\' + veiculo.icon" />\n        </ion-avatar>-->\n        <h2>{{veiculo.placa}}</h2>\n        <p>{{veiculo.posicao}}</p>\n        <ion-note *ngIf="veiculo.ignicao != null">{{veiculo.velocidade | velocidade}} - {{veiculo.dh | formatdate}}</ion-note>\n        <ion-note *ngIf="veiculo.ignicao == null">{{veiculo.dh | formatdate}}</ion-note>\n      </button>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\list-master\list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_8__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_velocidade_pipe__["a" /* VelocidadePipe */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=2.js.map