import { Component, Input, Output, OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

/**
 * PictureComponent defines an image in an HTML page. <br>
 * Supports certain properties like picturesource and few others.
 */
@Component({
    'selector': 'wm-picture',
    'templateUrl': './picture.component.html',
    'styleUrls': ['./picture.component.less']
})
export class PictureComponent implements OnChanges, OnInit {

     /* ---INPUT PROPERTIES--- */

    /**
     * This property controls the animation of the picture widget. <br>
     * The animation is based on the css classes. <br>
     * Possible values are `bounce`, `flash`, `pulse`, `rubberBand`, `shake`, `etc`.
     */
    @Input() animation: string;
    /**
     * Sets title on widget
     */
    @Input() hint: string;

    /**
     * Applies class expression on widget
     */
    @Input() class: string;

    /**
     * The cursor property specifies the type of cursor to be displayed when pointing on an element.
     * Supported values are `default`, `pointer`, `none`, `move` etc..
     */
    @Input() cursor: string;

    /**
     * This property will be used to show/hide the picture widget on the web page.
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
     * Sets component height expression. <br>
     * suffix values with - `px|%|em`
     */
    @Input() height: string;

    /**
     * Sets component width expression. <br>
     * suffix values with - `px|%|em`
     */
    @Input() width: string;

    /**
     * This property specifies the source for the picture
     */
    @Input() picturesource: string;

    /**
     * Sets default image for component
     */
    @Input() pictureplaceholder: string;

    /**
     * Enable url encoding for image source
     */
    @Input() encodeurl: boolean = false;

    /**
     * This property can automatically size an image to the height or width of the picture component. <br>
     * Valid values are: <br>
     * `None`: the image is displayed at its default size. <br>
     * `H`: image is resized so that the width of the image is the same as the width of the picture component. <br>
     * `V`: image is resized so that the height of the image is the same as the height of the picture component. <br>
     * `Both`: image is resized so that the height and width of the image are same as the height and width of the picture component. <br>
     */
    @Input() pictureaspect: string = 'None';

    /**
     * This property controls the shape of the picture. <br>
     * Valid values are: <br>
     * `None`: the image is displayed in its original shape. <br >
     * `rounded`: adds rounded corners to an image. <br >
     * `circle`: shapes the image to a circle. <br >
     * `thumbnail`: shapes the image to a thumbnail.
     */
    @Input() shape: string = 'None';

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