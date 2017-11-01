import { Component, Input, Output, OnInit, OnChanges, ElementRef, SimpleChanges } from '@angular/core';

@Component({
    'selector': 'wm-label',
    'templateUrl': './label.component.html',
    'styleUrls': ['./label.component.less']
})

export class Label implements OnChanges, OnInit {
    @Input() hint: string;
    @Input() caption: string;
    @Input() width: string;
    @Input() height: string;
    @Input() required: boolean;
    @Input() animation: string;
    @Input() class: string;
    @Input() hidden: boolean = true;
    @Input() whitespace: string;
    @Input() wordbreak: string;
    @Input() horizontalalign: string;

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {}
}