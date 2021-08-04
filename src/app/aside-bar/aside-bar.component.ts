import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss']
})
export class AsideBarComponent implements OnInit {
  public searchText = '';
  public users: any[] = [];
  @Output() dataItem: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UsersService) {
  }


  public ngOnInit(): void {
    this.userService.getJSON().subscribe(data => {
      data.forEach((item: any) => {
        this.users.push(item);
      });
    });
  }

  public openDetails(user: any): void {
    this.dataItem.emit(user);
  }

}
