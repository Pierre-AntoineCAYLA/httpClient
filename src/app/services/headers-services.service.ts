import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeadersServicesService {

  constructor(private http: HttpClient) { }
  sampleHeader() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    this.http.get(`http://sample.com`, { headers })
      .subscribe(() => { });
  }
}
