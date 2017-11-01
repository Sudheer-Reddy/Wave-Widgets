import { Component, Input, Output, OnInit, OnChanges, ElementRef, SimpleChanges } from '@angular/core';
import { BaseWidget } from '../core/basewidget.class';
import { WidgetTypes } from '../../enums/helpers.enums';
import { BaseConfig } from '../../services/baseconfig.service';

@Component({
    'selector': 'wm-label',
    'templateUrl': './label.component.html',
    'styleUrls': ['./label.component.less'],
    'providers': [BaseConfig]
})

export class Label extends BaseWidget implements OnChanges, OnInit {
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

    readonly _selector: string = WidgetTypes[WidgetTypes.audio];

    constructor(public _el: ElementRef, private _config: BaseConfig) {
        super();
    }

    ngOnInit(): void {
        this.initWidget(this._config.getDefaultValues('wm.label'));
    }

    ngOnChanges(changes: SimpleChanges): void {}
}