webpackJsonp([3],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RastroPageModule", function() { return RastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_distancia_pipe__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_velocidade_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_shred_pipe__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rastro__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RastroPageModule = /** @class */ (function () {
    function RastroPageModule() {
    }
    RastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__rastro__["a" /* RastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_6__rastro__["a" /* RastroPage */]),
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_shred_pipe__["a" /* SharedPipeModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_distancia_pipe__["a" /* DistanciaPipe */], __WEBPACK_IMPORTED_MODULE_2__pipes_velocidade_pipe__["a" /* VelocidadePipe */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]
            ]
        })
    ], RastroPageModule);
    return RastroPageModule;
}());

//# sourceMappingURL=rastro.module.js.map

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

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_distancia_pipe__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_velocidade_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RastroPage = /** @class */ (function () {
    function RastroPage(navCtrl, navParams, loadingCtrl, translateService, platform, veiculoService, velocidadePipe, distanciaPipe, datePipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.platform = platform;
        this.veiculoService = veiculoService;
        this.velocidadePipe = velocidadePipe;
        this.distanciaPipe = distanciaPipe;
        this.datePipe = datePipe;
        this.rastro = [];
        this.inspecoes = [];
        this.tipoMapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].NORMAL;
        this.veiculo = this.navParams.get("veiculo");
        this.rastro = this.navParams.get("rastro");
        this.inspecoes = this.navParams.get("inspecao");
        this.translateService.get(["WAIT", "DIRECTION", "DATETIME", "PLATE", "SPEED", "LOCATION"]).subscribe(function (values) {
            _this.waitString = values["WAIT"];
            _this.directionString = values["DIRECTION"];
            _this.dateTimeString = values["DATETIME"];
            _this.placaString = values["PLATE"];
            _this.speedString = values["SPEED"];
            _this.locationString = values["LOCATION"];
        });
    }
    RastroPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var points = [];
            var pointFocus = [];
            _this.rastro.forEach(function (ponto) {
                points.push(new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["e" /* LatLng */](ponto.latitude, ponto.longitude));
                pointFocus.push(new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["e" /* LatLng */](ponto.latitude, ponto.longitude));
            });
            _this.inspecoes.forEach(function (insp) {
                pointFocus.push(new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["e" /* LatLng */](insp.lat, insp.lng));
            });
            var element = _this.mapElement.nativeElement;
            if (pointFocus.length > 0) {
                _this.mapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */].create(element, {
                    camera: {
                        target: pointFocus
                    }
                });
            }
            else {
                _this.mapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */].create(element);
            }
            _this.mapa.one(__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                if (points.length > 0) {
                    var polylineOptions = {
                        points: points,
                        color: '#17468A',
                        width: 2,
                        geodesic: true,
                        clickable: true
                    };
                    _this.mapa.addPolyline(polylineOptions).then(function (polyline) {
                        var metaMarker = {
                            position: {
                                lat: _this.rastro[0].latitude,
                                lng: _this.rastro[0].longitude
                            },
                            icon: {
                                url: 'assets/icon/bandeira_inicio3.png'
                            }
                        };
                        _this.mapa.addMarker(metaMarker).then(function (mark) {
                            mark.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                                var htmlInfoWindow = _this.getWindowsInfo(_this.rastro[0]);
                                htmlInfoWindow.open(mark);
                            });
                        });
                        ;
                        var ponto = _this.rastro[_this.rastro.length - 1];
                        var path = "assets/icon/car.png";
                        if (_this.veiculo.iconType == 2) {
                            path = "assets/icon/custom/bus.png";
                        }
                        else if (_this.veiculo.iconType == 3) {
                            path = "assets/icon/custom/forkfitft.png";
                        }
                        else if (_this.veiculo.iconType == 4) {
                            path = "assets/icon/custom/ship.png";
                        }
                        else if (_this.veiculo.iconType == 5) {
                            path = "assets/icon/custom/container.png";
                        }
                        else if (_this.veiculo.iconType == 6) {
                            path = "assets/icon/custom/moto.png";
                        }
                        else {
                            if (ponto.ignicao == true) {
                                path = "assets/icon/car-ign.png";
                            }
                            else if (ponto.ignicao == false) {
                                path = "assets/icon/car.png";
                            }
                        }
                        var iconVeiculo = {
                            url: path,
                            size: {
                                width: 30,
                                height: 30
                            }
                        };
                        var direction = (ponto.direcao * 45);
                        var metaMarker2 = {
                            position: {
                                lat: ponto.latitude,
                                lng: ponto.longitude
                            },
                            flat: true,
                            rotation: direction,
                            icon: iconVeiculo
                        };
                        _this.mapa.addMarker(metaMarker2).then(function (mark) {
                            mark.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                                var htmlInfoWindow = _this.getWindowsInfo(ponto);
                                htmlInfoWindow.open(mark);
                            });
                        });
                        _this.rastro.forEach(function (pontoSeta, index) {
                            if (index != 0 && index != _this.rastro.length - 1) {
                                var pathSeta = 'assets/icon/seta_off.png';
                                if (pontoSeta.ignicao) {
                                    pathSeta = 'assets/icon/seta_on.png';
                                }
                                var iconVeiculoSeta = {
                                    url: pathSeta,
                                    size: {
                                        width: 30,
                                        height: 30
                                    }
                                };
                                var directionSeta = (pontoSeta.direcao * 45);
                                var directionMarker = {
                                    position: {
                                        lat: pontoSeta.latitude,
                                        lng: pontoSeta.longitude
                                    },
                                    flat: true,
                                    rotation: directionSeta,
                                    icon: iconVeiculoSeta,
                                    anchor: [5, 0]
                                };
                                _this.mapa.addMarker(directionMarker).then(function (mark) {
                                    mark.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                                        var htmlInfoWindow = _this.getWindowsInfo(pontoSeta);
                                        htmlInfoWindow.open(mark);
                                    });
                                });
                            }
                        });
                    });
                }
                if (_this.inspecoes.length > 0) {
                    _this.inspecoes.forEach(function (ins) {
                        var metaMarkerInspe = {
                            position: {
                                lat: ins.lat,
                                lng: ins.lng
                            },
                            flat: true,
                            icon: 'assets/icon/icons8-inspecao-16.png'
                        };
                        _this.mapa.addMarker(metaMarkerInspe).then(function (mark) {
                            mark.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                                var htmlInfoWindow = _this.getWindowsInfoInpe(ins);
                                htmlInfoWindow.open(mark);
                            });
                        });
                    });
                }
            });
        });
    };
    RastroPage.prototype.getWindowsInfo = function (pontoSeta) {
        var dir = '';
        if (this.translateService.getBrowserLang() === 'pt' ||
            this.translateService.getBrowserLang() === 'pt-br') {
            switch (pontoSeta.direcao) {
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
            switch (pontoSeta.direcao) {
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
        var velocidade = this.velocidadePipe.transform(pontoSeta.velocidade);
        var location = this.distanciaPipe.transform(pontoSeta.ptpDis) + pontoSeta.local;
        var dh = this.datePipe.transform(pontoSeta.dh, 'dd/MM/yyyy HH:mm:ss');
        var htmlInfoWindow = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["d" /* HtmlInfoWindow */]();
        var frame = document.createElement('div');
        frame.innerHTML = [
            '<div>' + this.directionString + ': ' + dir + '</div>',
            '<div>' + this.dateTimeString + ': ' + dh + '</div>',
            '<div>' + this.placaString + ': ' + pontoSeta.placa + '</div>',
            '<div>' + this.speedString + ': ' + velocidade + '</div>',
            '<div>Latitude: ' + pontoSeta.latitude.toFixed(5) + '</div>',
            '<div>Longitude: ' + pontoSeta.longitude.toFixed(5) + '</div>',
            '<div>' + this.locationString + ': ' + location + '</div>',
        ].join("");
        htmlInfoWindow.setContent(frame, {
            width: "250px",
            height: "150px"
        });
        return htmlInfoWindow;
    };
    RastroPage.prototype.getWindowsInfoInpe = function (pontoSeta) {
        var location = pontoSeta.posicao;
        var dh = this.datePipe.transform(pontoSeta.dh, 'dd/MM/yyyy HH:mm:ss');
        var htmlInfoWindow = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["d" /* HtmlInfoWindow */]();
        var frame = document.createElement('div');
        frame.innerHTML = [
            '<div><b>Cod: ' + pontoSeta.id + '</b></div>',
            '<div>' + this.dateTimeString + ': ' + dh + '</div>',
            '<div>Latitude: ' + pontoSeta.lat.toFixed(5) + '</div>',
            '<div>Longitude: ' + pontoSeta.lng.toFixed(5) + '</div>',
            '<div>' + location + '</div>',
        ].join("");
        htmlInfoWindow.setContent(frame, {
            width: "230px",
            height: "130px"
        });
        return htmlInfoWindow;
    };
    RastroPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad RastroPage");
    };
    RastroPage.prototype.openGrid = function () {
        this.veiculoService.tabRef
            .getByIndex(0).push(__WEBPACK_IMPORTED_MODULE_3__index__["o" /* RastroGridPage */], {
            veiculo: this.veiculo,
            rastro: this.rastro
        });
    };
    RastroPage.prototype.changeLayer = function () {
        if (this.tipoMapa == __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].NORMAL) {
            this.tipoMapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].HYBRID;
        }
        else if (this.tipoMapa == __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].HYBRID) {
            this.tipoMapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].SATELLITE;
        }
        else {
            this.tipoMapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].NORMAL;
        }
        this.mapa.setMapTypeId(this.tipoMapa);
    };
    RastroPage.prototype.openInspection = function () {
        this.veiculoService.tabRef
            .getByIndex(0).push(__WEBPACK_IMPORTED_MODULE_3__index__["h" /* InspectionGridPage */], {
            veiculo: this.veiculo,
            inspecoes: this.inspecoes
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])("mapRastro"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_core__["ElementRef"])
    ], RastroPage.prototype, "mapElement", void 0);
    RastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: "page-rastro",template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\rastro\rastro.html"*/'<!--\n  Generated template for the RastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title center text-cente>{{\'TRACK\' | translate}}</ion-title>\n    <ion-buttons end>\n      \n        <button ion-button outline [hidden]="inspecoes.length == 0" (click)="openInspection()">\n            Inspections\n        </button>\n        <button ion-button outline [hidden]="rastro.length == 0" (click)="openGrid()">\n          Grid\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    \n    <div #mapRastro id="mapRastro">\n        <ion-fab right bottom>\n            <button ion-fab mini color="light" (click)="changeLayer()">\n              <ion-img width="24" height="24" src="assets/icon/layer.png"></ion-img>\n            </button>\n        </ion-fab>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\rastro\rastro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_2__pipes_velocidade_pipe__["a" /* VelocidadePipe */],
            __WEBPACK_IMPORTED_MODULE_1__pipes_distancia_pipe__["a" /* DistanciaPipe */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]])
    ], RastroPage);
    return RastroPage;
}());

//# sourceMappingURL=rastro.js.map

/***/ })

});
//# sourceMappingURL=3.js.map