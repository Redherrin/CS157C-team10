import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Media } from '../models/media';
import { MediaHeader } from '../models/media-header';
import { Binary } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

private mediaUrl = 'http://localhost:8080/media';

  constructor(
    private http: HttpClient
  ) { }

  getMedia(id: string): Observable<Binary>{
    return this.http.get<Binary>(`${this.mediaUrl}/${id}`);
  }

  uploadMedia(formData: FormData): Observable<MediaHeader>{
    if (formData != null) {
      console.log("NOT NUL$$$$$$$$$$$$$$$$$$");
      console.log(formData);
      return this.http.post<MediaHeader>(`${this.mediaUrl}/upload`, formData);
    } else {
      console.log("NULL@@@@@@@@@@@@@@@");
      return this.http.post<MediaHeader>(`${this.mediaUrl}/upload`, null);
    }
  }
}
