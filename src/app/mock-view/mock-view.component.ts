import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';
import { Mocki } from '../models/mocki';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mock-view',
  templateUrl: './mock-view.component.html',
  styleUrls: ['./mock-view.component.css']
})
export class MockViewComponent implements OnInit {

  mockis: Mocki[] = [];
  editedMockis: Mocki[] = [];

  constructor(
    private mockDataService: MockDataService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.mockDataService.getDataFromMocki().subscribe(
      (response: Mocki[]) => {
        this.mockis = response;
      }
    );
  }

  trackChanges(mocki: Mocki,inputChange:boolean=false) {
    if (inputChange) {
      mocki.changed = false;
    }else{
      mocki.changed = true;
    }
    if (!this.editedMockis.includes(mocki)) {
      this.editedMockis.push(mocki);
    }
  }


  ondrop(event: CdkDragDrop<Mocki[]>) {
    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.mockis, event.previousIndex, event.currentIndex);
      this.mockis[event.currentIndex].changed = true;
      this.trackChanges(this.mockis[event.currentIndex],false);
    }
  }


}
