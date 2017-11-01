import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wm-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.less']
})
export class Anchor implements OnInit {

  encodeUrl(url): string {
    return encodeURI(url);
  }

  _hyperlink: string;

  @Input() caption: string = 'link';
  @Input() name: string;
  @Input() hint: string = '';
  @Input() badgevalue: string;
  @Input() target: string = '_self';
  @Input() encodeurl: boolean;
  @Input() tabindex: string;
  @Input() show: boolean = true;
  @Input() shortcutkey: string;
  @Input() width: string;
  @Input() height: string;

  @Input() iconclass: string;
  @Input() iconsrc: string;
  @Input() iconurl: string;
  @Input() iconwidth: string;
  @Input() iconheight: string;
  @Input() iconmargin: string;
  @Input() iconposition: string = 'left';

  get hyperlink(): string {
    return this._hyperlink;
  }

  @Input('hyperlink')
  set hyperlink(value: string) {
    if (this.encodeurl) {
      value = this.encodeUrl(value);
    }
    if (value.startsWith('www')) {
      value = '//' + value;
    }
    this._hyperlink = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
