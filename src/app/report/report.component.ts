import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpaceInput } from './SpaceInput.model';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  username = '';
  public spaces: SpaceInput[] = [];
  id: string;

  constructor(private service: ServiceService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    
    this.getSpaces();

  }

  getSpaces() {
    this.service.getSpaces()
      .subscribe(success => {
        if (success) {
          this.spaces = this.service.spaces;
          console.log(this.spaces)
        }
      })
  }

  changeState(id) {
    this.service.changeState(id)
      .subscribe(success => {
        if (success) {
          alert("Parking space updated.");
          this.getSpaces();
        }
      })
  }

}
