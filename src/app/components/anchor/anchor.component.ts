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
  * Name of the anchor.
  */
  @Input() name: string;
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
   * Sets Device expression on widget.
   * Example expression to show up component in all devices - 'md sm xs lg'
   */
  @Input() showindevice: string;
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

  /**
   * This property defines the font-size style attribute for the widget.
   */
  @Input() fontsize: number;
  /**
   * This property defines the font-unit style attribute for the widget. Units for the font can be specified as either px or em.
   */
  @Input() fontunit: string;
  /**
   * This property defines the font-family style attribute for the widget.
   */
  @Input() fontfamily: string;
  /**
   * Change the color style attribute of the widget using this property.
   */
  @Input() color: string;
  /**
   * This property defines the font-style style attribute for the widget.
   */
  @Input() fontstyle: string;
  /**
   * This property defines the text-align style attribute for the widget. Values can be left, center or right.
   */
  @Input() textalign: string;
  /**
   * This property defines the whitespace style attribute for the widget.
   */
  @Input() whitespace: string;
  /**
   * This property defines the background color style attribute for the widget.
   */
  @Input() backgroundcolor: string;
  /**
   * User has following options to set backgroundImage \r\n 1) Direct image name with extension \r\n 2) Direct valid web url to the image \r\n 3) path to the image in the project directory, ex:resources/images/imagelists/example.png \r\n 4) url(imageName with extension) or url('imageName with extension') or url(\"imageName with extension\").
   */
  @Input() backgroundimage: string = '';
  /**
   * Background can be repeated vertically/horizontally/both or can be set to no-repeat to not to repeat.
   */
  @Input() backgroundrepeat: string;
  /**
   * The background-position property sets the starting position of a background image. This can be given in 1. (x%, y%) \n 2. (xpos, ypos) \n 3. (left, top), (center, top) etc.
   */
  @Input() backgroundposition: string;
  /**
   * This property defines the background size style attribute for the widget.
   */
  @Input() backgroundsize: string;
  /**
   * This property defines the background attachment attribute for the widget.
   */
  @Input() backgroundattachment: string;
  /**
   * This property defines the border color to be applied to the layer element.
   */
  @Input() bordercolor: string;
  /**
   * Changes the border style for this widget. Select any of the default options available.
   */
  @Input() borderstyle: string;
  /**
   * This property defines the border-width style attribute for the widget.
   */
  @Input() borderwidth: string;
  /**
   * Sets the padding in pixels for your widget. The padding for an object is inside of its border (the margin is outside the border).
   */
  @Input() padding: string;
  /**
   * Sets the margin in pixels for your widget. The margin for an object is outside of its border (the padding is inside the border).
   */
  @Input() margin: string;

  constructor() { }

  ngOnInit() {
  }

}
