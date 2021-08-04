import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/user_mock_data.json");
  }
}
