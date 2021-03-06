import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
let IntlValidationErrorMessagePipe = class IntlValidationErrorMessagePipe {
    constructor(service) {
        this.service = service;
    }
    transform(control) {
        if (this.lastErrors === control.errors) {
            return this.lastMessage;
        }
        this.lastMessage = this.service.validationErrorMessage(control);
        this.lastErrors = control.errors;
        return this.lastMessage;
    }
    ngOnDestroy() {
        this.lastErrors = undefined;
        this.lastMessage = undefined;
    }
};
IntlValidationErrorMessagePipe.ctorParameters = () => [
    { type: IntlService }
];
IntlValidationErrorMessagePipe = __decorate([
    Pipe({
        name: "intlValidationErrorMessage",
        pure: false
    })
], IntlValidationErrorMessagePipe);
export { IntlValidationErrorMessagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1pbnRsLyIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFNdEMsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7SUFFdkMsWUFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBTUQsU0FBUyxDQUFDLE9BQXdCO1FBRTlCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztDQUNKLENBQUE7O1lBdkJnQyxXQUFXOztBQUYvQiw4QkFBOEI7SUFKMUMsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxJQUFJLEVBQUUsS0FBSztLQUNkLENBQUM7R0FDVyw4QkFBOEIsQ0F5QjFDO1NBekJZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bFZhbGlkYXRpb25FcnJvck1lc3NhZ2VcIixcbiAgICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBJbnRsVmFsaWRhdGlvbkVycm9yTWVzc2FnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxhc3RNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIGxhc3RFcnJvcnM6IFZhbGlkYXRpb25FcnJvcnM7XG5cbiAgICB0cmFuc2Zvcm0oY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAodGhpcy5sYXN0RXJyb3JzID09PSBjb250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdE1lc3NhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RNZXNzYWdlID0gdGhpcy5zZXJ2aWNlLnZhbGlkYXRpb25FcnJvck1lc3NhZ2UoY29udHJvbCk7XG4gICAgICAgIHRoaXMubGFzdEVycm9ycyA9IGNvbnRyb2wuZXJyb3JzO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RNZXNzYWdlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmxhc3RFcnJvcnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGFzdE1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxufSJdfQ==