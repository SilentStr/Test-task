import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
    selector: 'app-edit-form',
    templateUrl: './edit-form.component.html',
    styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
    @Input() edit: any;
    @Output() saveItem: EventEmitter<any> = new EventEmitter();

    constructor(private userService: UsersService) {
    }

    ngOnInit(): void {
        // this.getLocalStorage();
    }
    public saveUser(edit: any): void {
        this.saveItem.emit(edit);
        localStorage.setItem('user', JSON.stringify(this.edit));
    }
    // getLocalStorage() {
    //     if (localStorage.getItem('user') === null) {
    //         this.edit = [];
    //     } else {
    //         this.edit = JSON.parse(localStorage.getItem('user'));
    //     }
    // }

}
