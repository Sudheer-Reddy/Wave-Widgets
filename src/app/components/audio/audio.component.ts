import { NgModule, Component, Input, Output, OnInit, OnChanges, ElementRef, SimpleChanges } from '@angular/core';

@Component({
    'selector': 'wm-audio',
    'templateUrl': './audio.component.html',
    'styleUrls': ['./audio.component.less']
})

/**
 * @class AudioComponent.
 * @typedef AudioComponent Represents a Audio widget with options like loop, mute, mp3format also style with custom classes 
 * @classdesc Represents a Audio widget with options like loop, mute, mp3format also style with custom classes
 * @implements {OnChanges, OnInit}
 */
export class AudioComponent  implements OnChanges, OnInit {
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
    private readonly _selector: string = 'audio';

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
        //this.toggleBooleanProperty('muted', val, this._selector);
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
        this._controls = val;
    };


    /*** Life cylce Hooks ***/

    /**
     * @constructor 
     * @param {ElementRef} el Injection into constructor.
     */
    constructor(readonly _el: ElementRef) {
    }

    /**
     * @function ngOnChanges Triggers whenever there is a change in @Input property
     * @param changes @type {SimpleChanges}  map of changed properties.
     * @returns no return value
     */
    ngOnChanges(changes: SimpleChanges): void {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {}
}