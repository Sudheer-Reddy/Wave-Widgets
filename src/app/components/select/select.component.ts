import { Component, OnInit, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'wm-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {

  /**
    * The name is a unique identifier for your component. Each page element and component must be uniquely identified.
    */
  @Input() name: string;

  /**
    * A placeholder is text to show in the editor when there is no value. 
    * This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user.
    */
  @Input() placeholder: string = '';
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
    * If the disabled property is true (checked) the value of the editor cannot change. 
    * The component becomes display-only.
    */
  @Input() disable: boolean;

  /**
     * On setting readonly property to true the user will not be able to change the data value of a component.
     */
    @Input() readonly: boolean = false;
  /**
     * A required editor in forms may refuse to save without a required field.
     */
    @Input() required: boolean = false;
  /**
     * The shortcut key property specifies a shortcut key to activate/focus an element. 
   * The way of accessing the shortcut key is varying in different browsers <br>Internet Explorer - [Alt] + shortcutkey, <br>Chrome - [Alt] + shortcutkey (Windows/Linux) [Control] [Alt] + shortcutkey (MAC),<br>Firefox - [Alt] [Shift] + shortcutkey (Windows/Linux) [Control] [Alt] + shortcutkey (MAC),<br>Safari - [Alt] + shortcutkey (Windows) [Control] [Alt] + shortcutkey (MAC).
     */
  @Input() shortcutkey: string;

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
     * This property makes the element get focused automatically when the page loads.
     */
  @Input() autofocus: boolean;

  /**
     * multiple select value for select.
     */
  @Input() multiple: boolean = true;

  /**
     * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
     */
  @Input() class: string = '';

  /**
     * Set this property to a variable to populate the list of values to display.
     */   
  @Input() dataset: any;

  /**
     * Set this property to a variable to populate the list of values to display.
     */   
    @Input() datafield: any;

  /**
     * This property sets the displayValue to show in the select editor when the list is populated using the dataSet property.
     */   
    @Input() displayfield: any;

    /**
     * unit for the font can be 'px', 'em' or '%'
     */   
    @Input() fontunit: string='px';

  /**
     * Change the color style attribute of the component using this property.
     */   
    @Input() color: string = 'black';

  /**
     * This allows for multiple selection for ordering the display of rows based on fields.
     */   
    @Input() orderby: any;

    @Output('datavalueChange') datavalueChange : EventEmitter<any> = new EventEmitter();

  _datavalue: any;
  /**
    * orderby for the select.
    */   
  @Input('datavalue')
  get datavalue() {
    return this._datavalue;
  }

  set datavalue(val:any) {
    this._datavalue = val;
  }

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
