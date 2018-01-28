// api.service.ts
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Config } from '../configuration';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

declare var process: any;

@Injectable()
export class ApiService {
  private baseURL = Config.vars.rootAPI;
  private listUsers = Config.vars.topFive;

  /**
   * Creates a new ApiService with the injected HttpClient.
   * @param {HttpClient} http - The injected HttpClient.
   * @constructor
   */
  constructor(private http: HttpClient) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @returns {Observable<any[]>}
   */
  getUsers(): any{
    let requests = this.listUsers.map((user) => this.http.get(this.baseURL + user))
    return Observable.forkJoin(requests);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
