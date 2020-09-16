import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnLoadDataService {

  constructor(private httpClient: HttpClient) { }

  public getSpaceXdata(){
    return this.httpClient.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  

  public getSpaceXLaunchData(param:any){
    return this.httpClient.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success='+param)
  }
  public getSpaceXLandData(param:any){
    return this.httpClient.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success='+param.launchStatus+'&land_success='+param.landStatus)
  }

  public getSpaceXYearData(param: any){
    return this.httpClient.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+param.launchStatus+'&land_success='+param.landStatus+'&launch_year='+param.year)
  }
}


