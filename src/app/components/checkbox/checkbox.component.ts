import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'wm-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit {

  /**
     * The name is a unique identifier for your component. Each page element and component must be uniquely identified.
     */
    @Input() name: string;
    /**
       * Type of the checkbox: checkox or switch.
       */
    @Input() type: string;
    /**
       * The tabindex attribute specifies the tab order of an element.
     * The value can range from 0 to 32767. Default is 0 and -1 makes the element non-focusable.
       */
    @Input() tabindex: number;
    /**
       * Showing determines whether or not a component is visible. A page element that is not showing has its css display style set to none;
     * it is still a part of the DOM model of the page, but no longer affects the layout of other components.
       */
    @Input() show: boolean = true;
    /**
       * If the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.
       */
    @Input() disable: boolean;
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
       * This property makes the element get focused automatically when the page loads.
       */
    @Input() autofocus: boolean;
    /**
       * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
       */
    @Input() class: string = '';
    /**
       * On setting readonly property to true the user will not be able to change the data value of a component.
       */
    @Input() readonly: boolean = false;
    /**
       * A required editor in forms may refuse to save without a required field.
       */
    @Input() required: boolean = false;
    /**
       * Change the color style attribute of the component using this property.
       */
    @Input() color: string;
    /**
       * Any text enter for this property will be shown as a tooltip if the mouse hovers over this component for 1.5 seconds.
       */
    @Input() hint: string;
    /**
       * datavalue for the checkbox.
       */
    @Input('datavalue')
    get datavalue(){
      return this.model;
    }
    set datavalue(value: boolean){
      this.model = value;
    }
  
    @Output() datavalueChange: EventEmitter<boolean> = new EventEmitter();
  
  
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
  
  
    onChange($event) {
      this.datavalueChange.emit(this.datavalue);
    }

    model: boolean = false;

}
