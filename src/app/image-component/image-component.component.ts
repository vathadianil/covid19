import { Component, OnInit } from '@angular/core';
import { EmpoloyeeServiceService } from '../empoloyee-service.service'

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent {

  imageData: any;
  errorData: any;
  userInputData: any;
  spinControl: boolean = false;
  showalertMessage: boolean = false;
  constructor(private _imageGetUrl: EmpoloyeeServiceService) {
  }

  getImageComp() {
    if (this.userInputData == null) {
      this.showalertMessage = true;
    } else {
      this.imageData = null;
      this.spinControl = true;
      this._imageGetUrl.getImageurl(this.userInputData).subscribe(data => {
        this.imageData = data ? (data.url ? data.url : []) : [];
        this.spinControl = false;
      },
        error => this.errorData = error);
    }
  }
}
