import { Component, OnInit } from '@angular/core';
import { OnLoadDataService } from '../services/on-load-data.service';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responseData: any;

  constructor(private OnLoadDataService: OnLoadDataService, private action: ActionService) { }

  ngOnInit() {
    this.OnLoadDataService.getSpaceXdata().subscribe((data) => {
      this.action.updateDatalist(data);
    });

    this.action.eventEmitMessage.subscribe(data => {
      if (data) {
        if (data['data'] != '' && data['data']['launchStatus'] != undefined) {
          localStorage.setItem('launchStatus', data['data']['launchStatus']);
        }
        if (data['data'] != '' && data['data']['landStatus'] != undefined) {
          localStorage.setItem('landStatus', data['data']['landStatus']);
        }
        if (data['data'] != '' && data['data']['year'] != undefined) {
          localStorage.setItem('year', data['data']['year']);
        }
        let params = this.action.generateActionParamSessionStorageData(localStorage.getItem('launchStatus'), localStorage.getItem('landStatus'), localStorage.getItem('year'));
        this.eventReceive(params);
      }
    })
  }

  eventReceive(data) {
    if (data != '' && data != undefined) {
      if (data['launchStatus'] != undefined && data['landStatus'] == undefined && data['year'] ==null) {
        this.OnLoadDataService.getSpaceXLaunchData(data['launchStatus']).subscribe((response) => {
          this.action.updateDatalist(response);
        });
      }
      if (data['launchStatus'] != undefined && data['landStatus'] != undefined && data['year'] ==null) {
        this.OnLoadDataService.getSpaceXLandData(data).subscribe((response) => {
          this.action.updateDatalist(response);
        });
      }
      if (data['launchStatus'] != undefined && data['landStatus'] != undefined && data['year'] != null) {
        this.OnLoadDataService.getSpaceXYearData(data).subscribe((response) => {
          this.action.updateDatalist(response);
        });
      }
    }
  }



}
