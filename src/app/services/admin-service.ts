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
    return this._http.post<any>(environment._api + "/api/task", data)
  }
  getTask() {
    return this._http.get<any>(environment._api + "/api/task")
  }
  addRating(data: any) {
    return this._http.post<any>(environment._api + "/api/rating", data)
  }
  getRating() {
    return this._http.get<any>(environment._api + "/api/rating")
  }
  addCompanyRegistration(data: any) {
    return this._http.post<any>(environment._api + "/api/admin", data)
  }
  addProfile(data: any) {
    return this._http.post<any>(environment._api + "/api/admin", data)
  }
  getProfile() {
    return this._http.get<any>(environment._api + "/api/admin/profile")
  }
}










