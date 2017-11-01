import { Component, OnInit, Input } from '@angular/core';

/**
 * The icon component
 * Represents icon widget with icon class, size, position etc
 */
@Component({
  selector: 'wm-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {

  /**
  * Name of the anchor.
  */
  @Input() name: string;
  /**
  * Caption to be displayed on anchor.
  */
  @Input() caption: string;
  /**
   * Any text enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.
   */
  @Input() hint: string = '';
  /**
   * Showing determines whether or not a component is visible. A page element that is not showing has its css display style set to none; 
   * it is still a part of the DOM model of the page, but no longer affects the layout of other components.
   */
  @Input() show: boolean = true;

  /**
   * Icon Class for the widget.
   */
  @Input() iconclass: string;
  /**
  * This property defines the size of the icon. Value has to be specified along with the units (em or px).
  */
  @Input() iconsize: string;
  /**
  * Optional property; Property to set the position of icon in the widget.
  */
  @Input() iconposition: string;
  /**
   * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
   */
  @Input() class: string = '';
  /**
   * This property defines the color of the icon.
   */
  @Input() color: string = '';
  /**
   * This property defines the opacity style attribute for the widget.
   */
  @Input() opacity: string = '';

  constructor() { }

  ngOnInit() {
  }

}
