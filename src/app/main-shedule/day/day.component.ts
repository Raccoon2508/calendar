import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() private dayNumber: number;
  @Input() private currentMonthNumber: number;
  @Input() private currentYear: number;
  private dayId: string;

  constructor(private router: Router) {}

  private sheduleRouting<T>(day: T, month: T, year: T): void {
    this.dayId = `${year}${month}${day}`;
    this.router.navigate(['day', this.currentYear, this.currentMonthNumber, this.dayNumber, 'table']);
    console.log(this.router.url);
  }

  public ngOnInit(): void {
    console.log(this.currentMonthNumber);
  }

}
