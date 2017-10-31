import { Component, Input, Output, OnInit, OnChanges, ElementRef, SimpleChanges } from '@angular/core';
import { BooleanProperty } from '../core/booleanproperty.class';

@Component({
    'selector': 'wm-audio',
    'templateUrl': './audio.component.html',
    'styleUrls': ['./audio.component.less']
})


export class Audio extends BooleanProperty implements OnChanges, OnInit {
    @Input() hint: string;
    @Input() class: string;
    @Input() hidden: boolean = true;
    @Input() mp3format: string;
    @Input() audiosupportmessage: string = 'Your browser does not support the audio tag.';
    @Input() autoplay: boolean;
    @Input() audiopreload: string = 'none';
    @Input() tabindex: number = 0;
    @Input() showindevice: string;
    @Input() height: string;
    @Input() width: string;
    @Input() accessroles: string;

    readonly _selector: string = 'audio';
    readonly _el: ElementRef;

    private _muted: boolean = true;
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
     */
    @Input('muted') 
    set muted(val: boolean) {
        this.toggleProperty('muted', val);
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
        this.toggleProperty('loop', val);
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
        this.toggleProperty('controls', val);
        this._controls = val;
    };


    /**
     * @constructor 
     * @param el ElementRef injection into constructor.
     */
    constructor(el: ElementRef) {
        super();
        this._el = el;
    }

    ngOnInit(): void {}

    /**
     * @function ngOnChanges Triggers whenever there is a change in @Input property
     * @param changes @type {SimpleChanges}  map of changed properties.
     * @returns no return value
     */
    ngOnChanges(changes: SimpleChanges): void {}
}