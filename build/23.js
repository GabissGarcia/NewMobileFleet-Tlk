webpackJsonp([23],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(642);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

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

/***/ })

});
//# sourceMappingURL=23.js.map