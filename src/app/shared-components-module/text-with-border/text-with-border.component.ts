import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-with-border',
  templateUrl: './text-with-border.component.html',
  styleUrls: ['./text-with-border.component.scss']
})
export class TextWithBorder implements OnInit {
  @Input("noBorder") noBorder:boolean = false;
  _borderColor:string="primary";
  
  constructor() { }

  ngOnInit() {
  }

  @Input("borderColor")
  set borderColor(backgroundColor:string){
    // console.log(backgroundColor)
    let allowedValues=["primary","secoundary"];
    if(backgroundColor && allowedValues.includes(backgroundColor))
      this._borderColor = backgroundColor;    
  }  

}
