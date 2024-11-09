webpackJsonp([14],{

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_velocidade_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_distancia_pipe__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mapa__ = __webpack_require__(662);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MapaPageModule = /** @class */ (function () {
    function MapaPageModule() {
    }
    MapaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__mapa__["a" /* MapaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_6__mapa__["a" /* MapaPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__mapa__["a" /* MapaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__pipes_distancia_pipe__["a" /* DistanciaPipe */], __WEBPACK_IMPORTED_MODULE_1__pipes_velocidade_pipe__["a" /* VelocidadePipe */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]
            ]
        })
    ], MapaPageModule);
    return MapaPageModule;
}());

//# sourceMappingURL=mapa.module.js.map

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

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_velocidade_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_distancia_pipe__ = __webpack_require__(637);
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
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var MapaPage = /** @class */ (function () {
    function MapaPage(navCtrl, platform, settings, formBuilder, navParams, translate, user, veiculoService, app, distanciaPipe, datePipe, velocidadePipe, loadingCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.user = user;
        this.veiculoService = veiculoService;
        this.app = app;
        this.distanciaPipe = distanciaPipe;
        this.datePipe = datePipe;
        this.velocidadePipe = velocidadePipe;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.tipoMapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].NORMAL;
        this.translateService.get(["WAIT", "SPEED", "LOCATION", "PLATE", "DIRECTION", "DATETIME"]).subscribe(function (values) {
            _this.waitString = values["WAIT"];
            _this.speedString = values["SPEED"];
            _this.locationString = values["LOCATION"];
            _this.placaString = values["PLATE"];
            _this.directionString = values["DIRECTION"];
            _this.dateTimeString = values["DATETIME"];
        });
    }
    MapaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var element = _this.mapElement.nativeElement;
            _this.veiculoService.mapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */].create(element);
            _this.veiculoService.mapa.one(__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                var loading = _this.loadingCtrl.create({
                    content: _this.waitString
                });
                loading.present();
                var options;
                if (_this.veiculoService.getSelectVeiculo != null) {
                    options = {
                        target: {
                            lat: _this.veiculoService.getSelectVeiculo.latitude,
                            lng: _this.veiculoService.getSelectVeiculo.longitude
                        },
                        zoom: 14,
                        duration: 1000
                    };
                }
                else {
                    options = {
                        target: { lat: -15.795352, lng: -47.881980 },
                        zoom: 4
                    };
                }
                _this.veiculoService.mapa.moveCamera(options);
                _this.veiculoService.marcadores.forEach(function (marca, key, marcadores) {
                    var path = 'assets/icon/car.png';
                    if (marca.veiculo.iconType == 2) {
                        path = "assets/icon/custom/bus.png";
                    }
                    else if (marca.veiculo.iconType == 3) {
                        path = "assets/icon/custom/forkfitft.png";
                    }
                    else if (marca.veiculo.iconType == 4) {
                        path = "assets/icon/custom/ship.png";
                    }
                    else if (marca.veiculo.iconType == 5) {
                        path = "assets/icon/custom/container.png";
                    }
                    else if (marca.veiculo.iconType == 6) {
                        path = "assets/icon/custom/moto.png";
                    }
                    else {
                        if (marca.veiculo.ignicao === null) {
                            path = "assets/icon/icons8-inspecao-16.png";
                        }
                        else if (marca.veiculo.ignicao == true) {
                            path = "assets/icon/car-ign.png";
                        }
                        else if (marca.veiculo.ignicao == false) {
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
                    var direction = 0;
                    if (marca.veiculo.ignicao === null) {
                        iconVeiculo = {
                            url: "assets/icon/icons8-inspecao-16.png"
                        };
                    }
                    else {
                        direction = ((marca.veiculo.direcao) * 45);
                    }
                    var metaMarker = {
                        position: {
                            lat: marca.veiculo.latitude,
                            lng: marca.veiculo.longitude
                        },
                        flat: true,
                        rotation: direction,
                        icon: iconVeiculo
                    };
                    _this.veiculoService.mapa
                        .addMarker(metaMarker)
                        .then(function (mark) {
                        marca.marker = mark;
                        mark.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                            var htmlInfoWindow = _this.getWindowsInfo(marca.veiculo);
                            if (marca.veiculo.ignicao === null) {
                                htmlInfoWindow = _this.getWindowsInfoInpe(marca.veiculo);
                            }
                            htmlInfoWindow.open(mark);
                        });
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                });
                loading.dismiss();
            });
        });
    };
    MapaPage.prototype.popularMapaCarro = function () {
    };
    MapaPage.prototype.logout = function () {
        this.user.logout();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_0__index__["j" /* LoginPage */]);
    };
    MapaPage.prototype.changeLayer = function () {
        if (this.tipoMapa == __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].NORMAL) {
            this.tipoMapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].HYBRID;
        }
        else if (this.tipoMapa == __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].HYBRID) {
            this.tipoMapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].SATELLITE;
        }
        else {
            this.tipoMapa = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].NORMAL;
        }
        this.veiculoService.mapa.setMapTypeId(this.tipoMapa);
    };
    MapaPage.prototype.getWindowsInfo = function (veiculo) {
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
        var htmlInfoWindow = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["d" /* HtmlInfoWindow */]();
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
    MapaPage.prototype.getWindowsInfoInpe = function (pontoSeta) {
        var location = pontoSeta.posicao;
        var dh = this.datePipe.transform(pontoSeta.dh, 'dd/MM/yyyy HH:mm:ss');
        var htmlInfoWindow = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["d" /* HtmlInfoWindow */]();
        var frame = document.createElement('div');
        frame.innerHTML = [
            '<div>' + this.dateTimeString + ': ' + dh + '</div>',
            '<div>Latitude: ' + pontoSeta.latitude.toFixed(5) + '</div>',
            '<div>Longitude: ' + pontoSeta.longitude.toFixed(5) + '</div>',
            '<div>' + location + '</div>',
        ].join("");
        htmlInfoWindow.setContent(frame, {
            width: "230px",
            height: "130px"
        });
        return htmlInfoWindow;
    };
    MapaPage.prototype.abrirStreetView = function () {
        if (this.veiculoService.getSelectVeiculo != null) {
            this.navCtrl.push("StreetViewPage", {
                target: { lat: this.veiculoService.getSelectVeiculo.latitude, lng: this.veiculoService.getSelectVeiculo.longitude }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], MapaPage.prototype, "mapElement", void 0);
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-mapa",template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\mapa\mapa.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title center text-center>{{ \'MAP_TITLE\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="md-exit"></ion-icon>\n        {{ \'EXIT\' | translate }}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n<ion-content>\n  <div #map id="map">\n    <ion-fab right top>\n      <button ion-fab mini color="light" (click)="abrirStreetView()">\n        <ion-img width="24" height="24" src="assets/icon/streetview.svg"></ion-img>\n      </button>\n    </ion-fab>\n\n\n    <ion-fab right bottom>\n      <button ion-fab mini color="light" (click)="changeLayer()">\n        <ion-img width="24" height="24" src="assets/icon/layer.png"></ion-img>\n      </button>\n    </ion-fab>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\mapa\mapa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_7__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_distancia_pipe__["a" /* DistanciaPipe */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_velocidade_pipe__["a" /* VelocidadePipe */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ })

});
//# sourceMappingURL=14.js.map