import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wm-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit {


  /**
    * The name is a unique identifier for your component. Each page element and component must be uniquely identified.
    */
  @Input() name: string;

  /**
    * Any text enter for this property will be shown as a tooltip if the mouse hovers over this component for 1.5 seconds.
    */
  @Input() hint: string = '';

  /**
    * Showing determines whether or not a component is visible. A page element that is not showing has its css display style set to none; 
    * it is still a part of the DOM model of the page, but no longer affects the layout of other components.
    */
  @Input() show: boolean = true;

  /**
     * The width of your component can be specified in px or % (i.e 50px, 75%).
     */
  @Input() width: string;
  
  /**
     * The height of your component can be specified in px or % (i.e 50px, 75%).
     */
  @Input() height: string;

  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() class: string = '';

  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() videopreload: string = '';

  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() postersource: string = '';
  
  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() muted: boolean;
  
  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() controls: boolean = true;
  
  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() loop: boolean;
  
  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() autoplay: boolean;
  
  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() mp4videoUrl: URL;
  
  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() webmvideoUrl: URL;
  
  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() oggvideoUrl: URL;
  
  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() subtitlelang: string;
  
  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() tracksource: boolean;


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
