import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
    'selector': '[initWidget]'
})

export class InitWidget implements OnInit {
    @Input() class: string;

    private _el: ElementRef;

    constructor(el: ElementRef) {
        this._el = el;
    }

    ngOnInit() {}

    ngOnChanges(changes) {
        if (changes.class) {
            let prevVal: string  = changes.class.previousValue,
                newVal: string   = changes.class.currentValue,
                classExp: string = this._el.nativeElement.getAttribute('class');


            if (prevVal) {
                let regExp: RegExp = new RegExp('\b\(' + prevVal + '\)\b');
                console.log(regExp);
            } else {
                this._el.nativeElement.setAttribute('class', classExp + ' ' + this.class)
            }
        }
    }
}