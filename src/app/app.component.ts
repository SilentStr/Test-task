import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public dataItem: any;
  public formItem: any;
  public saveItem: any;
  constructor() {
  }

  public ngOnInit(): void {
  }

  public newParam(user: any): void {
    this.dataItem = user;
    this.formItem = false;
  }
  public formParam(user: any): void {
      this.formItem = user;
      this.dataItem = false;
  }
  public saveParam(save: any): void {
      this.dataItem = save;
      this.formItem = false;
  }
}
