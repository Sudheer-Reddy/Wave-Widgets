import { Component, Input, Output, OnInit, OnChanges, ElementRef, SimpleChanges } from '@angular/core';
import { BaseWidget } from '../core/basewidget.class';
import { WidgetTypes } from '../../enums/helpers.enums';
import { BaseConfig } from '../../services/baseconfig.service';

@Component({
    'selector': 'wm-audio',
    'templateUrl': './audio.component.html',
    'styleUrls': ['./audio.component.less'],
    'providers': [BaseConfig]
})

/**
 * @class Audio.
 * @typedef Audio Represents a Audio widget with options like loop, mute, mp3format also style with custom classes 
 * @classdesc Represents a Audio widget with options like loop, mute, mp3format also style with custom classes
 * @extends BaseWidget
 * @implements {OnChanges, OnInit}
 */
export class Audio extends BaseWidget implements OnChanges, OnInit {
    /**
     * Sets title property on widget
     * @property {string}
     */
    @Input() hint: string;
    @Input() class: string;
    @Input() hidden: boolean = true;
    @Input() mp3format: string;
    @Input() audiosupportmessage: string;
    @Input() autoplay: boolean;
    @Input() audiopreload: string;
    @Input() tabindex: number = 0;
    @Input() showindevice: string;
    @Input() height: string;
    @Input() width: string;
    @Input() accessroles: string;
    
    /**
     * Selector for cases where boolean properties needs to be toggled by
     * manupulating DOM
     * @private {_selector}
     * @readonly
     */
    private readonly _selector: string = WidgetTypes[WidgetTypes.audio];

    private _muted: boolean;
    /**
     * Gets loop attribute on audio widget
     * @type {boolean}
     * @returns {boolean} return controls
     */
    get muted() {
        return this._muted;
    }

    /**
     * Sets loop attribute on audio widget
     * @type {boolean}
     * @param {boolean} val value to be set
     */
    @Input('muted') 
    set muted(val: boolean) {
        this.toggleBooleanProperty('muted', val, this._selector);
        this._muted = val;
    };

    private _loop: boolean;
    /**
     * Gets loop attribute on audio widget
     * @type {boolean}
     * @returns {boolean} return controls
     */
    get loop() {
        return this._loop;
    }

    /**
     * Sets loop attribute on audio widget
     * @type {boolean}
     */
    @Input('loop') 
    set loop(val: boolean) {
        this.toggleBooleanProperty('loop', val, this._selector);
        this._loop = val;
    };

    private _controls: boolean;
    /**
     * Gets controls attribute on audio widget
     * @type {boolean}
     * @returns {boolean} return controls
     */
    get controls() {
        return this._controls;
    }

    /**
     * Sets controls attribute on audio widget
     * @type {boolean}
     */
    @Input('controls') 
    set controls(val: boolean) {
        this.toggleBooleanProperty('controls', val, this._selector);
        this._controls = val;
    };


    /*** Life cylce Hooks ***/

    /**
     * @constructor 
     * @param {ElementRef} el Injection into constructor.
     */
    constructor(readonly _el: ElementRef, private _config: BaseConfig) {
        super();
    }

    /**
     * @function ngOnChanges Triggers whenever there is a change in @Input property
     * @param changes @type {SimpleChanges}  map of changed properties.
     * @returns no return value
     */
    ngOnChanges(changes: SimpleChanges): void {}

    ngOnInit(): void {
        this.initWidget(this._config.getDefaultValues('wm.audio') || {});
    }

    ngAfterViewInit(): void {}
}