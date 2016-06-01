import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';

@Injectable()
export class RaceService {

  constructor(private http: Http) {}

  list() {
      return this.http.get('http://ponyracer.ninja-squad.com/api/races?status=PENDING')
      .map(res => res.json());
  }
}
