import { Input, Output } from "@angular/core";

/**
 * Base class - Contains all common logic that each component extends. <br>
 * Common properties - `name`, `show`, `class`, `showindevice`
 */
export class Base {
    /**
     * This property sets CSS class expression on component
     */
    @Input() class: string;
    /**
     * Name of the component
     */
    @Input() name: string;
    /**
     * This property will be used to show/hide the component on the web page
     */
    @Input() show: boolean = true;
    /**
     * This property will be used to show/hide component in different devices
     */
    @Input() showindevice: string = 'all'; 
}