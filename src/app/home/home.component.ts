import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GarageInput } from './GarageInput.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = '';
  name = "";
  public garages: GarageInput[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    this.name = localStorage.getItem("name");
    this.getGarages();
  }

  getGarages() {
    this.service.getGarages()
      .subscribe(success => {
        if (success) {
          this.garages = this.service.garages;
          console.log(this.garages)
        }
      })
  }


}
