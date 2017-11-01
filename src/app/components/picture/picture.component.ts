import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';

@Component({
    'selector': 'wm-picture',
    'templateUrl': './picture.component.html',
    'styleUrls': ['./picture.component.less']
})

export class Picture implements OnChanges, OnInit {
    @Input() hint: string;
    @Input() class: string;
    @Input() hidden: boolean = true;
    @Input() tabindex: number = 0;
    @Input() showindevice: string;
    @Input() height: string;
    @Input() width: string;
    @Input() picturesource: string;
    @Input() pictureplaceholder: string;
    @Input() encodeurl: boolean = false;
    @Input() pictureaspect: string = 'none';
    @Input() disabled: boolean = false;
    @Input() margin: string;
    @Input() borderwidth: string;
    @Input() borderstyle: string;
    @Input() bordercolor: string;
    @Input() padding: string;
    @Input() backgroundcolor: string;
    @Input() backgroundgradient: string;
    @Input() backgroundimage: string;
    @Input() backgroundrepeat: string;
    @Input() backgroundsize: string;
    @Input() backgroundposition: string;

    @Output() onClick = new EventEmitter();

     private _onClick = function (event) {
        this.onClick.emit({$event: event, isolateScope: this});
    }


    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(changes): void {}
}