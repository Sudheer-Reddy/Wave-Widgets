import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wm-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less']
})
export class TextComponent implements OnInit, OnChanges {

  /**
     * Name of the text box.
     */
	@Input() name: string;
	/**
     * Type of the text box: text box, reset or submit.
     */
	@Input() type: string = 'text';
	/**
     * Any text enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.
     */
	@Input() hint: string = 'hint property ';
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
     * autocomplete for the text box.
     */
  @Input() autocomplete: boolean = true;
	/**
     * class for the text box.
     */
  @Input() class: string = '';

	/**
     * regexp for the text box.
     */
  @Input() regexp: RegExp;
	/**
     * placeholder for the text box.
     */
  @Input() placeholder: string = 'placeholder';
	/**
     * maxchars for the text box.
     */
  @Input() maxchars: number;
	/**
     * minvalue for the text box.
     */
  @Input() minvalue: number;
	/**
     * maxvalue for the text box.
     */
  @Input() maxvalue: number;
	/**
     * step value for the text box.
     */
  @Input() step: number;
	/**
     * readonly for the text box.
     */
  @Input() readonly: boolean = false;
	/**
     * readonly for the text box.
     */
  @Input() required: boolean = false;
	/**
     * fontsize for the text box.
     */
  @Input() fontsize: number;
	/**
     * fontsize for the text box.
     */
  @Input() color: string;
	/**
     * fontsize for the text box.
     */
  @Input() fontweight: string;
	/**
     * fontsize for the text box.
     */
  @Input() textalign: string;
	/**
     * fontsize for the text box.
     */
  @Input() backgroundcolor: string;
	/**
     * fontsize for the text box.
     */
  @Input() datavalue: string;
	/**
     * fontsize for the text box.
     */
  @Input() fontunit: string = 'px';

  @Output() datavalueChange: EventEmitter<string> = new EventEmitter();


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

}
