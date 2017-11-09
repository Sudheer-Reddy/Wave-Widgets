import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'wm-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {

  /**
    * The name is a unique identifier for your component. Each page element and component must be uniquely identified.
    */
  @Input() name: string;


  /**
    * Showing determines whether or not a component is visible. A page element that is not showing has its css display style set to none; 
    * it is still a part of the DOM model of the page, but no longer affects the layout of other components.
    */
  @Input() show: boolean = true;

  /**
    * 
    */
  @Input() hideclose: boolean;

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
   * 
   */
  @Input('caption') messageContent: string = 'Message';
  /**
   * 
   */ 
  _type: string ='';

  /**
   * 
   */
  messageClass: string = '';

  /**
   * 
   */
  messageIconClass: string = '';

  onClose() {
    this.show = false;
  }
  
  /**
   * 
   */
  @Input()
  set type(value: string) {
    switch (value) {
      case 'success':
          this.messageClass = 'alert-success';
          this.messageIconClass = 'fa fa-check';
          break;
      case 'error':
          this.messageClass = 'alert-danger';
          this.messageIconClass = 'fa fa-times-circle';
          break;
      case 'warn':  /*To support old projects with type as "warn"*/
      case 'warning':
          this.messageClass = 'alert-warning';
          this.messageIconClass = 'fa fa-exclamation-triangle';
          break;
      case 'info':
          this.messageClass = 'alert-info';
          this.messageIconClass = 'fa fa-info';
          break;
      case 'loading':
          this.messageClass = 'alert-info alert-loading';
          this.messageIconClass = 'fa fa-spinner fa-spin';
          break;
      }
    this._type = value;
  }

  get type() {return this._type};

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
