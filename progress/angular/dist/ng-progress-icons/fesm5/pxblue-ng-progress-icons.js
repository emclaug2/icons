import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressIconsService = /** @class */ (function () {
    function NgProgressIconsService() {
    }
    NgProgressIconsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgProgressIconsService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgProgressIconsService.ngInjectableDef = defineInjectable({ factory: function NgProgressIconsService_Factory() { return new NgProgressIconsService(); }, token: NgProgressIconsService, providedIn: "root" });
    return NgProgressIconsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressIconsComponent = /** @class */ (function () {
    function NgProgressIconsComponent() {
    }
    /**
     * @return {?}
     */
    NgProgressIconsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgProgressIconsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'progress-ng-progress-icons',
                    template: "\n    <p>\n      ng-progress-icons works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgProgressIconsComponent.ctorParameters = function () { return []; };
    return NgProgressIconsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var rangeValue = (/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function (value, min, max) {
    return Math.max(min, Math.min(value, max));
});
/** @type {?} */
var getCoordinates = (/**
 * @param {?} percent
 * @param {?=} radius
 * @return {?}
 */
function (percent, radius) {
    if (radius === void 0) { radius = 12; }
    return {
        x: radius + (radius * Math.cos((percent / 100) * 2 * Math.PI)),
        y: radius + (radius * Math.sin((percent / 100) * 2 * Math.PI))
    };
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BatteryComponent = /** @class */ (function () {
    function BatteryComponent() {
        this.percent = 100;
        this.size = 24;
        this.charging = false;
        this.outlined = false;
        this.basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
        this.chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
        this.outlinedPath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
        this.baseID = 'pxb-battery-clip';
        this.chargeID = 'pxb-battery-clip-charge';
        this.rv = rangeValue;
    }
    /**
     * @return {?}
     */
    BatteryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.maskIDleft = 'maskLeft-' + this.percent;
        this.maskIDright = 'maskRight-' + this.percent;
        this.startX = this.outlined ? 3.9 : 2;
        this.fillWidth = this.outlined ? 14.2 : 18;
    };
    /**
     * @return {?}
     */
    BatteryComponent.prototype.getBasepath = /**
     * @return {?}
     */
    function () {
        return (this.outlined ? this.outlinedPath : this.basePath);
    };
    /**
     * @return {?}
     */
    BatteryComponent.prototype.getClipPath = /**
     * @return {?}
     */
    function () {
        return (this.charging ? this.chargePath : this.basePath);
    };
    /**
     * @return {?}
     */
    BatteryComponent.prototype.getID = /**
     * @return {?}
     */
    function () {
        return (this.charging ? this.chargeID : this.baseID);
    };
    BatteryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'battery-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"> \n    \n    <defs>\n      <mask *ngIf = \"outlined \" [attr.id]=\"maskIDleft\">\n        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n        <polygon fill=\"black\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 \" />\n      </mask>\n      <mask *ngIf = \"outlined \" [attr.id]=\"maskIDright\">\n        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n        <rect [attr.x]=\"startX\" y=\"7\" fill=\"black\"  [attr.width]=\"rv(percent/100*fillWidth, 0, 100)\" height=\"10\" />\n      </mask>\n    </defs>\n    <path [attr.fill]=\"color || 'currentColor'\"  [attr.fill-opacity]=\"(outlined || percent >= 100) ? '1' : '0.3'\" [attr.clip-path]=\"'url(#' + getID() + ')'\" [attr.d]=\"getBasepath()\"/>\n      <clipPath [id]=\"getID()\">\n        <path overflow=\"visible\" [attr.d]=\"getClipPath()\"/>\n      </clipPath>\n      <g *ngIf = \"percent > 0\" [attr.fill]= \"color || 'currentColor'\">\n      \n<rect [attr.fill]=\"color || 'currentColor'\" [attr.x]=\"startX\" y=\"7\" [attr.clip-path]=\"'url(#' + getID() + ')'\" [attr.width]=\"rv(percent/100*fillWidth, 0, 100)\" height=\"10\"  [attr.mask]=\"outlined && charging ? 'url(#' + maskIDleft + ')' : null\"/>\n<polygon  *ngIf = \"outlined && charging\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13\" [attr.mask]=\"'url(#' + maskIDright + ')'\" />\n      </g>\n    </svg>\n  ",
                    styles: [],
                    inputs: ['percent', 'size', 'color', 'charging', 'outlined']
                },] },
    ];
    /** @nocollapse */
    BatteryComponent.ctorParameters = function () { return []; };
    return BatteryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeartComponent = /** @class */ (function () {
    function HeartComponent() {
        this.percent = 100;
        this.size = 24;
        this.outlined = false;
        this.basePath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
        this.outlinedPath = 'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';
        this.rv = rangeValue;
    }
    /**
     * @return {?}
     */
    HeartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.startY = this.outlined ? 19.45 : 21.35;
        this.startX = this.outlined ? 14.55 : 18.35;
    };
    /**
     * @return {?}
     */
    HeartComponent.prototype.getPath = /**
     * @return {?}
     */
    function () {
        return (this.outlined ? this.outlinedPath : this.basePath);
    };
    HeartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'heart-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n      <path [attr.fill]=\"color || 'currentColor'\" [attr.fill-opacity]=\"(outlined || percent >= 100) ? '1' : '0.3'\" [attr.d]=\"getPath()\"/>\n      <clipPath id=\"pxb-heart-clip\">\n        <path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"/>\n      </clipPath>\n      <rect [attr.fill]=\"color || 'currentColor'\" clip-path=\"url(#pxb-heart-clip)\" x=\"2\" [attr.y]=\"startY-(rv(percent,0,100))*startX/100\" width=\"20\" height=\"20\" />\n    </svg>\n  ",
                    styles: [],
                    inputs: ['percent', 'size', 'color', 'outlined']
                },] },
    ];
    /** @nocollapse */
    HeartComponent.ctorParameters = function () { return []; };
    return HeartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PieComponent = /** @class */ (function () {
    function PieComponent() {
        this.percent = 100;
        this.size = 24;
        this.ring = 10;
        this.outlined = false;
        this.iconStroke = 2;
        // Ring properties
        this.centerX = 12;
        this.centerY = 12;
        // Outer ring
        this.outerRadiusLarge = 10;
    }
    /**
     * @return {?}
     */
    PieComponent.prototype.getPath = /**
     * @return {?}
     */
    function () {
        return "M 12,12 H 24 A 12,12,0," + (this.percent >= 50 ? 1 : 0) + ",1," + getCoordinates(this.percent)['x'] + "," + getCoordinates(this.percent)['y'] + "Z";
    };
    /**
     * @return {?}
     */
    PieComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
        this.stroke = this.outlined ? Math.max(this.stroke, 2 * this.iconStroke + 1) : this.stroke;
        this.innerRadiusLarge = 10 - this.iconStroke;
        this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
        this.innerRadiusSmall = 10 - this.stroke;
        if (this.innerRadiusSmall === 0) {
            this.outerRadiusSmall = 0;
        }
        this.outlineBase = "\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  Z\n";
        this.twoToneBase = "\nM " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nZ\n";
        this.clipPath = "\nM12,2\nA10,10,0,1,0,22,12,\n10,10,0,0,0,12,2\nZ\nm0," + (20 - this.stroke) + " \nA " + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,1,1," + (22 - this.stroke) + ",12,\n" + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,0,1,12," + (22 - this.stroke) + "\nZ\n";
    };
    PieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pie-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" \n    [attr.width]=\"size+'px'\" \n    x=\"0px\" y=\"0px\" \n    viewBox=\"0 0 24 24\" \n    style=\"transform: rotate(-.25turn)\">\n\n      <clipPath [attr.id]=\"'pxb-donut-clip-'+stroke\">\n        <path [attr.d]=\"clipPath\"/>\n      </clipPath>\n      <path [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\"\n      [attr.fill]=\"color || 'currentColor'\" \n      [attr.fill-opacity]=\"outlined || percent >= 100 ? '1' : '0.3'\"\n      [attr.d]=\"outlined ? outlineBase : twoToneBase\"\n    />\n    <path *ngIf=\"percent > 0 && percent < 100\" \n    [attr.fill]=\"color || 'currentColor'\" \n    [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" \n    [attr.d]= \"getPath()\"  />\n\n      <circle *ngIf=\"percent === 100 && outlined\" [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" cx=\"12\" cy=\"12\" r=\"10\" [attr.fill]=\"color || 'currentColor'\"></circle>\n      \n    </svg>\n  ",
                    styles: [],
                    inputs: ['percent', 'size', 'color', 'ring', 'outlined']
                },] },
    ];
    /** @nocollapse */
    PieComponent.ctorParameters = function () { return []; };
    return PieComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressIconsModule = /** @class */ (function () {
    function NgProgressIconsModule() {
    }
    NgProgressIconsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [NgProgressIconsComponent, BatteryComponent, HeartComponent, PieComponent],
                    exports: [
                        NgProgressIconsComponent,
                        BatteryComponent, HeartComponent, PieComponent
                    ]
                },] },
    ];
    return NgProgressIconsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgProgressIconsService, NgProgressIconsComponent, NgProgressIconsModule, BatteryComponent, HeartComponent, PieComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHhibHVlLW5nLXByb2dyZXNzLWljb25zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9uZy1wcm9ncmVzcy1pY29ucy5zZXJ2aWNlLnRzIiwibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9uZy1wcm9ncmVzcy1pY29ucy5jb21wb25lbnQudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL3V0aWxpdGllcy50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvYmF0dGVyeS9iYXR0ZXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvaGVhcnQvaGVhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9waWUvcGllLmNvbXBvbmVudC50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvbmctcHJvZ3Jlc3MtaWNvbnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdQcm9ncmVzc0ljb25zU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLW5nLXByb2dyZXNzLWljb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5nLXByb2dyZXNzLWljb25zIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1Byb2dyZXNzSWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiZXhwb3J0IGNvbnN0IHJhbmdlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpe1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sTWF0aC5taW4odmFsdWUsbWF4KSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvb3JkaW5hdGVzID0gZnVuY3Rpb24ocGVyY2VudCwgcmFkaXVzID0gMTIpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLmNvcyggKHBlcmNlbnQvMTAwKSAqIDIqTWF0aC5QSSkgKSxcbiAgICAgICAgeTogcmFkaXVzICsgKHJhZGl1cyAqIE1hdGguc2luKCAocGVyY2VudC8xMDApICogMipNYXRoLlBJKSApXG4gICAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmF0dGVyeS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+IFxuICAgIFxuICAgIDxkZWZzPlxuICAgICAgPG1hc2sgKm5nSWYgPSBcIm91dGxpbmVkIFwiIFthdHRyLmlkXT1cIm1hc2tJRGxlZnRcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxwb2x5Z29uIGZpbGw9XCJibGFja1wiIHBvaW50cz1cIjExLjUsMTMgMTEuNSwxNSA0LDExIDkuNSwxMSA5LjUsOSAxNywxMyBcIiAvPlxuICAgICAgPC9tYXNrPlxuICAgICAgPG1hc2sgKm5nSWYgPSBcIm91dGxpbmVkIFwiIFthdHRyLmlkXT1cIm1hc2tJRHJpZ2h0XCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICA8cmVjdCBbYXR0ci54XT1cInN0YXJ0WFwiIHk9XCI3XCIgZmlsbD1cImJsYWNrXCIgIFthdHRyLndpZHRoXT1cInJ2KHBlcmNlbnQvMTAwKmZpbGxXaWR0aCwgMCwgMTAwKVwiIGhlaWdodD1cIjEwXCIgLz5cbiAgICAgIDwvbWFzaz5cbiAgICA8L2RlZnM+XG4gICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiICBbYXR0ci5maWxsLW9wYWNpdHldPVwiKG91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwKSA/ICcxJyA6ICcwLjMnXCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoIycgKyBnZXRJRCgpICsgJyknXCIgW2F0dHIuZF09XCJnZXRCYXNlcGF0aCgpXCIvPlxuICAgICAgPGNsaXBQYXRoIFtpZF09XCJnZXRJRCgpXCI+XG4gICAgICAgIDxwYXRoIG92ZXJmbG93PVwidmlzaWJsZVwiIFthdHRyLmRdPVwiZ2V0Q2xpcFBhdGgoKVwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8ZyAqbmdJZiA9IFwicGVyY2VudCA+IDBcIiBbYXR0ci5maWxsXT0gXCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiPlxuICAgICAgXG48cmVjdCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgW2F0dHIueF09XCJzdGFydFhcIiB5PVwiN1wiIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCMnICsgZ2V0SUQoKSArICcpJ1wiIFthdHRyLndpZHRoXT1cInJ2KHBlcmNlbnQvMTAwKmZpbGxXaWR0aCwgMCwgMTAwKVwiIGhlaWdodD1cIjEwXCIgIFthdHRyLm1hc2tdPVwib3V0bGluZWQgJiYgY2hhcmdpbmcgPyAndXJsKCMnICsgbWFza0lEbGVmdCArICcpJyA6IG51bGxcIi8+XG48cG9seWdvbiAgKm5nSWYgPSBcIm91dGxpbmVkICYmIGNoYXJnaW5nXCIgcG9pbnRzPVwiMTEuNSwxMyAxMS41LDE1IDQsMTEgOS41LDExIDkuNSw5IDE3LDEzXCIgW2F0dHIubWFza109XCIndXJsKCMnICsgbWFza0lEcmlnaHQgKyAnKSdcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ2NoYXJnaW5nJywgJ291dGxpbmVkJ11cbn0pXG5leHBvcnQgY2xhc3MgQmF0dGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcmNlbnQ6IG51bWJlciA9IDEwMDtcbiAgc2l6ZTogbnVtYmVyID0gMjQ7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNoYXJnaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIG91dGxpbmVkOiBib29sZWFuID0gZmFsc2U7XG4gIG1hc2tJRGxlZnQ7XG4gIG1hc2tJRHJpZ2h0O1xuICBzdGFydFg7XG4gIGZpbGxXaWR0aDtcblxuXG4gIGJhc2VQYXRoID0gJ00yMCwxMFY4LjNDMjAsNy42LDE5LjQsNywxOC43LDdIMy4zQzIuNiw3LDIsNy42LDIsOC4zdjcuM0MyLDE2LjQsMi42LDE3LDMuMywxN2gxNS4zYzAuNywwLDEuMy0wLjYsMS4zLTEuM1YxNGgydi00SDIweic7XG4gIGNoYXJnZVBhdGggPSAnTTIwLDEwVjguMzNhMS4zMTksMS4zMTksMCwwLDAtMS0xLjI2M0ExLjI1NywxLjI1NywwLDAsMCwxOC42Nyw3SDMuMzRBMS4zMzgsMS4zMzgsMCwwLDAsMiw4LjMzdjcuMzNBMS4zMzgsMS4zMzgsMCwwLDAsMy4zMywxN0gxOC42N2ExLjI1NywxLjI1NywwLDAsMCwuMzMtLjA2NywxLjMxOSwxLjMxOSwwLDAsMCwxLTEuMjYzVjE0aDJWMTBabS04LjUsM3YyTDQsMTFIOS41VjlMMTcsMTNaJztcbiAgb3V0bGluZWRQYXRoID0gJ00xOCw5djZINFY5SDE4bS43LTJIMy4zQTEuMzI0LDEuMzI0LDAsMCwwLDIsOC4zdjcuM0ExLjM0NywxLjM0NywwLDAsMCwzLjMsMTdIMTguNmExLjMyNCwxLjMyNCwwLDAsMCwxLjMtMS4zVjE0aDJWMTBIMjBWOC4zQTEuMzI0LDEuMzI0LDAsMCwwLDE4LjcsN1onO1xuICBiYXNlSUQgPSAncHhiLWJhdHRlcnktY2xpcCc7XG4gIGNoYXJnZUlEID0gJ3B4Yi1iYXR0ZXJ5LWNsaXAtY2hhcmdlJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWFza0lEbGVmdCA9ICdtYXNrTGVmdC0nICsgdGhpcy5wZXJjZW50O1xuICAgIHRoaXMubWFza0lEcmlnaHQgPSAnbWFza1JpZ2h0LScgKyB0aGlzLnBlcmNlbnQ7XG5cbiAgICB0aGlzLnN0YXJ0WCA9IHRoaXMub3V0bGluZWQgPyAzLjkgOiAyO1xuICAgIHRoaXMuZmlsbFdpZHRoID0gdGhpcy5vdXRsaW5lZCA/IDE0LjIgOiAxODtcbiAgfVxuXG5cbiAgZ2V0QmFzZXBhdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLm91dGxpbmVkID8gdGhpcy5vdXRsaW5lZFBhdGggOiB0aGlzLmJhc2VQYXRoKTtcbiAgfVxuICBnZXRDbGlwUGF0aCgpIHtcbiAgICByZXR1cm4gKHRoaXMuY2hhcmdpbmcgPyB0aGlzLmNoYXJnZVBhdGggOiB0aGlzLmJhc2VQYXRoKTtcbiAgfVxuICBnZXRJRCgpIHtcbiAgICByZXR1cm4gKHRoaXMuY2hhcmdpbmcgPyB0aGlzLmNoYXJnZUlEIDogdGhpcy5iYXNlSUQpO1xuICB9XG5cbiAgcnYgPSByYW5nZVZhbHVlO1xuXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJhbmdlVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFydC1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICA8cGF0aCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIihvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCkgPyAnMScgOiAnMC4zJ1wiIFthdHRyLmRdPVwiZ2V0UGF0aCgpXCIvPlxuICAgICAgPGNsaXBQYXRoIGlkPVwicHhiLWhlYXJ0LWNsaXBcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1elwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8cmVjdCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgY2xpcC1wYXRoPVwidXJsKCNweGItaGVhcnQtY2xpcClcIiB4PVwiMlwiIFthdHRyLnldPVwic3RhcnRZLShydihwZXJjZW50LDAsMTAwKSkqc3RhcnRYLzEwMFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIC8+XG4gICAgPC9zdmc+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIGlucHV0czogWydwZXJjZW50JywgJ3NpemUnLCAnY29sb3InLCAnb3V0bGluZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcmNlbnQ6bnVtYmVyID0gMTAwO1xuICBzaXplOm51bWJlciA9IDI0O1xuICBjb2xvcjpzdHJpbmc7XG4gIG91dGxpbmVkOmJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhcnRZO1xuICBzdGFydFg7XG5cbiAgYmFzZVBhdGggPSAnTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6JztcbiAgb3V0bGluZWRQYXRoID0gJ00xNi41LDVBMy40NjIsMy40NjIsMCwwLDEsMjAsOC41YzAsMi44ODUtMy4xMjUsNS43MjUtNy44NTYsMTAuMDI0bC0uMDM1LjAzMi0uMS4wOTQtLjEyNC0uMTEzQzcuMTM1LDE0LjIzNCw0LDExLjM5MSw0LDguNUEzLjQ2MiwzLjQ2MiwwLDAsMSw3LjUsNWEzLjk2LDMuOTYsMCwwLDEsMi45NzcsMS4zODdMMTIsOC4xNzVsMS41MjMtMS43ODhBMy45NiwzLjk2LDAsMCwxLDE2LjUsNW0wLTJBNS45ODgsNS45ODgsMCwwLDAsMTIsNS4wOSw1Ljk4OCw1Ljk4OCwwLDAsMCw3LjUsMyw1LjQ0Nyw1LjQ0NywwLDAsMCwyLDguNWMwLDMuNzgsMy40LDYuODYsOC41NSwxMS41M0wxMiwyMS4zNWwxLjQ1LTEuMzFDMTguNiwxNS4zNiwyMiwxMi4yOCwyMiw4LjVBNS40NDcsNS40NDcsMCwwLDAsMTYuNSwzWic7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgIFxuXG4gIG5nT25Jbml0KCkgeyAgXG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm91dGxpbmVkID8gMTkuNDUgOiAyMS4zNTtcbiAgICB0aGlzLnN0YXJ0WCA9IHRoaXMub3V0bGluZWQgPyAxNC41NSA6IDE4LjM1O1xuXG4gIH1cblxuICBnZXRQYXRoKCl7XG4gICAgcmV0dXJuICh0aGlzLm91dGxpbmVkID8gdGhpcy5vdXRsaW5lZFBhdGggOiB0aGlzLmJhc2VQYXRoKTtcbiAgfVxuICBydiA9IHJhbmdlVmFsdWU7XG5cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSwgZ2V0Q29vcmRpbmF0ZXMgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwaWUtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFxuICAgIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIFxuICAgIHg9XCIwcHhcIiB5PVwiMHB4XCIgXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiIFxuICAgIHN0eWxlPVwidHJhbnNmb3JtOiByb3RhdGUoLS4yNXR1cm4pXCI+XG5cbiAgICAgIDxjbGlwUGF0aCBbYXR0ci5pZF09XCIncHhiLWRvbnV0LWNsaXAtJytzdHJva2VcIj5cbiAgICAgICAgPHBhdGggW2F0dHIuZF09XCJjbGlwUGF0aFwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8cGF0aCBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCJcbiAgICAgIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBcbiAgICAgIFthdHRyLmZpbGwtb3BhY2l0eV09XCJvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCA/ICcxJyA6ICcwLjMnXCJcbiAgICAgIFthdHRyLmRdPVwib3V0bGluZWQgPyBvdXRsaW5lQmFzZSA6IHR3b1RvbmVCYXNlXCJcbiAgICAvPlxuICAgIDxwYXRoICpuZ0lmPVwicGVyY2VudCA+IDAgJiYgcGVyY2VudCA8IDEwMFwiIFxuICAgIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBcbiAgICBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCIgXG4gICAgW2F0dHIuZF09IFwiZ2V0UGF0aCgpXCIgIC8+XG5cbiAgICAgIDxjaXJjbGUgKm5nSWY9XCJwZXJjZW50ID09PSAxMDAgJiYgb3V0bGluZWRcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCIgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCI+PC9jaXJjbGU+XG4gICAgICBcbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdyaW5nJywgJ291dGxpbmVkJ11cbn0pXG5leHBvcnQgY2xhc3MgUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDogbnVtYmVyID0gMTAwO1xuICBzaXplOiBudW1iZXIgPSAyNDtcbiAgY29sb3I6IHN0cmluZztcbiAgcmluZzogbnVtYmVyID0gMTA7XG4gIG91dGxpbmVkOiBib29sZWFuID0gZmFsc2U7XG4gIG91dGxpbmVCYXNlO1xuICB0d29Ub25lQmFzZTtcbiAgY2xpcFBhdGg7XG4gIGljb25TdHJva2UgPSAyO1xuICBzdHJva2U7XG4gIFxuXG4gIC8vIFJpbmcgcHJvcGVydGllc1xuICBjZW50ZXJYID0gMTI7XG4gIGNlbnRlclkgPSAxMjtcblxuICAvLyBPdXRlciByaW5nXG4gIG91dGVyUmFkaXVzTGFyZ2UgPSAxMDtcbiAgaW5uZXJSYWRpdXNMYXJnZTtcblxuICAvLyBJbm5lciBSaW5nXG4gIG91dGVyUmFkaXVzU21hbGw7XG4gIGlubmVyUmFkaXVzU21hbGw7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5nZXRQYXRoKCl7XG4gIHJldHVybiBgTSAxMiwxMiBIIDI0IEEgMTIsMTIsMCwke3RoaXMucGVyY2VudCA+PSA1MCA/IDEgOiAwfSwxLCR7Z2V0Q29vcmRpbmF0ZXModGhpcy5wZXJjZW50KVsneCddfSwke2dldENvb3JkaW5hdGVzKHRoaXMucGVyY2VudClbJ3knXX1aYFxufVxubmdPbkluaXQoKSB7XG4gIHRoaXMuc3Ryb2tlID0gIE1hdGgubWF4KDEsIE1hdGgubWluKDEwLCBNYXRoLnJvdW5kKHRoaXMucmluZykpKTtcbiAgdGhpcy5zdHJva2UgPSB0aGlzLm91dGxpbmVkID8gTWF0aC5tYXgodGhpcy5zdHJva2UsIDIgKiB0aGlzLmljb25TdHJva2UgKyAxKSA6IHRoaXMuc3Ryb2tlO1xuICB0aGlzLmlubmVyUmFkaXVzTGFyZ2UgPSAxMCAtIHRoaXMuaWNvblN0cm9rZTtcbiAgdGhpcy5vdXRlclJhZGl1c1NtYWxsID0gMTAgLSB0aGlzLnN0cm9rZSArIHRoaXMuaWNvblN0cm9rZTtcbiAgdGhpcy5pbm5lclJhZGl1c1NtYWxsID0gMTAgLSB0aGlzLnN0cm9rZTtcbiAgaWYodGhpcy5pbm5lclJhZGl1c1NtYWxsID09PSAwKVxuICB7XG4gICAgdGhpcy5vdXRlclJhZGl1c1NtYWxsID0gMDtcbiAgfVxuIFxuIFxuICB0aGlzLm91dGxpbmVCYXNlID0gYFxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuICBBICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5pbm5lclJhZGl1c0xhcmdlfVxuICBBICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gMCAxIDEgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9ICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5vdXRlclJhZGl1c1NtYWxsfVxuICBBICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9ICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5pbm5lclJhZGl1c1NtYWxsfVxuICBBICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gMCAxIDEgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgWlxuYDtcbnRoaXMudHdvVG9uZUJhc2UgPSAgYFxuTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG5BICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cblpcbmA7XG50aGlzLmNsaXBQYXRoID0gYFxuTTEyLDJcbkExMCwxMCwwLDEsMCwyMiwxMixcbjEwLDEwLDAsMCwwLDEyLDJcblpcbm0wLCR7MjAtdGhpcy5zdHJva2V9IFxuQSAkezEwLXRoaXMuc3Ryb2tlfSwkezEwLXRoaXMuc3Ryb2tlfSwwLDEsMSwkezIyLXRoaXMuc3Ryb2tlfSwxMixcbiR7MTAtdGhpcy5zdHJva2V9LCR7MTAtdGhpcy5zdHJva2V9LDAsMCwxLDEyLCR7MjItdGhpcy5zdHJva2V9XG5aXG5gXG4gIH1cblxuXG59XG5cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7ICBcbmltcG9ydCB7IE5nUHJvZ3Jlc3NJY29uc0NvbXBvbmVudCB9IGZyb20gJy4vbmctcHJvZ3Jlc3MtaWNvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IEJhdHRlcnlDb21wb25lbnQgfSBmcm9tICcuL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhcnRDb21wb25lbnQgfSBmcm9tICcuL2hlYXJ0L2hlYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWVDb21wb25lbnQgfSBmcm9tICcuL3BpZS9waWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ1Byb2dyZXNzSWNvbnNDb21wb25lbnQsIEJhdHRlcnlDb21wb25lbnQsIEhlYXJ0Q29tcG9uZW50LCBQaWVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgTmdQcm9ncmVzc0ljb25zQ29tcG9uZW50LCBcbiAgICBCYXR0ZXJ5Q29tcG9uZW50LCBIZWFydENvbXBvbmVudCwgUGllQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdQcm9ncmVzc0ljb25zTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7aUNBSkQ7Q0FRQzs7Ozs7O0FDUkQ7SUFhRTtLQUFpQjs7OztJQUVqQiwyQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSx5REFJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7OztJQVFELCtCQUFDO0NBQUE7Ozs7Ozs7QUNsQkQsSUFBYSxVQUFVOzs7Ozs7QUFBRyxVQUFTLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRztJQUM5QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7Q0FDM0MsQ0FBQTs7QUFFRCxJQUFhLGNBQWM7Ozs7O0FBQUcsVUFBUyxPQUFPLEVBQUUsTUFBVztJQUFYLHVCQUFBLEVBQUEsV0FBVztJQUN2RCxPQUFPO1FBQ0gsQ0FBQyxFQUFFLE1BQU0sSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFD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