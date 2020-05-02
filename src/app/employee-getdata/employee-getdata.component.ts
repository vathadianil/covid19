import { Component, OnInit } from '@angular/core';
import { EmpoloyeeServiceService } from '../empoloyee-service.service'

@Component({
  selector: 'app-employee-getdata',
  templateUrl: './employee-getdata.component.html',
  styleUrls: ['./employee-getdata.component.css']
})
export class EmployeeGetdataComponent {
  urlData: any;
  errorData: any;
  userInputData: any;
  spinControl: boolean = false;
  showalertMessage: boolean = false;
  constructor(private _employeeGetUrl: EmpoloyeeServiceService) { }

  getwebsiteurlComp() {
    if (this.userInputData == null) {
      this.showalertMessage = true;
    } else {
      this.urlData = null;
      this.spinControl = true;
      this.showalertMessage = false;
      this._employeeGetUrl.getwebsiteurl(this.userInputData).subscribe(data => {
        this.urlData = data ? (data.url ? data.url : []) : [];
        this.spinControl = false;
      },
        error => this.errorData = error);
    }
  }
}
