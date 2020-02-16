import { Component, OnInit, Input, Output } from '@angular/core';
import { MonthNames } from '../monthNames';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent implements OnInit {
  monthNamesArr;
  currentMonthName;
  @Output() currentYear;
  @Output() currentMonthNumber;
  yearSwitcherCounter;
  
  constructor() {
    let monthNames = [];
    for(let item of MonthNames){
      monthNames.push(item.name)
    }
    this.monthNamesArr = monthNames;
    
    
   }
  
 leftMonthSwither(){
  if(this.currentMonthNumber===0){
    this.leftYearSwither()
  }

    this.currentMonthNumber = ((this.currentMonthNumber - 1) + 12) % 12;
    this.currentMonthName = this.monthNamesArr[this.currentMonthNumber];
    localStorage.setItem('currentMonth', this.currentMonthNumber);
    return this.currentMonthNumber;

  }
  
  rightMonthSwither(){
    if(this.currentMonthNumber===11){
      this.rightYearSwither()
    }
    this.currentMonthNumber = (this.currentMonthNumber + 1) % 12;
    this.currentMonthName = this.monthNamesArr[this.currentMonthNumber];
    localStorage.setItem('currentMonth', this.currentMonthNumber);
     return this.currentMonthNumber;
  }

  leftYearSwither(){
    this.yearSwitcherCounter--;
    this.currentYear = this.yearSwitcherCounter;
    localStorage.setItem('currentYear', this.currentYear);
    return this.currentYear;
  }
  
  rightYearSwither(){
    this.yearSwitcherCounter++;
    this.currentYear = this.yearSwitcherCounter;
    localStorage.setItem('currentYear', this.currentYear);
    return this.currentYear;
  }

  currentMonthSwitcher(){
    localStorage.removeItem('currentMonth');
    localStorage.removeItem('currentYear');
    this.ngOnInit();
  
  }

  
    ngOnInit() {
      
      let currentDate = new Date();
      this.currentMonthNumber = currentDate.getMonth();
      this.currentMonthName = this.monthNamesArr[this.currentMonthNumber];

      this.yearSwitcherCounter = currentDate.getFullYear(); 
      this.currentYear = this.yearSwitcherCounter;
    if(!localStorage.getItem('currentMonth')) { 
       
      
    } else {
      this.currentMonthNumber = localStorage.getItem('currentMonth');
      this.currentMonthName = this.monthNamesArr[localStorage.getItem('currentMonth')];
    }
    if(!localStorage.getItem('currentYear')) { 
      

    } else {
      this.yearSwitcherCounter = localStorage.getItem('currentYear');
      this.currentYear = this.yearSwitcherCounter;
    }
  }
}
