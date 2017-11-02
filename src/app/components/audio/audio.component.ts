import { NgModule, Component, Input, Output, OnInit, OnChanges, ElementRef, SimpleChanges } from '@angular/core';

/**
 * Represents a Audio widget with options like loop, mute, mp3format also style with custom classes
 */
@Component({
    'selector': 'wm-audio',
    'templateUrl': './audio.component.html',
    'styleUrls': ['./audio.component.less']
})
export class AudioComponent  implements OnChanges, OnInit {

    /* ---INPUT PROPERTIES--- */

    /**
     * Sets title on widget
     */
    @Input() hint: string;

    /**
     * Applies class expression on widget
     */
    @Input() class: string;

    /**
     * Toggle widget show/hide state
     */
    @Input() show: boolean = true;

    /**
     * Sets mp3 source for component
     */
    @Input() mp3format: string;

    /**
     * Sets custom message for no audio support for browser
     */
    @Input() audiosupportmessage: string;

    /**
     * Toggles autoplay property on component
     */
    @Input() autoplay: boolean;

    /**
     * Sets audiopreload property on component
     */
    @Input() audiopreload: string;

    /**
     * Sets accessibility tabindex on widget
     */
    @Input() tabindex: number = 0;

    /**
     * Sets Device expression on widget.
     * Example expression to show up component in all devices - 'md sm xs lg'
     */
    @Input() showindevice: string;

    /**
     * Sets component height expression
     * suffix values with - 'px|%|em'
     */
    @Input() height: string;

    /**
     * Sets component width expression
     * suffix values with - 'px|%|em'
     */
    @Input() width: string;

    /**
     * Sets accessroles on component
     */
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


    /* ---LIFE CYCLE HOOKS--- */

    /**
     * Constructor - Perform initializations on properties 
     * that are inherited from parent component/class
     */
    constructor() {}
    
    /**
     * Use this to perform any additional customizations on change of each property
     * @param changes Contains collection of SimpleChange of each property on component
     */
    ngOnChanges(changes: SimpleChanges): void {}

    /**
     * Use this to perform initialization stuff
     */
    ngOnInit(): void {}
}