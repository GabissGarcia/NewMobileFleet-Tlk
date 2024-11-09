webpackJsonp([31],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_marcador__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_interval__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_velocidade_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var VeiculoService = /** @class */ (function () {
    function VeiculoService(api, translateService, loadingCtrl, localNotifications, plt, http, backend) {
        var _this = this;
        this.api = api;
        this.translateService = translateService;
        this.loadingCtrl = loadingCtrl;
        this.localNotifications = localNotifications;
        this.plt = plt;
        this.http = http;
        this.backend = backend;
        this.veiculos = [];
        this.mapa = null;
        this.selectVeiculo = null;
        this.ultimoFiltro = null;
        this.marcadores = new Map();
        this.translateService
            .get(["WAIT", "SAVESUCCESS", "FAILURE", "PLATE", "DIRECTION", "DATETIME", "SPEED", "LOCATION"])
            .subscribe(function (values) {
            _this.waitString = values["WAIT"];
            _this.savesuccessString = values["SAVESUCCESS"];
            _this.failureString = values["FAILURE"];
            _this.placaString = values["PLATE"];
            _this.directionString = values["DIRECTION"];
            _this.dateTimeString = values["DATETIME"];
            _this.speedString = values["SPEED"];
            _this.locationString = values["LOCATION"];
        });
    }
    VeiculoService.prototype.getStatusVeiculo = function (veiculoId) {
        return this.api.get("datastore/statusmobile/" + veiculoId);
    };
    VeiculoService.prototype.getVeiculos = function (filtro) {
        return this.api.post("gridestaticamobile", filtro);
    };
    /*filtroVeiculos(filtro: any) {
      this.ultimoFiltro = filtro;
      let loading = this.loadingCtrl.create({
        content: this.waitString
      });
      loading.present();
  
      this.getVeiculos(filtro).subscribe((data: any) => {
          if (data.length > 0) {
  
            this.veiculos = data;
  
            this.limparMarcadores();
            this.veiculos.forEach((veiculo: DataStore) => {
              const marcador = new Marcador(veiculo.veiculoId, veiculo);
              if (this.mapa != null) {
                let path = "assets/icon/car.png";
                if (veiculo.ignicao) {
                  path = "assets/icon/car-ign.png";
                }
  
                const iconVeiculo = {
                  url: path,
                  size: {
                    width: 25,
                    height: 25
                  }
                };
                const direction = (veiculo.direcao * 45);
                let metaMarker: any = {
                  position: { lat: veiculo.latitude, lng: veiculo.longitude },
                  icon: iconVeiculo,
                  flat: true,
                  rotation: direction,
                  snippet: veiculo.placa,
                };
                this.mapa.addMarker(metaMarker).then(mark => {
                  marcador.marker = mark;
                });
              }
              this.marcadores.set(veiculo.veiculoId, marcador);
            });
          }
        },
        error => {
  
            loading.dismiss();
  
        },
        () => {
  
            loading.dismiss();
  
        }
      );
    }*/
    VeiculoService.prototype.iniciarTimeDataStore = function () {
        var _this = this;
        this.subscribeTimeDataStore = Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_interval__["interval"])(90000).subscribe(function (pacote) {
            _this.getVeiculos(_this.ultimoFiltro).subscribe(function (data) {
                if (data.length) {
                    _this.veiculos = data;
                    _this.veiculos.forEach(function (veiculo) {
                        var marcador = _this.marcadores.get(veiculo.veiculoId);
                        //const marcador = new Marcador(veiculo.veiculoId, veiculo);
                        if (_this.mapa != null) {
                            var path = "assets/icon/car.png";
                            if (veiculo.iconType == 2) {
                                path = "assets/icon/custom/bus.png";
                            }
                            else if (veiculo.iconType == 3) {
                                path = "assets/icon/custom/forkfitft.png";
                            }
                            else if (veiculo.iconType == 4) {
                                path = "assets/icon/custom/ship.png";
                            }
                            else if (veiculo.iconType == 5) {
                                path = "assets/icon/custom/container.png";
                            }
                            else if (veiculo.iconType == 6) {
                                path = "assets/icon/custom/moto.png";
                            }
                            else {
                                if (veiculo.ignicao == true) {
                                    path = "assets/icon/car-ign.png";
                                }
                                else if (veiculo.ignicao == false) {
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
                            if (veiculo.ignicao === null) {
                                iconVeiculo = {
                                    url: "assets/icon/icons8-inspecao-16.png"
                                };
                            }
                            else {
                                direction = (veiculo.direcao) * 45;
                            }
                            if (marcador == null) {
                                var marcador_1 = new __WEBPACK_IMPORTED_MODULE_0__models_marcador__["a" /* Marcador */](veiculo.veiculoId, veiculo);
                                var metaMarker = {
                                    position: { lat: veiculo.latitude, lng: veiculo.longitude },
                                    icon: iconVeiculo,
                                    flat: true,
                                    rotation: direction
                                };
                                _this.mapa.addMarker(metaMarker).then(function (mark) {
                                    mark.on(__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                                        var htmlInfoWindow = _this.getWindowsInfo(marcador_1.veiculo);
                                        if (veiculo.ignicao === null) {
                                            htmlInfoWindow = _this.getWindowsInfoInpe(marcador_1.veiculo);
                                        }
                                        htmlInfoWindow.open(mark);
                                    });
                                    marcador_1.marker = mark;
                                });
                            }
                            else {
                                marcador.marker.setPosition({
                                    lat: veiculo.latitude,
                                    lng: veiculo.longitude
                                });
                                marcador.veiculo = veiculo;
                                marcador.marker.setIcon(iconVeiculo);
                                marcador.marker.setRotation(direction);
                            }
                        }
                        _this.marcadores.set(veiculo.veiculoId, marcador);
                    });
                }
            }, function (error) {
                //refresher.complete();
            }, function () {
                //refresher.complete();
            });
        });
    };
    VeiculoService.prototype.iniciaTimeNotification = function () {
        var _this = this;
        this.verificarNotificacao();
        this.subscribeTimeNotification = Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_interval__["interval"])(120000).subscribe(function (pacote) {
            _this.verificarNotificacao();
        });
    };
    VeiculoService.prototype.verificarNotificacao = function () {
        var _this = this;
        this.getNotificationInspe().subscribe(function (n) {
            var localNotification = [];
            if (n.length > 0) {
                n.forEach(function (notif, index) {
                    localNotification.push({
                        title: 'Inspection',
                        text: notif,
                        sound: _this.plt.is('android') ? 'file://sound.mp3' : 'file://beep.caf'
                    });
                });
            }
            _this.localNotifications.schedule(localNotification);
        });
    };
    VeiculoService.prototype.getWindowsInfo = function (veiculo) {
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
        var velocidade = new __WEBPACK_IMPORTED_MODULE_8__pipes_velocidade_pipe__["a" /* VelocidadePipe */](this.translateService).transform(veiculo.velocidade);
        var location = veiculo.posicao;
        var dh = new __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */]("pt-br").transform(veiculo.dh, 'dd/MM/yyyy HH:mm:ss');
        var htmlInfoWindow = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["d" /* HtmlInfoWindow */]();
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
    VeiculoService.prototype.getWindowsInfoInpe = function (pontoSeta) {
        var location = pontoSeta.posicao;
        var dh = new __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */]("pt-br").transform(pontoSeta.dh, 'dd/MM/yyyy HH:mm:ss');
        var htmlInfoWindow = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["d" /* HtmlInfoWindow */]();
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
    VeiculoService.prototype.pararTimeDataStore = function () {
        if (this.subscribeTimeDataStore !== undefined) {
            this.subscribeTimeDataStore.unsubscribe();
        }
    };
    VeiculoService.prototype.limparMarcadores = function () {
        if (this.mapa != null) {
            this.marcadores.forEach(function (marca) {
                if (marca.marker !== undefined && marca.marker !== null) {
                    marca.marker.remove();
                }
            });
        }
        this.marcadores.clear();
    };
    Object.defineProperty(VeiculoService.prototype, "getSelectVeiculo", {
        get: function () {
            return this.selectVeiculo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VeiculoService.prototype, "setSelectVeiculo", {
        set: function (veiculo) {
            this.selectVeiculo = veiculo;
        },
        enumerable: true,
        configurable: true
    });
    VeiculoService.prototype.getMensagem = function (veiId) {
        return this.api.get("mensagem/" + veiId);
    };
    VeiculoService.prototype.getMacrosVeiculo = function (veiId) {
        return this.api.get("macro/" + veiId);
    };
    VeiculoService.prototype.enviarMensagem = function (msg) {
        return this.api.post("mensagem/enviar", msg);
    };
    VeiculoService.prototype.getInfoVeiculo = function (veiId) {
        return this.api.get("veiculo/" + veiId);
    };
    VeiculoService.prototype.getInfoAdicional = function (veiId) {
        return this.api.get("veiculo/" + veiId);
    };
    VeiculoService.prototype.salvarPonto = function (ponto) {
        return this.api.post("ponto", ponto);
    };
    VeiculoService.prototype.enviarComando = function (ponto) {
        return this.api.post("comando/enviar", ponto);
    };
    VeiculoService.prototype.getRastro = function (filtro) {
        return this.api.post("posicao/findByIntervaloEInpecao", filtro);
    };
    VeiculoService.prototype.findVeiculoByPlaca = function (placa) {
        return this.api.get("veiculo/findByPlaca/" + placa);
    };
    VeiculoService.prototype.salvarInspecao = function (inspecao) {
        return this.api.post("inspecao", inspecao);
    };
    VeiculoService.prototype.editarInspecao = function (inspecao) {
        return this.api.post("inspecao/edit", inspecao);
    };
    VeiculoService.prototype.getInspection = function (id) {
        return this.api.get("inspecao/" + id);
    };
    VeiculoService.prototype.getInspectionVeiculo = function (veiId) {
        return this.api.get("inspecao/veiculo/" + veiId);
    };
    VeiculoService.prototype.getNotificationInspe = function () {
        return this.api.get("notification");
    };
    VeiculoService.prototype.getGeolocation = function (lat, lng) {
        var req = new __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["g" /* HttpRequest */]('GET', "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyDnH7UBJ0y6aw5S2y3CV1ejh29XaYgN_RM");
        return this.backend.handle(req);
    };
    VeiculoService.prototype.pararTimeNotificaiton = function () {
        if (this.subscribeTimeNotification !== undefined) {
            this.subscribeTimeNotification.unsubscribe();
        }
    };
    VeiculoService.prototype.deleteInspection = function (id) {
        return this.api.delete("inspecao/" + id);
    };
    VeiculoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["c" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["i" /* HttpXhrBackend */]])
    ], VeiculoService);
    return VeiculoService;
}());

//# sourceMappingURL=veiculo.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadponto/cadponto.module": [
		606,
		30
	],
	"../pages/checklist/checklist.module": [
		607,
		9
	],
	"../pages/comando/comando.module": [
		608,
		29
	],
	"../pages/dashboard-entregas/dashboard-entregas.module": [
		609,
		28
	],
	"../pages/info-adicional/info-adicional.module": [
		610,
		8
	],
	"../pages/info-veiculo/info-veiculo.module": [
		611,
		27
	],
	"../pages/inpection-text-area-modal/inpection-text-area-modal.module": [
		612,
		26
	],
	"../pages/inspection-camera-modal/inspection-camera-modal.module": [
		613,
		25
	],
	"../pages/inspection-grid/inspection-grid.module": [
		614,
		1
	],
	"../pages/inspection-preview/inspection-preview.module": [
		615,
		24
	],
	"../pages/inspections-filter/inspections-filter.module": [
		616,
		0
	],
	"../pages/list-master/list-master.module": [
		617,
		2
	],
	"../pages/login/login.module": [
		618,
		23
	],
	"../pages/macro/macro.module": [
		619,
		7
	],
	"../pages/mapa/mapa.module": [
		620,
		14
	],
	"../pages/mensagem/mensagem.module": [
		621,
		6
	],
	"../pages/no-inpection-text-area-modal/no-inpection-text-area-modal.module": [
		622,
		22
	],
	"../pages/rastro-grid/rastro-grid.module": [
		623,
		5
	],
	"../pages/rastro-search/rastro-search.module": [
		624,
		4
	],
	"../pages/rastro/rastro.module": [
		625,
		3
	],
	"../pages/reset-password/reset-password.module": [
		626,
		11
	],
	"../pages/search/search.module": [
		627,
		10
	],
	"../pages/select-cliente/select-cliente.module": [
		628,
		13
	],
	"../pages/select-placa/select-placa.module": [
		629,
		21
	],
	"../pages/sensor/sensor.module": [
		630,
		20
	],
	"../pages/settings/settings.module": [
		631,
		19
	],
	"../pages/streetview/streetview.module": [
		632,
		12
	],
	"../pages/tabs/tabs.module": [
		633,
		18
	],
	"../pages/tutorial/tutorial.module": [
		636,
		17
	],
	"../pages/veiculo-menu/veiculo-menu.module": [
		634,
		16
	],
	"../pages/welcome/welcome.module": [
		635,
		15
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 200;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirstRunPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SelectClientePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return VeiculoMenuPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return RastroSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return RastroGridPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return Tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return Tab4Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SelectPlacaPage; });
/* unused harmony export DashboardEntregasPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ResetPasswordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChecklistPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return InpectionTextAreaModalPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return NoInpectionTextAreaModalPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return InspectionCameraModalPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return InspectionGridPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return InspectionPreviewPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadpontoPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ComandoPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return InfoAdicionalPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return InfoVeiculoPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MacroPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return MensagemPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return RastroPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SensorPage; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
var LoginPage = 'LoginPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
var SelectClientePage = 'SelectClientePage';
var VeiculoMenuPage = 'VeiculoMenuPage';
var RastroSearchPage = 'RastroSearchPage';
var RastroGridPage = 'RastroGridPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ListMasterPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'MapaPage';
var Tab4Root = 'InspectionsFilterPage';
var SelectPlacaPage = 'SelectPlacaPage';
var DashboardEntregasPage = 'DashboardEntregasPage';
var ResetPasswordPage = 'ResetPasswordPage';
var ChecklistPage = 'ChecklistPage';
var InpectionTextAreaModalPage = 'InpectionTextAreaModalPage';
var NoInpectionTextAreaModalPage = 'NoInpectionTextAreaModalPage';
var InspectionCameraModalPage = 'InspectionCameraModalPage';
var InspectionGridPage = 'InspectionGridPage';
var InspectionPreviewPage = 'InspectionPreviewPage';
var CadpontoPage = 'CadpontoPage';
var ComandoPage = 'ComandoPage';
var InfoAdicionalPage = 'InfoAdicionalPage';
var InfoVeiculoPage = 'InfoVeiculoPage';
var MacroPage = 'MacroPage';
var MensagemPage = 'MensagemPage';
var RastroPage = 'RastroPage';
var SensorPage = 'SensorPage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VelocidadePipe; });
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


var VelocidadePipe = /** @class */ (function () {
    function VelocidadePipe(translate) {
        this.translate = translate;
    }
    VelocidadePipe.prototype.transform = function (value) {
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'pt' || browserLang === 'pt-br') {
                return value + ' Km/h';
            }
        }
        return (value * 0.6213711922).toFixed(2) + ' mph';
    };
    VelocidadePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'velocidade' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]])
    ], VelocidadePipe);
    return VelocidadePipe;
}());

//# sourceMappingURL=velocidade.pipe.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, user) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.user = user;
        // rootPage = FirstRunPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["j" /* LoginPage */];
        this.pages = [
            { title: 'Tutorial', component: 'TutorialPage' },
            { title: 'Welcome', component: 'WelcomePage' },
            { title: 'Tabs', component: 'TabsPage' },
            { title: 'Cards', component: 'CardsPage' },
            { title: 'Content', component: 'ContentPage' },
            { title: 'Login', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' },
            { title: 'Master Detail', component: 'ListMasterPage' },
            { title: 'Menu', component: 'MenuPage' },
            { title: 'Settings', component: 'SettingsPage' },
            { title: 'Mapa', component: 'MapaPage' },
            { title: 'Search', component: 'SearchPage' },
            { title: 'StreetView', component: 'StreetViewPage' },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString('#3a3838');
            _this.splashScreen.hide();
        });
        this.initTranslate();
        /*
            const usuario = JSON.parse(localStorage.getItem('loginuser'));
            if (usuario != null){
              this.user._user = usuario;
              this.rootPage = MainPage;
            }*/
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'pt' || browserLang === 'pt-br') {
                this.translate.use('pt-br');
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.getRootNav = function () {
        return this.nav;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Config"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers__["d" /* User */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(59);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api, veiculoService) {
        this.api = api;
        this.veiculoService = veiculoService;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('authenticatemobile', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
        this.veiculoService.veiculos = [];
        localStorage.removeItem('loginuser');
        localStorage.removeItem('yourTokenKey');
        this.veiculoService.pararTimeNotificaiton();
        this.veiculoService.pararTimeDataStore();
        this.veiculoService.limparMarcadores();
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.usuario;
    };
    User.prototype.validarLogin = function () {
        return this.api.get("authenticate/findUsuarioAutorized");
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_0__api_veiculo_service__["a" /* VeiculoService */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(59);
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



var DashboardService = /** @class */ (function () {
    function DashboardService(api, loadingCtrl) {
        this.api = api;
        this.loadingCtrl = loadingCtrl;
    }
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]])
    ], DashboardService);
    return DashboardService;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Marcador; });
var Marcador = /** @class */ (function () {
    function Marcador(veiculoId, veiculo) {
        this.marker = null;
        this.veiculoId = veiculoId;
        this.veiculo = veiculo;
    }
    return Marcador;
}());

//# sourceMappingURL=marcador.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService(api) {
        this.api = api;
    }
    SearchService.prototype.getClientes = function () {
        return this.api.get('cliente');
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers__["a" /* Api */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(432);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_dashboard_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_interceptor_auth_authentication_http_interceptor__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mocks_providers_items__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_api_search_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_maps__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_date_picker__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ion2_calendar__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_open_native_settings__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_geocoder__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_location_accuracy__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_android_permissions__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_diagnostic__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_local_notifications__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_base64__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_opener__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_14__providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadponto/cadponto.module#CadpontoPageModule', name: 'CadpontoPage', segment: 'cadponto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checklist/checklist.module#ChecklistPageModule', name: 'ChecklistPage', segment: 'checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comando/comando.module#ComandoPageModule', name: 'ComandoPage', segment: 'comando', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard-entregas/dashboard-entregas.module#DashboardEntregasPageModule', name: 'DashboardEntregasPage', segment: 'dashboard-entregas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-adicional/info-adicional.module#InfoAdicionalPageModule', name: 'InfoAdicionalPage', segment: 'info-adicional', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-veiculo/info-veiculo.module#InfoVeiculoPageModule', name: 'InfoVeiculoPage', segment: 'info-veiculo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inpection-text-area-modal/inpection-text-area-modal.module#InpectionTextAreaModalPageModule', name: 'InpectionTextAreaModalPage', segment: 'inpection-text-area-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inspection-camera-modal/inspection-camera-modal.module#InspectionCameraModalPageModule', name: 'InspectionCameraModalPage', segment: 'inspection-camera-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inspection-grid/inspection-grid.module#InspectionGridPageModule', name: 'InspectionGridPage', segment: 'inspection-grid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inspection-preview/inspection-preview.module#InspectionPreviewPageModule', name: 'InspectionPreviewPage', segment: 'inspection-preview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inspections-filter/inspections-filter.module#InspectionsFilterPageModule', name: 'InspectionsFilterPage', segment: 'inspections-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/macro/macro.module#MacroPageModule', name: 'MacroPage', segment: 'macro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mensagem/mensagem.module#MensagemPageModule', name: 'MensagemPage', segment: 'mensagem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/no-inpection-text-area-modal/no-inpection-text-area-modal.module#NoInpectionTextAreaModalPageModule', name: 'NoInpectionTextAreaModalPage', segment: 'no-inpection-text-area-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rastro-grid/rastro-grid.module#RastroGridPageModule', name: 'RastroGridPage', segment: 'rastro-grid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rastro-search/rastro-search.module#RastroSearchPageModule', name: 'RastroSearchPage', segment: 'rastro-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rastro/rastro.module#RastroPageModule', name: 'RastroPage', segment: 'rastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-cliente/select-cliente.module#SelectClientePageModule', name: 'SelectClientePage', segment: 'select-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-placa/select-placa.module#SelectPlacaPageModule', name: 'SelectPlacaPage', segment: 'select-placa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sensor/sensor.module#SensorPageModule', name: 'SensorPage', segment: 'sensor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/streetview/streetview.module#StreetViewPageModule', name: 'StreetViewPage', segment: 'streetview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/veiculo-menu/veiculo-menu.module#VeiculoMenuPageModule', name: 'VeiculoMenuPage', segment: 'veiculo-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19_ion2_calendar__["CalendarModule"]
            ],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_13__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_14__providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_2__providers_api_veiculo_service__["a" /* VeiculoService */],
                __WEBPACK_IMPORTED_MODULE_0__providers_api_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_api_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_3__providers_interceptor_auth_authentication_http_interceptor__["a" /* AuthHttpAuthenticationInterceptor */], multi: true
                },
                { provide: __WEBPACK_IMPORTED_MODULE_14__providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["i" /* HttpXhrBackend */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpBackend */], useExisting: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["i" /* HttpXhrBackend */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(222);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 223,
	"./af.js": 223,
	"./ar": 224,
	"./ar-dz": 225,
	"./ar-dz.js": 225,
	"./ar-kw": 226,
	"./ar-kw.js": 226,
	"./ar-ly": 227,
	"./ar-ly.js": 227,
	"./ar-ma": 228,
	"./ar-ma.js": 228,
	"./ar-sa": 229,
	"./ar-sa.js": 229,
	"./ar-tn": 230,
	"./ar-tn.js": 230,
	"./ar.js": 224,
	"./az": 231,
	"./az.js": 231,
	"./be": 232,
	"./be.js": 232,
	"./bg": 233,
	"./bg.js": 233,
	"./bm": 234,
	"./bm.js": 234,
	"./bn": 235,
	"./bn-bd": 236,
	"./bn-bd.js": 236,
	"./bn.js": 235,
	"./bo": 237,
	"./bo.js": 237,
	"./br": 238,
	"./br.js": 238,
	"./bs": 239,
	"./bs.js": 239,
	"./ca": 240,
	"./ca.js": 240,
	"./cs": 241,
	"./cs.js": 241,
	"./cv": 242,
	"./cv.js": 242,
	"./cy": 243,
	"./cy.js": 243,
	"./da": 244,
	"./da.js": 244,
	"./de": 245,
	"./de-at": 246,
	"./de-at.js": 246,
	"./de-ch": 247,
	"./de-ch.js": 247,
	"./de.js": 245,
	"./dv": 248,
	"./dv.js": 248,
	"./el": 249,
	"./el.js": 249,
	"./en-au": 250,
	"./en-au.js": 250,
	"./en-ca": 251,
	"./en-ca.js": 251,
	"./en-gb": 252,
	"./en-gb.js": 252,
	"./en-ie": 253,
	"./en-ie.js": 253,
	"./en-il": 254,
	"./en-il.js": 254,
	"./en-in": 255,
	"./en-in.js": 255,
	"./en-nz": 256,
	"./en-nz.js": 256,
	"./en-sg": 257,
	"./en-sg.js": 257,
	"./eo": 258,
	"./eo.js": 258,
	"./es": 259,
	"./es-do": 260,
	"./es-do.js": 260,
	"./es-mx": 261,
	"./es-mx.js": 261,
	"./es-us": 262,
	"./es-us.js": 262,
	"./es.js": 259,
	"./et": 263,
	"./et.js": 263,
	"./eu": 264,
	"./eu.js": 264,
	"./fa": 265,
	"./fa.js": 265,
	"./fi": 266,
	"./fi.js": 266,
	"./fil": 267,
	"./fil.js": 267,
	"./fo": 268,
	"./fo.js": 268,
	"./fr": 269,
	"./fr-ca": 270,
	"./fr-ca.js": 270,
	"./fr-ch": 271,
	"./fr-ch.js": 271,
	"./fr.js": 269,
	"./fy": 272,
	"./fy.js": 272,
	"./ga": 273,
	"./ga.js": 273,
	"./gd": 274,
	"./gd.js": 274,
	"./gl": 275,
	"./gl.js": 275,
	"./gom-deva": 276,
	"./gom-deva.js": 276,
	"./gom-latn": 277,
	"./gom-latn.js": 277,
	"./gu": 278,
	"./gu.js": 278,
	"./he": 279,
	"./he.js": 279,
	"./hi": 280,
	"./hi.js": 280,
	"./hr": 281,
	"./hr.js": 281,
	"./hu": 282,
	"./hu.js": 282,
	"./hy-am": 283,
	"./hy-am.js": 283,
	"./id": 284,
	"./id.js": 284,
	"./is": 285,
	"./is.js": 285,
	"./it": 286,
	"./it-ch": 287,
	"./it-ch.js": 287,
	"./it.js": 286,
	"./ja": 288,
	"./ja.js": 288,
	"./jv": 289,
	"./jv.js": 289,
	"./ka": 290,
	"./ka.js": 290,
	"./kk": 291,
	"./kk.js": 291,
	"./km": 292,
	"./km.js": 292,
	"./kn": 293,
	"./kn.js": 293,
	"./ko": 294,
	"./ko.js": 294,
	"./ku": 295,
	"./ku.js": 295,
	"./ky": 296,
	"./ky.js": 296,
	"./lb": 297,
	"./lb.js": 297,
	"./lo": 298,
	"./lo.js": 298,
	"./lt": 299,
	"./lt.js": 299,
	"./lv": 300,
	"./lv.js": 300,
	"./me": 301,
	"./me.js": 301,
	"./mi": 302,
	"./mi.js": 302,
	"./mk": 303,
	"./mk.js": 303,
	"./ml": 304,
	"./ml.js": 304,
	"./mn": 305,
	"./mn.js": 305,
	"./mr": 306,
	"./mr.js": 306,
	"./ms": 307,
	"./ms-my": 308,
	"./ms-my.js": 308,
	"./ms.js": 307,
	"./mt": 309,
	"./mt.js": 309,
	"./my": 310,
	"./my.js": 310,
	"./nb": 311,
	"./nb.js": 311,
	"./ne": 312,
	"./ne.js": 312,
	"./nl": 313,
	"./nl-be": 314,
	"./nl-be.js": 314,
	"./nl.js": 313,
	"./nn": 315,
	"./nn.js": 315,
	"./oc-lnc": 316,
	"./oc-lnc.js": 316,
	"./pa-in": 317,
	"./pa-in.js": 317,
	"./pl": 318,
	"./pl.js": 318,
	"./pt": 319,
	"./pt-br": 320,
	"./pt-br.js": 320,
	"./pt.js": 319,
	"./ro": 321,
	"./ro.js": 321,
	"./ru": 322,
	"./ru.js": 322,
	"./sd": 323,
	"./sd.js": 323,
	"./se": 324,
	"./se.js": 324,
	"./si": 325,
	"./si.js": 325,
	"./sk": 326,
	"./sk.js": 326,
	"./sl": 327,
	"./sl.js": 327,
	"./sq": 328,
	"./sq.js": 328,
	"./sr": 329,
	"./sr-cyrl": 330,
	"./sr-cyrl.js": 330,
	"./sr.js": 329,
	"./ss": 331,
	"./ss.js": 331,
	"./sv": 332,
	"./sv.js": 332,
	"./sw": 333,
	"./sw.js": 333,
	"./ta": 334,
	"./ta.js": 334,
	"./te": 335,
	"./te.js": 335,
	"./tet": 336,
	"./tet.js": 336,
	"./tg": 337,
	"./tg.js": 337,
	"./th": 338,
	"./th.js": 338,
	"./tk": 339,
	"./tk.js": 339,
	"./tl-ph": 340,
	"./tl-ph.js": 340,
	"./tlh": 341,
	"./tlh.js": 341,
	"./tr": 342,
	"./tr.js": 342,
	"./tzl": 343,
	"./tzl.js": 343,
	"./tzm": 344,
	"./tzm-latn": 345,
	"./tzm-latn.js": 345,
	"./tzm.js": 344,
	"./ug-cn": 346,
	"./ug-cn.js": 346,
	"./uk": 347,
	"./uk.js": 347,
	"./ur": 348,
	"./ur.js": 348,
	"./uz": 349,
	"./uz-latn": 350,
	"./uz-latn.js": 350,
	"./uz.js": 349,
	"./vi": 351,
	"./vi.js": 351,
	"./x-pseudo": 352,
	"./x-pseudo.js": 352,
	"./yo": 353,
	"./yo.js": 353,
	"./zh-cn": 354,
	"./zh-cn.js": 354,
	"./zh-hk": 355,
	"./zh-hk.js": 355,
	"./zh-mo": 356,
	"./zh-mo.js": 356,
	"./zh-tw": 357,
	"./zh-tw.js": 357
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 489;

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttpAuthenticationInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthHttpAuthenticationInterceptor = /** @class */ (function () {
    function AuthHttpAuthenticationInterceptor() {
    }
    AuthHttpAuthenticationInterceptor.prototype.intercept = function (request, next) {
        var token = sessionStorage.getItem('yourTokenKey') || localStorage.getItem('yourTokenKey');
        if (token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["tap"])(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["h" /* HttpResponse */]) {
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpErrorResponse */]) {
            }
        }));
    };
    AuthHttpAuthenticationInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthHttpAuthenticationInterceptor);
    return AuthHttpAuthenticationInterceptor;
}());

//# sourceMappingURL=auth-authentication-http-interceptor.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
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


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    // url: string = 'http://gf1.hpstecnologia.com.br:8443/api';
    function Api(http) {
        this.http = http;
        this.url = ' https://nfleet-api.hpstecnologia.com.br/api';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(221);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(484);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(412);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });




//# sourceMappingURL=index.js.map

/***/ })

},[425]);
//# sourceMappingURL=main.js.map