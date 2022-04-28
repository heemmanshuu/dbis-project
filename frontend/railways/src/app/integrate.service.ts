import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntegrateService {

  constructor(private http: HttpClient) { }

  postTrain(data: any){
    const url = `http://localhost:3001/addtrain`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Posted train details`)),
      catchError(this.handleError(`Error in posting train details`))
    );
  }

  delTrain(data: any){
    const url = `http://localhost:3001/deltrain`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Deleted train details`)),
      catchError(this.handleError(`Error in deleting train details`))
    );
  }

  updateTrain(data: any){
    const url = `http://localhost:3001/updatetrain`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Updated train details`)),
      catchError(this.handleError(`Error in updating train details`))
    );
  }

  addStation(data: any){
    const url = `http://localhost:3001/addstation`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Added station details`)),
      catchError(this.handleError(`Error in adding station details`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
