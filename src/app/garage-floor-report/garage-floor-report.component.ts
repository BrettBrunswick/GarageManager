import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpaceInput } from '../report/SpaceInput.model';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garage-floor-report',
  templateUrl: './garage-floor-report.component.html',
  styleUrls: ['./garage-floor-report.component.css']
})
export class GarageFloorReportComponent implements OnInit {

  username = '';
  public spaces: SpaceInput[] = [];
  public floors: number[] = []
  floor: string;
  numberSpaces: number;
  numberSpacesOpen: number = 0;
  numberSpacesOut: number = 0;
  numberSpacesInUse: number = 0;
  garage: string = localStorage.getItem("garage");

  constructor(private service: ServiceService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.username = localStorage.getItem("username");

    this._route.params.map(params =>params['id']).subscribe((id) => {
      this.floor = id;
    })

    this.getSpaces(this.floor);


  }


  getSpaces(floor) {
    this.service.getSpacesByGarageAndFloor(localStorage.getItem("garage"), floor)
      .subscribe(success => {
        if (success) {
          this.spaces = this.service.spaces;
          this.numberSpaces = this.service.spaces.length;
          var num: number = 0;
          this.numberSpacesInUse = 0;
          this.numberSpacesOpen = 0;
          this.numberSpacesOut = 0;
          
          for (num; num <= this.numberSpaces - 1; num ++) {
            console.log(this.spaces[num].status)
            if (this.service.spaces[num].status == "open") {
              this.numberSpacesOpen ++
            }
            if (this.service.spaces[num].status == "out") {
              this.numberSpacesOut ++
            }
            if (this.service.spaces[num].status == "inuse") {
              this.numberSpacesInUse ++
            }
            console.log(this.spaces[num].floor)
            console.log(!this.floors.includes(this.service.spaces[num].floor))
            if (!this.floors.includes(this.service.spaces[num].floor)) {
              console.log(this.floors.push(this.service.spaces[num].floor))

            }
          }


          
        }
      })

  }

  changeState(id) {
    this.service.changeState(id)
      .subscribe(success => {
        if (success) {
          alert("Parking space updated.");
          this.getSpaces(this.floor);
        }
      })
  }

}

