import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { train } from './interfaces/train';

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

  delStation(data: any){
    const url = `http://localhost:3001/delstation`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Deleted station details`)),
      catchError(this.handleError(`Error in deleting station details`))
    );
  }

  updateStation(data: any){
    const url = `http://localhost:3001/updatestation`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Updated station details`)),
      catchError(this.handleError(`Error in updating station details`))
    );
  }

  addCoach(data: any){
    const url = `http://localhost:3001/addcoach`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Added coach details`)),
      catchError(this.handleError(`Error in adding coach details`))
    );
  }

  delCoach(data: any){
    const url = `http://localhost:3001/delcoach`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Deleted coach details`)),
      catchError(this.handleError(`Error in deleting coach details`))
    );
  }

  updateCoach(data: any){
    const url = `http://localhost:3001/updatecoach`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Updated coach details`)),
      catchError(this.handleError(`Error in updating coach details`))
    );
  }

  addEngine(data: any){
    const url = `http://localhost:3001/addengine`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Added engine details`)),
      catchError(this.handleError(`Error in adding engine details`))
    );
  }

  delEngine(data: any){
    const url = `http://localhost:3001/delengine`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Delete engine details`)),
      catchError(this.handleError(`Error in deleting engine details`))
    );
  }

  updateEngine(data: any){
    const url = `http://localhost:3001/updateengine`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Updated engine details`)),
      catchError(this.handleError(`Error in updating engine details`))
    );
  }

  addEmployee(data: any){
    const url = `http://localhost:3001/addemployee`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Added employee details`)),
      catchError(this.handleError(`Error in adding employee details`))
    );
  }

  delEmployee(data: any){
    const url = `http://localhost:3001/delemployee`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Deleted employee details`)),
      catchError(this.handleError(`Error in deleting employee details`))
    );
  }

  updateEmployee(data: any){
    const url = `http://localhost:3001/updateemployee`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Updated employee details`)),
      catchError(this.handleError(`Error in updating employee details`))
    );
  }

  addTrcomp(data: any){
    const url = `http://localhost:3001/addtrcomp`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Added train's details for the date`)),
      catchError(this.handleError(`Error in adding train's details for that date`))
    );
  }

  delTrcomp(data: any){
    const url = `http://localhost:3001/deltrcomp`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Deleted train's details for the date`)),
      catchError(this.handleError(`Error in deleting train's details for the date`))
    );
  }

  updateTrcomp(data: any){
    const url = `http://localhost:3001/updatetrcomp`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Updated train's details for the date`)),
      catchError(this.handleError(`Error in updating train's details for the date`))
    );
  }

  addTrcoach(data: any){
    const url = `http://localhost:3001/addtrcoach`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Added coach details`)),
      catchError(this.handleError(`Error in adding coach details`))
    );
  }

  delTrcoach(data: any){
    const url = `http://localhost:3001/deltrcoach`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Deleted coach details`)),
      catchError(this.handleError(`Error in deleting coach details`))
    );
  }

  updateTrcoach(data: any){
    const url = `http://localhost:3001/updatetrcoach`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Updated coach details`)),
      catchError(this.handleError(`Error in updating coach details`))
    );
  }

  addRoutestations(data: any){
    const url = `http://localhost:3001/addroutestations`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Added station to the route`)),
      catchError(this.handleError(`Error in adding station to route`))
    );
  }

  delRoutestations(data: any){
    const url = `http://localhost:3001/delroutestations`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Deleted station from route`)),
      catchError(this.handleError(`Error in deleting station from route`))
    );
  }

  updateRoutestations(data: any){
    const url = `http://localhost:3001/updateroutestations`;

    return this.http.post(url, data).pipe(
      tap(_ => console.log(`Updated station on route`)),
      catchError(this.handleError(`Error in updating station on route`))
    );
  }


  getTrain(data: any){
    const url = `http://localhost:3001/getTrain/${data}`;

    return this.http.get<train[]>(url).pipe(
      tap(_ => console.log(`Train details`)),
      catchError(this.handleError<train[]>(`Error in fetching train details`)),
      
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
