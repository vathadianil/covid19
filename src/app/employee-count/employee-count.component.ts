import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  @Input()
  all:number;
  @Input()
  male:number;
  @Input()
  female:number;

  selectedRadioButtonValue:string = 'All';

  @Output()
  events:EventEmitter <string> = new EventEmitter<string>();

  getRadioButtonValue() {
    this.events.emit(this.selectedRadioButtonValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
