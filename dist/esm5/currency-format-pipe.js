import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlCurrencyFormatPipe = /** @class */ (function () {
    function IntlCurrencyFormatPipe(service) {
        this.service = service;
    }
    IntlCurrencyFormatPipe.prototype.transform = function (value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions);
        }
    };
    IntlCurrencyFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlCurrencyFormatPipe = tslib_1.__decorate([
        Pipe({
            name: "intlCurrencyFormat"
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
    ], IntlCurrencyFormatPipe);
    return IntlCurrencyFormatPipe;
}());
export { IntlCurrencyFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktZm9ybWF0LXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1pbnRsLyIsInNvdXJjZXMiOlsiY3VycmVuY3ktZm9ybWF0LXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFLdEM7SUFFSSxnQ0FBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBRUQsMENBQVMsR0FBVCxVQUFVLEtBQWdDLEVBQUUsMEJBQThELEVBQUUsaUJBQTRDO1FBQ3BKLElBQUksT0FBTywwQkFBMEIsSUFBSSxRQUFRLEVBQUU7WUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUM1RjthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztTQUN6RTtJQUNMLENBQUM7O2dCQVQ0QixXQUFXOztJQUYvQixzQkFBc0I7UUFIbEMsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLG9CQUFvQjtTQUM3QixDQUFDO2lEQUcrQixXQUFXO09BRi9CLHNCQUFzQixDQVlsQztJQUFELDZCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDdXJyZW5jeUFuZE51bWJlciwgTW9uZXl9IGZyb20gXCJAY28ubW1vbnMvanMtaW50bFwiO1xuXG5pbXBvcnQge0ludGxTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcImludGxDdXJyZW5jeUZvcm1hdFwiXG59KVxuZXhwb3J0IGNsYXNzIEludGxDdXJyZW5jeUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IE1vbmV5IHwgQ3VycmVuY3lBbmROdW1iZXIsIHByZWRlZmluZWRPcHRpb25zT3JPcHRpb25zPzogc3RyaW5nIHwgSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zLCBhZGRpdGlvbmFsT3B0aW9ucz86IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJlZGVmaW5lZE9wdGlvbnNPck9wdGlvbnMgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5jdXJyZW5jeUZvcm1hdCh2YWx1ZSwgcHJlZGVmaW5lZE9wdGlvbnNPck9wdGlvbnMsIGFkZGl0aW9uYWxPcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY3VycmVuY3lGb3JtYXQodmFsdWUsIHByZWRlZmluZWRPcHRpb25zT3JPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==