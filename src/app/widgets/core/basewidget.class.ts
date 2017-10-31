import { Input, Output, ElementRef, OnChanges, OnInit } from "@angular/core";

export class BaseWidget implements OnInit, OnChanges {
    @Input() class;
    private _el: ElementRef;

    constructor (el: ElementRef) {
        this._el = el;
    }

    ngOnInit() {}

    _onChanges(change) {};

    ngOnChanges(changes) {
        /* if (changes.class) {
            let prevVal: string  = changes.class.previousValue,
                newVal: string   = changes.class.currentValue,
                classExp: string = this._el.nativeElement.getAttribute('class');


            if (prevVal) {
                let regExp: RegExp = new RegExp(prevVal);
                newVal = classExp.replace(regExp, newVal);

                console.log(newVal);
            } else {
                this._el.nativeElement.setAttribute('class', (classExp ? (classExp + ' ') : '') + this.class)
            }
        } */
        //this._onChanges(changes.class.currentValue);
    }
}