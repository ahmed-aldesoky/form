import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http:HttpClient) { 

  }
  url="http://localhost:3000/enroll"
  enroll(data:any){
    return this.http.post(this.url,data)

  }
}


