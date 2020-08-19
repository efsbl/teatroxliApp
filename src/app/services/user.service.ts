import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { USERS } from '../mock-users';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'localhost:8080/SG-TeatroXLI/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient
  ) { }

  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
    // return this.http.get<User[]>(this.usersUrl)
    //   .pipe(
    //     catchError(this.handleError<User[]>('getUsers', []))
    //   );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console 

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
