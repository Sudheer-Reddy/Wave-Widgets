import { Component, OnInit, Input } from '@angular/core';

/**
 * The anchor component
 * Represents HTML anchor widget with caption, hyperlink, target etc properties.
 */
@Component({
  selector: 'wm-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.less']
})
export class AnchorComponent implements OnInit {

  /**
   * Returns the encoded URL
   */
  encodeUrl(url: string): string {
    return encodeURI(url);
  }

  /**
  * Private variable to store hyperlink
  */
  _hyperlink: string;


	/**
   * Caption to be displayed on anchor.
   */
  @Input() caption: string = 'link';
  /**
   * Any text enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.
   */
  @Input() hint: string = '';
  /**
   * Value to be displayed in the badge span for anchor.
   */
  @Input() badgevalue: string;
  /**
   * _blank: Opens the linked document in a new window or tab.
   * _self:Opens the linked document in the same frame as it was clicked (this is default).
   * _parent: Opens the linked document in the parent frame.
   * _top : Opens the linked document in the full body of the window.
   */
  @Input() target: string = '_self';
  /**
   * Check this if you want the provided URL to be encoded at run time.
   */
  @Input() encodeurl: boolean;
	/**
  * The tabindex attribute specifies the tab order of an element. 
	* The value can range from 0 to 32767. Default is 0 and -1 makes the element non-focusable.
  */
  @Input() tabindex: string;
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
   * Width for the anchor.
   */
  @Input() width: string;
  /**
   * Height for the anchor.
   */
  @Input() height: string;
  /**
   * Icon Class for the anchor
   */
  @Input() iconclass: string;
  /**
   * This optional property allows you to add an icon to the left side of your anchor. User can give url of the image
   */
  @Input() iconurl: string;
  /**
   * Optional property; but you will need this if you are using the anchor's iconUrl. 
   * Please enter the width of your icon. WARNING: Its best to specify size in pixels, not percent.
   */
  @Input() iconwidth: string;
  /**
   * Optional property; but you will need this if you are using the anchor's iconUrl. Please enter the height of your icon. 
   * WARNING: Its best to specify size in pixels, not percent.
   */
  @Input() iconheight: string;
  /**
   * Optional property; only has meaning if you specify the anchor's iconUrl. 
   * Values should all have \"px\" next to them. Use this to adjust the space between the icon and the anchor text.
   */
  @Input() iconmargin: string;
  /**
  * Optional property; Property to set the position of icon in the widget.
  */
  @Input() iconposition: string = 'left';
  /**
   * This property allows user to select one or more predefined class of style options from the view list drop down on the right.
   */
  @Input() class: string = '';


  get hyperlink(): string {
    return this._hyperlink;
  }

  /**
   * The web url you want to redirect to on clicking the anchor.
   */
  @Input('hyperlink')
  set hyperlink(value: string) {
    if (this.encodeurl) {
      value = this.encodeUrl(value);
    }
    if (value && value.startsWith('www')) {
      value = '//' + value;
    }
    this._hyperlink = value;
  }

  @Input() fontsize: string;
	@Input() fontunit: string; 
	@Input() fontfamily: string; 
	@Input() color: string; 
	@Input() fontstyle: string; 
  @Input() textalign: string; 
  @Input() whitespace: string; 
	@Input() backgroundcolor: string;
	@Input() backgroundimage: string = '';
	@Input() backgroundrepeat: string;
	@Input() backgroundposition: string;
	@Input() backgroundsize: string;
	@Input() backgroundattachment;
	@Input() bordercolor: string;
	@Input() borderstyle: string;
	@Input() borderwidth: string;
	@Input() padding: string;
	@Input() margin: string;

  constructor() { }

  ngOnInit() {
  }

}
