import { Pipe } from "@angular/core";
import { IntlService } from "./service";
export var IntlRelativeFormatStaticPipe = (function () {
    function IntlRelativeFormatStaticPipe(service) {
        this.service = service;
    }
    IntlRelativeFormatStaticPipe.prototype.transform = function (dateTime, options) {
        return this.service.relativeFormat(dateTime, options);
    };
    IntlRelativeFormatStaticPipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlRelativeFormatStatic"
                },] },
    ];
    /** @nocollapse */
    IntlRelativeFormatStaticPipe.ctorParameters = function () { return [
        { type: IntlService, },
    ]; };
    return IntlRelativeFormatStaticPipe;
}());
export var IntlRelativeFormatPipe = (function () {
    function IntlRelativeFormatPipe(service) {
        this.service = service;
        this.callCount = 0;
    }
    IntlRelativeFormatPipe.prototype.transform = function (dateTime, cacheTimeOrOptions, options) {
        var now;
        var cacheTime;
        if (typeof cacheTimeOrOptions == "number") {
            cacheTime = cacheTimeOrOptions;
        }
        else if (cacheTimeOrOptions && typeof cacheTimeOrOptions === "object") {
            options = cacheTimeOrOptions;
        }
        if (typeof cacheTime === "undefined") {
            cacheTime = (this.callCount || 1) * 10;
        }
        if (cacheTime > 0) {
            now = Date.now();
            if (this.callTime && this.callTime + (cacheTime * 1000) >= now) {
                return this.callResult;
            }
        }
        var result = this.service.relativeFormat(dateTime, options);
        if (cacheTime > 0) {
            this.callCount++;
            this.callTime = now;
            this.callResult = result;
        }
        return result;
    };
    IntlRelativeFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlRelativeFormat",
                    pure: false
                },] },
    ];
    /** @nocollapse */
    IntlRelativeFormatPipe.ctorParameters = function () { return [
        { type: IntlService, },
    ]; };
    return IntlRelativeFormatPipe;
}());
//# sourceMappingURL=relative-format-pipe.js.map