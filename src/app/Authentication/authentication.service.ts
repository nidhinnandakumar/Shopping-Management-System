import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserDto } from './user-dto';
import { LoginResponseDto } from './login-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 private apiUrl = environment.baseApiUrl + 'auth';
  constructor(private client: HttpClient) { }

  register(u: User): Observable<User> {
    return this.client.post<User>(this.apiUrl,u);
  }
  login(user:UserDto): Observable<LoginResponseDto>{
    var res=this.client.post<LoginResponseDto>(this.apiUrl+'/login',user);
    res.subscribe(response=>{
      localStorage.clear();
      localStorage.setItem('userDetails',JSON.stringify (response));
    },err=>{
      console.log(err);
      return null;
    })
    return res;
  }
  getUser():LoginResponseDto{
    let user= localStorage.getItem('userDetails');
    return JSON.parse(user ||'{}');
  }

  isloggedIn():boolean{
    return localStorage.getItem('userDetails') !=null? true:false
  }

  logout(){
    localStorage.clear();
  }
}
