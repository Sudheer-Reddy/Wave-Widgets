import { Component, OnInit, SimpleChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'wm-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.less']
})
export class HtmlComponent implements OnInit {


  /**
    * The name is a unique identifier for your component. Each page element and component must be uniquely identified.
    */
    @Input() name: string;
  /**
    * Any text enter for this property will be shown as a tooltip if the mouse hovers over this component for 1.5 seconds.
    */
  @Input() hint: string = 'Select component deafult hint';

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
    * This property defines the font-size style attribute for the component.
    */
  @Input() fontsize: string;

  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() class: string = '';

  /**
   * unit for the font can be 'px', 'em' or '%'
   */   
  @Input() fontunit: string='px';

  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() color: string = 'black';
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() fontfamily: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() fontstyle: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() fontweight: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() textalign: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() backgroundcolor: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() backgroundimage: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() backgroundrepeat: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() backgroundposition: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() backgroundsize: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() backgroundattachment: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() bordercolor: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() borderstyle: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() borderwidth: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() padding: string;
  
  /**
     * Change the color style attribute of the component using this property.
     */   
  @Input() margin: string;


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
