import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.less']
})
export class CheckboxDemoComponent implements OnInit {

  datavalue: boolean = true;
  
  color: string = '#121212';

  show: boolean = true;

  width: string = '300px';

  height: string = '100px';
  
  constructor() { }

  ngOnInit() {
  }

}
