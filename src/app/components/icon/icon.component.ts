import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wm-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {

  @Input() caption: string;
  @Input() name: string;
  @Input() hint: string = '';
  @Input() show: boolean = true;
  
  @Input() iconclass: string;  
  @Input() iconsize: string;
  @Input() iconposition: string;

  @Input() classname:string = '';  
  @Input() color:string = '';  
  @Input() opacity:string = '';    

  constructor() { }

  ngOnInit() {
  }

}
