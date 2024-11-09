webpackJsonp([6],{

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagemPageModule", function() { return MensagemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mensagem__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_shred_pipe__ = __webpack_require__(638);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MensagemPageModule = /** @class */ (function () {
    function MensagemPageModule() {
    }
    MensagemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mensagem__["a" /* MensagemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__mensagem__["a" /* MensagemPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_shred_pipe__["a" /* SharedPipeModule */]
            ],
        })
    ], MensagemPageModule);
    return MensagemPageModule;
}());

//# sourceMappingURL=mensagem.module.js.map

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

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensagemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the MensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MensagemPage = /** @class */ (function () {
    function MensagemPage(navCtrl, navParams, translateService, veiculoService, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translateService = translateService;
        this.veiculoService = veiculoService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.editorMsg = "";
        this.translateService.get(["SEND_MESSAGE", "WAIT"]).subscribe(function (values) {
            _this.sendMessageString = values["SEND_MESSAGE"];
            _this.waitString = values["WAIT"];
        });
        this.mensagens = this.navParams.get("mensagens");
        this.veiculo = this.navParams.get("veiculo");
        this.scrollToBottom();
    }
    MensagemPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MensagemPage");
    };
    MensagemPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    MensagemPage.prototype.sendMsg = function () {
        var _this = this;
        if (!this.editorMsg.trim())
            return;
        var msg = {
            veiculoId: this.veiculo.veiculoId,
            transmissao: 'ANY',
            msgTxt: this.editorMsg.trim()
        };
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService
            .enviarMensagem(msg)
            .subscribe(function (data) {
            _this.atualizar();
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Falha: Tente novamente!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            loading.dismiss();
        }, function () {
            _this.editorMsg = '';
            loading.dismiss();
        });
    };
    MensagemPage.prototype.atualizar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService
            .getMensagem(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.mensagens = res.mensagens;
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Falha: Tente novamente!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    MensagemPage.prototype.onFocus = function () {
        this.content.resize();
        this.scrollToBottom();
    };
    MensagemPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.veiculoService
            .getMensagem(this.veiculo.veiculoId)
            .subscribe(function (res) {
            _this.mensagens = res.mensagens;
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"])
    ], MensagemPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])("chat_input"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], MensagemPage.prototype, "messageInput", void 0);
    MensagemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-mensagem",template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\mensagem\mensagem.html"*/'<!--\n  Generated template for the MensagemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title center text-cente>{{\'MESSAGES\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n    <div class="message-wrap">\n\n        <div *ngFor="let msg of mensagens"\n             class="message"\n             [class.left]=" \'Central\' === msg.ponto "\n             [class.right]=" \'Central\' !== msg.ponto ">\n          <img class="user-img" [src]=" \'Central\' === msg.ponto ? \'assets/icon/chat1.png\' : \'assets/icon/chat2.png\'" alt="" src="">\n          <!--<ion-spinner name="dots" *ngIf="msg.status === \'0\'"></ion-spinner>-->\n          <div class="msg-detail">\n            <div class="msg-info">\n              <p>\n                {{ \'Central\' === msg.ponto ? msg.usuarioNome : msg.usuarioNome}}&nbsp;&nbsp;&nbsp;{{msg.dtEnviado | formatdate}}</p>\n            </div>\n            <div class="msg-content">\n              <span class="triangle"></span>\n              <p class="line-breaker ">{{msg.conteudo}}</p>\n            </div>\n          </div>\n        </div>\n    \n      </div>\n\n</ion-content>\n\n<ion-footer no-border [style.height]="\'55px\'">\n    <div class="input-wrap">\n      <textarea #chat_input\n                [placeholder]="sendMessageString"\n                [(ngModel)]="editorMsg"\n                (keyup.enter)="sendMsg()"\n                (focusin)="onFocus()">\n      </textarea>\n      <button ion-button clear icon-only item-right (click)="sendMsg()">\n        <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n      </button>\n    </div>\n  </ion-footer>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\mensagem\mensagem.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"]])
    ], MensagemPage);
    return MensagemPage;
}());

//# sourceMappingURL=mensagem.js.map

/***/ })

});
//# sourceMappingURL=6.js.map