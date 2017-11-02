import { Component, Input, Output, OnInit, OnChanges, ElementRef, SimpleChanges } from '@angular/core';

@Component({
    'selector': 'wm-label',
    'templateUrl': './label.component.html',
    'styleUrls': ['./label.component.less']
})

export class LabelComponent implements OnChanges, OnInit {

    /* ---INPUT PROPERTIES--- */

    /**
     * Sets title on component
     */
    @Input() hint: string;
    
    /**
     * Applies class expression on component
     */
    @Input() class: string = '';

    /**
     * Toggle widget show/hide state
     */
    @Input() show: boolean = true;

    /**
     * Sets caption on component
     */
    @Input() caption: string;

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
     * Sets required class on component
     */
    @Input() required: boolean;

    /**
     * Sets animation class on component
     */
    @Input() animation: string;

    /**
     * Sets whitespace style on component
     */
    @Input() whitespace: string;

    /**
     * Sets workbreak style on component
     */
    @Input() wordbreak: string;

    /**
     * Sets horizontalalign property on component.
     * Example - Label can be set 'left|center|right'
     */
    @Input() horizontalalign: string;

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