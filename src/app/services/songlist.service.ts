import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class SongListService {

    constructor(private httpClient: HttpClient) { }
    public getSongList(url: string): Observable<any> {
        return this.httpClient.get(url);
    }
}


