import { Component, OnInit } from '@angular/core';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-side-filters',
  templateUrl: './side-filters.component.html',
  styleUrls: ['./side-filters.component.css']
})
export class SideFiltersComponent implements OnInit {

  years = [];

  constructor(private action: ActionService) { }

  ngOnInit(): void {

    for (let year = 2006; year <= 2020; year++) {
      this.years.push(year);
    }
  }

  yearSelected(year){
    this.action.eventEmitToParent({'year': year});
  }

  sucessLaunch(status){
    this.action.eventEmitToParent({'launchStatus': status});
    var x = document.querySelectorAll(".landing");
    for (var i = 0; i < x.length; i++) {
      x[i].removeAttribute('disabled');
    }
    
  }
  sucessLand(status){
    this.action.eventEmitToParent({'landStatus': status});
    var x = document.querySelectorAll(".yearsBtn");
    for (var i = 0; i < x.length; i++) {
      x[i].removeAttribute('disabled');
    }
  }
}
