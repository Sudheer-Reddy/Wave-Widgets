import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class Button implements OnInit {

  @Input() name:string;  
  @Input() caption:string = 'Button';  
  @Input() type:string = 'button';  
  @Input() badgevalue:string;  
	@Input() hint:string = '';
	@Input() tabindex:string;	
	@Input() show:boolean = true;
	@Input() disable:boolean;
	@Input() shortcutkey:string;	
	@Input() width:string;
	@Input() height:string;
	//@Input() animation;
	@Input() iconclass:string;
	@Input() iconsrc:string;	
	@Input() iconurl:string;
	@Input() iconwidth:string;
	@Input() iconheight:string;
	@Input() iconmargin:string;
	@Input() iconposition:string = 'left';

	@Input() class:string = 'btn-default';

  constructor() { }

  ngOnInit() {
  }

}
