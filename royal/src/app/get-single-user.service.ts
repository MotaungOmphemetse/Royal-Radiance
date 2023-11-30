import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, throwIfEmpty } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserData } from './user/user';


@Injectable({
  providedIn: 'root',
})
export class Userservice {

  private productURL = 'https://fakestoreapi.com/users';
  constructor(private http: HttpClient) {}

  // public getUser(userId: number): Observable<User> {
  //   const url = `${this.productURL}/${userId}`;
  //   console.log(userId);
  //   return this.http.get<User>(url);
  // }




  //getUsers(): Observable<User[]> {
   // return this.http.get<User[]>(this.productURL).pipe(
   //   tap((_) => this.log('fetched users')), // Updated log message
      
   // );
  }

//}
