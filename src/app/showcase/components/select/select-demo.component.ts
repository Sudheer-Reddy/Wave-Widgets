import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SelectDemoComponent implements OnInit {

  options: any[] = [{
    name: 'Punith',
    company : 'Pramati'
  },
  {
    name: 'Sudheer',
    company : 'Microsoft'
  },
  {
    name: 'Vinay',
    company : 'ADP'
  }];


  keys: string[] = Object.keys(this.options[0]);

  datafield: string = this.keys[0];

  displayfield: string = this.keys[0];

  datavalue: any = this.options[0][this.displayfield];

  color: string = '#121212';

  fontsize: number = 30;

  width: string = "200px";

  show: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
