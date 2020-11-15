import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  marvelApiKey = 'YOUR_API_KEY';
  marvelBaseURL = 'http://gateway.marvel.com/v1/public';

  apiKey = 'YOUR_API_KEY';
  baseURL = 'http://www.omdbapi.com/';

  constructor(private httpClient: HttpClient) { }

  getSeries(): Observable<any> {
    const link = `${this.marvelBaseURL}/series?apikey=${this.marvelApiKey}`;
    return this.httpClient.get(link);
  }

  getCast(id: string): Observable<any> {
    const link = `${this.marvelBaseURL}/series/${id}/characters?apikey=${this.marvelApiKey}`;
    return this.httpClient.get(link);
  }

  getCharacters(): Observable<any> {
    const link = `${this.marvelBaseURL}/characters?apikey=${this.marvelApiKey}`;
    return this.httpClient.get(link);
  }

  getMovies(keyword: string, page: number): Observable<any> {
    const url = `${this.baseURL}?apikey=${this.apiKey}&s=${keyword}&page=${page}`;
    return this.httpClient.get(url);
  }

  getMovie(id: string): Observable<any> {
    const url = `${this.baseURL}?apikey=${this.apiKey}&i=${id}&plot=full`;
    return this.httpClient.get(url);
  }
}
