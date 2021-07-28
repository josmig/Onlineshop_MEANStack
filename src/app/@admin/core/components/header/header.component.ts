import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  toggledValue: boolean = true;

  @Output() toggleChange = new EventEmitter<boolean>();
  
  toggled(){
    if(this.toggledValue === undefined){
      this.toggledValue = true;
    }
    this.toggledValue =! this.toggledValue
    console.log(this.toggledValue);    
    this.toggleChange.emit(this.toggledValue);
  } 
  

}
