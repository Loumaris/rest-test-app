import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest test app';
  obj: any;
  obj_str: any;

  constructor(private http: Http) {

         this.getJSON().subscribe(
           data => {
             this.obj = data
             this.obj_str = JSON.stringify(data)
           },
           error => {
             console.log(error)
           });
    }

    public getJSON(): Observable<any> {
         return this.http.get("http://api.test.dockerist.io/echo")
                         .map((res:any) => res.json());

     }
}
