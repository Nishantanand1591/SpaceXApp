import { Component, OnInit, Input } from '@angular/core';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-space-name',
  templateUrl: './space-name.component.html',
  styleUrls: ['./space-name.component.css']
})
export class SpaceNameComponent implements OnInit {

  @Input() elementData: any;
  isLoading = false;

  constructor(private action: ActionService) { }

  ngOnInit() {
    
    this.action.dataEventMessage.subscribe(data => {
      if (data) {
        this.elementData = data;
        this.isLoading = true;
      }
    })
  }

}
