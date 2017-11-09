import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit {

  /**
     * Name of the text box.
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
       * Width for the text box.
       */
    @Input() width: string;
    /**
       * Height for the text box.
       */
    @Input() height: string;
    /**
       * autofocus for the text box.
       */
    @Input() autofocus: boolean;
    /**
       * class for the text box.
       */
    @Input() class: string = '';
    /**
       * readonly for the text box.
       */
    @Input() readonly: boolean = false;
    /**
       * readonly for the text box.
       */
    @Input() required: boolean = false;
    /**
       * color for the checkbox.
       */
    @Input() color: string;
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
