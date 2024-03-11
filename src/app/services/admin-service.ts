import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public ApiData$ = new BehaviorSubject([])
  constructor(
    private _http: HttpClient
  ) { }

  addTask(data: any) {
    return this._http.post<any>(environment._api + "/api/admin/task", data)
  }
  getTask() {
    return this._http.get<any>(environment._api + "/api/admin/admin")
  }

  addCompanyRegistration(data: any) {
    return this._http.post<any>(environment._api + "/api/admin", data)
  }

}










