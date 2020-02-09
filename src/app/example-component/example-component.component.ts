import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css']
})
export class ExampleComponentComponent implements OnInit {
  
  @Input() curMonth;

  constructor() { }

  ngOnInit() {
  }

}
