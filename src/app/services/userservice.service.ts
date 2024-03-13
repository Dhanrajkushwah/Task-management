import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(
    private _http: HttpClient
  ) { }

  addUser(data: any) {
    return this._http.post<any>(environment._api + "/api/user", data)
  }
  getUserTask(id:any){
    return this._http.get<any>(environment._api + "/api/task/" + id)

  }
}
