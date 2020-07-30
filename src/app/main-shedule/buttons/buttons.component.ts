import { Component, OnInit } from '@angular/core';
import { monthNames } from './models/monthNames';
import { ShedulePanelComponent } from '../shedule-panel/shedule-panel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  public monthNamesArr: string[];
  public currentMonthName: string;
  public currentYear: number;
  public currentMonthNumber: number;
  public yearSwitcherCounter: number;
  constructor(public router: Router) {
    let monthNamesTempleArr: string[] = [];
    for (let item of monthNames) {
      monthNamesTempleArr.push(item.name + '');
    }
    this.monthNamesArr = monthNamesTempleArr;
  }

public navigateToMainList(): void {
  this.router.navigate(['events-full-list']);
}

public leftMonthSwither(): number {
  if (this.currentMonthNumber === 0) {
    this.leftYearSwither();
  }

  this.currentMonthNumber = ((this.currentMonthNumber - 1) + 12) % 12;
  this.currentMonthName = this.monthNamesArr[this.currentMonthNumber];
  localStorage.setItem('currentMonth', this.currentMonthNumber + '');
  return this.currentMonthNumber;
  }

public rightMonthSwither(): number {
    if (this.currentMonthNumber === 11) {
      this.rightYearSwither();
    }
    this.currentMonthNumber = (this.currentMonthNumber + 1) % 12;
    this.currentMonthName = this.monthNamesArr[this.currentMonthNumber];
    localStorage.setItem('currentMonth', this.currentMonthNumber + '');
    return this.currentMonthNumber;
  }

public leftYearSwither(): number {
    this.yearSwitcherCounter--;
    this.currentYear = this.yearSwitcherCounter;
    localStorage.setItem('currentYear', this.currentYear + '');
    return this.currentYear;
  }

public rightYearSwither(): number {
    this.yearSwitcherCounter++;
    this.currentYear = this.yearSwitcherCounter;
    localStorage.setItem('currentYear', this.currentYear + '');
    return this.currentYear;
  }

public currentMonthSwitcher(): void {
    localStorage.removeItem('currentMonth');
    localStorage.removeItem('currentYear');
    this.ngOnInit();
  }

public ngOnInit(): void {
    let currentDate: Date = new Date();
    this.currentMonthNumber = currentDate.getMonth();
    this.currentMonthName = this.monthNamesArr[this.currentMonthNumber];
    this.yearSwitcherCounter = currentDate.getFullYear();
    this.currentYear = this.yearSwitcherCounter;
    if (localStorage.getItem('currentMonth')) {
      this.currentMonthNumber = +localStorage.getItem('currentMonth');
      this.currentMonthName = this.monthNamesArr[localStorage.getItem('currentMonth')];
    }
    if (localStorage.getItem('currentYear')) {
      this.yearSwitcherCounter = +localStorage.getItem('currentYear');
      this.currentYear = this.yearSwitcherCounter;
    }
  }
}
