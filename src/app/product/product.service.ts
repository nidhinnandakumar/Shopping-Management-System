import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Products } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = `${environment.baseApiUrl}products`;

  constructor(private client:HttpClient) { }

  getList():Observable<Products[]>{
    return this.client.get<Products[]>(this.apiUrl);
  }
add(p:Products):Observable<Products>{
  return this.client.post<Products>(this.apiUrl,p)
}
delete(id:number):Observable<void>{
  return this.client.delete<void>(this.apiUrl + '/' + id);
}
getById(id:number):Observable<Products>{
  return this.client.get<Products>(this.apiUrl + '/' + id);
}
update(p:Products):Observable<void>{
  return this.client.put<void>(this.apiUrl + '/' + p.id,p);
}
}