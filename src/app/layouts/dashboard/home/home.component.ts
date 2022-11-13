import { Component, OnInit } from '@angular/core';
import { gridRow } from 'src/app/shared/grid-data-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username='Shubham'

  columns:string[] = ['Job#','Facility Name','Facility Type','Department','Start Date','End Date','Rate','Status']
  gridDate:gridRow[] = [
    {
      columns:[
        {
          columnkey:'Job#',
          columnType:'number',
          value: 1
        },
        {
          columnkey:'Facility Name',
          columnType:'number',
          value: 'Bhagwati Hospital'
        },
        {
          columnkey:'Facility Type',
          columnType:'string',
          value: 'Hospital'
        },
        {
          columnkey:'Department',
          columnType:'Sergery',
          value: 'Sergery'
        },
        {
          columnkey:'Start Date',
          columnType:'Jan 21 2023',
          value: 1
        },
        {
          columnkey:'End Date',
          columnType:'March 21 2023',
          value: 1
        },
        {
          columnkey:'Rate',
          columnType:'23$',
          value: 1
        },
        {
          columnkey:'Status',
          columnType:'Pending',
          value: 1
        }
      ],
      isDeletable: true,
      isDuplicatable: true,
      isEditable: true,
      isViewEnable: true,
      rowId: 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
