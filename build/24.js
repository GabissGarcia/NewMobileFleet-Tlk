webpackJsonp([24],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPreviewPageModule", function() { return InspectionPreviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inspection_preview__ = __webpack_require__(658);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InspectionPreviewPageModule = /** @class */ (function () {
    function InspectionPreviewPageModule() {
    }
    InspectionPreviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inspection_preview__["a" /* InspectionPreviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__inspection_preview__["a" /* InspectionPreviewPage */]),
            ],
        })
    ], InspectionPreviewPageModule);
    return InspectionPreviewPageModule;
}());

//# sourceMappingURL=inspection-preview.module.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionPreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_veiculo_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(411);
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
 * Generated class for the InspectionPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InspectionPreviewPage = /** @class */ (function () {
    function InspectionPreviewPage(navCtrl, modalCtrl, navParams, veiculoService, loadingCtrl, toastCtrl, alertCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.veiculoService = veiculoService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.formsChecklist = [
            {
                titulo: 'Front Porch',
                conteudo: [
                    'Trash Can',
                    'Light Bulbs',
                    'Floor',
                    'Walls',
                    'Door Bell',
                    'Door',
                    'Door Lock',
                    'Cleaning'
                ]
            },
            {
                titulo: 'Entrance-Hall',
                conteudo: [
                    'Glade',
                    'Light Bulbs',
                    'Furnitures',
                    'Floor',
                    'Wall',
                    'Ceiling',
                    'Baseboards'
                ]
            },
            {
                titulo: 'Living and Dining Room',
                conteudo: [
                    'Wifi',
                    'Furnitures',
                    'Floor',
                    'Baseboards',
                    'Walls',
                    'Light Bulbs',
                    'Windows',
                    'TV on',
                    'Curtain-Blind',
                    'Doors',
                    'Ceiling'
                ]
            },
            {
                titulo: 'Kitchen',
                conteudo: [
                    'Light Bulbs',
                    'Wall',
                    'Floor',
                    'Baseboards',
                    'Home Appliances',
                    'Glasstone Kit',
                    'Housekeeping Kit',
                    'Cookware&Tableware',
                    'Microwave',
                    'Refrigerator',
                    'Stove',
                    'Dishwasher',
                    'Ceiling',
                    'Windows',
                    'Counters',
                    'Furnitures',
                    'Cabinets',
                    'Trash Can',
                    'Sink',
                    'Faucet',
                    'Garbage Disposal'
                ]
            },
            {
                titulo: 'Bathroon',
                conteudo: [
                    'Light Bulbs',
                    'Exhaust Fan',
                    'Faucet',
                    'Sink',
                    'Cabinets',
                    'Hair Dryer',
                    'Toilet Plunger',
                    'Toilet Brush',
                    'Trash Can',
                    'Floor',
                    'Wall',
                    'Ceiling',
                    'Basebords',
                    'Towel Rack',
                    'Toilet Paper Holder',
                    'Toilet',
                    'Curtain-Blind',
                    'Shower Curtain',
                    'Shower Door',
                    'Bathtub',
                    'Shower',
                    'Mirror',
                    'Housekeeping kit'
                ]
            },
            {
                titulo: 'Bedroom',
                conteudo: [
                    'Furnitures',
                    'Floor',
                    'Wall',
                    'Ceiling',
                    'Basebords',
                    'Bedclothes',
                    'Closet',
                    'Doors',
                    'Curtain-Blind',
                    'Window',
                    'Light Bulbs'
                ]
            },
            {
                titulo: 'Laundry',
                conteudo: [
                    'Light Bulbs',
                    'Wall',
                    'Laundry Dryer',
                    'Clothes Iron',
                    'Ironing Board',
                    'Housekeeping kit',
                    'Vacuum Cleaner',
                    'Broom',
                    'Mop',
                    'Bucket',
                    'Dustpan'
                ]
            },
            {
                titulo: 'A/C',
                conteudo: [
                    'Thermostat',
                    'Filter Grille',
                    'Filter'
                ]
            },
            {
                titulo: 'Stairs',
                conteudo: [
                    'Light Bulbs',
                    'Wall'
                ]
            },
            {
                titulo: 'Backyard',
                conteudo: [
                    'Doors',
                    'Furnitures',
                    'Pool',
                    'Light Bulbs',
                    'Floor',
                    'Pool Fence',
                    'Screens'
                ]
            },
            {
                titulo: 'Safety',
                conteudo: [
                    'Signs',
                    'Smoke Detector',
                    'Fire Extinguisher',
                    'Carbon M.Alarm',
                    'Lock Box',
                    'License'
                ]
            },
            {
                titulo: 'Garage',
                conteudo: [
                    'Light Bulbs',
                    'Wall',
                    'Doors',
                    'Floor',
                    'Ceiling'
                ]
            }
        ];
        this.inspecoes = new Map();
        this.inspeReceiver = this.navParams.get("inspecao");
        this.inspeReceiver.inspecaosTipo.forEach(function (tipo) {
            _this.inspecoes.set(tipo.nome, tipo);
        });
    }
    InspectionPreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InspectionPreviewPage');
    };
    InspectionPreviewPage.prototype.openTextAreaModal = function (nome) {
        var _this = this;
        var insp = this.inspecoes.get(nome);
        var obs = "";
        if (insp == undefined) {
            insp = {
                nome: nome,
                status: 0,
                img: [],
                obs: "",
                nivelImp: 0
            };
        }
        else {
            obs = insp.obs;
        }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__index__["f" /* InpectionTextAreaModalPage */], {
            obs: obs
        });
        profileModal.onDidDismiss(function (data) {
            if (data != null) {
                insp.obs = data.obs;
                _this.inspecoes.set(nome, insp);
            }
        });
        profileModal.present();
    };
    InspectionPreviewPage.prototype.getFoto = function (nome) {
        var insp = this.inspecoes.get(nome);
        if (insp == undefined) {
            insp = {
                nome: nome,
                img: [],
                nivelImp: 0
            };
        }
        var fotoModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__index__["g" /* InspectionCameraModalPage */], {
            insp: insp
        });
        fotoModal.onDidDismiss(function (data) {
        });
        fotoModal.present();
    };
    InspectionPreviewPage.prototype.salvar = function () {
        var _this = this;
        var tipo = [];
        this.inspecoes.forEach(function (i) {
            if (i.status != 0) {
                tipo.push(i);
            }
        });
        var inspe = this.inspeReceiver;
        inspe.inspecaosTipo = tipo;
        if (inspe.inspecaosTipo.length > 0) {
            var loading_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loading_1.present();
            this.veiculoService.editarInspecao(inspe).subscribe(function (res) {
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Saved successfully',
                    buttons: ['OK']
                });
                alert.present();
                //this.app.getRootNav().setRoot(SelectPlacaPage);
            }, function (erro) {
                loading_1.dismiss();
            }, function () {
                loading_1.dismiss();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Warning',
                subTitle: 'Required inspection',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    InspectionPreviewPage.prototype.setStatus = function (nome, status) {
        var insp = this.inspecoes.get(nome);
        if (insp == undefined) {
            insp = {
                nome: nome,
                status: status,
                obs: "",
                img: [],
                nivelImp: 0
            };
        }
        else {
            if (insp.status == status) {
                insp.status = 0;
            }
            else {
                insp.status = status;
            }
        }
        var a = "";
        this.inspecoes.set(nome, insp);
    };
    InspectionPreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-inspection-preview',template:/*ion-inline-start:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\inspection-preview\inspection-preview.html"*/'<!--\n  Generated template for the InspectionPreviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="salvar()">\n        <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ng-template ngFor let-item [ngForOf]="formsChecklist">\n    <button ion-item class="header-insp" (click)="item.visible = !item.visible">\n      <ion-icon [name]="item.visible ? \'ios-arrow-up-outline\' : \'ios-arrow-down-outline\'"></ion-icon>\n      {{item.titulo}}\n    </button>\n    <ion-list [hidden]="item.visible">\n      <ng-template ngFor let-contString [ngForOf]="item.conteudo">\n        <ion-item class="content-insp" *ngIf="this.inspecoes.get(item.titulo + \' - \' + contString)?.status > 0">\n          <p class="item-header">{{contString}}</p>\n          <ion-row>\n            <ion-col col-6 align-self-center>\n              <div class="status">\n                <a class="icon-circle" \n                (click)="setStatus(item.titulo + \' - \' + contString, 1)"\n                [ngClass]="{\'icon-circle-green\': this.inspecoes.get(item.titulo + \' - \' + contString)?.status==1}">\n                  <ion-icon name="ios-checkmark-outline"></ion-icon>\n                </a>\n                <p>All Ok</p>\n              </div>\n\n              <div class="status" (click)="setStatus(item.titulo + \' - \' + contString, 2)">\n                <a class="icon-circle" [ngClass]="{\'icon-circle-red\': this.inspecoes.get(item.titulo + \' - \' + contString)?.status==2}">\n                  <ion-icon name="ios-close-outline"></ion-icon>\n                </a>\n                <p>Not Ok</p>\n              </div>\n            </ion-col>\n            <ion-col col-6 align-self-center class="btn-status">\n              <button ion-button round color="light" (click)="getFoto(item.titulo + \' - \' + contString)" [disabled]="this.inspecoes.get(item.titulo + \' - \' + contString)?.status === null  \n                                || this.inspecoes.get(item.titulo + \' - \' + contString)?.status==0">\n                <ion-icon name="camera">\n                  <ion-badge class="notifications-badge" *ngIf="this.inspecoes.get(item.titulo + \' - \' + contString)?.status!=0\n                                  && this.inspecoes.get(item.titulo + \' - \' + contString)?.img !== null\n                                  && this.inspecoes.get(item.titulo + \' - \' + contString)?.img.length>0"\n                    color="danger">{{this.inspecoes.get(item.titulo + \' - \' + contString)?.img.length}}</ion-badge>\n                </ion-icon>\n\n              </button>\n              <button ion-button round color="light" [ngClass]="{\'btn-ok\': inspecoes.get(item.titulo + \' - \' + contString)?.obs.trim().length > 0 }"\n                (click)="openTextAreaModal(item.titulo + \' - \' + contString)">\n                <ion-icon name="md-create"></ion-icon>\n              </button>\n            </ion-col>\n\n            <ion-col col-7 *ngIf="this.inspecoes.get(item.titulo + \' - \' + contString)?.status>0">\n              <ion-list class="list-range">\n                <ion-item>\n                  <ion-range [(ngModel)]="this.inspecoes.get(item.titulo + \' - \' + contString).nivelImp" step="1" snaps="true"\n                    min="0" max="5" readonly>\n                    <ion-icon range-left small name="star"></ion-icon>\n                    <ion-icon range-right name="star"></ion-icon>\n                  </ion-range>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ng-template>\n    </ion-list>\n\n  </ng-template>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Downloads\mfleet\mobileFleet-main\mobileFleet-main\src\pages\inspection-preview\inspection-preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_veiculo_service__["a" /* VeiculoService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */]])
    ], InspectionPreviewPage);
    return InspectionPreviewPage;
}());

//# sourceMappingURL=inspection-preview.js.map

/***/ })

});
//# sourceMappingURL=24.js.map