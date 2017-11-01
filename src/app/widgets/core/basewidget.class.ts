import { ElementRef } from "@angular/core";

export abstract class BaseWidget {
    
    /**
     * Reference of the component selector
     * @property {ElementRef} _el
     */
    abstract readonly _el: ElementRef;

    /**
     * Triggers whenever there is a change in boolean property.
     * @function toggleProperty
     * @param {string} propertyName  Name of the property.
     * @param {boolean} propertyVal  Name of the property.
     * @param {string} selector Selector on which the property needs to be toggled.
     */
    toggleBooleanProperty(propertyName: string, propertyVal: boolean, selector: string): void {
        let $el = this._el.nativeElement.querySelector(selector);

        if ($el) {
            $el[propertyName] = propertyVal;
        }
    }

    /**
     * @function initWidget Initialization of widget happens here.
     * @param {object} config Properties config of wiget.
     */
    initWidget(propertiesConfig: object) {

        //Assign defualt values from config to component properties
        Object.getOwnPropertyNames(propertiesConfig)
        .map((key) => {
            let val = propertiesConfig[key].value;
            if (this[key] === undefined && val) {
                this[key] = propertiesConfig[key].value;
            }
        });
    }
}