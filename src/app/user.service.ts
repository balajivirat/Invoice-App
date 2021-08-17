import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  values:any;
  url = "https://inovice.herokuapp.com/";
  data: any;
  constructor(private http: HttpClient) { }



  postContent(value: any) {
    return this.http.post("https://inovice.herokuapp.com/leads", value)
  }
  getcontent() {
    return this.http.get(`https://inovice.herokuapp.com/leads`).pipe(map(res => res))
  }


  deletecontent(id: any) {
    var id = id;
    return this
      .http
      .delete(`${this.url}leads/${id}`)
  }

  editcontent(value: any, id:any) {
    console.log('idddddddddd',value);
    this.data = value[0]
    return this.http.put(`${this.url}leads/${id}`,this.data)
  }
  getOrganisation() {
    return this.http.get(`https://inovice.herokuapp.com/organisation`).pipe(map(res => res))
  }
  getDivision() {
    return this.http.get(`https://inovice.herokuapp.com/division`).pipe(map(res => res))
  }
  getSource() {
    return this.http.get(`https://inovice.herokuapp.com/source`).pipe(map(res => res))
  }
  getSetup() {
    return this.http.get(`https://inovice.herokuapp.com/setup`).pipe(map(res => res))
  }
  getRental() {
    return this.http.get(`https://inovice.herokuapp.com/rental`).pipe(map(res => res))
  }
  getStatus() {
    return this.http.get(`https://inovice.herokuapp.com/status`).pipe(map(res => res))
  }
  getFeedback() {
    return this.http.get(`https://inovice.herokuapp.com/feedback`).pipe(map(res => res))
  }
  getSubscription() {
    return this.http.get(`https://inovice.herokuapp.com/subscription`).pipe(map(res => res))
  }
  getHosting() {
    return this.http.get(`https://inovice.herokuapp.com/hosting`).pipe(map(res => res))
  }
  getYear() {
    return this.http.get(`https://inovice.herokuapp.com/year`).pipe(map(res => res))
  }
}
