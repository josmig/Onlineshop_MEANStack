import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
  
  toggledValue = true;

  toggled($event){
    console.log('admin', $event);
    this.toggledValue = $event;
    
  }

}
