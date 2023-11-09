import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  getUser(githubUsername: string) {
    return this.http.get(`https://api.github.com/users/${githubUsername}`);
  }
  getRepo(githubUsername: string, pageNumber : number, perPage : number) {
    return this.http.get(`https://api.github.com/users/${githubUsername}/repos?per_page=${perPage}&page=${pageNumber}`)
  }
  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
