import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  dataEventSource;
  dataEventMessage;

  eventEmitSource;
  eventEmitMessage;

  constructor() {
    this.dataEventSource = new BehaviorSubject<any>(undefined);
    this.dataEventMessage = this.dataEventSource.asObservable();

    this.eventEmitSource = new BehaviorSubject<any>(undefined);
    this.eventEmitMessage = this.eventEmitSource.asObservable();
  }

  updateDatalist(data: any) {
    this.dataEventSource.next(data);
  }

  eventEmitToParent(data: any) {
    this.eventEmitSource.next({'data': data});
  }

  generateActionParamSessionStorageData(launchStatus, landStatus, year){
    if(launchStatus !=undefined && landStatus == null && year == null){
      return {'launchStatus': launchStatus};
    }
    else if(launchStatus !=undefined && landStatus!= null && year == null ){
      return {'launchStatus': launchStatus, 'landStatus': landStatus}
    }else if(launchStatus != undefined && landStatus != null && year != null){
      return {'launchStatus': launchStatus, 'landStatus': landStatus, 'year': year}
    }
  }
}
