import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { LoginUser } from './LoginUser.model';
import { GarageInput } from '../home/GarageInput.model';
import { SpaceInput } from '../report/SpaceInput.model';
 
@Injectable()
export class ServiceService {
  readonly rootUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  private token: string = "";
  private tokenExpiration: Date;
  private loggedIn = false;
  public garages: GarageInput[] = [];
  public spaces: SpaceInput[] = [];


  public get loginRequired(): boolean {
    return this.token.length == 0 || this.tokenExpiration > new Date();
  }


  login(creds): Observable<boolean> {

    const body: LoginUser = {
      UserName: creds.UserName,
      Password: creds.Password
    }
    return this.http.post(this.rootUrl + '/api/Accounts/Login', body)
    .map((data: any) => {
      this.token = data.token;
      localStorage.setItem('token', data.token);
      
      this.tokenExpiration = data.expiration;
      localStorage.setItem('tokenExpiration', data.expiration);

      localStorage.setItem('name', data.name);
      
      this.loggedIn = true;
      
      return true;
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('name');
    localStorage.removeItem('garage');
    this.loggedIn = false;
    //this._authNavStatusSource.next(false);
    alert("Goodbye")
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getGarages() {
    return this.http.get(this.rootUrl + '/api/Garages/' + localStorage.getItem("username"))
    .map((data: any[]) => {
      this.garages = data;
      return true;
    });
  }

  getSpaces() {
    return this.http.get(this.rootUrl + "/api/Garages/spaces/" + localStorage.getItem("username"))
    .map((data: any[]) => {
      this.spaces = data;
      return true;
    });
  }

  getSpacesByGarage(id) {
    return this.http.get(this.rootUrl + "/api/Garages/spaces/" + localStorage.getItem("username") +"/" + id)
    .map((data: any[]) => {
      this.spaces = data;
      return true;
    });
  }

  getSpacesByGarageAndFloor(id, floor) {
    return this.http.get(this.rootUrl + "/api/Garages/spaces/" + localStorage.getItem("username") +"/" + id +"/" +floor)
    .map((data: any[]) => {
      this.spaces = data;
      return true;
    });
  }

  changeState(id) {
    return this.http.put(this.rootUrl + "/api/Garages/spaces/" + id, null)
    .map((data: any[]) => {
      //this.spaces = data;
      return true;
    });
  }


}