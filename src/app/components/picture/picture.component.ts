import { Component, Input, Output, OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
    'selector': 'wm-picture',
    'templateUrl': './picture.component.html',
    'styleUrls': ['./picture.component.less']
})

export class PictureComponent implements OnChanges, OnInit {

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
     * Sets source of image to be shown
     */
    @Input() picturesource: string;

    /**
     * Sets alt text for given image
     */
    @Input() pictureplaceholder: string;

    /**
     * Enable url encoding for image source
     */
    @Input() encodeurl: boolean = false;

    /**
     * Enable url encoding for image source
     * Can be one of these 'none|H|V|Both'
     */
    @Input() pictureaspect: string = 'none';

    /**
     * Sets disable property on component
     */
    @Input() disabled: boolean = false;

    /**
     * Sets margin style on component
     */
    @Input() margin: string;

    /**
     * Sets border width style on component
     */
    @Input() borderwidth: string;

    /**
     * Sets border style on component
     */
    @Input() borderstyle: string;

    /**
     * Sets border color style on component
     */
    @Input() bordercolor: string;

    /**
     * Sets padding style on component
     */
    @Input() padding: string;

    /**
     * Sets background color style on component
     */
    @Input() backgroundcolor: string;

    /**
     * Sets background gradient style on component
     */
    @Input() backgroundgradient: string;

    /**
     * Sets background image style on component
     */
    @Input() backgroundimage: string;

    /**
     * Sets background repeat style on component
     */
    @Input() backgroundrepeat: string;

    /**
     * Sets background size style on component
     */
    @Input() backgroundsize: string;

    /**
     * Sets background position style on component
     */
    @Input() backgroundposition: string;

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