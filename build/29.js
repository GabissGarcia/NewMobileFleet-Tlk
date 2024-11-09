webpackJsonp([29],{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComandoPageModule", function() { return ComandoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comando__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComandoPageModule = /** @class */ (function () {
    function ComandoPageModule() {
    }
    ComandoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comando__["a" /* ComandoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__comando__["a" /* ComandoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ComandoPageModule);
    return ComandoPageModule;
}());

//# sourceMappingURL=comando.module.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the ComandoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComandoPage = /** @class */ (function () {
    function ComandoPage(navCtrl, navParams, user, loadingCtrl, veiculoService, toastCtrl, translateService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.loadingCtrl = loadingCtrl;
        this.veiculoService = veiculoService;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.alertCtrl = alertCtrl;
        this.btnCmd = '';
        this.translateService.get(["WAIT", "FAILE_CMD", "SUCCESS_CMD", "CONFIRMATION_CMD", "YES_SURE", "CANCEL_BUTTON"]).subscribe(function (values) {
            _this.waitString = values["WAIT"];
            _this.faileCmdString = values["FAILE_CMD"];
            _this.successCmdString = values["SUCCESS_CMD"];
            _this.confirmationCmdString = values["CONFIRMATION_CMD"];
            _this.yesSureString = values["YES_SURE"];
            _this.cencelBtnString = values["CANCEL_BUTTON"];
        });
        this.veieculo = this.navParams.get('veiculo');
        this.cmdConfig = this.navParams.get('cmdConfig');
        this.perfilComando = this.user._user.perfil.comandos.split('|');
    }
    ComandoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComandoPage');
    };
    ComandoPage.prototype.enviarComando = function (tipo) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.confirmationCmdString,
            buttons: [
                {
                    text: this.cencelBtnString,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: this.yesSureString,
                    handler: function () {
                        _this.enviar(tipo);
                    }
                }
            ]
        });
        alert.present();
    };
    ComandoPage.prototype.enviar = function (tipo, transmissao) {
        var _this = this;
        var comando = {
            usuarioId: this.user._user.usrId,
            veiculoId: this.veieculo.veiculoId,
            comando: tipo,
            transmissao: 'ANY'
        };
        var loading = this.loadingCtrl.create({
            content: this.waitString
        });
        loading.present();
        this.veiculoService.enviarComando(comando).subscribe(function (res) {
            if (res.tipo == 'sucesso') {
                var toast = _this.toastCtrl.create({
                    message: _this.successCmdString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.faileCmdString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: _this.veiculoService.failureString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            loading.dismiss();
        }, function () {
            loading.dismiss();
        });
    };
    ComandoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-comando',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\comando\comando.html"*/'<!--\n  Generated template for the ComandoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title center text-center>{{\'COMMANDS\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n        {{\'list_of_commands\' | translate}}\n    </ion-list-header>\n    <ion-item-divider *ngIf="(cmdConfig.indexOf(\'r\') > -1 || cmdConfig.indexOf(\'s\') > -1) && (perfilComando.indexOf(\'requisitar\') > -1)">\n      <button ion-item no-lines (click)="btnCmd = \'isPosicao\'">\n        {{\'POSITION\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isPosicao\' ">\n        <button ion-button *ngIf="cmdConfig.indexOf(\'r\') > -1 && perfilComando.indexOf(\'requisitar\') > -1" (click)="enviarComando(\'POSICAO\')">GSM</button>\n        <button ion-button *ngIf="cmdConfig.indexOf(\'s\') > -1 && perfilComando.indexOf(\'requisitarsat\') > -1" (click)="enviarComando(\'POSICAO\', \'SAT\')">SAT</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'p\') > -1 && perfilComando.indexOf(\'panico\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isPanico\'">\n        {{\'Pânico\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isPanico\' ">\n        <button ion-button (click)="enviarComando(\'PANICODESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'b\') > -1 && perfilComando.indexOf(\'bloqueio\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isBloqueio\'">\n        {{\'Bloqueio\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isBloqueio\' ">\n        <button ion-button (click)="enviarComando(\'BLOQUEIOATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'BLOQUEIODESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'q\') > -1 && perfilComando.indexOf(\'bloqueioinst\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isBloqueioInst\'">\n        {{\'INSTANT_BLOCK\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isBloqueioInst\' ">\n        <button ion-button (click)="enviarComando(\'BLOQUEIOINSTANTATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'BLOQUEIODESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'z\') > -1 && perfilComando.indexOf(\'buzzer\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isBuzzer\'">\n        Buzzer\n      </button>\n      <ion-col *ngIf="btnCmd === \'isBuzzer\' ">\n        <button ion-button (click)="enviarComando(\'BUZZERATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'BUZZERDESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'i\') > -1 && perfilComando.indexOf(\'pisca\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isPisca\'">\n        {{\'PISCA\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isPisca\' ">\n        <button ion-button (click)="enviarComando(\'PISCAATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'PISCADESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'j\') > -1 && perfilComando.indexOf(\'sirene\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isSirene\'">\n        {{\'SIREN\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isSirene\' ">\n        <button ion-button (click)="enviarComando(\'SIRENEATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'SIRENEDESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'l\') > -1 && perfilComando.indexOf(\'imobilizador\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isImobilizador\'">\n        {{\'IMMOBILIZER\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isImobilizador\' ">\n        <button ion-button (click)="enviarComando(\'IMOBILIZADORATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'IMOBILIZADORDESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'m\') > -1 && perfilComando.indexOf(\'trava5roda\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isTrava5Roda\'">\n        {{\'LATCH_5_WHEEL\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isTrava5Roda\' ">\n        <button ion-button (click)="enviarComando(\'TRAVA5RODAATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'TRAVA5RODADESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'n\') > -1 && perfilComando.indexOf(\'buzzerexcesso\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isBuzzerExc\'">\n        Buzzer {{\'EXCESS\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isBuzzerExc\' ">\n        <button ion-button (click)="enviarComando(\'SIRENEATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'SIRENEDESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'d\') > -1 && perfilComando.indexOf(\'desengate\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isDesengate\'">\n          {{\'TRIP\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isDesengate\' ">\n        <button ion-button (click)="enviarComando(\'DESENGATEATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'DESENGATEDESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'a\') > -1 && perfilComando.indexOf(\'autorizacao\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isAutorizacao\'">\n        {{\'AUTHORIZATION\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isAutorizacao\' ">\n        <button ion-button (click)="enviarComando(\'AUTORIZACAOATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'AUTORIZACAODESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n\n\n\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'t\') > -1 && perfilComando.indexOf(\'travabau\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isTravaBau\'">\n        {{\'TRAVA_BAU\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isTravaBau\' ">\n        <button ion-button (click)="enviarComando(\'TRAVABAU30SATIVAR\')">{{\'ENABLE\' | translate}} 30s</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'ç\') > -1 && perfilComando.indexOf(\'travabau\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isTravaBau\'">\n        {{\'TRAVA_BAU\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isTravaBau\' ">\n        <button ion-button (click)="enviarComando(\'TRAVABAUATIVAR\')">{{\'ENABLE\' | translate}}</button>\n        <button ion-button (click)="enviarComando(\'TRAVABAUDESATIVAR\')">{{\'DISABLE\' | translate}}</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'o\') > -1 && perfilComando.indexOf(\'tiraralerta\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isDesaAlerta\'">\n        {{\'DISABLE_KEYBOARD_ALERT\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isDesaAlerta\' ">\n        <button ion-button (click)="enviarComando(\'TIRARALERTA1\')">Limpando Segurança</button>\n        <button ion-button (click)="enviarComando(\'TIRARALERTA1CS\')">Mantendo Segurança</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'x\') > -1 && perfilComando.indexOf(\'tirar2alerta\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isDesaAlerta2\'">\n        {{\'DISABLE_KEYBOARD_ALERT2\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isDesaAlerta2\' ">\n        <button ion-button (click)="enviarComando(\'TIRARALERTA2\')">Limpando Segurança</button>\n        <button ion-button (click)="enviarComando(\'TIRARALERTA2CS\')">Mantendo Segurança</button>\n      </ion-col>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf="cmdConfig.indexOf(\'u\') > -1 && perfilComando.indexOf(\'tirar3alerta\') > -1">\n      <button ion-item no-lines (click)="btnCmd = \'isDesaAlerta3\'">\n        {{\'DISABLE_KEYBOARD_ALERT3\' | translate}}\n      </button>\n      <ion-col *ngIf="btnCmd === \'isDesaAlerta3\' ">\n        <button ion-button (click)="enviarComando(\'TIRARALERTA3\')">Limpando Segurança</button>\n        <button ion-button (click)="enviarComando(\'TIRARALERTA3CS\')">Mantendo Segurança</button>\n      </ion-col>\n    </ion-item-divider>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\comando\comando.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"]])
    ], ComandoPage);
    return ComandoPage;
}());

//# sourceMappingURL=comando.js.map

/***/ })

});
//# sourceMappingURL=29.js.map