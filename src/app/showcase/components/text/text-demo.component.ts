import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-demo',
  templateUrl: './text-demo.component.html',
  styleUrls: ['./text-demo.component.less']
})
export class TextDemoComponent implements OnInit {

  datavalue: string = 'Text Box Value';

  class: string = 'text-danger';

  width: string = '300px';

  height: string = '';

  selectedType: string= 'text';

  readonly: boolean = false;

  show:boolean = true;

  color: string = '#121212';

  fontsize: number = 30;

  tabindex: number = 1; 

  backgroundcolor: string= '#fff';

  types: {key:string, value:string}[] = [
    {key:'color',value:'color'},
    {key:'date',value:'date'},
    {key:'datetime-local',value:'datetime-local'},
    {key:'email',value:'email'},
    {key:'month',value:'month'},
    {key:'number',value:'number'},
    {key:'password',value:'password'},
    {key:'search',value:'search'},
    {key:'Phone No',value:'tel'},
    {key:'text',value:'text'},
    {key:'time',value:'time'},
    {key:'url',value:'url'},
    {key:'week',value:'week'},
  ];

  type: string = this.types[9].key;

  constructor() { }

  ngOnInit() {
  }
}
