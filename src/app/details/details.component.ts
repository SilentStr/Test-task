import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    @Input() details: any;
    @Input() id: any;
    @Output() formItem: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

    public editUser(details: any): void {
        this.formItem.emit(details);
    }
}
