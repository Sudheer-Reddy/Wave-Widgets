import { ElementRef } from '@angular/core';

export abstract class BooleanProperty {
    /**
     * Selector on compononent on which the boolean properties needs to be toggled
     * @property {string} _selector
     */
    abstract readonly _selector: string;
    /**
     * Reference of the component selector
     * @property {ElementRef} _el
     */
    abstract readonly _el: ElementRef;

    /**
     * @function toggleProperty Triggers whenever there is a change in boolean property
     * @param {string} propertyName  Name of the property.
     * @param {boolean} propertyVal Value of supplied boolean property.
     */
    toggleProperty(propertyName: string, propertyVal: boolean): void {
        let $el = this._el.nativeElement.querySelector(this._selector);
        $el[propertyName] = propertyVal;
    }
}