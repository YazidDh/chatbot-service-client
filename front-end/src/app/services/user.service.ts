import { Injectable } from '@angular/core';
import { User } from '../Requests/User';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthReq } from '../Requests/AuthReq';
import { UpdateUserReq } from '../Requests/UpdateUserReq';

const httpOptions={
  headers:new HttpHeaders(),
  'content-Type':'application/json'
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl : string="http://localhost:8081/api/v1/auth"

  constructor(private httpClient:HttpClient) {}

  public register(user: User):Observable<User>{
    return this.httpClient.post<User>(`${this.apiUrl}/register`, user);
  }

  public authenticate(authReq: AuthReq):Observable<any> {
    return this.httpClient.post<AuthReq>(`${this.apiUrl}/authenticate`,authReq);
  }

  public updateUser(id: string, updateUserReq: UpdateUserReq): Observable<UpdateUserReq> {
    return this.httpClient.put<UpdateUserReq>(`${this.apiUrl}/user/${id}`, updateUserReq);
  }

  public getUser(email: string) {
    return this.httpClient.get(`${this.apiUrl}/user/${email}`);
  }

  public logout() :Observable<void>{
    return this.httpClient.post<void>(`${this.apiUrl}/logout`,{});
  }


}
