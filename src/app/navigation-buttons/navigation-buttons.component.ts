import { Component, OnInit, Input } from '@angular/core';
import { MonthNames } from '../monthNames';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent implements OnInit {
  monthNamesArr;
  currentMonthName;
  @Input() currentYear;
  @Input() currentMonthNumber;
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
    return this.currentMonthNumber;

  }
  
  rightMonthSwither(){
    if(this.currentMonthNumber===11){
      this.rightYearSwither()
    }
    this.currentMonthNumber = (this.currentMonthNumber + 1) % 12;
    this.currentMonthName = this.monthNamesArr[this.currentMonthNumber];
    
     return this.currentMonthNumber;
  }

  leftYearSwither(){
    this.yearSwitcherCounter--;
    this.currentYear = this.yearSwitcherCounter;
    return this.currentYear;
  }
  
  rightYearSwither(){
    this.yearSwitcherCounter++;
    this.currentYear = this.yearSwitcherCounter;
    return this.currentYear;
  }

  
    ngOnInit() {
      this.yearSwitcherCounter = 2020;
      this.currentMonthName = this.monthNamesArr[0];
      this.currentYear = this.yearSwitcherCounter;
      this.currentMonthNumber = 0;

  }

}
