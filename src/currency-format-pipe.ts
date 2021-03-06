import {Pipe, PipeTransform} from "@angular/core";
import {CurrencyAndNumber, Money} from "@co.mmons/js-intl";

import {IntlService} from "./service";

@Pipe({
    name: "intlCurrencyFormat"
})
export class IntlCurrencyFormatPipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(value: Money | CurrencyAndNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions, additionalOptions);
        } else {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions);
        }
    }
}
