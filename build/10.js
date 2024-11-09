webpackJsonp([10],{

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_velocidade_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_distancia_pipe__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search__ = __webpack_require__(670);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_6__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__pipes_distancia_pipe__["a" /* DistanciaPipe */], __WEBPACK_IMPORTED_MODULE_1__pipes_velocidade_pipe__["a" /* VelocidadePipe */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

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

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_filtro_veiculo__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_marcador__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_search_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_velocidade_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_distancia_pipe__ = __webpack_require__(637);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, items, formBuilder, modalCtrl, translateService, user, app, searchService, loadingCtrl, veiculoService, toastCtrl, distanciaPipe, datePipe, velocidadePipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.user = user;
        this.app = app;
        this.searchService = searchService;
        this.loadingCtrl = loadingCtrl;
        this.veiculoService = veiculoService;
        this.toastCtrl = toastCtrl;
        this.distanciaPipe = distanciaPipe;
        this.datePipe = datePipe;
        this.velocidadePipe = velocidadePipe;
        this.currentItems = [];
        this.cliente = null;
        this.subSettings = __WEBPACK_IMPORTED_MODULE_5__index__["s" /* SelectClientePage */];
        this.translateService.get(['CLIENT', 'WAIT', 'MSG_VEICULO_ERROR_VAZIO', "PLATE", "DIRECTION", "DATETIME", "SPEED", "LOCATION"]).subscribe(function (values) {
            _this.clientString = values['CLIENT'];
            _this.waitString = values['WAIT'];
            _this.msgNoVeiculo = values['MSG_VEICULO_ERROR_VAZIO'];
            _this.placaString = values["PLATE"];
            _this.directionString = values["DIRECTION"];
            _this.dateTimeString = values["DATETIME"];
            _this.speedString = values["SPEED"];
            _this.locationString = values["LOCATION"];
        });
    }
    SearchPage.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            idVei: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]({ value: '', disabled: false }),
            ignicao: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](),
            inter: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](),
            plcVei: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]({ value: '', disabled: false }),
            tecnologia: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]({ value: '', disabled: false }),
            pontoMP: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]({ value: '', disabled: false }),
            equipamento: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]({ value: '', disabled: false }),
            clienteId: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]({ value: '', disabled: false }),
            clienteMae: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]({ value: '', disabled: false }),
            dscVei: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]({ value: '', disabled: false }),
            ativoCMae: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]({ value: '', disabled: false }),
        });
        var user = this.user._user;
        var filtro = new __WEBPACK_IMPORTED_MODULE_0__models_filtro_veiculo__["a" /* FiltroVeiculo */]();
        if (user.clienteId !== null) {
            if (user.clienteId === 1) {
            }
            else {
                filtro.clienteIdFilter = user.clienteFilho;
            }
            filtro.lstClienteId = user.clienteFilho;
        }
        if (user.clienteId !== 1) {
            this.filtroVeiculos(filtro);
        }
    };
    /**
     * Perform a service for the proper items.
     */
    SearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    SearchPage.prototype.openModalCliente = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.searchService.getClientes()
            .subscribe(function (res) {
            loading.dismiss();
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__index__["s" /* SelectClientePage */], { clientes: res });
            profileModal.onDidDismiss(function (data) {
                _this.cliente = data;
            });
            profileModal.present();
        }, function (error) {
            loading.dismiss();
            if (error.error.exception === 'io.jsonwebtoken.ExpiredJwtException') {
                _this.user.logout();
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
        }, function () {
        });
    };
    SearchPage.prototype.logout = function () {
        this.user.logout();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SearchPage.prototype.filtrar = function () {
        var filtro = this.form.value;
        var filtroVeiculo = new __WEBPACK_IMPORTED_MODULE_0__models_filtro_veiculo__["a" /* FiltroVeiculo */]();
        filtroVeiculo.clientIdMae = filtro.clienteId;
        filtroVeiculo.descricao = filtro.dscVei;
        filtroVeiculo.equipamento = filtro.equipamento;
        filtroVeiculo.veiId = filtro.idVei;
        filtroVeiculo.ignicao = filtro.ignicao;
        filtroVeiculo.tipo = filtro.inter;
        filtroVeiculo.placa = filtro.plcVei;
        filtroVeiculo.ponto = filtro.pontoMP;
        filtroVeiculo.tecnologiaId = filtro.tecnologia;
        if (this.cliente != null) {
            filtroVeiculo.clientIdMae = this.cliente.id;
        }
        if (this.user._user.clienteId !== null) {
            filtroVeiculo.lstClienteId = this.user._user.clienteFilho;
        }
        this.veiculoService.ultimoFiltro = filtroVeiculo;
        this.filtroVeiculos(filtroVeiculo);
    };
    SearchPage.prototype.filtroVeiculos = function (filtro) {
        var _this = this;
        this.veiculoService.pararTimeDataStore();
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService.ultimoFiltro = filtro;
        this.veiculoService.getVeiculos(filtro).subscribe(function (data) {
            loading.dismiss();
            if (data.length) {
                _this.veiculoService.veiculos = data;
                _this.veiculoService.limparMarcadores();
                _this.veiculoService.veiculos.forEach(function (veiculo) {
                    var marcador = new __WEBPACK_IMPORTED_MODULE_1__models_marcador__["a" /* Marcador */](veiculo.veiculoId, veiculo);
                    if (_this.veiculoService.mapa != null) {
                        var path = 'assets/icon/car.png';
                        if (veiculo.ignicao) {
                            path = 'assets/icon/car-ign.png';
                        }
                        var iconVeiculo = {
                            url: path,
                            size: {
                                width: 30,
                                height: 30
                            }
                        };
                        var direction = ((veiculo.direcao) * 48);
                        var metaMarker = {
                            position: { lat: veiculo.latitude, lng: veiculo.longitude },
                            icon: iconVeiculo,
                            flat: true,
                            rotation: direction
                        };
                        _this.veiculoService.mapa.addMarker(metaMarker).then(function (mark) {
                            mark.on(__WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                                var htmlInfoWindow = _this.getWindowsInfo(marcador.veiculo);
                                htmlInfoWindow.open(mark);
                            });
                            marcador.marker = mark;
                        });
                    }
                    _this.veiculoService.marcadores.set(veiculo.veiculoId, marcador);
                });
                _this.veiculoService.tabRef.select(0);
                _this.veiculoService.tabRef.getByIndex(0).goToRoot({});
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.msgNoVeiculo,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.veiculoService.veiculos = [];
                if (_this.veiculoService.mapa != null) {
                    _this.veiculoService.limparMarcadores();
                }
            }
        }, function (error) {
            loading.dismiss();
            if (error.error.exception === 'io.jsonwebtoken.ExpiredJwtException' ||
                error.error.error === 'Unauthorized') {
                _this.user.logout();
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
        }, function () {
            //loading.dismiss();
            _this.veiculoService.iniciarTimeDataStore();
        });
    };
    SearchPage.prototype.getWindowsInfo = function (veiculo) {
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
        var htmlInfoWindow = new __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__["d" /* HtmlInfoWindow */]();
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
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title center text-center>{{ \'SEARCH_TITLE\' | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="md-exit"></ion-icon>\n        {{ \'EXIT\' | translate }}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n\n      <ion-item>\n        <ion-label>{{ \'IGNITION\' | translate }}</ion-label>\n        <ion-select formControlName="ignicao">\n          <ion-option value="" checked="true">{{ \'SELECT\' | translate }}</ion-option>\n          <ion-option value="L">{{ \'ON\' | translate }}</ion-option>\n          <ion-option value="D">{{ \'OFF\' | translate }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'CHANNEL\' | translate }}</ion-label>\n        <ion-select formControlName="inter">\n          <ion-option value="" checked="true">{{ \'SELECT\' | translate }}</ion-option>\n          <ion-option value="GSM">GSM</ion-option>\n          <ion-option value="SAT">SAT</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'TECHNOLOGY\' | translate }}</ion-label>\n        <ion-select formControlName="tecnologia">\n          <ion-option value="" selected>{{ \'SELECT\' | translate }}</ion-option>\n          <ion-option value="0">HPS Sux</ion-option>\n          <ion-option value="1">HPS Mxk</ion-option>\n          <ion-option value="2">HPS Gdn</ion-option>\n          <ion-option value="3">HPS Hdb</ion-option>\n          <ion-option value="4">HPS Dual</ion-option>\n          <ion-option value="5">HPS Sat</ion-option>\n          <ion-option value="6">HPS Hdg</ion-option>\n          <ion-option value="7">HPS Qtt</ion-option>\n          <ion-option value="8">HPS Hbq</ion-option>\n          <ion-option value="9">HPS Skp</ion-option>\n          <ion-option value="10">HPS Sun</ion-option>\n          <ion-option value="11">HPS Scs</ion-option>\n          <ion-option value="18">HPS Hbs</ion-option>\n          <ion-option value="17">HPS Wli</ion-option>\n          <ion-option value="23">HPS Flex</ion-option>\n          <ion-option value="24">HPS Isca</ion-option>\n          <ion-option value="100">HPS Tlk</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'PLATE\' | translate }}</ion-label>\n        <ion-input formControlName="plcVei"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'DESCRIPTION\' | translate }}</ion-label>\n        <ion-input formControlName="dscVei"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'TERMINAL\' | translate }}</ion-label>\n        <ion-input formControlName="equipamento"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'POINT\' | translate }}</ion-label>\n        <ion-input formControlName="pontoMP"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>id</ion-label>\n        <ion-input formControlName="idVei"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <button ion-item (click)="openModalCliente()">\n          <ion-icon name="ios-search"></ion-icon>\n          {{cliente == null ? (\'CLIENT\' | translate) : cliente.nome }}\n        </button>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <button ion-button block color="secondary" (click)="filtrar()">\n    <ion-icon name="ios-search"></ion-icon> &nbsp; {{ \'FILTER\' | translate }}\n  </button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_9__providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__providers_api_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_11__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_15__pipes_distancia_pipe__["a" /* DistanciaPipe */],
            __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_velocidade_pipe__["a" /* VelocidadePipe */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroVeiculo; });
var FiltroVeiculo = /** @class */ (function () {
    function FiltroVeiculo() {
        this.lstClienteId = [];
        this.lstVeiculoId = [];
        // clienteId: Number;
        this.clienteIdFilter = [];
        this.veiculoUpdate = [];
    }
    return FiltroVeiculo;
}());

//# sourceMappingURL=filtro-veiculo.js.map

/***/ })

});
//# sourceMappingURL=10.js.map