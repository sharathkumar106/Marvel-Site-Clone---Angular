import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {

    apiKey = 'YOUR_API_KEY';
    baseURL = `https://youtube.googleapis.com/youtube/v3/search?&key=${this.apiKey}&order=viewCount&q=`;

    constructor(private httpClient: HttpClient) { }

    getTrailer(search = 'Avengers%Endgame'): Observable<any> {
        const url = `${this.baseURL}${search}`;
        return this.httpClient.get(url);
    }
}
